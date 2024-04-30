//Smallest number S whose  product of digit is N

let smallest = function (num) {
     let i= 9;
     let output = "";
     while(num > 1){
        if(num%i == 0){
            num = num/i;
            output=i+output;
        }
        else{
            i--;
        }
     }  
     console.log(output);

}

let majority = function (num) {
    let n = num.length;
    let count = 1;
    let temp = num[0];
    for(let i=1; i<n;i++){
        if(num[i] == temp){
            count++;
        }
        else{
            count--
            if(count == 0){
                temp = num[i];
                count = 1;
            }
        }
    }
    let counter = 0;
    for(let i=1; i<n;i++){
        if(num[i] == temp){
            counter++
        }
    }
    if(counter > n/2){
        console.log("Answer: ",temp)
    }
    else{
        console.log("Answer: -1")
    }
}




//majority([4,4,3,7,3,4,4,7,4,4,7,4,4])

//smallest(81000);