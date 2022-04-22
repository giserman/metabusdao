import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
    "0xB0Cd406d1F8be745EFe3991C6b62CdEddc6E0E5D"
);

(async () => {
    try {
        //const metadata = await editionDrop.metadata.get();
        // console.log(
        //     "successfuly deployed editionDrop contract, address: ",
        //     metadata
        // );
        await editionDrop.createBatch([
            {
                name: "Metabus Avatar",
                description: "This is Metabus membership avatar",
                image: readFileSync("scripts/assets/metabus_avator.png"),
            },
        ]);
        console.log("successfule created a nft");
    } catch (error) {
        console.log("failed to create new nft", error);
    }
})();
