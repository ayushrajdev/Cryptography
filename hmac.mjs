import crypto from 'node:crypto';

const hmac = crypto
    .createHmac('sha256', 'my-secret-key')
    .update('hello world')
    .digest('binary');
console.log(hmac)