import { useCallback, useState } from "react"
import { IClient } from "../types/client"

export const useForm = (inputFields: any) => {
    const [formState, setFormState] = useState(inputFields)

    const updateForm = useCallback((key: string, value: string) => {
        setFormState((inputs: any) => ({
            ...inputs,
            [key]: value,
        }))
    }, [])

    const resetForm = useCallback(() => {
        setFormState(inputFields)
    }, [])

    return [formState, updateForm, resetForm] as const
}
