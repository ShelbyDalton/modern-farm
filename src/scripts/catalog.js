// Parameter needs to be variable from 'main' that holds harvest plants function. 
export const catalog = (harvest) => {
    let htmlString = ''
    for (let oneCrop of harvest) {
        htmlString += `<article class="container">`
        htmlString += `<section class="messages">${oneCrop.type}</div></section>`
        htmlString += `</article>`
    }
    return htmlString
}
