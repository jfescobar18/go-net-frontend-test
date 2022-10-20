// Libs and packages
import { ApolloProvider } from "@apollo/client"
import ReactDOM from "react-dom/client"
import { ToastContainer } from "react-toastify"
import client from "./Apollo"

// Components
import App from "./App"

// Styles
import "@aws-amplify/ui-react/styles.css"
import "react-toastify/dist/ReactToastify.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
    <ApolloProvider client={client}>
        <App />
        <ToastContainer />
    </ApolloProvider>
)
