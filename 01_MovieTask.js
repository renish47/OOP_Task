class Movie{
  constructor(title, studio, rating){
    this.title = title;
    this.studio = studio;
    
    if(rating==null)
      this.rating = 'PG';
    else
      this.rating = rating;
  }

  getPG(array){
    return array.filter(element => element.rating =='PG');
  }
}


let movie1 = new Movie("Casino Royale", "Eon Production", "PG13");
let movie2 = new Movie("Dead Pool", "Sony Entertainment");
let movie3 = new Movie("Spider Man", "Marvel Studios", "PG15");
let movie4 = new Movie("Bullet Train", "Colombia Production");
let movie5 = new Movie("Last of US", "Warner Bros Production", "PG13");


let arrOfMovies = [movie1,movie2,movie3,movie4,movie5];

console.log(movie1.getPG(arrOfMovies));