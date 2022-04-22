import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";

import dotenv from "dotenv";
dotenv.config();

if (!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY === "") {
    console.log("Private key not found");
}

if (!process.env.ALCHEMY_API_URL || process.env.ALCHEMY_API_URL === "") {
    console.log("Alchemy api url not found");
}

if (!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS === "") {
    console.log("Wallet address not found");
}

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.PRIVATE_KEY,
        ethers.getDefaultProvider(process.env.ALCHEMY_API_URL)
    )
);

(async () => {
    try {
        const address = await sdk.getSigner().getAddress();
        console.log("SDK initialized by address:", address);
    } catch (error) {
        console.error("Failed to get apps from the SDK", error);
        process.exit(1);
    }
})();

export default sdk;
