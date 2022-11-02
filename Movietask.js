// Movie Task

class movies{
    constructor (Name,Studio,Rating){
        this.Name = Name
        this.Studio= Studio
        this.Rating =Rating
        
        
        if(this.Rating == null) {
            
            return this.Rating = "PG"
        }
    }
    

    movieDetails(){
        return (`Movie Name :${this.Name} Studio :${this.Studio} Rating : ${this.Rating}`)
    }
   
}

let movie = new movies ("vikram","raj kamal","PG 9.2")
let movie2 = new movies ("puli","dont know")
let movie3 = new movies ("vinnar","VVS","PG 1.2")
let movie4 = new movies ("Vivegam","Vetri","PG")
let movietask = new movies ("Casino Royale","Eon Production","PG 13")


console.log(movie.movieDetails())
console.log(movie2.movieDetails())
console.log(movie3.movieDetails())
console.log(movie4.movieDetails())
console.log(movietask.movieDetails())

