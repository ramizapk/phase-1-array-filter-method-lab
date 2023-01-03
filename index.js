// Code your solution here
function findMatching(arr,name){
    const result = arr.filter(arr => arr.toLowerCase().includes(name.toLowerCase()));
    return result;
}

function fuzzyMatch(arr,letter){
    const result = arr.filter(arr => arr.startsWith(letter));
    return result;
}

function matchName(obj,name){
    const result = obj.filter(obj => obj.name.includes(name));
    return result;
}