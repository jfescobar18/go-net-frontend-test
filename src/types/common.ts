import { ForwardedRef } from "react"

export interface IObjectKeys {
    [key: string]: string | number | undefined
}

export type inputEvent = React.ChangeEvent<HTMLInputElement>
export type formEvent = React.FormEvent<HTMLDivElement>
