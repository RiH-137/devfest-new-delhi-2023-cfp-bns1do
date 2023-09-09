// Import stylesheets
import './style.css';
import salt from './env/secret';

// Define the Base64 decryption function
function base64Decode(encoded) {
  // Use atob() to decode Base64
  const decoded = atob(encoded);
  return decoded;
}

// Define the Base64 encryption function
function base64Encode(str) {
  // Use btoa() to encode as Base64
  const encoded = btoa(str);
  return encoded;
}

function encryptString(str) {
  let encryptedStr = '';
  for (let i = 0; i < str.length; i++) { // Change "<=" to "<"
    encryptedStr += String.fromCharCode(str.charCodeAt(i) + 2);
  }
  return encryptedStr;
}

function decryptString(str) {
  let decryptedStr = '';
  for (let i = 0; i < str.length; i++) { // Change "<=" to "<"
    decryptedStr += String.fromCharCode(
      str.charCodeAt(i) - 2
    );
  }
  return decryptedStr;
}

// The encrypted URL
let encryptedUrl =
  'jvvru<11tcy0ikvjwdwugteqpvgpv0eqo1kcoitcycn1fgxhguv/fgnjk/42451ockp1TGCFOG0of';

// Decrypt the URL using Base64 decode
let decryptedUrl = base64Decode(encryptedUrl);

// Decrypt the URL further using your custom decryption
let decryptedUrlFinal = decryptString(decryptedUrl + salt);

// Showing the output to the browser document as well
let formLinkElement = document.getElementById('decryptedUrl');

formLinkElement.href = decryptedUrlFinal;
formLinkElement.innerText = decryptedUrlFinal;
