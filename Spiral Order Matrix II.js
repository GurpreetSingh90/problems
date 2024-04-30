


let spiral = function (target) {
    let n = target;
    let counter = 0;
    let rmin = 0, rmax = n-1, cmin = 0, cmax = n-1;
    let output = [];
    for (let i = 0; i < n; i++) {
        output.push(new Array(n).fill(0));
    }

    while (counter < n * n) {
        //Left to Right
        for (let row = cmin; row <= cmax && counter < n * n; row++) {
            counter++;
            output[cmin][row] = counter;
        }
        rmin++;

        //Top to Bottom
        for (let col = rmin; col <= rmax&& counter < n * n; col++) {
            counter++
            output[col][rmax] = counter;
        }
        cmax--
        //Bottom to Left
        for (let row = cmax; row >= cmin && counter < n * n; row--) {
            counter++
            output[rmax][row] = counter;
        }
        rmax--
        //Left to Top
        for (let row = rmax; row >= rmin && counter < n * n; row--) {
            counter++
            output[row][cmin] = counter;
        }
        cmin++
    }
    console.log("OUTPUT: " + output);
    return output;
    
}


spiral(5);

