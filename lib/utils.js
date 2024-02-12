// // This function replaces line breaks in JSON with <br> tags for rendering in HTML:
// // Define a function that takes an object as an argument
// export async function replaceNewlinesInObject(obj) {
//   // Create a new object or array based on the input type
//   const newObj = Array.isArray(obj) ? [] : {};
//   // Iterate over each property in the input object
//   for (const key in obj) {
//     // If the property value is a string
//     if (typeof obj[key] === "string") {
//       // Replace newline characters with HTML line breaks in the string and assign it to the new object
//       newObj[key] = obj[key].replace(/\\n/g, "<br/>");
//     }
//     // If the property value is an array
//     else if (Array.isArray(obj[key])) {
//       // Apply the function recursively to each item in the array and assign the result to the new object
//       newObj[key] = obj[key].map((item) => replaceNewlinesInObject(item));
//     }
//     // If the property value is an object
//     else if (typeof obj[key] === "object") {
//       // Apply the function recursively to the object and assign the result to the new object
//       newObj[key] = replaceNewlinesInObject(obj[key]);
//     }
//     // If the property value is neither a string, an array, nor an object
//     else {
//       // Assign the property value directly to the new object
//       newObj[key] = obj[key];
//     }
//   }
//   // Return the new object with newline characters replaced
//   return newObj;
// }
