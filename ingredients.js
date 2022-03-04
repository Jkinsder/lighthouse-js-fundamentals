const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let a = 0;
// Write a while loop that prints out the contents of ingredients:
while (a < ingredients.length) {
  console.log(ingredients[a]);
  a++;
}
// Write a for loop that prints out the contents of ingredients:
for (let a = 0; a < ingredients.length; a++) {
  console.log(ingredients[a]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let a = ingredients.length - 1; a >=0; a--) {
  console.log(ingredients[a]);
}