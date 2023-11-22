const fs = require("fs");

const getList = (file) => {
  return new Promise((resolve) => {
    fs.readFile(file, 'utf8', function(err, data){ 
      data = data.split('\n')
      resolve(data.filter(i => i)); 
    })
  })
}


function eat(animal, food, index){
  console.log(`${animal} eaten ${food[index]}`)
  food.splice(index, 1);
}

const getFoodPlace = (animal, food) => {
  switch(animal){
    case 'tiger':
      return food.indexOf('deer')
    case 'dog':
      return food.indexOf('dogfood')
    case 'rabbit':
      return food.indexOf('carrot')
    case 'donkey':
      return food.indexOf('hay')
    case 'cat':
      return food.indexOf('fish')
  }
}


function calculateFeedingResult(animals, food) {
  for (let i = 0; i < animals.length; i++) {
    const foddPlace = getFoodPlace(animals[i], food)
    eat(animals[i], food, foddPlace)
  }

 return food.join("-")
}


const start = async() => {

  let animals = await getList("./animals.txt");
  let food = await getList("./food.txt");
 
  const left = calculateFeedingResult(animals, food)
  console.log("------------------------------------------")
  console.log("Food left : ", left)
  console.log("------------------------------------------")
}

start()