const occurrences =()=>{
    let nums = [2,4,5,2,1,2]
    let arr = []
    let count=1
    for (let i = 0; i < nums.length; i++) {
        if(!arr.includes(nums[i])){
           arr.push(nums[i])
        }
        else{ count++}
       
    }
   
    console.log(count);
    
    
}
occurrences()

/////////////////////////////////////Another Method with Val///////////////
const occurrencesVal=()=>{
    let nums = [2,4,5,2,1,2]
    let k=2
    let count=0
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]==k){
            count++
        }
        
    }
    console.log(count);
    
}
occurrencesVal()