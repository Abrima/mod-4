/*
     JavaScript Assignment B
     ASSIGNMENT NOTES:
     Do not change the code below. 
     Add your code in the 'Answers Section'.
*/

var house = {
    areas: {
        livingRoom: {
            items: ['tv','sofa']
        },
        bedroomOne: {
            items: ['bed','washing machine'],
            windows: 3
        },
        bedroomTwo:{
            items: ['bed','bed','desk'],
            windows: 4
        },
        kitchen:{
            items: ['fridge','broken chair','microwave']
        }
    },
    garden: [true, 'Red Rose'],
    garage: {
        car: {
            color: 'red',
            wheels: 4,
            honk2: function(){ alert("Beep") }
        }
    }
}



/******** Answers Section ********/

/**
 * PART I
 */

// (1) Add a dining table to the living room.
house.areas.livingRoom.items.push("dining table");

// (2) Add a stove to the kitchen.
house.areas.kitchen.items.push("stove");

// (3) Remove the washing machine from bedroomOne.
house.areas.bedroomOne.items.pop();

// (4) Change the color of the car to blue.
house.garage.car.color = "blue";

// (5) Add a another car to the garage with a honk function.
house['garage']['car2']= ["color","wheels","honk"];
house.garage.car2.color= "white";
house.garage.car2.wheels= 4;
house.garage.car2.honk2= function(){alert("Beep")};

// (6) Make the new car honk.
house.garage.car2.honk2();

// (7) If the house has a garden, console.log the name of the flower.
if (house.garden[0] === true){
    console.log(house["garden"][1]);
}

/**
 * PART II
 */ 

// (8) Change the 'broken chair' in the kitchen to 'new chair'. Hint: Use the .replace() function
house.areas.kitchen.items[1] = house.areas.kitchen.items[1].replace("broken chair", "new chair");
console.log(house.areas.kitchen.items);

// (9) Find total number of areas in the house. Hint: Use the Object.keys() function.
const numberOfAreas = Object.keys(house.areas).length;
console.log(numberOfAreas);

// (10) Find the total number of beds in all rooms. Hint: Use the Object.values() function.
var numberOfBeds = 0;

for (i=0; i<house.areas.bedroomOne.items.length; i++) {
    if (Object.values(house.areas.bedroomOne.items)[i]==="bed"){
        numberOfBeds++;
    }
}
for (i=0; i<house.areas.bedroomTwo.items.length; i++) {
    if (Object.values(house.areas.bedroomTwo.items)[i]==="bed"){
        numberOfBeds++;
    }
}
console.log(numberOfBeds);


