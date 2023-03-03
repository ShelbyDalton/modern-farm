console.log("Welcome to the main module")

import { createPlan } from './plan.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'

// We need to invoke the 'createPlan' function by setting it equal to a variable and console logging it. 
const yearlyPlan = createPlan()
console.log(yearlyPlan)

// Next we need to invoke our 'plantSeeds' function to 'plant' our randomly selected seeds from 'createPlan'.
let plantedField = plantSeeds(yearlyPlan)
console.log(plantedField)

// Last, we need to invoke our 'harvestPlants' function to provide us with our 'harvest'. 
let harvest = harvestPlants(plantedField)
console.log(harvest)

// This is not something we have really covered, took hint from Martin's aquarium. 
const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = catalog(harvest)