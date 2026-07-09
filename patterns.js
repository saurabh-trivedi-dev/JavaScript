// *
// **
// ***
// ****
// *****


for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}




// *****
// ****
// ***
// **
// *

for(let i=1; i<=5; i++){
    let row="";
    for(let j=5; j>=i; j--){
        row +="*";
    }
    console.log(row);
}



//     *
//    **
//   ***
//  ****
// *****


for(let i=5; i>=1; i--){
    let row="";
    for(let j=1; j<=5; j++){
        // if(j>=i){
        //     row +="*";
        // }
        // else{
        //     row +=" ";
        // }
        row += (j >= i) ? "*" : " ";  //Ternary Operator
    }
    console.log(row);
}




//     *
//    ***
//   *****
//  *******
// *********


let count=0;
for(let i=5; i>=1; i--){
    let row="";
    for(let j=9; j>=1; j--){
        if(j>=(i-count) || j<=(i+count) || j==i){
            row+="*";
        }
        else{
            row+=" ";
        }
    }
    console.log(row)
    count+=1;
}

