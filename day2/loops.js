//loop

var i;
for (i = 0; i < 4; i++) {
    console.log(i)
}

//looping array
let zeta = ["sayang", "beb", "zheyenk"];
for (var i = 0; i < zeta.length; i++) {
    console.log("halo zeta " + i + zeta[i])
}

//while
var i = 5;
while (i > 0) {
    console.log(i + " bottles of beer on the wall");
    i -= 1;
}

var i = 10;
while (i > 0) {
    console.log(i + " iya zeta sayang");
    i -= 1;
    if (i === 0) {
        break;
    }
}
//1+2 hingga mendekati 100 atau sama dengan 100
for (var i = 0; i < 100; i++) {
    // check that the number is even
    if (i % 2 == 0) {
        continue;
    }
    // if we got here, then i is odd.
    console.log(i + " is an odd number.");
}