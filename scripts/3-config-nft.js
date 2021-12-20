import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    process.env.BUNDLE_ADDRESS,
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Dape NFT",
        description: "This NFT will give you access to DapeDAO!",
        image: readFileSync("scripts/assets/dapenft.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()