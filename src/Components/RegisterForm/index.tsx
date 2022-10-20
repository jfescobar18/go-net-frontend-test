import {
    Button,
    Divider,
    Flex,
    PhoneNumberField,
    TextField,
} from "@aws-amplify/ui-react"
import { FormContent, FormElement } from "./styledComponents"

const RegisterForm = () => {
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
                >
                    <FormElement>
                        <TextField label="Nombre(s)" isRequired={true} />
                    </FormElement>

                    <Divider marginBottom={5} />

                    <FormElement>
                        <TextField label="Apellidos" isRequired={true} />
                    </FormElement>

                    <Divider marginBottom={5} />

                    <FormElement>
                        <PhoneNumberField
                            defaultDialCode="+52"
                            label="Teléfono"
                            descriptiveText="Teléfono a 10 dígitos"
                            isRequired={true}
                        />
                    </FormElement>

                    <Divider  marginBottom={5}/>

                    <FormElement>
                        <TextField label="Email" isRequired={true} />
                    </FormElement>

                    <Divider marginBottom={5} />

                    <FormElement className="center">
                        <Button
                            type="submit"
                            variation="primary"
                            loadingText="Enviando..."
                            isLoading={false}
                            onClick={() => {}}
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
