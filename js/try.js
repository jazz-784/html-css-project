function jumpingOnClouds(c) {
    let indexOfOnes = [];
    for(let i=0; i<c.length; i++){
        if(c[i] === 1){
            indexOfOnes.push(i);
        }
    }
    console.log(indexOfOnes);//0 0 1 0 0 1 0
    let numOfJumps = 0;
    for(let i=0; i<c.length; i++){
        if(c[i+2] === 0){
            i ++;
            numOfJumps ++;
        }else if (c[i+1] === 0){
            numOfJumps++;
        }
    }
    console.log(numOfJumps);

}
let c = [0,0,1 ,0, 0, 1, 0];
jumpingOnClouds(c);