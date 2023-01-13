import connectMongo from "middleware/connectMongo";
import User from "models/User.js";

export default async function handler(req, res) {
  const { method } = req;
  console.log({ method });
  console.log("hitting user");

  await connectMongo();

  console.log("past connect");

  switch (method) {
    case "GET":
      try {
        console.log("get?");
        const users = await User.find({});
        console.log("the users", users.body);
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
