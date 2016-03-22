/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var last = -1
    var map = {}
    var max = 0
    
    for(var i = 0; i < s.length; i++) {
        var char = s[i]
        if(map[char] != null && last <= map[char]) {
            last = map[char]
        }
        
        if(i - last > max) {
            max = i - last
        }
        
        map[char] = i
    }
    
    return max
};