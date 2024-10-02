const { log } = require("console");

let s="Hello World"
//to print the length of the last word
console.log(s.split(" ").at(1).length);

//to print the length of the last word
s = " fly me to the moon "
console.log(s.trim().split(" ").at(4).length);

//to check 2 different strings are anagram
const chkAnagram=(text1,text2)=>{
    let sortText1=text1.split("").sort().join("")
    let sortText2=text2.split("").sort().join("")
    if(sortText1===sortText2){
        console.log("Two strings are anagram")
    }
    else{
        console.log("Two strings are not an anagram")
    }
}
//calling the function with passing the input values
chkAnagram("listen","silent")
chkAnagram("Hello","world")







