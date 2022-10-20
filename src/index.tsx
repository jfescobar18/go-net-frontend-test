import { ApolloProvider } from "@apollo/client"
import ReactDOM from "react-dom/client"
import client from "./Apollo"
import App from "./App"
import { ToastContainer } from "react-toastify"
import "@aws-amplify/ui-react/styles.css"
import "react-toastify/dist/ReactToastify.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
    <ApolloProvider client={client}>
        <App />
        <ToastContainer />
    </ApolloProvider>
)
