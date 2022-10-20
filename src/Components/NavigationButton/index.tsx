// Libs and packages
import { Link } from "react-router-dom"
import { Button } from "@aws-amplify/ui-react"

// Components
import { NavigationButtonContent } from "./styledComponents"

export interface INavigationButton {
    link: string
    text: string
}

const NavigationButton = ({ link, text }: INavigationButton) => {
    return (
        <>
            <NavigationButtonContent>
                <Link to={link}>
                    <Button onClick={() => {}}>
                        {text}
                    </Button>
                </Link>
            </NavigationButtonContent>
        </>
    )
}

export default NavigationButton
