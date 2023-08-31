package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.Circle;
import edu.cmu.cs.cs214.lab02.shapes.Rectangle;
import edu.cmu.cs.cs214.lab02.shapes.Square;

public class Main {
    public static void main(String[] args) {
        Renderer renderer = new Renderer(new Rectangle(3, 4));
        renderer.draw();
        renderer.setShape(new Circle(2.5));
        renderer.draw();
        renderer.setShape(new Square(4));
        renderer.draw();
    }
}
