// write a class to calculate the uber price.

class uber{
    constructor (distance, rate, waitingcharge, wificharge){
        this.distance = distance
        this.rate = rate
        this.waitingcharge = waitingcharge
        this.wificharge = wificharge
    }
    givecustomer (){
        return (` Distance is :${this.distance}KM.\n My charge of KM Rs:${this.rate}.
 Waithing Time : ${this.waitingcharge}Min. \n You Using Our Wifi is ${this.wificharge} Min.`)
    }
    gettotalprice(){
        let price = (this.distance*this.rate)+(5*this.waitingcharge)+(1*this.wificharge)
        return (price)
    }
}

let uber1 = new uber(300,30,10,15)
console.log(uber1.givecustomer())
console.log("Total Uber Prise is :Rs",uber1.gettotalprice())