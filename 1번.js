let bread = [
    {
      "breadType": "cream",
      "recipe": {
        "flour": 100,
        "water": 100,
        "cream": 200
      }
    },
    {
      "breadType": "sugar",
      "recipe": {
        "flour": 100,
        "water": 50,
        "sugar": 200
      }
    },
    {
      "breadType": "butter",
      "recipe": {
        "flour": 100,
        "water": 100,
        "butter": 50
      }
    }
  ];

function printBread(arr) {
    for(let bread of arr) {
        for(let category in bread) {
            if(typeof(bread[category]) === 'object') {
                console.log(category);
                let recipe = bread[category];
                for(let maerial in recipe) {
                    console.log(maerial + ": " + recipe[maerial]);
                }
            } else {
                console.log(category + ": " + bread[category]);
            }
        }
        console.log("");
    }
}

printBread(bread);