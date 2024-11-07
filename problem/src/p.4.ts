{
    type Circle = {
        shape: 'circle';
        radius: number;
      };
      
      type Rectangle = {
        shape: 'rectangle';
        width: number;
        height: number;
      };
      
      type Shape = Circle | Rectangle;
      function rectangle(shape: Shape):shape is Rectangle{
        return shape.shape ==="rectangle"
      }
      function circle(shape: Shape):shape is Circle{
        return shape.shape ==="circle"
      }

      function calculate(shape:Shape):number | string{
        if(circle(shape)){
            return Math.PI * shape.radius ** 2;
        }
        else if(rectangle(shape)){
            return shape.width * shape.height;
        }
      else{
        return "something went wrong"
      }
      }
      const resultOfcircle = calculate({ shape: 'circle', radius: 5 });
      const resultOfractangle = calculate({ shape: 'rectangle', width: 4, height: 6 })
    
}