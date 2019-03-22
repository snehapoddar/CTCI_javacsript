const str = "Mars has a car";

function urlify(str) {
    const arr = str.split(" ");
    let url = "";
    for (let i=0; i<arr.length-1; i++) {
        url+= arr[i] + "%20";
    }
    return url + arr[arr.length-1];
}

console.log(urlify(str));