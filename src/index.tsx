import { ApolloProvider } from "@apollo/client"
import ReactDOM from "react-dom/client"
import client from "./Apollo"
import App from "./App"
import "@aws-amplify/ui-react/styles.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)
