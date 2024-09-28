const  PI = 3.1415;
const area = PI * 5 * 5;
let weekOne = 20 * 2 * .8;
let weekTwo = weekOne * 2 * .8;
let weekThree = weekTwo * 2 * .8;

if (weekOne > (area * .8))
{
    console.log("Week One: Prune the plants");
}
else if (weekOne > area * .5 && weekOne < area * .8) {
    console.log("Week One: Montior the plants");
}
else {
    console.log("Week One: More room to plant");
}
if (weekTwo > (area * .8))
{
    console.log("week Two: Prune the plants");
}
else if (weekTwo > (area * .5) && weekTwo < (area * .8)) {
    console.log("week Two: Montior the plants");
}
else {
    console.log("week Two: More room to plant");
}
if (weekThree > (area * .8))    
{
    console.log("week Three: Prune the plants");
}
else if (weekThree > (area * .5) && weekThree < (area * .8)) {
    console.log("week Three: Montior the plants");
}
else {
    console.log("week Three: More room to plant");
}

let weekTen = (100*2*2*2*2*2*2*2*2*2*2)* .8;
let weekTenRadius =  Math.sqrt((weekTen/PI));
console.log(`Week Ten Radius if we started with ten plants: ${weekTenRadius}`);

try {
    if (weekTen < area) {
        console.log("Week Ten: It fits!");
    }
    else{
        throw "Erorr - It's way too big for this garden!"
    }
} catch (error){
    console.log(error);
}
