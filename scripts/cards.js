

class TodayCard{
    
    section = document.createElement("section");
    divContainer = document.createElement("div");
    divRow = document.createElement("div");
    divCol = document.createElement("div");
    divCard = document.createElement("div");
    divCardBody = document.createElement("div");
    divDFlex1 = document.createElement("div");
    title = document.createElement("h6");
    hours = document.createElement("h6");
    divDFlex2 = document.createElement("div");
    temp = document.createElement("h6");
    desc = document.createElement("span");
    divDFlex3 = document.createElement("div");
    divFlex = document.createElement("div");
    divProb = document.createElement("div");
    iProb = document.createElement("i");
    valueProb = document.createElement("span");
    divHSun = document.createElement("div");
    iHSun = document.createElement("i");
    valueHSun = document.createElement("span");
    divTempMin = document.createElement("div");
    iTempMin = document.createElement("i");
    valueTempMin = document.createElement("span");
    divImg = document.createElement("div");
    img = document.createElement("img");

    constructor(data, type){
        this.name = data.city.name;
        this.update = data.update;
        if(type =="forecast"){
            this.tmax = data.forecast[0].tmax;
            this.tmin = data.forecast[0].tmin;
            this.hsun = data.forecast[0].sun_hours;
            this.rain = data.forecast[0].probarain;
        }
        /*else if(type == "nextHours"){
            this.tmin = data.forecast[0].tsoil2;
            this.tmax = tmin;
            data.forecast.forEach((elem) => {
                
            })
        }
        */
    }
    setupCard(){

    }
    display(){
        return(
            this.section
        )
    }
}