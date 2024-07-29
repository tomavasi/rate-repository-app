import { TextInput, View, Text, StyleSheet, Pressable } from "react-native";
import theme from "../themes/themes";
import { useFormik } from "formik";
import * as yup from "yup";
import { useCreateReview } from "../hooks/useCreateReview";
import { useNavigate } from "react-router-native";


export default function CreateReview() {

    const styles = StyleSheet.create({
        container: {
            margin: 10,
            gap: 15
        },
        textInput: {
            width: "100%",
            height: 40,
            borderWidth: 1,
            borderColor: "grey",
            padding: 10,
            borderRadius: 5
        },
        button: {
            height: 50,
            backgroundColor: theme.colors.primary,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5
        },
        onError: {
            width: "100%",
            height: 40,
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            borderColor: theme.colors.error,
        },
        text: {
            color: "white",
            fontSize: theme.fontSizes.body,
            fontWeight: theme.fontWeights.bold
        }
    })

    const initialValues = {
        ownerName: '',
        repoName: '',
        rating: 0,
        review: ''
    }
    const [createReview] = useCreateReview();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const { ownerName, review } = values
        const rating = parseInt(values.rating)
        const repoName = values.repoName.toString()
        try {
            const result = await createReview({ ownerName: ownerName, repositoryName: repoName, rating: rating, text: review });
            const repositoryId = result.data.createReview.repositoryId
            if (repositoryId) {
                navigate(`/${repositoryId}`)
            }
        } catch (e) {
            console.log(e);
        }
    }

    const validationSchema = yup.object().shape({
        ownerName: yup.string().required("Repository owner name is required"),
        repoName: yup.string().required('Repository name is required'),
        rating: yup.number().required("Rating is required")
    })

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })

    return (
        <View style={styles.container}>
            <TextInput style={formik.isValid ? styles.textInput : styles.onError}
                placeholder="Repository owner name"
                value={formik.values.ownerName}
                onChangeText={formik.handleChange('ownerName')}
            />
            {formik.touched.ownerName && formik.errors.ownerName && (
                <Text style={{ color: 'red' }}>{formik.errors.ownerName}</Text>
            )}
            <TextInput style={formik.isValid ? styles.textInput : styles.onError}
                placeholder="Repository name"
                value={formik.values.repoName}
                onChangeText={formik.handleChange('repoName')} />
            {formik.touched.repoName && formik.errors.repoName && (
                <Text style={{ color: 'red' }}>{formik.errors.repoName}</Text>
            )}
            <TextInput style={formik.isValid ? styles.textInput : styles.onError}
                placeholder="Rating between 0 and 100"
                value={formik.values.rating}
                keyboardType="numeric"
                onChangeText={formik.handleChange('rating')} />
            {formik.touched.rating && formik.errors.rating && (
                <Text style={{ color: 'red' }}>{formik.errors.rating}</Text>
            )}
            <TextInput style={styles.textInput}
                placeholder="Review"
                value={formik.values.review}
                onChangeText={formik.handleChange('review')} />
            <Pressable style={styles.button} disabled={!formik.isValid ? true : false} onPress={formik.handleSubmit} >
                <Text style={styles.text}>Submit</Text>
            </Pressable>
        </View>
    )
}