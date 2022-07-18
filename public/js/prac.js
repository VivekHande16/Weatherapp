var longestPalindrome = function(s) {
    let hash = {};
    let sum = 0;
    for(let key of s) {
        hash[key] = (hash[key] || 0) + 1;
        if(hash[key] % 2 == 0) sum +=2;
    }
    return sum === s.length ? sum : sum + 1;
}

const s = "abccccdddd";
console.log(longestPalindrome(s));