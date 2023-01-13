import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PhotoSchema = new Schema(
  {
    instagramID: {
      type: Number,
      required: false,
    },
    mediaURL: {
      type: String,
      required: false,
    },
    mediaType: {
      type: String,
      required: false,
    },
    tags: {
      type: Array,
      required: false,
      default: [],
    },
    instagramTimestamp: {
      type: String,
      reqired: false,
    },
    instagramUpdatedAt: {
      type: String,
      default: Date.now(),
    },
    caption: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: false,
    },
    permalink: {
      type: String,
      required: false,
    },
    // user: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    thumbnailURL: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

// const photoParamsFromInstagramPhoto = (instagramPhoto, user) => {
//   // console.log({ instagramPhoto });
//   return {
//     instagramID: instagramPhoto.id,
//     mediaURL: instagramPhoto.media_url,
//     caption: instagramPhoto.caption,
//     permalink: instagramPhoto.permalink,
//     mediaType: instagramPhoto.media_type,
//     instagramTimestamp: instagramPhoto.timestamp,
//     username: instagramPhoto.username,
//     thumbnailURL: instagramPhoto.thumbnail_url,
//     user: user,
//   };
// };

// PhotoSchema.statics.createFromInstagramPhoto = function (instagramPhoto, user) {
//   return this.create(photoParamsFromInstagramPhoto(instagramPhoto, user));
// };

// PhotoSchema.statics.createFromInstagramPhotos = async function (
//   instagramPhotos,
//   user
// ) {
//   return this.create(
//     instagramPhotos.map((instagramPhoto) => {
//       return photoParamsFromInstagramPhoto(instagramPhoto, user);
//     })
//   );
// };

// /**
//  *
//  * @param {Array<InstagramPhotos>} instagramPhotos
//  * @param {User} user owner of photos
//  * @returns {Promise}
//  */
// PhotoSchema.statics.findOrCreateFromInstagramPhotos = async function (
//   instagramPhotos,
//   user
// ) {
//   const newPhotosPromises = instagramPhotos.map(async (instagramPhoto) => {
//     const photoParams = photoParamsFromInstagramPhoto(instagramPhoto, user);
//     return Photo.findOneAndUpdate(
//       { instagramID: photoParams.instagramID },
//       photoParams,
//       {
//         new: true,
//         upsert: true,
//       }
//     );
//   });

//   return Promise.all(newPhotosPromises);
// };

module.exports = mongoose.models.Photo || mongoose.model("Photo", PhotoSchema);
