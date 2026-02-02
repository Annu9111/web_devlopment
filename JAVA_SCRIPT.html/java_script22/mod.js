console.log("this is mod module");
function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length
}

module.exports={
    avg:average,
    name:"Annu",
    repo:"github"
}
