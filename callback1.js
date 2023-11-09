function add(a, b, callback){
    const result = a + b;
    callback(result);
}

function displayResult(result){
    console.log("The result is: " + result);
}
add(8, 8, displayResult);

