const request = require('request');

const fetchMyIP = (callback) => {
  request(`https://api.ipify.org?format=json`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const IP = JSON.parse(body);
    const ip = IP.ip;
    callback(error, ip);
  });
};

const fetchCoordsByIP = (IP, callback) => {
  request(`http://ipwho.is/${IP}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching coordinates. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const data = JSON.parse(body);
    if (!data.success) {
      const message = `Success status was ${data.success}. Server message says: ${data.message} when fetching for IP ${data.ip}`;
      callback(Error(message), null);
      return;
    }
    
    const longitude = data.longitude;
    const latitude = data.latitude;
    const coords = { longitude, latitude };
    callback(error, coords);

  });
};

const fetchISSFlyOverTimes = (coords, callback) => {
  const lat = coords.latitude;
  //console.log("lat", lat)
  const lon = coords.longitude;
  //console.log("lon", lon)

  request(`https://iss-flyover.herokuapp.com/json/?lat=${lat}&lon=${lon}`, (error, response, body) => {

    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching ISS fly over times. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const data = JSON.parse(body);
    // if (!data.success) {
    //   const message = `Success status was ${data.success}. Server message says: ${data.message} when searching with latitude of ${lat} and longitude of ${lon}`;
    //   return callback(Error(message), null);
    // }
    let passes = data.response;
    return callback(error, passes);

  });
};



const nextISSTimesForMyLocation = (callback) => {
  fetchMyIP((error, IP) => {
    if (error) {
      //console.log("It didnt't work!", error);
      return callback(error, null);
    }
    fetchCoordsByIP(IP, (error, coords) => {
      if (error) {
        //console.log("Couldn't fetch coordinates!", error);
        return callback(error, null);
      }
      fetchISSFlyOverTimes(coords, (error, passes) => {
        if (error) {
          //console.log("It didn't work!", error);
          return callback(error, null);
        }

        callback(null, passes);
      });
    });
  });
};


module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation };