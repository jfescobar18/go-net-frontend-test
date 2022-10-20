//Components
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@aws-amplify/ui-react"
import { IClient } from "../../types/client"

// Types
import { ClientsTableContent } from "./styledComponents"

export interface IClientsTable {
    clientsDataTable: IClient[]
}

const ClientsTable = ({ clientsDataTable }: IClientsTable) => {
    return (
        <>
            <ClientsTableContent>
                <Table caption="" highlightOnHover={false}>
                    <TableHead>
                        <TableRow>
                            <TableCell as="th">Nombre</TableCell>
                            <TableCell as="th">Apellido</TableCell>
                            <TableCell as="th">Teléfono</TableCell>
                            <TableCell as="th">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clientsDataTable.map((client) => {
                            return (
                                <>
                                    <TableRow>
                                        <TableCell>{client.firstName}</TableCell>
                                        <TableCell>{client.lastName}</TableCell>
                                        <TableCell>{client.phone}</TableCell>
                                        <TableCell>{client.email}</TableCell>
                                    </TableRow>
                                </>
                            )
                        })}
                    </TableBody>
                </Table>
            </ClientsTableContent>
        </>
    )
}

export default ClientsTable
