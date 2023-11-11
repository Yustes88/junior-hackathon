export const shuffle = (images) => {
    const newArr = new Array(...images)
    return newArr.sort(() => Math.random() - .5)
}

export const moveItem = (images, index, dimension) => {
    let emptyIndex = images.findIndex((image) => image === null);
    let swap = false
    if (index + 1 === emptyIndex && (index === 0 || (index + 1) % dimension !== 0)) {
        swap = true
    } else if (index - 1 === emptyIndex && (emptyIndex === 0 || (emptyIndex + 1) % dimension !== 0)) {
        swap = true
    } else if (index - dimension === emptyIndex) {
        swap = true
    } else if (index + dimension === emptyIndex) {
        swap = true
    }

    if (swap) {
        images[emptyIndex] = images[index]
        images[index] = null
    }
    return images
}
export const moveItemByKeyboard = (images, key, dimension) => {
    let emptyIndex = images.findIndex((image) => image === null);
    let index = null
    if (key === 'ArrowRight') {
        index = emptyIndex - 1
    } else if (key === 'ArrowLeft') {
        index = emptyIndex + 1
    } else if (key === 'ArrowUp') {
        index = emptyIndex + dimension
    } else if (key === 'ArrowDown') {
        index = emptyIndex - dimension
    }

    if (index !== null && index > 0 && index < dimension * dimension) {
        return moveItem(images, index, dimension)
    }
    return images
}


export const arrayWithValues = (images) => new Array(...images).map((image, i) => {
    return {...image, 'value': i}
})
