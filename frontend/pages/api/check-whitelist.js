import User from "../../models/User";
import dbConnect from "../../utils/dbConnect";
const xss = require("xss");

const checkUser = async (address) => {
  try {
    const user = await User.findOne({ address });
    if (user) {
      // User with the address exists in the database
      return true;
    } else {
      // User with the address does not exist in the database
      return false;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};


export default async function handler(req, res) {
  //  params: { address, answer }
  if (req.method === "POST") {
    
    // sanitize and trim the data
      const address = xss(req.body.address.trim());

    try {
      // check they are not already whitelisted
      await dbConnect();
      const userExists = await checkUser(address)
      if (userExists) {
        return res.status(200).json({ success: false, message: `Address ${address} is on the whitelist!` });
      } else {
        return res.status(200).json({ success: false, message: `Address ${address} is not on the whitelist!` });
      }
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  } else {
    return res
      .status(405)
      .json({ success: false, message: "Invalid request method" });
  }
}