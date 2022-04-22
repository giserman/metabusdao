import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// Import thirdweb provider and Rinkeby ChainId
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Rinkeby;

// Wrap your app with the thirdweb provider
ReactDOM.render(
    <React.StrictMode>
        <ThirdwebProvider desiredChainId={activeChainId}>
            <App />
        </ThirdwebProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
