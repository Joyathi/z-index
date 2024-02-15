const str1 = "the cat is white";
const str2 = "rats eat fish";
const str3 = "is it ok fishe";
const str4 =`
Hello
good meat
is always good Hai
`;

const regexp1 =/a/;//checks if str1 contains letter "a"
const result1= regexp1.test (str1);
console.log ("result : ",result1);//ture

const regexp2 =/A/i;// checks if str1 contains letter "a" and performs case-insensitive search
const result2= regexp1.test (str2);
console.log ("result : ",result2);//ture

const regexp3 =/ab/;//checks if str1 contains "ab"
const result3= regexp3.test (str1);
console.log ("result : ",result3);//false


//[]represents range
const regexp4 =/[crb]a/;//checks if str1 contains letter "a"
const result4= regexp4.test (str1);
console.log ("result : ",result4);//ture

const regexp5 =/[a-z]a/i;//checks if str1 contains  any letters "a" to 'z' before a, also 'i' represents case insenstive search
const result5= regexp5.test (str1);
console.log ("result : ",result5);//ture

const regexp6 =/[a-z0-9]a/i;//checks if str1 contains letter in between "a" to 'z' or any digits in between 0 to 9 before 'a'
const result6= regexp1.test (str1);
console.log ("result : ",result6);//ture

