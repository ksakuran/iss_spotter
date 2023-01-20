const {nextISSTimesForMyLocation} = require('./iss');

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

// fetchISSFlyOverTimes({ longitude: -123.1207375, latitude: 49.2827291 }, (error, passes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   if (passes) {
//     console.log(`It worked! Returned flyover times:`, passes);
//   }
// });

const printPassTimes = (passes) => {
  for (const pass of passes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

// nextISSTimesForMyLocation((error, passes) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   }
//   printPassTimes(passes);
// });

module.exports = { printPassTimes}