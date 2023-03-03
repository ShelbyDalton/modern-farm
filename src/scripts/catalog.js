
export const catalog = (harvest) => {
    let htmlString = ''
    for (let oneCrop of harvest) {
        htmlString += `<article class="container">`
        htmlString += `<section class="messages">${oneCrop.type}</div></section>`
        htmlString += `</article>`
    }
    return htmlString
}
