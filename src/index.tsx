// Libs and packages
import { ApolloProvider } from "@apollo/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ReactDOM from "react-dom/client"
import { ToastContainer } from "react-toastify"
import client from "./Apollo"

// Components
import RegisterContainer from "./Containers/Register"
import ViewAllClients from "./Containers/ViewAllClients"

// Styles
import "@aws-amplify/ui-react/styles.css"
import "react-toastify/dist/ReactToastify.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RegisterContainer />} />
                <Route path="clients" element={<ViewAllClients />} />
            </Routes>
        </BrowserRouter>
        <ToastContainer />
    </ApolloProvider>
)
