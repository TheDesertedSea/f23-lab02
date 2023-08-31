
function newRenderer(shape: Shape) {
    return {
        draw() {
            const area: number = shape.computeArea()
            console.log("Shape drawn\n" + "Its area is " + area)
        },
        setShape(newShape: Shape)
        {
            shape = newShape;
        }
    }
}

export { newRenderer }