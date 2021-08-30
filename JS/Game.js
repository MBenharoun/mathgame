let DeckArray = []
var Cards = 44
var RangeDeck = 4;
var x = 1;
let scorep1 = 1;
let scorep2 = 1;
let Turn = 1;
let val;
function randomUniqueNum(range, outputCount) {

    let arr = []
    for (let i = 1; i <= range; i++) {
        arr.push(i)
    }

    let result = [];

    for (let i = 1; i <= outputCount; i++) {
        const random = Math.floor(Math.random() * (range / i));
        result.push(arr[random]);
        arr[random] = arr[range - i];
    }

    return result;
}
DeckArray = randomUniqueNum(Cards,44)

function randomBoard(){
    function randomUniqueNum(range, outputCount) {

        let arr = []
        for (let i = 1; i <= range; i++) {
            arr.push(i)
        }

        let result = [];

        for (let i = 1; i <= outputCount; i++) {
            const random = Math.floor(Math.random() * (range - i));
            result.push(arr[random]);
            arr[random] = arr[range - i];
        }

        return result;
    }
    let RangeColors = 4 ;
    let x = 1;
    let i = 0;
    let Colors =[];
    Colors = randomUniqueNum(RangeColors,4)
    console.log(Colors)
     while (RangeColors !== 0){


           let card = document.getElementById("Color" + x);
        card.setAttribute("src", "/asset/boardcard/color/"+Colors[i]+".png");

        x++;
        i++;
        }
    document.getElementById('random').onclick = function () {
        this.disabled = true;
    }

}
function drawCard1(){
    var i = 1;

    console.log(DeckArray);

    while (RangeDeck !== 0){
        let card = document.getElementById("Deck"+x)
        card.setAttribute("src", "/asset/playcard/"+DeckArray[i]+".png");

        RangeDeck--;
        i++;
        x++;
    }

}
function drawCard2() {
    var i = 6;

    console.log(DeckArray);

    while (RangeDeck !== -4){
        let card = document.getElementById("Deck"+x)
        card.setAttribute("src", "/asset/playcard/"+DeckArray[i]+".png");

        RangeDeck--;
        i++;
        x++;
    }
}

