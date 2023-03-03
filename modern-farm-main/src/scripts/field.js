let growingCrops = [] // Need to declare a variable to hold the array that addPlant will create. 

export const addPlant = (seed) => {  // We need to declare a function addPlant which uses a parameter
    if (Array.isArray(seed)) {       // 'seed' and returns an array of plants.
        for (let oneSeed of seed) {
            growingCrops.push(oneSeed)
        }  //  If the seed is an array (corn), it loops through each corn in the seed and adds them 
           // to growingCrops.
         // If the seed is not in an array (not corn), it only adds one plant at a time to growingCrops.
    }
    else {
        growingCrops.push(seed)
    }
}
// Export usePlants for use in tractor.js but I am not quite sure why....
export const usePlants = () => {
    return growingCrops
}