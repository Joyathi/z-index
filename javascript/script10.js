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
console.log ("result1 : ",result1);//ture

const regexp2 =/A/i;// checks if str1 contains letter "a" and performs case-insensitive search
const result2= regexp1.test (str2);
console.log ("result2 : ",result2);//ture

const regexp3 =/ab/;//checks if str1 contains "ab"
const result3= regexp3.test (str1);
console.log ("result3 : ",result3);//false


//[]represents range
const regexp4 =/[crb]a/;//checks if str1 contains letter "a"
const result4= regexp4.test (str1);
console.log ("result4 : ",result4);//ture

const regexp5 =/[a-z]a/i;//checks if str1 contains  any letters "a" to 'z' before a, also 'i' represents case insenstive search
const result5= regexp5.test (str1);
console.log ("result5 : ",result5);//ture

const regexp6 =/[a-z0-9]a/i;//checks if str1 contains letter in between "a" to 'z' or any digits in between 0 to 9 before 'a'
const result6= regexp1.test (str1);
console.log ("result6 : ",result6);//ture

//^ represents start of a string
const regexp7 =/^rat/i;//checks if str2 starts with "rat"
const result7= regexp7.test (str2);
console.log ("result7 : ",result7);//ture

//$ represents end of string
const regexp8 =/fish$/i;//checks if str2 ends with "fish"
const result8= regexp8.test (str2);
console.log ("result8 : ",result8);//ture

const regexp9 =/^good/im;// m-flag represents multiline matching
const result9= regexp9.test (str4);//chekes if str4 starts with "good"
console.log ("result9 : ",result9);//ture

const regexp10 =/good$/im;//chekes if str4 ends with "good"
const result10= regexp10.test (str4);
console.log ("result10 : ",result10);//false

const regexp11 =/fishes?/im;//wor before '?' is optional for matching
const result11 = regexp11.test (str3);//it matches both fishe and fishes, "s" is optional
console.log ("result11 : ",result1);//ture

const regexp12 =/fish(es)/im;// '(), reepresents groups
const result12= regexp12.test (str3);//it matches both fish and fishes, "es" is optional
console.log ("result12 : ",result12);//false

const regexp13 =/fishes*$/i;//the letter before '*' can occur multiple times in a string
const result13= regexp13.test (str3);// it matches fishes, fishessssss..
console.log ("result13 : ",result13);//ture

const regexp14 =/fishes+$/i;//the letter before '+' also can occur multiple time in a string, but atleast one occurence is required
const result14= regexp14.test (str3);//Here it matches fishes, fishessss...
console.log ("result14 : ",result14);//false

const regexp15 =/fishe./i;//Any character can occur after fish, "." represents any type of character
const result15= regexp15.test (str3);//Here it matches fishe, fishb,fish1,fish2.... but does not matches fish,a charecters are matched
console.log ("result15 : ",result1);//ture

const regexp16 =/fish.*$/i;
const result16= regexp16.test (str1);//Here it matches fishe, fishes,fishesssss,.... since due to '*' multiple are matched
console.log ("result16 : ",result1);//ture






