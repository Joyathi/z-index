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


const str5 = "Hello";

const regexp17 =/[kjm]/i;
const result17= regexp17.test(str5); // if there is a 'k' or 'j' or 'm' then it will be ture
console.log ("result17 : ",result17);//false

const regexp18 =/[^kjm]/i
const result18= regexp18.test (str5);//if there is no 'k' or 'j' or 'm' then it will be ture
console.log ("result18 : ",result18);//ture

const regexp19 =/[H+]/i;
const result19= regexp19.test (str5);// at least one 'H' is required
console.log ("result19 : ",result19);//ture

const regexp20 =/[o$]/i;
const result20= regexp20.test (str5);// string ends with o
console.log ("result20 : ",result20);//ture

const regexp21 =/o?$/i;
const result21= regexp19.test (str5);// 'o' in string ending is optional\
console.log ("result21 : ",result21);//ture

//{} - indicates the number of characters, a{2} means "aa", ie 2 a is required
const regexp23 =/L{2}o$/i;//'o' should exactly after 2 L's
const result23= regexp23.test (str5);
console.log ("result23 : ",result23);//ture

const regexp24 =/L{2,4}o$/i;//'o' should exactly after between 2 to 4 L's
const result24= regexp24.test (str5);
console.log ("result24 : ",result24);//ture

const regexp25 =/[H+]/i;//'o' should exactly after 2 to 4 L's and 'o' is required
const result25= regexp25.test (str5);
console.log ("result25 : ",result25);//ture

const regexp26 =/HeL{2,}o$/i;//2 or more 'L' is required
const result26= regexp26.test (str5);
console.log ("result26 : ",result26);//ture

// \ - indicates escape charecter, used for matching any characters which has special meaning
const regexp27 =/\d/i;//if there is any digits, it will be ture , else it will be false
const result27= regexp27.test (str5);
console.log ("result27 : ",result27);//false

const regexp28 =/\D/i;//if there is any digits, it will be ture, if there is only digits it will be false
const result28= regexp28.test (str5);
console.log ("result28 : ",result28);//ture

//Suppose we want to match '.' in a string, since '.' has special meaning in regular experssions ot will not works as expected and will matching everything

const regexp29 =/./i;//if there is a '.' or anything it will match
const result29= regexp29.test (str5);
console.log ("result29 : ",result29);//ture

//so we can write it as

const regexp30 =/\./i;//if there is any '.' in the string it match, else it will be false
const result30= regexp30.test (str5);
console.log ("result30 : ",result30);//false

//so '\' (backslash) is used to escape special charactors

//Date validation

//1
const regexpForDate =/^\d{1,2}-\d{1,2}-\d{4$}/i;//string should starts with 1 or 2 digits, then after '-' symbol, then again 1 or 2  digits, after '-', ending  will be 4

//2

// |- indicates or case 0|1 means either 0 or 2 can occur












