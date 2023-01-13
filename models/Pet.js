import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
});

export default mongoose.models.Pet || mongoose.model("Pet", PetSchema);
