import mongoose from "mongoose";
// import { fetchInstagramPhotosForUser } from "../lib/instagram.js";
const Schema = mongoose.Schema;
// import { FeedSchema } from "./Feed.js";
// import Photo from "./Photo.js";

const UserSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  shopOrigin: {
    type: String,
    required: false,
  },
  subscriptionID: {
    type: String,
    required: false,
  },
  subscriptionStatus: {
    type: String,
    required: false,
  },
  shopifyAccessToken: {
    type: String,
    required: false,
  },
  shopifyAccessTokenExpirationDate: {
    type: String,
    required: false,
  },

  instagramUserID: {
    type: String,
    required: false,
  },
  instagramAccessToken: {
    type: String,
    required: false,
  },
  userId: {
    type: String,
    required: false,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
  //This is the display feed
  lastSelectedFeedID: {
    type: String,
    required: false,
  },
  displayFeed: {
    type: Object,
    required: false,
  },
  instagramUsername: {
    type: String,
    required: false,
  },
  //   feeds: [FeedSchema],
});

// UserSchema.post("save", function (userJustGotSaved, next) {
//   userJustGotSaved
//     .populate({
//       path: "feeds",
//       populate: { path: "photos" },
//     })
//     .then(function () {
//       next();
//     });
// });

// UserSchema.methods.fetchInstagramPhotos = async function () {
//   console.log(
//     `Fetching instagram photos for user: ${this.shopOrigin} with limit ${process.env.DEFAULT_INSTA_FETCH_LIMIT}`
//   );
//   if (!this.instagramAccessToken) {
//     // ig not connected
//     console.log(`User ${this.shopOrigin} not connected to instagram`);
//     return Promise.resolve([]);
//   }
//   const instagramPhotos = await fetchInstagramPhotosForUser(this);
//   console.log(
//     `Done, fetched ${instagramPhotos.length} photos for user ${this.shopOrigin}`
//   );
//   console.log("Creating photos from Instagram Photos...");
//   return Photo.findOrCreateFromInstagramPhotos(instagramPhotos, this);
// };

// /**
//  *
//  * @returns [Photos] array of all photos created for all users
//  */
// UserSchema.statics.fetchInstagramPhotosForAllUsers = async function () {
//   try {
//     console.log("Fetching photos for all users");
//     const users = await User.find({});
//     const promises = users.map((user) => {
//       return user.fetchInstagramPhotos();
//     });
//     const photos = await Promise.all(promises); // run all promises
//     return photos;
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports =
  mongoose.models.User || mongoose.model("User", UserSchema, "User");
