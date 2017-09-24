Description:
The vowel subsequences in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alpahbetic characters only and no spaces, return the length of the longest vowel subsequence.

Good luck!

Solution:

function solve(s){
 var vowels = 'aeiou';
 max = 0;
 for(i=0;i<s.length;i++){
   if(vowels.indexOf(s[i]) >= 0){
    subsequence++
    if(subsequence>max){
      max = subsequence;
    }
   } else {
    subsequence = 0;
   }
 }
 return max;
}
