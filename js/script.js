let name = prompt("Name your pet.");
let energy=0;
let happiness=0;
let action="";
let count=0;

do {
    let action=prompt("feed, pet, or walk?");

    if (action === "feed") {
        energy = energy + 2;
      }

    if (action === "pet") {
        happiness = happiness + 1;
    }

    if (action === "walk" && energy=== 0) {
        alert("Not enough energy to enjoy a walk.");
    }

    if (action === "walk" && energy> 0) {
        happiness = happiness + 2;
        energy = energy - 1;
    }

    count++;

} while (count<6);

console.log(name + " has " + happiness + " happiness and " + energy + " energy.");