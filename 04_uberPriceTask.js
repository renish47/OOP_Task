//Minimum price of Rs.50
// Rs.10 per Km beyond 4km


class Uber{
  constructor(distance){
    this.distance = distance;
    this.minPrice = 50;
    this.pricePerKM = 10;
  }
  getPrice(){
    if(this.distance <= 4)
      return this.minPrice;
    else
      return this.minPrice+((this.distance - 4)*this.pricePerKM);
  }

  discountPrice(offerInPercent){
    return this.getPrice()-(this.getPrice()*offerInPercent/100);
  }

  setPrice(minPrice,pricePerKM){
    this.minPrice = minPrice;
    this.pricePerKM = pricePerKM;
  }
}

// var uber1 = new Uber(10);
// var uber2 = new Uber(3);
// uber1.setPrice(60,12);
// console.log(uber1.getPrice())
// console.log(uber2.getPrice())
// console.log(uber1.discountPrice(25))