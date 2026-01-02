// This tells the app to use the high-speed built-in security engine
const crypto = require('node:crypto'); 

export const PAPI_Security = {
  algorithm: 'aes-256-cbc',
  encrypt: (text, key) => {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
  }

};
