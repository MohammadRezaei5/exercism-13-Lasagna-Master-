// look back again 😢👏🤷‍♀️

function cookingStatus(time) {
  if (time === 0) {
    return "Lasagna is done.";
  } else if (time > 0) {
    return "Not done, please wait.";
  } else {
    return "You forgot to set the timer.";
  }
}

// console.log(cookingStatus(12));
// console.log(cookingStatus());

///---///

// const layers = ["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"];

function preparationTime(layers, averagePreparationTime = 2) {
  return layers.length * averagePreparationTime;
}

// console.log(preparationTime(layers, 3));
// console.log(preparationTime(layers));

///---///

function quantities(layers) {
  let noodles = layers.filter((layer) => layer === "noodles").length * 50;
  let sauce = layers.filter((layer) => layer === "sauce").length * 0.2;

  return { noodles, sauce };
}

// console.log(
//   quantities(["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"])
// );

///---///

// const friendsList = ["noodles", "sauce", "mozzarella", "kampot pepper"];
// const myList = ["noodles", "meat", "sauce", "mozzarella"];

function addSecretIngredient(friendsList, myList) {
  const secretIngredient = friendsList[friendsList.length - 1];
  myList.push(secretIngredient);
}

// console.log(addSecretIngredient(friendsList, myList));
// console.log(myList);