function playp1(id) {

    if (Turn % 2 == 0)
    {
        val = id
        CardName = document.getElementById(id).src;
        Name = CardName.replace(/^.*[\\\/]/, '');
        CardsNumber = Name.replace(".png", "");
        console.log(Name);
        console.log(CardsNumber);
        color1 = document.getElementById("Color1").src;
        Type1 = color1.replace(/^.*[\\\/]/, '');
        color2 = document.getElementById("Color2").src;
        Type2 = color2.replace(/^.*[\\\/]/, '');
        color3 = document.getElementById("Color3").src;
        Type3 = color3.replace(/^.*[\\\/]/, '');
        color4 = document.getElementById("Color4").src;
        Type4 = color4.replace(/^.*[\\\/]/, '');
        //Card Board Color detector
        if (CardsNumber >= 1 || CardsNumber <= 11) { //blue
            if (Type1 === "3.png") { // multi
                switch (Name) {
                    case "1.png":
                        scorep2 = scorep2;
                        break;
                    case "2.png":
                        scorep2 = scorep2 *= 2;
                        break;
                    case "3.png":
                        scorep2 = scorep2 *= 3;
                        break;
                    case "4.png":
                        scorep2 = scorep2 *= 100;
                        break;
                    case "5.png":
                        scorep2 = scorep2 *= 5;
                        break;
                    case "6.png":
                        scorep2 = scorep2 *= 40;
                        break;
                    case "7.png":
                        scorep2 = scorep2 *= 20;
                        break;
                    case "8.png":
                        scorep2 = scorep2 *= 8;
                        break;
                    case "9.png":
                        scorep2 = scorep2 *= 13;
                        break;
                    case "10.png":
                        scorep2 = scorep2 *= 10;
                        break;
                    case "11.png":
                        scorep2 = 0;
                        break;
                }
            }
            if (Type2 === "3.png") { //min
                switch (Name) {
                    case "1.png":
                        scorep2 = scorep2 -= 1;
                        break;
                    case "2.png":
                        scorep2 = scorep2 -= 2;
                        break;
                    case "3.png":
                        scorep2 = scorep2 -= 3;
                        break;
                    case "4.png":
                        scorep2 = scorep2 -= 100;
                        break;
                    case "5.png":
                        scorep2 = scorep2 -= 5;
                        break;
                    case "6.png":
                        scorep2 = scorep2 -= 40;
                        break;
                    case "7.png":
                        scorep2 = scorep2 -= 20;
                        break;
                    case "8.png":
                        scorep2 = scorep2 -= 8;
                        break;
                    case "9.png":
                        scorep2 = scorep2 -= 13;
                        break;
                    case "10.png":
                        scorep2 = scorep2 -= 10;
                        break;
                    case "11.png":
                        scorep2 = scorep2;
                        break;
                }

            }
            if (Type3 === "3.png") { //add
                switch (Name) {
                    case "1.png":
                        scorep2 = scorep2 += 1;
                        break;
                    case "2.png":
                        scorep2 = scorep2 += 2;
                        break;
                    case "3.png":
                        scorep2 = scorep2 += 3;
                        break;
                    case "4.png":
                        scorep2 = scorep2 += 100;
                        break;
                    case "5.png":
                        scorep2 = scorep2 += 5;
                        break;
                    case "6.png":
                        scorep2 = scorep2 += 40;
                        break;
                    case "7.png":
                        scorep2 = scorep2 += 20;
                        break;
                    case "8.png":
                        scorep2 = scorep2 += 8;
                        break;
                    case "9.png":
                        scorep2 = scorep2 += 13;
                        break;
                    case "10.png":
                        scorep2 = scorep2 += 10;
                        break;
                    case "11.png":
                        scorep2 = scorep2
                        break;
                }


            }
            if (Type4 === "3.png") { //div
                switch (Name) {
                    case "1.png":
                        scorep2 = scorep2 /= 1;
                        break;
                    case "2.png":
                        scorep2 = scorep2 /= 2;
                        break;
                    case "3.png":
                        scorep2 = scorep2 /= 3;
                        break;
                    case "4.png":
                        scorep2 = scorep2 /= 100;
                        break;
                    case "5.png":
                        scorep2 = scorep2 /= 5;
                        break;
                    case "6.png":
                        scorep2 = scorep2 /= 40;
                        break;
                    case "7.png":
                        scorep2 = scorep2 /= 20;
                        break;
                    case "8.png":
                        scorep2 = scorep2 /= 8;
                        break;
                    case "9.png":
                        scorep2 = scorep2 /= 13;
                        break;
                    case "10.png":
                        scorep2 = scorep2 /= 10;
                        break;
                    case "11.png":
                        scorep2
                        break;
                }
                document.getElementsByClassName("Score1").innerText = "Score P1 : " + scorep2;


            }
        }
        if (CardsNumber >= 12 || CardsNumber <= 22) { //green
            if (Type1 === "2.png") {
                switch (Name) {

                    case "12.png":
                        scorep2 = scorep2;
                        break;
                    case "13.png":
                        scorep2 = scorep2 *= 2;
                        break;
                    case "14.png":
                        scorep2 = scorep2 *= 3;
                        break;
                    case "15.png":
                        scorep2 = scorep2 *= 100;
                        break;
                    case "16.png":
                        scorep2 = scorep2 *= 5;
                        break;
                    case "17.png":
                        scorep2 = scorep2 *= 40;
                        break;
                    case "18.png":
                        scorep2 = scorep2 *= 20;
                        break;
                    case "19.png":
                        scorep2 = scorep2 *= 8;
                        break;
                    case "20.png":
                        scorep2 = scorep2 *= 13;
                        break;
                    case "21.png":
                        scorep2 = scorep2 *= 10;
                        break;
                    case "22.png":
                        scorep2 = 0;
                        break;
                }


            }
            if (Type2 === "2.png") {
                switch (Name) {

                    case "12.png":
                        scorep2 = scorep2 -= 1;
                        break;
                    case "13.png":
                        scorep2 = scorep2 -= 2;
                        break;
                    case "14.png":
                        scorep2 = scorep2 -= 3;
                        break;
                    case "15.png":
                        scorep2 = scorep2 -= 100;
                        break;

                    case "16.png":
                        scorep2 = scorep2 -= 5;
                        break;

                    case "17.png":
                        scorep2 = scorep2 -= 40;
                        break;

                    case "18.png":
                        scorep2 = scorep2 -= 20;
                        break;

                    case "19.png":
                        scorep2 = scorep2 -= 8;
                        break;
                    case "20.png":
                        scorep2 = scorep2 -= 13;
                        break;
                    case "21.png":
                        scorep2 = scorep2 -= 10;
                        break;
                    case "22.png":
                        scorep2;
                        break;

                }


            }
            if (Type3 === '2.png') {
                switch (Name) {

                    case "12.png":
                        scorep2 = scorep2 += 1;
                        break;

                    case "13.png":
                        scorep2 = scorep2 += 2;
                        break;

                    case "14.png":
                        scorep2 = scorep2 += 3;
                        break;
                    case "15.png":
                        scorep2 = scorep2 += 100;
                        break;
                    case "16.png":
                        scorep2 = scorep2 += 5;
                        break;
                    case "17.png":
                        scorep2 = scorep2 += 40;
                        break;
                    case "18.png":
                        scorep2 = scorep2 += 20;
                        break;
                    case "19.png":
                        scorep2 = scorep2 += 8;
                        break;
                    case "20.png":
                        scorep2 = scorep2 += 13;
                        break;
                    case "21.png":
                        scorep2 = scorep2 += 10;
                        break;
                    case "22.png":
                        scorep2;
                        break;
                }


            }
            if (Type4 === '2.png') {
                switch (Name) {
                    case "12.png":
                        scorep2 = scorep2 /= 1;
                        break;
                    case "13.png":
                        scorep2 = scorep2 /= 2;
                        break;
                    case "14.png":
                        scorep2 = scorep2 /= 3;
                        break;
                    case "15.png":
                        scorep2 = scorep2 /= 100;
                        break;
                    case "16.png":
                        scorep2 = scorep2 /= 5;
                        break;
                    case "17.png":
                        scorep2 = scorep2 /= 40;
                        break;
                    case "18.png":
                        scorep2 = scorep2 /= 20;
                        break;
                    case "19.png":
                        scorep2 = scorep2 /= 8;
                        break;
                    case "20.png":
                        scorep2 = scorep2 /= 13;
                        break;
                    case "21.png":
                        scorep2 = scorep2 /= 10;
                        break;
                    case "22.png":
                        scorep2;
                        break;
                }


            }
        }
        if (CardsNumber >= 23 || CardsNumber <= 33) { //red
            if (Type1 === "1.png") {
                switch (Name) {
                    case "23.png":
                        scorep2 = scorep2;
                        break;
                    case "24.png":
                        scorep2 = scorep2 *= 2;
                        break;
                    case "25.png":
                        scorep2 = scorep2 *= 3;
                        break;
                    case "26.png":
                        scorep2 = scorep2 *= 100;
                        break;
                    case "27.png":
                        scorep2 = scorep2 *= 5;
                        break;
                    case "28.png":
                        scorep2 = scorep2 *= 40;
                        break;
                    case "29.png":
                        scorep2 = scorep2 *= 20;
                        break;
                    case "30.png":
                        scorep2 = scorep2 *= 8;
                        break;
                    case "31.png":
                        scorep2 = scorep2 *= 13;
                        break;
                    case "32.png":
                        scorep2 = scorep2 *= 10;
                        break;
                    case "33.png":
                        scorep2 = 0;
                        break;
                }


            }
            if (Type2 === "1.png") {
                switch (Name) {
                    case "23.png":
                        scorep2 = scorep2 -= 1;
                        break;
                    case "24.png":
                        scorep2 = scorep2 -= 2;
                        break;
                    case "25.png":
                        scorep2 = scorep2 -= 3;
                        break;
                    case "26.png":
                        scorep2 = scorep2 -= 100;
                        break;
                    case "27.png":
                        scorep2 = scorep2 -= 5;
                        break;
                    case "28.png":
                        scorep2 = scorep2 -= 40;
                        break;
                    case "29.png":
                        scorep2 = scorep2 -= 20;
                        break;
                    case "30.png":
                        scorep2 = scorep2 -= 8;
                        break;
                    case "31.png":
                        scorep2 = scorep2 -= 13;
                        break;
                    case "32.png":
                        scorep2 = scorep2 -= 10;
                        break;
                    case "33.png":
                        scorep2;
                        break;
                }


            }
            if (Type3 === "1.png") {
                switch (Name) {
                    case "23.png":
                        scorep2 = scorep2 += 1;
                        break;
                    case "24.png":
                        scorep2 = scorep2 += 2;
                        break;
                    case "25.png":
                        scorep2 = scorep2 += 3;
                        break;
                    case "26.png":
                        scorep2 = scorep2 += 100;
                        break;
                    case "27.png":
                        scorep2 = scorep2 += 5;
                        break;
                    case "28.png":
                        scorep2 = scorep2 += 40;
                        break;
                    case "29.png":
                        scorep2 = scorep2 += 20;
                        break;
                    case "30.png":
                        scorep2 = scorep2 += 8;
                        break;
                    case "31.png":
                        scorep2 = scorep2 += 13;
                        break;
                    case "32.png":
                        scorep2 = scorep2 += 10;
                        break;
                    case "33.png":
                        scorep2;
                        break;
                }


            }
            if (Type4 === "1.png") {
                switch (Name) {
                    case "23.png":
                        scorep2 = scorep2 /= 1;
                        break;
                    case "24.png":
                        scorep2 = scorep2 /= 2;
                        break;
                    case "25.png":
                        scorep2 = scorep2 /= 3;
                        break;
                    case "26.png":
                        scorep2 = scorep2 /= 100;
                        break;
                    case "27.png":
                        scorep2 = scorep2 /= 5;
                        break;
                    case "28.png":
                        scorep2 = scorep2 /= 40;
                        break;
                    case "29.png":
                        scorep2 = scorep2 /= 20;
                        break;
                    case "30.png":
                        scorep2 = scorep2 /= 8;
                        break;
                    case "31.png":
                        scorep2 = scorep2 /= 13;
                        break;
                    case "32.png":
                        scorep2 = scorep2 /= 10;
                        break;
                    case "33.png":
                        scorep2;
                        break;
                }


            }
        }
        if (CardsNumber >= 34 || CardsNumber <= 44) { //yellow
            if (Type1 === "4.png") {
                switch (Name) {
                    case "34.png":
                        scorep2 = scorep2;
                        break;
                    case "35.png":
                        scorep2 = scorep2 *= 2;
                        break;
                    case "36.png":
                        scorep2 = scorep2 *= 3;
                        break;
                    case "37.png":
                        scorep2 = scorep2 *= 100;
                        break;
                    case "38.png":
                        scorep2 = scorep2 *= 5;
                        break;
                    case "39.png":
                        scorep2 = scorep2 *= 40;
                        break;
                    case "40.png":
                        scorep2 = scorep2 *= 20;
                        break;
                    case "41.png":
                        scorep2 = scorep2 *= 8;
                        break;
                    case "42.png":
                        scorep2 = scorep2 *= 13;
                        break;
                    case "43.png":
                        scorep2 = scorep2 *= 10;
                        break;
                    case "44.png":
                        scorep2 = 0;
                        break;
                }


            }
            if (Type2 === "4.png") {
                switch (Name) {
                    case "34.png":
                        scorep2 = scorep2 -= 1;
                        break;
                    case "35.png":
                        scorep2 = scorep2 -= 2;
                        break;
                    case "36.png":
                        scorep2 = scorep2 -= 3;
                        break;
                    case "37.png":
                        scorep2 = scorep2 -= 100;
                        break;
                    case "38.png":
                        scorep2 = scorep2 -= 5;
                        break;
                    case "39.png":
                        scorep2 = scorep2 -= 40;
                        break;
                    case "40.png":
                        scorep2 = scorep2 -= 20;
                        break;
                    case "41.png":
                        scorep2 = scorep2 -= 8;
                        break;
                    case "42.png":
                        scorep2 = scorep2 -= 13;
                        break;
                    case "43.png":
                        scorep2 = scorep2 -= 10;
                        break;
                    case "44.png":
                        scorep2;
                        break;
                }


            }
            if (Type3 === "4.png") {
                switch (Name) {
                    case "34.png":
                        scorep2 = scorep2 += 1;
                        break;
                    case "35.png":
                        scorep2 = scorep2 += 2;
                        break;
                    case "36.png":
                        scorep2 = scorep2 += 3;
                        break;
                    case "37.png":
                        scorep2 = scorep2 += 100;
                        break;
                    case "38.png":
                        scorep2 = scorep2 += 5;
                        break;
                    case "39.png":
                        scorep2 = scorep2 += 40;
                        break;
                    case "40.png":
                        scorep2 = scorep2 += 20;
                        break;
                    case "41.png":
                        scorep2 = scorep2 += 8;
                        break;
                    case "42.png":
                        scorep2 = scorep2 += 13;
                        break;
                    case "43.png":
                        scorep2 = scorep2 += 10;
                        break;
                    case "44.png":
                        scorep2;
                        break;
                }


            }
            if (Type4 === "4.png") {
                switch (Name) {
                    case "34.png":
                        scorep2 = scorep2 /= 1;
                        break;
                    case "35.png":
                        scorep2 = scorep2 /= 2;
                        break;
                    case "36.png":
                        scorep2 = scorep2 /= 3;
                        break;
                    case "37.png":
                        scorep2 = scorep2 /= 100;
                        break;
                    case "38.png":
                        scorep2 = scorep2 /= 5;
                        break;
                    case "39.png":
                        scorep2 = scorep2 /= 40;
                        break;
                    case "40.png":
                        scorep2 = scorep2 /= 20;
                        break;
                    case "41.png":
                        scorep2 = scorep2 /= 8;
                        break;
                    case "42.png":
                        scorep2 = scorep2 /= 13;
                        break;
                    case "43.png":
                        scorep2 = scorep2 /= 10;
                        break;
                    case "44.png":
                        scorep2;
                        break;
                }


            }

            console.log(scorep2);
            alert("Score Player 2 :" + scorep2);
            document.getElementById("Score1").innerHTML = "Score P1 : " + scorep2;
            val = document.getElementById(id)
            val.setAttribute("src","/asset/backcard.png");

            Turn++;

            if (Turn >= 8){
                if (scorep1 << scorep2){
                    alert("Player 2 Win")
                    document.location.reload();
                    Trun = 1
                }
                else {alert("Player 1 Win")
                    document.location.reload();
                    Trun = 1
                }

            }
        }
    }
}
function playp2(id) {
    if (Turn % 2 != 0){
        CardName = document.getElementById(id).src;
        Name = CardName.replace(/^.*[\\\/]/, '');
        CardsNumber = Name.replace(".png","");
        console.log(Name);
        console.log(CardsNumber);
        color1 = document.getElementById("Color1").src;
        Type1 = color1.replace(/^.*[\\\/]/, '');
        color2 = document.getElementById("Color2").src;
        Type2 = color2.replace(/^.*[\\\/]/, '');
        color3 = document.getElementById("Color3").src;
        Type3 = color3.replace(/^.*[\\\/]/, '');
        color4 = document.getElementById("Color4").src;
        Type4 = color4.replace(/^.*[\\\/]/, '');
        //Card Board Color detector
        if (CardsNumber >= 1  || CardsNumber <= 11) { //blue
            if (Type1 === "3.png") { // multi
                switch (Name) {
                    case "1.png":
                        scorep1 = scorep1;
                        break;
                    case "2.png":
                        scorep1 = scorep1*=2;
                        break;
                    case "3.png":
                        scorep1 = scorep1*=3;
                        break;
                    case "4.png":
                        scorep1 = scorep1*=100;
                        break;
                    case "5.png":
                        scorep1 = scorep1*=5;
                        break;
                    case "6.png":
                        scorep1 = scorep1*=40;
                        break;
                    case "7.png":
                        scorep1 = scorep1*=20;
                        break;
                    case "8.png":
                        scorep1 = scorep1*=8;
                        break;
                    case "9.png":
                        scorep1 = scorep1*=13;
                        break;
                    case "10.png":
                        scorep1 = scorep1*=10;
                        break;
                    case "11.png":
                        scorep1 = 0;
                        break;
                }
            }
            if (Type2 === "3.png") { //min
                switch (Name) {
                    case "1.png":
                        scorep1 = scorep1-=1;
                        break;
                    case "2.png":
                        scorep1 = scorep1-=2;
                        break;
                    case "3.png":
                        scorep1 = scorep1-=3;
                        break;
                    case "4.png":
                        scorep1 = scorep1-=100;
                        break;
                    case "5.png":
                        scorep1 = scorep1-=5;
                        break;
                    case "6.png":
                        scorep1 = scorep1-=40;
                        break;
                    case "7.png":
                        scorep1 = scorep1-=20;
                        break;
                    case "8.png":
                        scorep1 = scorep1-=8;
                        break;
                    case "9.png":
                        scorep1 = scorep1-=13;
                        break;
                    case "10.png":
                        scorep1 = scorep1-=10;
                        break;
                    case "11.png":
                        scorep1 = scorep1;
                        break;
                }

            }
            if (Type3 === "3.png") { //add
                switch (Name) {
                    case "1.png":
                        scorep1 = scorep1+=1;
                        break;
                    case "2.png":
                        scorep1 = scorep1+=2;
                        break;
                    case "3.png":
                        scorep1 = scorep1+=3;
                        break;
                    case "4.png":
                        scorep1 = scorep1+=100;
                        break;
                    case "5.png":
                        scorep1 = scorep1+=5;
                        break;
                    case "6.png":
                        scorep1 = scorep1+=40;
                        break;
                    case "7.png":
                        scorep1 = scorep1+=20;
                        break;
                    case "8.png":
                        scorep1 = scorep1+=8;
                        break;
                    case "9.png":
                        scorep1 = scorep1+=13;
                        break;
                    case "10.png":
                        scorep1 = scorep1+=10;
                        break;
                    case "11.png":
                        scorep1 = scorep1
                        break;
                }


            }
            if (Type4 === "3.png") { //div
                switch (Name) {
                    case "1.png":
                        scorep1 = scorep1/=1;
                        break;
                    case "2.png":
                        scorep1 = scorep1/=2;
                        break;
                    case "3.png":
                        scorep1 = scorep1/=3;
                        break;
                    case "4.png":
                        scorep1 = scorep1/=100;
                        break;
                    case "5.png":
                        scorep1 = scorep1/=5;
                        break;
                    case "6.png":
                        scorep1 = scorep1/=40;
                        break;
                    case "7.png":
                        scorep1 = scorep1/=20;
                        break;
                    case "8.png":
                        scorep1 = scorep1/=8;
                        break;
                    case "9.png":
                        scorep1 = scorep1/=13;
                        break;
                    case "10.png":
                        scorep1 = scorep1/=10;
                        break;
                    case "11.png":
                        scorep1
                        break;
                }
                document.getElementsByClassName("Score1").innerText = "Score P1 : "+scorep1;


            }
        }
        if (CardsNumber >= 12 || CardsNumber <= 22) { //green
            if (Type1 === "2.png") {
                switch (Name) {

                    case "12.png":
                        scorep1 = scorep1;
                        break;
                    case "13.png":
                        scorep1 = scorep1*=2;
                        break;
                    case "14.png":
                        scorep1 = scorep1*=3;
                        break;
                    case "15.png":
                        scorep1 = scorep1*=100;
                        break;
                    case "16.png":
                        scorep1 = scorep1*=5;
                        break;
                    case "17.png":
                        scorep1 = scorep1*=40;
                        break;
                    case "18.png":
                        scorep1 = scorep1*=20;
                        break;
                    case "19.png":
                        scorep1 = scorep1*=8;
                        break;
                    case "20.png":
                        scorep1 = scorep1*=13;
                        break;
                    case "21.png":
                        scorep1 = scorep1*=10;
                        break;
                    case "22.png":
                        scorep1 = 0;
                        break;
                }


            }
            if (Type2 === "2.png") {
                switch (Name) {

                    case "12.png":
                        scorep1 = scorep1-=1;
                        break;
                    case "13.png":
                        scorep1 = scorep1-=2;
                        break;
                    case "14.png":
                        scorep1 = scorep1-=3;
                        break;
                    case "15.png":
                        scorep1 = scorep1-=100;
                        break;

                    case "16.png":
                        scorep1 = scorep1-=5;
                        break;

                    case "17.png":
                        scorep1 = scorep1-=40;
                        break;

                    case "18.png":
                        scorep1 = scorep1-=20;
                        break;

                    case "19.png":
                        scorep1 = scorep1-=8;
                        break;
                    case "20.png":
                        scorep1 = scorep1-=13;
                        break;
                    case "21.png":
                        scorep1 = scorep1-=10;
                        break;
                    case "22.png":
                        scorep1;
                        break;

                }


            }
            if (Type3 === '2.png') {
                switch (Name) {

                    case "12.png":
                        scorep1 = scorep1+=1;
                            break;

                    case "13.png":
                        scorep1 = scorep1+=2;
                        break;

                    case "14.png":
                        scorep1 = scorep1+=3;
                        break;
                    case "15.png":
                        scorep1 = scorep1+=100;
                        break;
                    case "16.png":
                        scorep1 = scorep1+=5;
                        break;
                    case "17.png":
                        scorep1 = scorep1+=40;
                        break;
                    case "18.png":
                        scorep1 = scorep1+=20;
                        break;
                    case "19.png":
                        scorep1 = scorep1+=8;
                        break;
                    case "20.png":
                        scorep1 = scorep1+=13;
                        break;
                    case "21.png":
                        scorep1 = scorep1+=10;
                        break;
                    case "22.png":
                        scorep1;
                        break;
                }


            }
            if (Type4 ===  '2.png') {
                switch (Name) {
                    case "12.png":
                        scorep1 = scorep1/=1;
                        break;
                    case "13.png":
                        scorep1 = scorep1/=2;
                        break;
                    case "14.png":
                        scorep1 = scorep1/=3;
                        break;
                    case "15.png":
                        scorep1 = scorep1/=100;
                        break;
                    case "16.png":
                        scorep1 = scorep1/=5;
                        break;
                    case "17.png":
                        scorep1 = scorep1/=40;
                        break;
                    case "18.png":
                        scorep1 = scorep1/=20;
                        break;
                    case "19.png":
                        scorep1 = scorep1/=8;
                        break;
                    case "20.png":
                        scorep1 = scorep1/=13;
                        break;
                    case "21.png":
                        scorep1 = scorep1/=10;
                        break;
                    case "22.png":
                        scorep1;
                        break;
                }


            }
        }
        if (CardsNumber >= 23 || CardsNumber <= 33){ //red
            if (Type1 === "1.png") {
                switch (Name){
                    case "23.png":
                        scorep1 = scorep1;
                        break;
                    case "24.png":
                        scorep1 = scorep1*=2;
                        break;
                    case "25.png":
                        scorep1 = scorep1*=3;
                        break;
                    case "26.png":
                        scorep1 = scorep1*=100;
                        break;
                    case "27.png":
                        scorep1 = scorep1*=5;
                        break;
                    case "28.png":
                        scorep1 = scorep1*=40;
                        break;
                    case "29.png":
                        scorep1 = scorep1*=20;
                        break;
                    case "30.png":
                        scorep1 = scorep1*=8;
                        break;
                    case "31.png":
                        scorep1 = scorep1*=13;
                        break;
                    case "32.png":
                        scorep1 = scorep1*=10;
                        break;
                    case "33.png":
                        scorep1 = 0;
                        break;
                }


            }
            if (Type2 === "1.png") {
                switch (Name){
                    case "23.png":
                        scorep1 = scorep1-=1;
                        break;
                    case "24.png":
                        scorep1 = scorep1-=2;
                        break;
                    case "25.png":
                        scorep1 = scorep1-=3;
                        break;
                    case "26.png":
                        scorep1 = scorep1-=100;
                        break;
                    case "27.png":
                        scorep1 = scorep1-=5;
                        break;
                    case "28.png":
                        scorep1 = scorep1-=40;
                        break;
                    case "29.png":
                        scorep1 = scorep1-=20;
                        break;
                    case "30.png":
                        scorep1 = scorep1-=8;
                        break;
                    case "31.png":
                        scorep1 = scorep1-=13;
                        break;
                    case "32.png":
                        scorep1 = scorep1-=10;
                        break;
                    case "33.png":
                        scorep1;
                        break;
                }


            }
            if (Type3 === "1.png") {
                switch (Name){
                    case "23.png":
                        scorep1 = scorep1+=1;
                        break;
                    case "24.png":
                        scorep1 = scorep1+=2;
                        break;
                    case "25.png":
                        scorep1 = scorep1+=3;
                        break;
                    case "26.png":
                        scorep1 = scorep1+=100;
                        break;
                    case "27.png":
                        scorep1 = scorep1+=5;
                        break;
                    case "28.png":
                        scorep1 = scorep1+=40;
                        break;
                    case "29.png":
                        scorep1 = scorep1+=20;
                        break;
                    case "30.png":
                        scorep1 = scorep1+=8;
                        break;
                    case "31.png":
                        scorep1 = scorep1+=13;
                        break;
                    case "32.png":
                        scorep1 = scorep1+=10;
                        break;
                    case "33.png":
                        scorep1;
                        break;
                }


            }
            if (Type4 === "1.png") {
                switch (Name){
                    case "23.png":
                        scorep1 = scorep1/=1;
                        break;
                    case "24.png":
                        scorep1 = scorep1/=2;
                        break;
                    case "25.png":
                        scorep1 = scorep1/=3;
                        break;
                    case "26.png":
                        scorep1 = scorep1/=100;
                        break;
                    case "27.png":
                        scorep1 = scorep1/=5;
                        break;
                    case "28.png":
                        scorep1 = scorep1/=40;
                        break;
                    case "29.png":
                        scorep1 = scorep1/=20;
                        break;
                    case "30.png":
                        scorep1 = scorep1/=8;
                        break;
                    case "31.png":
                        scorep1 = scorep1/=13;
                        break;
                    case "32.png":
                        scorep1 = scorep1/=10;
                        break;
                    case "33.png":
                        scorep1;
                        break;
                }


            }
        }
        if (CardsNumber >= 34 || CardsNumber <= 44){ //yellow
            if (Type1 === "4.png") {
                switch (Name){
                    case "34.png":
                        scorep1 = scorep1;
                        break;
                    case "35.png":
                        scorep1 = scorep1*=2;
                        break;
                    case "36.png":
                        scorep1 = scorep1*=3;
                        break;
                    case "37.png":
                        scorep1 = scorep1*=100;
                        break;
                    case "38.png":
                        scorep1 = scorep1*=5;
                        break;
                    case "39.png":
                        scorep1 = scorep1*=40;
                        break;
                    case "40.png":
                        scorep1 = scorep1*=20;
                        break;
                    case "41.png":
                        scorep1 = scorep1*=8;
                        break;
                    case "42.png":
                        scorep1 = scorep1*=13;
                        break;
                    case "43.png":
                        scorep1 = scorep1*=10;
                        break;
                    case "44.png":
                        scorep1 = 0;
                        break;
                }


            }
            if (Type2 === "4.png") {
                switch (Name){
                    case "34.png":
                        scorep1 = scorep1-=1;
                        break;
                    case "35.png":
                        scorep1 = scorep1-=2;
                        break;
                    case "36.png":
                        scorep1 = scorep1-=3;
                        break;
                    case "37.png":
                        scorep1 = scorep1-=100;
                        break;
                    case "38.png":
                        scorep1 = scorep1-=5;
                        break;
                    case "39.png":
                        scorep1 = scorep1-=40;
                        break;
                    case "40.png":
                        scorep1 = scorep1-=20;
                        break;
                    case "41.png":
                        scorep1 = scorep1-=8;
                        break;
                    case "42.png":
                        scorep1 = scorep1-=13;
                        break;
                    case "43.png":
                        scorep1 = scorep1-=10;
                        break;
                    case "44.png":
                        scorep1;
                        break;
                }


            }
            if (Type3 === "4.png") {
                switch (Name){
                    case "34.png":
                        scorep1 = scorep1+=1;
                        break;
                    case "35.png":
                        scorep1 = scorep1+=2;
                        break;
                    case "36.png":
                        scorep1 = scorep1+=3;
                        break;
                    case "37.png":
                        scorep1 = scorep1+=100;
                        break;
                    case "38.png":
                        scorep1 = scorep1+=5;
                        break;
                    case "39.png":
                        scorep1 = scorep1+=40;
                        break;
                    case "40.png":
                        scorep1 = scorep1+=20;
                        break;
                    case "41.png":
                        scorep1 = scorep1+=8;
                        break;
                    case "42.png":
                        scorep1 = scorep1+=13;
                        break;
                    case "43.png":
                        scorep1 = scorep1+=10;
                        break;
                    case "44.png":
                        scorep1;
                        break;
                }


            }
            if (Type4 === "4.png") {
                switch (Name){
                    case "34.png":
                        scorep1 = scorep1/=1;
                        break;
                    case "35.png":
                        scorep1 = scorep1/=2;
                        break;
                    case "36.png":
                        scorep1 = scorep1/=3;
                        break;
                    case "37.png":
                        scorep1 = scorep1/=100;
                        break;
                    case "38.png":
                        scorep1 = scorep1/=5;
                        break;
                    case "39.png":
                        scorep1 = scorep1/=40;
                        break;
                    case "40.png":
                        scorep1 = scorep1/=20;
                        break;
                    case "41.png":
                        scorep1 = scorep1/=8;
                        break;
                    case "42.png":
                        scorep1 = scorep1/=13;
                        break;
                    case "43.png":
                        scorep1 = scorep1/=10;
                        break;
                    case "44.png":
                        scorep1;
                        break;
                }


            }

            console.log(scorep1);

            alert("Score Player 1 :"+scorep1);
            document.getElementById("Score1").innerHTML = "Score P1 : "+scorep1;
            val = document.getElementById(id)
            val.setAttribute("src","/asset/backcard.png")
            Turn++;
        }}}

function Target() {
if (Turn%2) {
    var checked = document.getElementById("p1").checked;

    if (checked) {
        console.log('Checked/Attack');
        playp1()
    } else {
        playp2()
        console.log('Not checked/Self');
    }
}
else{
    checked = document.getElementById("p2").checked;
    if (checked) {
        console.log('Checked/Attack');
        playp2()
    } else {
        playp1()
        console.log('Not checked/Self');
    }
}
}


