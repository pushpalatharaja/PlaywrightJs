const printOdd=()=>{
    //iteration starts from 1 to 25
    for (let index = 1; index<=25; index++) {
       //if the value can modulo with 1, print the value
        if(index%2==1){
            console.log(index);
        }      
        
    }
}
//calling the function
printOdd()