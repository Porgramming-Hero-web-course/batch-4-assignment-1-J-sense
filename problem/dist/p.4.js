"use strict";
{
    function rectangle(shape) {
        return shape.shape === "rectangle";
    }
    function circle(shape) {
        return shape.shape === "circle";
    }
    function calculate(shape) {
        if (circle(shape)) {
            return Math.PI * shape.radius ** 2;
        }
        else if (rectangle(shape)) {
            return shape.width * shape.height;
        }
        else {
            return "something went wrong";
        }
    }
    const resultOfcircle = calculate({ shape: 'circle', radius: 5 });
    const resultOfractangle = calculate({ shape: 'rectangle', width: 4, height: 6 });
}
