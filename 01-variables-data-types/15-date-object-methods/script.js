let x;
let d = new Date();

// x = d.toString();
// x = d.getTime();
// x = d.valueOf();

// x = d.getFullYear();
x = d.getMonth() + 1;
// x = d.setMonth(5 - 1);
// x = d;

// x = d.getDate(); // day of the week
// x = d.getDay(); // day of the month

// x = d.getHours();
// x = d.getMinutes();
// x = d.getSeconds();
// x = d.getMilliseconds();

// x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// x = Intl.DateTimeFormat("en-PH").format(d);
// x = Intl.DateTimeFormat("en-US").format(d);
// x = Intl.DateTimeFormat("en-SG").format(d);
// x = Intl.DateTimeFormat("default").format(d);

// d = new Date("2020-11-03T07:30:50");
// x = Intl.DateTimeFormat("default", { month: "long" }).format(d);

// x = d.toLocaleString("default", { month: 'short' });

// x = d.toLocaleString("default", {
//     weekday: "short",
//     year: "numeric",
//     month: "long",
//     day: "2-digit",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//     timeZone: "Asia/Manila"
// });

console.log(x);