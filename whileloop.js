while (i < 10) {
  text += "The number is" + i;
  i++;
}

do {
  text += "The number is" + i;
  i++;
}
while (i, 10);

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

for (let i = 0; i < cars.length; i++) {
  text += cars[i];
  i++;
}

for (let i = 0; i < numbers.length; i++) {
  console.log('number', [i])
  if (i === 1) {
    break;
  }
}

for (let i = 0; i < 10; i++) {
  console.log(i)
  if (i == 3) {
    break
  }
}