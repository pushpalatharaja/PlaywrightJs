let occurrences = function () {
    let nums = [2, 4, 5, 2, 1, 2];
    let arr = [];
    let count = 1;
    for (var i = 0; i < nums.length; i++) {
        if (!arr.includes(nums[i])) {
            arr.push(nums[i]);
        }
        else {
            count++;
        }
    }
    console.log(count);
};
occurrences();
/////////////////////////////////////Another Method with Val///////////////
var occurrencesVal = function () {
    var nums = [2, 4, 5, 2, 1, 2];
    var k = 2;
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == k) {
            count++;
        }
    }
    console.log(count);
};
occurrencesVal();
