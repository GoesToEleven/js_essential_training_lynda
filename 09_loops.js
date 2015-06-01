var a = 1;

while (a <= 10) {
    console.log(a++);
}

do {
    console.log(a++);
} while (a <= 20);

for (var i = 21; i <= 30; i++ ) {
    console.log(i)
}

// break
// jumps out of loop
for (var j = 31; j <= 100; j++) {
    console.log(j)
    if (j === 40) {
        break;
    }
}

// continue
// done with this iteration
for (var j = 41; j <= 50; j++) {
    console.log(j, "---")
    if (j % 2 === 0) {
        continue;
    }
    console.log(j, "---", j)
}