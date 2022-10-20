import { IObjectKeys } from "./common"

export interface IClient extends IObjectKeys {
    id?: string
    firstName: string
    lastName: string
    phone: string
    email: string
}
