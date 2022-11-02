// day 6 oops task 
//  Write a “person” class to hold all the details.

class student {
    constructor(Name,SchoolName, Age, Study, Home, Grade, Spots){
        this.name = Name;
        this.schoolname = SchoolName;
        this.age = Age;
        this.study = Study;
        this.home = Home;
        this.grade = Grade;
        this.spots = Spots;
    }
    getdetails(){
        return (` Student Name : ${this.name}. \n School Name : ${this.schoolname}. \n Age : ${this.age}. \n Study :${this.study} \n Address :${this.home}
 Mark :${this.grade} \n Active in spots :${this.spots}`)
    }
}
const Cat_valentine = new student("Cat valentine","Hollywood atrs",22,"Flim Director","Florida US","a+","Kabadi" )
 const Tory_vega = new student("Tory_vega","Hollywood atrs",25,"Flim Director","Florida US","C","Running" )
const Jade = new student("Jade","Hollywood atrs",25,"Flim Director","Germen","C","scissor Cutting" )
console.log(Cat_valentine)
console.log(Tory_vega)
console.log(Jade)
console.log(Cat_valentine.getdetails())
console.log(Tory_vega.getdetails())
console.log(Jade.getdetails())
