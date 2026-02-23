import crypto from 'node:crypto';
import fs from 'fs';
const mySecretkey = 'my-super-secret-key';
const buffer = fs.readFileSync('./signed-file-with-sign.txt');
console.log(buffer.length);
const fileBuffer = buffer.subarray(0, 36).toString('utf8');
const hashOfFile = buffer.subarray(36).toString('utf8');

const newSignature = crypto
    .createHash('sha256')
    .update(fileBuffer)
    .update(mySecretkey)
    .digest('hex');

console.log({ hashOfFile, newSignature });
if (hashOfFile == newSignature) {
    console.log('file is not tampered');
} else {
    console.log('file is tampered');
}