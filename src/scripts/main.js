console.log("Welcome to the main module")

import { createPlan } from './plan.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'

const yearlyPlan = createPlan()
console.log(yearlyPlan)



let plantedField = plantSeeds(yearlyPlan)
console.log(plantedField)



let harvest = harvestPlants(plantedField)
console.log(harvest)



// This is not something we have covered, took hint from Martin's aquarium. 
const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = catalog(harvest)