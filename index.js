const {fetchMyIP, fetchCoordsByIP} = require('./iss');

// fetchMyIP((error, IP) => {
//   if (error) {
//     console.log("It didnt't work!", error);
//     return;
//   }
//   if (IP) {
//     console.log('It worked! Returned IP:', IP);
//     return IP;
//   }
// });

// fetchCoordsByIP('50.98.123.30', (error, coords) => {
//   if (error) {
//     console.log("Couldn't fetch coordinates!", error);
//     return;
//   }
//   if (coords) {
//     console.log("It worked! Returned coordinates: ", coords);
//     return coords;
//   }
// });