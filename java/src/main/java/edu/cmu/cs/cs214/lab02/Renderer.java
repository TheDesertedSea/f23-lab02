package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.*;

public class Renderer implements IRenderer {
    private Shape shape;
    
    Renderer(Shape shape) {
        this.shape = shape;
    }

    public void draw() {
        double area = shape.getArea();

        // assume implementation

        System.out.println("Shape printed\n" + "Its area is " + area);
    }

    public void setShape(Shape shape) {
        this.shape = shape;
    }
}
