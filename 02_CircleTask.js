class Circle{

  constructor(radius, color){
    if(radius == null)
      this.radius = 1.0;
    else
      this.radius = radius;

    if(color == null)
      this.color = 'red';
    else
      this.color = color;
  }

  getRadius(){
    return this.radius;
  }
  setRadius(rad){
    this.radius = rad;
  }
  getColor(){
    return this.color;
  }
  setColor(col){
    this.color = col;
  }
  toString(){
    return `Circle[ radius=${this.radius}, color=${this.color}]`;
  }
  getArea(){
    return (Math.PI*Math.pow(this.radius,2)).toFixed(4);
  }
  getCircumference(){
    return (2*Math.PI*this.radius).toFixed(4);
  }
}


// let c1 = new Circle();
// let c2 = new Circle(2.2);
// let c3 = new Circle(3.77,"blue");

// c1.setRadius(5.2)
// console.log(c1.getRadius())
// c2.setColor('yellow')
// console.log(c2.getColor())
// console.log(c2.getArea())
// console.log(c2.getCircumference())
// console.log(c2.toString())