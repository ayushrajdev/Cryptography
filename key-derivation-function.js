import crypto from "crypto";

const randomBytes = crypto.randomBytes(32);
console.log(randomBytes.toString("utf-8"));
// const res = crypto.pbkdf2(
//   "password",
//   "my_salt",
//   100000,
//   32,
//   "sha256",
//   (error, outputChunk) => {
//     console.log(outputChunk.toString("base64url"));
//   },
// );

const res = crypto.pbkdf2(
  "password",
  crypto.randomBytes(16),
  100000,
  32,
  "sha256",
  (error, outputChunk) => {
    console.log(outputChunk.toString("base64url"));
  },
);
