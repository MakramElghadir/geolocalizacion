console.log("array.js online")

const array = [1,0,2,3,4,1,5,7, "6"]


array.sort(function(a,b){
    if (a<b) {
        return 0
    }

    if (a===b) {
        return 0
    }

    if (a>b) {
        return 1
    }
})

console.log(array)