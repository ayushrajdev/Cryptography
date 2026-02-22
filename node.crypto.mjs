import crypto from 'crypto';
import fs from 'fs';
//node js uses the open ssl

// .update accept the binary data of the file or string
// .digest give the hash in hex form
const a = crypto.createHash('sha256').update('hello world').digest('hex');
const b = crypto
    .createHash('sha256')
    .update(Buffer.from('hello world'))
    .digest('hex');

//digital signature
const buffer = fs.readFileSync('./signed-file.txt');
const mySecretkey = 'my-super-secret-key';
const signature = crypto
    .createHash('sha256')
    .update(buffer)
    .update(mySecretkey)
    .digest('hex');

const ws = fs.createWriteStream('signed-file-with-sign.txt');
ws.write(buffer);
ws.write(signature);
// console.log(a);
// console.log(b);
console.log(ws);
