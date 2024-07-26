import { useQuery } from "@apollo/client"
import RepositoryItem from "./RepositoryItem"
import { useParams } from "react-router-native"
import { SINGLE_REPO } from "../graphql/queries";


export default function SingleItemPage () {

    const params = useParams();
    console.log(params.repoId)
    const { data } = useQuery(SINGLE_REPO, {
        variables: { repositoryId : params.repoId }
    })

    const repositories = data ? data.repository : null
    console.log(repositories)

 return (<>
    {repositories && <RepositoryItem repositoryItem={repositories}/>}
    </>
 )
}