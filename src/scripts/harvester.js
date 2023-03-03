// We need a function that take an argument of 'allCrops' and returns an array.
export const harvestPlants = (allCrops) => {  
    const harvest = []
    for (const crop of allCrops) { 
        if (crop.type === "Corn") { // We need to iterate through the plants, which we are storing in 
        // the variable 'crop', we only harvest half of the ones classified as 'corn' with 'for/if' loop.
            for (let obj = 0; obj < crop.output / 2; obj++) {  
                harvest.push(crop)
            }
        }
        else {
            for (let obj = 0; obj < crop.output; obj++) {  // The increment ( ++ ) operator increments 
                harvest.push(crop)    // (adds one to) its operand and returns the value before or after 
            }                           // the increment, depending on where the operator is placed.
        }
    }
    return harvest // The function should return an array of all the harvested plants.
}


