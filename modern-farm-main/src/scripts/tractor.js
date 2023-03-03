// Need to import all plants from their respective js files. 

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

// Need to import our addPlant and usePlants functions from our field(.js). 

import { addPlant } from './field.js'
import { usePlants } from './field.js'

/* We need to create a function that will "plant" seeds based on the output that our 'yearlyPlan' 
feeds it. *We declared 'yearlyPlan' on main as equal to 'createPlan' function.*/

export const plantSeeds = (plan) => {
    for (let row of plan) { 
        /* Need two 'for' loops to iterate arrays since there is a 'parent' array
     and a set of 'child' arrays within the 'createPlan' function. */
        for (let seed of row) {
            if (seed === "Asparagus") {
                addPlant(createAsparagus())
            }
            if (seed === "Corn") {
                addPlant(createCorn())
            }
            if (seed === "Potato") {
                addPlant(createPotato())
            }
            if (seed === "Soybean") {
                addPlant(createSoybean())
            }
            if (seed === "Sunflower") {
                addPlant(createSunflower())
            }
            if (seed === "Wheat") {
                addPlant(createWheat())
            }
        }
    }
    return usePlants()
}

// We export plantSeeds for use in our main.js. 

