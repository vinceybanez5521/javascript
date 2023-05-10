let d;

d = new Date();

d = d.toString();

d = new Date(2021, 0, 10, 12, 30, 0); // yyyy, MM, dd hh:mm:ss

d = new Date("2021-07-10T12:30:00");
d = new Date("07/10/2021 12:30:00");
d = new Date("2022-07-10");
d = new Date("07-10-2022");

// Timestamp
d = Date.now();

// Get timestamp of specific date
d = new Date("07-10-2022 12:30:00");
d = d.getTime();
d = d.valueOf();

// Get date from timestamp
d = new Date(1657427400000);

// Convert timestamp (milliseconds) to seconds
d = Math.floor(Date.now() / 1000);

// console.log(d, typeof d);
console.log(d);