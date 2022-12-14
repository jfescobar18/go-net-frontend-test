// Libs and packages
import {
    Button,
    Divider,
    Flex,
    PhoneNumberField,
    TextField,
} from "@aws-amplify/ui-react"

// Components
import { FormContent, FormElement } from "./styledComponents"

// Types
import { IClient } from "../../types/client"
import { inputEvent, formEvent } from "../../types/common"


export interface IRegisterForm {
    updateForm: (key: string, value: string) => void
    handleSubmit: (e: formEvent) => void
    formState: IClient
    loading: boolean
}

const RegisterForm = ({
    updateForm,
    handleSubmit,
    formState,
    loading,
}: IRegisterForm) => {
    return (
        <>
            <FormContent>
                <Flex
                    as="form"
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    alignContent="flex-start"
                    wrap="nowrap"
                    onSubmit={(e: formEvent) => {
                        handleSubmit(e)
                    }}
                >
                    <FormElement>
                        <TextField
                            label="Nombre(s)"
                            isRequired={true}
                            name="firstName"
                            onChange={(e: inputEvent) =>
                                updateForm("firstName", e.target.value)
                            }
                            value={formState.firstName}
                        />
                    </FormElement>

                    <Divider marginBottom={5} />

                    <FormElement>
                        <TextField
                            label="Apellidos"
                            isRequired={true}
                            name="lastName"
                            onChange={(e: inputEvent) => {
                                updateForm("lastName", e.target.value)
                            }}
                            value={formState.lastName}
                        />
                    </FormElement>

                    <Divider marginBottom={5} />

                    <FormElement>
                        <PhoneNumberField
                            defaultDialCode="+52"
                            label="Tel??fono"
                            descriptiveText="Tel??fono a 10 d??gitos"
                            isRequired={true}
                            name="phone"
                            onChange={(e: inputEvent) =>
                                updateForm("phone", e.target.value)
                            }
                            value={formState.phone}
                        />
                    </FormElement>

                    <Divider marginBottom={5} />

                    <FormElement>
                        <TextField
                            label="Email"
                            isRequired={true}
                            name="email"
                            onChange={(e: inputEvent) =>
                                updateForm("email", e.target.value)
                            }
                            value={formState.email}
                        />
                    </FormElement>

                    <Divider marginBottom={5} />

                    <FormElement className="center">
                        <Button
                            type="submit"
                            variation="primary"
                            loadingText="Enviando..."
                            isLoading={loading}
                        >
                            Enviar
                        </Button>
                    </FormElement>
                </Flex>
            </FormContent>
        </>
    )
}

export default RegisterForm
