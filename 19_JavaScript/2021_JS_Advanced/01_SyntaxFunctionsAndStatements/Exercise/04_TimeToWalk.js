function solve(steps, footprintInMeters, speedInKilometersPerHour) {

  let distanceInMeters = steps * footprintInMeters;
  let speedInMetersPerSecond = speedInKilometersPerHour / 3.6;
  let restInSeconds = Math.floor(distanceInMeters / 500) * 60; // every 500m he rests
  let timeInSeconds = (distanceInMeters / speedInMetersPerSecond) + restInSeconds;

  let s = Math.round(timeInSeconds % 60);
  let m = Math.floor(timeInSeconds / 60);
  let h = Math.floor(timeInSeconds / 3600);
  console.log(`${(h < 10 ? "0" : "") + h}:${(m < 10 ? "0" : "") + m}:${(s < 10 ? "0" : "") + s}`);

}

// solve(4000, 0.60, 5);
// solve(2564, 0.70, 5.5);