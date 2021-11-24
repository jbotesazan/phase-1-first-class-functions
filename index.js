function receivesAFunction(cb) {
    cb();
}

function returnsANamedFunction() {
    const fn = function () {
        console.log("This is a named function");
    }

    return fn;

}

function returnsAnAnonymousFunction() {
return function () {
    console.log("This is an anonymous function");
}
}














// function Monday() {
//     exerciseRoutine(liftWeights);
// }
// (
// exerciseRoutine(() => console.log("Stretch! Work that core!"));

// // function Tuesday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Swim 40 laps");
// // }

// // function Wednesday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Go for a five-mile run");
// // }

// // function Thursday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Pump iron");
// // }

// // function Friday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Swim 40 laps");
// // }

// function runFiveMiles() {
//     console.log("Go for a five-mile run");
// }

// function liftWeights() {
//     console.log("Pump iron");
// }

// function swimFortyLaps() {
//     console.log("Swim 40 laps");
// }

// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
// }