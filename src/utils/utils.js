const shuffle = (images) => 
        new Array(...images)
        .sort(() => Math.random() -.5)

export default shuffle