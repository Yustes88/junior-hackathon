export const shuffle = (images) => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const newArr = new Array(...images)
    newArr.splice(randomIndex, 1);
    return newArr.sort(() => Math.random() -.5)
}

export const arrayWithValues = (images) => new Array(...images).map((image, i) => { return {...image, 'value': i}})
