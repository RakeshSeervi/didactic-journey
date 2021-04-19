function compareItem(i1, i2) {
    if(i1[1]>i2[1])
        return 1;
    if(i1[1]==i2[1])
        return 0;
    return -1
}

function updateInventory(arr1, arr2) {
    for(let item2 of arr2){
        let flag = 0;
        for(let item1 of arr1){
            if(item1[1]==item2[1]){
                item1[0]+=item2[0];
                flag = 1;
                break;
            }
        }
        if(flag==0)
            arr1.push(item2);
    }
    return arr1.sort(compareItem);
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
