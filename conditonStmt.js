const launch=function launchBrowser(){
    let browserName='Chrome'
    if(browserName=='Chrome'){
        console.log("It is Chrome");
        
    }  
    else{
        console.log("It is not a Chrome");
        
    }
    

}
const run=() => {
    let testType = 'sanity';
    switch (testType) {
        case 'smoke':
            console.log('Successfully smoke test have completed');

            break;
        case 'sanity':
            console.log('Successfully sanity test have completed');
            break;
        case 'regression':
            console.log('Successfully regression test have completed');
            break;

        default:
            console.log('Successfully smoke test have completed');
    }

}
launch()
run()