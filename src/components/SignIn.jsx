import { useFormik } from "formik";
import { Pressable, TextInput, View, Text, StyleSheet } from "react-native";
import theme from "../themes/themes";
import { useSignIn } from "../hooks/useSignIn";
import * as yup from "yup";

const SignIn = () => {

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
    const validationSchema = yup.object().shape({
        username: yup.string().min(1).required("Username is required"),
        password: yup.string().min(1).required("Password is required")
    })
    const initialValues = {
        username: "",
        password: ""
    }

    const [signIn] = useSignIn();

    const onSubmit = async (values) => {
        const {username, password} = values;
        try {
            const {data} = await signIn({ username, password });
            console.log(data.authenticate.accessToken)
          } catch (e) {
            console.log(e);
          }
    };
    
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })
    
    return (
        <View style={styles.container}>
            <TextInput style={formik.isValid ? styles.textInput : styles.onError}
                placeholder="Username"
                value={formik.values.username}
                onChangeText={formik.handleChange("username")}
            />
            {formik.touched.username && formik.errors.username && (
                <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
            )}
            <TextInput style={formik.isValid ? styles.textInput : styles.onError}
                placeholder="Password"
                value={formik.values.password}
                onChangeText={formik.handleChange("password")}
                secureTextEntry
            />
            {formik.touched.password && formik.errors.password && (
                <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
            )}
            <Pressable style={styles.button} disabled={!formik.isValid ? true : false} onPress={formik.handleSubmit} >
                <Text style={styles.text}>Sign In</Text>
            </Pressable>
        </View>
    )
};

export default SignIn;