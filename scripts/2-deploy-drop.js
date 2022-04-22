import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFile, readFileSync } from "fs";

(async () => {
    try {
        const editionDropAddress = await sdk.deployer.deployEditionDrop({
            name: "MetabusDao Membership",
            description: "A Dao for Metabus",
            image: readFileSync("scripts/assets/metabus.jpeg"),
            primary_sale_recipient: AddressZero,
            twitter: "https://twitter.com/metabus001",
        });

        const editionDrop = sdk.getEditionDrop(editionDropAddress);
        const metadata = await editionDrop.metadata.get();

        console.log(
            "successfuly deployed editionDrop contract, address: ",
            editionDropAddress
        );
        console.log("editionDrop metadata:", metadata);
    } catch (error) {
        console.log("failed to deploy editionDrop contract", error);
    }
})();
