// Circle Task

class circle {
    constructor (radius,color){
        this.radius=radius
        this.color=color
    }
    getradius(){
       return (`radius of circle is: ${this.radius}`)
    }
   
    getcolor(){
        return (`color of circle :${this.color}`)
    }
    getarea(){
        const π =3.14
        return (`area of circle : ${π*(this.radius*this.radius)}`)
    }
    getcircumference (){
        const π =3.14
        return (`circumference of circle is : ${2*π*this.radius}`)
    }
}
let circle1 = new circle(1.0,"Red")
let circle3 = new circle(3.0,"Red")

console.log(circle1.getradius());
console.log(circle1.getcolor());
console.log(circle1.getarea());
console.log(circle1.getcircumference());
console.log(circle3.getradius());
console.log(circle3.getcolor());
console.log(circle3.getarea());
console.log(circle3.getcircumference());


// class circle {
//     constructor (radius,color){
//         this.radius=radius
//         this.color=color
//     }
//     getradius(){
//       console.log(`radius of circle is: ${this.radius}`)
//     }
//     setradius(){

//     }
//     getcolor(){
//         console.log(`color of circle :${this.color}`)
//     }
//     getarea(){
//         console.log(`area of circle : ${2*pi*(this.radius*this.radius)}`)
//     }
//     getcircumference (){
//         const pi =3.14
//         console.log(`circumference of circle is : ${2*pi*this.radius}`)
//     }
// }
// let circle1 = new circle(2.0,"black")

// circle.getarea();
