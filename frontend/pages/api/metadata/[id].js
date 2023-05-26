// export default async function handler(req, res) {
//     const METADATA_STAGE = process.env.METADATA_STAGE;

//     // get the ID from the query parameter ****
//     const { id } = req.query;

//     if (METADATA_STAGE === 'prereveal') {
//         //show hidden metadata in preReveal.json by id
//         const preReveal = require('../../../metadata/preReveal.json');
//         const metadata = preReveal.nfts[id];
//         console.log(`preReveal metadata for id ${id} is ${metadata}`);
//         res.status(200).json(metadata);
//     } else if (METADATA_STAGE === 'postreveal') {
//         //reveal hidden metadata in postReveal.json by id
//         const revealed = require('../../../metadata/postReveal.json');
//         const metadata = revealed.nfts[id];
//         console.log(`reveal metadata for id ${id} is ${metadata}`);
//         res.status(200).json(metadata);
//     } else {
//         res.status(404).json({error: 'No metadata found'});
//     }
// }

export default async function handler(req, res) {
  const METADATA_STAGE = process.env.METADATA_STAGE;

  // get the ID from the query parameter
  const { id } = req.query;

  if (METADATA_STAGE === "prereveal") {
    //show hidden metadata in preReveal.json by id
    const preReveal = require("../../../metadata/preReveal.json");
    const metadata = preReveal.nfts.find((nft) => nft.id == id);
    console.log(`preReveal metadata for id ${id} is ${metadata}`);
    res.status(200).json(metadata);
  } else if (METADATA_STAGE === "postreveal") {
    //reveal hidden metadata in postReveal.json by id
    const revealed = require("../../../metadata/postReveal.json");
    const metadata = revealed.nfts.find((nft) => nft.id == id);
    console.log(`reveal metadata for id ${id} is ${metadata}`);
    res.status(200).json(metadata);
  } else {
    res.status(404).json({ error: "No metadata found" });
  }
}
