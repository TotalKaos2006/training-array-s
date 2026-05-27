// Opdracht 1
const bus = ["Anna", "Boris", "Carla", "David", "Eva", "Frank", "Gina", "Henk", "Iris", "Jan"];

for (let i = 0; i < bus.length; i++) {
  console.log(bus[i]);
}

// Opdracht 2
bus.push("Kevin");

for (let i = 0; i < bus.length; i++) {
  console.log(bus[i]);
}

// Opdracht 3
bus.splice(4, 1);

for (let i = 0; i < bus.length; i++) {
  console.log(bus[i]);
}

// Opdracht 4
for (let i = bus.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let temp = bus[i];
  bus[i] = bus[j];
  bus[j] = temp;
}

for (let i = 0; i < bus.length; i++) {
  console.log(bus[i]);
}

// Opdracht 5
while (bus.length > 0) {
  bus.pop();
  console.log("Er zitten nog " + bus.length + " passagiers in de bus");
}