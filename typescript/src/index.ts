import { newRenderer } from "./renderer.js"
import { newRectangle } from "./shapes/rectangle.js";
import { newCircle } from "./shapes/circle.js";
import { newSquare } from "./shapes/square.js";


const renderer = newRenderer(newRectangle(3,4));
renderer.draw();
renderer.setShape(newCircle(2.5));
renderer.draw();
renderer.setShape(newSquare(4));
renderer.draw();