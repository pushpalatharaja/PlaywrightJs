const findIndices=()=>{
    const nums = [2, 4, 7, 8, 11, 14]
    let target=18
   
    for (let i = 0; i < nums.length; i++) {
       for (let j = 1; j < nums.length; j++) {
        if(nums[i]+nums[j]===target){
             console.log(`Target Equals: ${nums[i]} + ${nums[j]} with the index values of (${nums.indexOf(nums[i])},${nums.indexOf(nums[j])})`);
                    
        }
        
        }
        
         
       }
        
       
   }
    

findIndices()