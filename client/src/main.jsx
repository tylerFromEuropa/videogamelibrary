import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-eaimsszjqhe1eoeh.uk.auth0.com"
            clientId="GfbSOcMuQSXxvn6g3TUyBhU8LpPuTXlr"
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
        >
            <App />
        </Auth0Provider>
        ,
    </React.StrictMode>
);
