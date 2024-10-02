let lang="Malayalam"
let reverseLang=""


const chkPalindrome=()=>{
//convert all letters to the same case
let knownLang=lang.toLowerCase();

//iterating the string in reverse order
for (let index = knownLang.length-1; index >=0 ; index--) {
    
    reverseLang=reverseLang+knownLang[index]
      
}
//printing the reverse string
console.log(reverseLang);

//validating the reversed string is palindrome
if(reverseLang===knownLang) {
    console.log("It is palindrome");
    }
    else{
    console.log("It is not a palindrome");
    }
}

//calling the function
chkPalindrome()