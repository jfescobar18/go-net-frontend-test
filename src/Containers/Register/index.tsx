import { useMutation } from "@apollo/client"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import RegisterForm from "../../Components/RegisterForm"
import { CREATE_CLIENT } from "../../GraphQL/Mutations"
import { useForm } from "../../hooks/useForm"
import { formEvent } from "../../types/common"

const RegisterContainer = () => {
    const [createClient, { loading, error, data }] = useMutation(CREATE_CLIENT)
    const [formState, updateForm, resetForm] = useForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
    })

    useEffect(() => {
        if (data && data.createClient && data.createClient.id) {
            toast.success("Cliente creado con éxito!", {
                position: toast.POSITION.TOP_RIGHT,
                theme: "dark",
            })
            resetForm()
        }
    }, [data])

    useEffect(() => {
        if (error) {
            console.log(error.message)
            toast.warn("Error al crear cliente", {
                position: toast.POSITION.TOP_RIGHT,
                theme: "dark",
            })
            resetForm()
        }
    }, [error])

    const handleSubmit = (e: formEvent) => {
        e.preventDefault()
        createClient({ variables: { client: formState } })
    }

    return (
        <>
            <RegisterForm
                updateForm={updateForm}
                handleSubmit={handleSubmit}
                formState={formState}
                loading={loading}
            />
        </>
    )
}

export default RegisterContainer
