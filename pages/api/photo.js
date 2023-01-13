import User from "models/User";
import connectMongo from "../../middleware/connectMongo";

export default async function handler(req, res) {
  const { method } = req;
  console.log({ method });
  console.log("hitting Photo");

  const mongooseObject = await connectMongo();
  console.log({ mongooseObject });
  console.log("after", mongooseObject.Mongoose);

  switch (method) {
    case "GET":
      try {
        console.log("gettt?");
        const doc = await User.find({});
        console.log({ doc });
        console.log("pastttt");

        res.status(200).json({ success: true, data: "who" });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const photos = await Photo.create(req.body);
        res.status(201).json({ success: true, data: photos });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
