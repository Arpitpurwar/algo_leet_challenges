var tempArray = [
    {
        "key": "QUAD E/S SPICES",
        "value": "164627",
        "id": 85267
    },
    {
        "key": "ROUGE DOUBLE INTENSITE 54 STRAWBERRY RED",
        "value": "174540",
        "id": 101127
    }


]

let pushedArray = [];
tempArray.forEach((value,index)=>{
    pushedArray.push(value.id);
})


var duplicate = pushedArray.filter(function(a){
    return pushedArray.indexOf(a) !== pushedArray.lastIndexOf(a)
});

console.log(duplicate);