var today = new Date();
console.log(today);

// args: year, month, day
// months are zero based: go from 0 - 11
var y2k = new Date(2000,0,1);
console.log(y2k);

// args: year, month, day, hours, mins, seconds
// months are zero based: go from 0 - 11
// dates are stored number of milliseconds since January 1970
var y2k = new Date(2000,0,1,0,0,58);
console.log(y2k);
console.log(y2k.getMonth());
console.log(y2k.getFullYear());
console.log(y2k.getDate()); // day of month: 1-31
console.log(y2k.getDay()); // day of week: 0-6 where 0 == sunday
console.log(y2k.getHours()); // zero based: 0-23
console.log(y2k.getTime()); // milliseconds since January 01 1970
console.log(y2k.setMonth(5));

// comparing dates
var date1 = new Date(2000,0,1);
var date2 = new Date(2000,0,1);
if (date1 == date2) {
    console.log('dates are the same');
} else {
    console.log('dates are different');
    // they're different because dates are objects
    // different memory addresses
}
if (date1.getTime() == date2.getTime()) {
    console.log('dates are the same');
} else {
    console.log('dates are different');
}



