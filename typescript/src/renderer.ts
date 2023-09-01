interface Renderer {
    draw: () => void,
    setShape: (newShape: Shape) => void,
}


function newRenderer(shape: Shape): Renderer {
    return {
        draw() {
            const area: number = shape.computeArea()
            console.log("Shape drawn\n" + "Its area is " + area)
        },
        setShape(newShape: Shape) {
            shape = newShape;
        }
    }
}

export { newRenderer }