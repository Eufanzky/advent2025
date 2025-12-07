function timeUntilTakeOff(fromTime, takeOffTime) {
  if (fromTime === takeOffTime) return 0;
  let fromTimeNewFormat = fromTime.replaceAll("*", "-").replace("@", "T").replaceAll("|", ":");
  let takeOffTimeNewFormat = takeOffTime.replaceAll("*", "-").replace("@", "T").replaceAll("|", ":");
  fromTimeNewFormat = fromTimeNewFormat.slice(0, -3);
  takeOffTimeNewFormat = takeOffTimeNewFormat.slice(0, -3);
  let resultTimeStamp = Math.floor((new Date(takeOffTimeNewFormat) - new Date(fromTimeNewFormat))/1000);
  return resultTimeStamp;
}

const takeoff = '2025*12*25@00|00|00 NP'

// from December 24, 2025, 23:59:30, 30 seconds before takeoff
timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff)
// 30

// exactly at takeoff time
timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff)
// 0

// 12 seconds after takeoff
timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff)
// -12