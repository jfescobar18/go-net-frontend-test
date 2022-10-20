// Libs and packages
import { gql } from "@apollo/client"

export const CREATE_CLIENT = gql`
    mutation Mutation($client: ClientInput) {
        createClient(client: $client) {
            id
            firstName
            lastName
            phone
            email
        }
    }
`
export const DELETE_CLIENT = gql`
    mutation DeleteClient($deleteClientId: ID) {
        deleteClient(id: $deleteClientId)
    }
`

export const UPDATE_CLIENT = gql`
    mutation UpdateClient($client: ClientInput) {
        updateClient(client: $client) {
            id
            firstName
            lastName
            phone
            email
        }
    }
`
