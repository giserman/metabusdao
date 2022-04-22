import sdk from "./1-initialize-sdk.js";
import { MaxUint256 } from "@ethersproject/constants";

const editionDrop = sdk.getEditionDrop(
    "0xB0Cd406d1F8be745EFe3991C6b62CdEddc6E0E5D"
);
// (async () => {
//     try {
//         const claimConditions = [
//             {
//                 startTime: new Date(),
//                 maxQuantity: 50_000,
//                 price: 0,
//                 quantityLimittpuPerTransaction: 1,
//                 waitInSeconds: MaxUint256,
//             },
//         ];
//         await editionDrop.claimConditions.set(0, claimConditions);
//         console.log("successfully set claim conditions");
//     } catch (error) {
//         console.log("failed to set claim condition", error);
//     }
// })();

(async () => {
    try {
        // We define our claim conditions, this is an array of objects because
        // we can have multiple phases starting at different times if we want to
        const claimConditions = [
            {
                // When people are gonna be able to start claiming the NFTs (now)
                startTime: new Date(),
                // The maximum number of NFTs that can be claimed.
                maxQuantity: 50_000,
                // The price of our NFT (free)
                price: 0,
                // The amount of NFTs people can claim in one transaction.
                quantityLimitPerTransaction: 1,
                // We set the wait between transactions to MaxUint256, which means
                // people are only allowed to claim once.
                waitInSeconds: MaxUint256,
            },
        ];

        await editionDrop.claimConditions.set("0", claimConditions);
        console.log("✅ Successfully set claim condition!");
    } catch (error) {
        console.error("Failed to set claim condition", error);
    }
})();
