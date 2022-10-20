import { useQuery } from "@apollo/client"
import RegisterContainer from "./Containers/Register"
import { GET_ALL_CLIENTS } from "./GraphQL/Queries"

const App = () => {
    const { data: getAllClientsData, loading: getAllClientsLoading } = useQuery(
        GET_ALL_CLIENTS,
        {
            fetchPolicy: "no-cache",
        }
    )
    return (
        <>
            <RegisterContainer />
        </>
    )
}

export default App
