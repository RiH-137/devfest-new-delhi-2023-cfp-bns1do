// Import stylesheets
import './style.css';
import salt from './env/secret';

function encryptString(str) {
  let encryptedStr = '';
  for (let i = 0; i <= str.length; i++) {
    encryptedStr += String.fromCharCode(str.charCodeAt(i) + 2);
  }
  return encryptedStr;
}

function decryptString(str) {
  let decryptedStr = '';
  for (let i = 0; i < str.length; i++) {
    decryptedStr += String.fromCharCode(
      str.charCodeAt(i) - 2 // <-- TODO: The bug is here, can you find it?
    );
  }
  return decryptedStr;
}

// Define the Base64 decryption function
function base64Decode(encoded) {
  // Use atob() to decode Base64
  const decoded = atob(encoded);
  return decoded;
}

// The encrypted URL
let encryptedUrl =
  'jvvru<11tcy0ikvjwdwugteqpvgpv0eqo1kcoitcycn1fgxhguv/fgnjk/42451ockp1TGCFOG0of';

// Decrypt the URL using Base64 decode
let decryptedUrl = base64Decode(encryptedUrl);

// Showing the output to the browser document as well
let formLinkElement = document.getElementById('decryptedUrl');

formLinkElement.href = decryptedUrl;
formLinkElement.innerText = decryptedUrl;
