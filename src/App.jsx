import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAddress, useMetamask } from "@thirdweb-dev/react";

function App() {
    const address = useAddress();
    const connectWithMetamask = useMetamask();

    if (!address) {
        return (
            <div className="landing">
                <h1>Welcome to MetaBusDao</h1>
                <button onClick={connectWithMetamask} className="btn-hero">
                    Connect Your Wallet
                </button>
            </div>
        );
    }
    return (
        <div className="landing">
            <h1>wallect connected, metabuser!</h1>
        </div>
    );
}

export default App;
