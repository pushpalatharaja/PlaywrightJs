const factorial=(num)=>{
    //console.log(num);
    if(num<=0){
      console.log("The number should be Positive Number");
      }
    else{
      let fact=1
      for (let i = 2; i <=num; i++) {
       fact=fact*i 
      }
      console.log(fact);
    }
    
    }
    factorial(4)