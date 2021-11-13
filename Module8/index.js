// URL Module
import { URL } from 'url';
const myURL = new URL('https://getplaced.pythonanywhere.com/3/Profile/');

console.log(myURL.hash);
console.log(myURL.host);
console.log(myURL.hostname);
console.log(myURL.pathname);
console.log(myURL.protocol);
console.log(myURL.search);
console.log(myURL.searchParams);
console.log(myURL.toString);
console.log(myURL.toJSON);