// We need a function that take an argument of 'totalPlants' and returns an array.
export const harvestPlants = (allCrops) => {  
    const harvest = []
    for (const crop of allCrops) { 
        if (crop.type === "Corn") { // We need to iterate through the plants, which we are storing in 
            // the variable 'crop', we only harvest half of the ones classified as 'corn'.
            for (let i = 0; i < crop.output / 2; i++) {  
                harvest.push(crop)
            }
        }
        else {
            for (let i = 0; i < crop.output; i++) {
                harvest.push(crop)
            }
        }
        
    }
    return harvest // The function needs to return an array of all the harvested plants.
}


