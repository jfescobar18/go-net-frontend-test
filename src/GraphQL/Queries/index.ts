// Libs and packages
import { gql } from "@apollo/client"

export const GET_ALL_CLIENTS = gql`
    query GetAllClients {
        getAllClients {
            id
            firstName
            lastName
            phone
            email
        }
    }
`
export const GET_CLIENT = gql`
    query GetClient($getClientId: ID) {
        getClient(id: $getClientId) {
            id
            firstName
            lastName
            phone
            email
        }
    }
`
