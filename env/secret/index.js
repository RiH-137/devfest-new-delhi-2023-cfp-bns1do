const salt = '';

const fontFamily =
  "'product sans','Roboto', google-sans,system-ui,Helvetica,Arial,Sans-Serif";
const bgColor = 'black';
const base64Str = 'aHR0cHM6Ly93d3cuY29tbXVkbGUuY29tL2ZpbGwtZm9ybS8xOTE0';
const normalTextStyle = `background-color:${bgColor};color:white;font-family:${fontFamily};font-size:16px;-webkit-text-stroke: 1px black;font-weight:normal`;
const headingTextStyle = `background-color:${bgColor};color:#fbbd05;font-family:${fontFamily};font-size:16px;-webkit-text-stroke: 1px black;font-weight:normal`;

const gdgndString = '%cG%co%co%cg%cl%ce %cDeveloper Groups, %cNew Delhi';
const gdgndStringColors = [
  '#4285f4',
  '#ea4336',
  '#fbbd05',
  '#4285f4',
  '#34a853',
  '#ea4336',
  '#5f6367',
  '#5f6367',
];
const gdgndStringfontWeight = [
  'bold',
  'normal',
  'normal',
  'normal',
  'normal',
  'normal',
  'normal',
  'normal',
];
const gdgndStringFontSizes = [40, 40, 40, 40, 40, 40, 36, 36];
const gdgndArray = [
  gdgndString,
  ...Array.from({ length: 8 }).map(
    (_, idx) =>
      `color:${gdgndStringColors[idx]};font-family:${fontFamily};font-size:${gdgndStringFontSizes[idx]}px;-webkit-text-stroke: 1px black;font-weight:${gdgndStringfontWeight[idx]}`
  ),
];
const devfestString = '%cDevFest%cNew Delhi%c2023';
const devfestStringColors = ['white', '#06038D', 'white'];
const devfestStringBgColors = ['#FF671F', 'white', '#046A38'];
const devfestStringFontSizes = [30, 30, 30];
const devfestStringfontWeight = ['normal', 'normal', 'normal'];
const devfestArray = [
  devfestString,
  ...Array.from({ length: 3 }).map(
    (_, idx) =>
      `background-color:${devfestStringBgColors[idx]};color:${devfestStringColors[idx]};font-family:${fontFamily};font-size:${devfestStringFontSizes[idx]}px;-webkit-text-stroke: 1px black;font-weight:${devfestStringfontWeight[idx]};padding:4px 8px;`
  ),
];

console.log(...gdgndArray);
console.log(`%c`, headingTextStyle);
console.log(...devfestArray);
console.log(`%c`, headingTextStyle);
console.log(
  `%cHere's the cyphered base64 string that you need to decypher to see the registration form link:`,
  normalTextStyle
);
console.log(`%c${base64Str}`, headingTextStyle);
console.log(
  `%cHint: %cuse this link to decypher: https://www.base64decode.org/`,
  headingTextStyle,
  normalTextStyle
);
console.log(`%c`, headingTextStyle);
console.log(`%c`, headingTextStyle);
console.log(
  `%cLike my work? %cfeel free to share this on social media 😃`,
  headingTextStyle,
  normalTextStyle
);
console.log(
  `%cLinkedin: %chttps://linkedin.com/in/iamgrawal`,
  headingTextStyle,
  normalTextStyle
);
console.log(
  `%cTwitter: %chttps://twitter.com/iamgrawal`,
  headingTextStyle,
  normalTextStyle
);
console.log(
  `%cInstagram: %chttps://instagram.com/iamgrawal`,
  headingTextStyle,
  normalTextStyle
);

export default salt;
