import User from "../../models/User";
import dbConnect from "../../utils/dbConnect";
const xss = require("xss");

const correctAnswer = "ocean";

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
      const answer = xss(req.body.answer.trim());

    try {
      // check they are not already whitelisted
      await dbConnect();
      const userExists = await checkUser(address)
      if (userExists) {
        return res.status(200).json({ success: false, message: `Address ${address} is already on the whitelist!` });
      }

      // check if the answer is correct
      if (answer.toLowerCase() !== correctAnswer) {
        console.log("Wrong answer");
        return res.status(200).json({ success: false, message: "Wrong answer" });
      }

      // Correct answer given, create a new User and store in db
      const user = new User({address});
      const savedUser = await user.save();
      return res.status(200).json({ success: true, message: `Success! You have been added to the whitelist!` });
    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  } else {
    return res
      .status(405)
      .json({ success: false, message: "Invalid request method" });
  }
}