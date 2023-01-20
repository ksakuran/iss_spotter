const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');

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

fetchISSFlyOverTimes({ longitude: -123.1207375, latitude: 49.2827291 }, (error, passes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  if (passes) {
    console.log(`It worked! Returned flyover times:`, passes);
  }
});