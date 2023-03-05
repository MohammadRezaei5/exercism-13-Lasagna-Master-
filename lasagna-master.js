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
