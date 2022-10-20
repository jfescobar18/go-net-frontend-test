// Libs and packages
import { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"
import { toast } from "react-toastify"

// Components
import ClientsTable from "../../Components/ClientsTable"

// Queries and Mutations
import { GET_ALL_CLIENTS } from "../../GraphQL/Queries"

// Types
import { IClient } from "../../types/client"
import NavigationButton from "../../Components/NavigationButton"

const ViewAllClients = () => {
    const [clientsDataTable, setClientsDataTable] = useState<IClient[]>([])
    const { loading, error, data } = useQuery(GET_ALL_CLIENTS)

    useEffect(() => {
        if (!loading && !error && data && data.getAllClients) {
            setClientsDataTable(data.getAllClients)
        }
    }, [data])

    useEffect(() => {
        if (error) {
            console.log(error.message)
            toast.warn("Error al obtener clientes", {
                position: toast.POSITION.TOP_RIGHT,
                theme: "dark",
            })
        }
    }, [error])

    return (
        <>
            <ClientsTable clientsDataTable={clientsDataTable} />
            <NavigationButton link={'/'} text={'Registro'}/>
        </>
    )
}

export default ViewAllClients
