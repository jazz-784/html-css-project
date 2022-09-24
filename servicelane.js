function serviceLane(n, cases) {
    // Write your code here
    let arrwidths = [2, 3, 1, 2, 3, 2, 3, 3];
    let lowestwidth = [];
for(let i=0; i<cases.length; i++){
    for (let j = 0; j <= (cases[i][1]-cases[i][0]); j++) {
        let lowestvalue = null;
        if (cases[i][j]<lowestvalue) {
            lowestvalue = cases[i][j];
        }
    }
        console.log(lowestvalue);
        lowestwidth.push(lowestvalue);
}
}
let cases= [[0,3],[4,6],[6,7],[3,5],[0,7]];
//8 5
//2 3 1 2 3 2 3 3
