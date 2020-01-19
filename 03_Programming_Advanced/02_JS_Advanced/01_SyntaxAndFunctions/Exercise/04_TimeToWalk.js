function main(steps, footprintInMeters, speedInKilometersPerHour) {

  let distanceInMeters = steps * footprintInMeters;
  let speedInMetersPerHour = speedInKilometersPerHour * 1000
  let timeMetersPerHour = distanceInMeters / speedInMetersPerHour;
  let restInSeconds = Math.floor(distanceInMeters / 500) * 60;
  let timeMetersPerSecond = timeMetersPerHour * 3600 + restInSeconds;

  //console.log(timeMetersPerSecond);
  let s = Math.round(timeMetersPerSecond % 60);
  let m = Math.floor(timeMetersPerSecond / 60);
  let h = Math.floor(timeMetersPerSecond / 3600);
  console.log(`${(h < 10 ? "0" : "") + h}:${(m < 10 ? "0" : "") + m}:${(s < 10 ? "0" : "") + s}`);

}

main(4000, 0.60, 5);