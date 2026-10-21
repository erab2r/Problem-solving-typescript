
//  Problem 1: Staircase

var staircase = function(n: number): string {
  let res = "";
  for (let k = 1; k <= n; k++) {
    const spaces = " ".repeat(n - k);
    const hashes = "#".repeat(k);

    res += spaces + hashes;

    if (k < n) {
      res += "\n";
    }
  }

  return res;
};
console.log(staircase(4));
console.log(staircase(1));
console.log(staircase(5));
console.log(staircase(7));

console.log("\n");


// Problem 2 : Grading Students 

const gradingStudents = (grades: number[]): number[] => {
  return grades.map((grade: number) => {
    if (grade < 38) {
      return grade;
    }
    const multiply_5 = Math.ceil(grade / 5) * 5;
    if (multiply_5 - grade < 3) {
      return multiply_5;
    }
    return grade;
  });
};

const testCase_1 = gradingStudents([73, 67, 38, 33]);
console.log(testCase_1); 
const testCase_2 = gradingStudents([84, 29, 57]);
console.log(testCase_2); 

console.log("\n");

// Problem 3: Time Conversion

const timeConversion = (s: string): string => {
  const period: string = s.slice(-2);
  const time: string = s.slice(0, -2);
  let [hour, minute, second] = time.split(":");
  if (period === "AM") {
    if (hour === "12") {
      hour = "00";
    }
  } else {
    if (hour !== "12") {
      hour = String(Number(hour) + 12);
    }
  }

  return `${hour}:${minute}:${second}`;
};

console.log(timeConversion("07:05:45PM")); 
console.log(timeConversion("12:00:00AM")); 
console.log(timeConversion("12:30:45PM")); 
console.log(timeConversion("09:15:20AM")); 
console.log(timeConversion("11:59:59PM"));
console.log(timeConversion("12:15:30AM"));
console.log(timeConversion("01:00:00PM")); 

console.log("\n");


// Problem 4: String Repeat

var repeatStr = function(n: number, s: string): string {
  let res: string = "";

  for (let i=0;i<n;i++) {
    res += s;
  }

  return res;
};
console.log(repeatStr(3, "ha"));   
console.log(repeatStr(0, "hello")); 
console.log(repeatStr(4, "a"));     
console.log(repeatStr(2, "abc"));
console.log(repeatStr(5, "hi"));
console.log(repeatStr(1, "hello"));   

console.log("\n");

// Problem 5: Reversed Strings

var solution = function(str: string): string {
  let revers = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revers += str[i];
  }

  return revers;
};
console.log(solution("world"));      
console.log(solution("hello"));     
console.log('"' + solution("") + '"');           
console.log(solution("typescript")); 
console.log(solution("a"));           
console.log(solution("e"));     

console.log("\n");

// Problem 6: Sum of Positive

var positiveSum = function(arr: number[]): number {
  let sum = 0;

  for (const n of arr) {
    if (n > 0) {
      sum += n;
    }
  }
  return sum;
};
console.log(positiveSum([1, -4, 7, 12])); 
console.log(positiveSum([-1, -2, 0, -5])); 
console.log(positiveSum([])); 
console.log(positiveSum([-3, 0, -8]));              
console.log(positiveSum([5, 10, 15]));     

console.log("\n");

// Problem 7: Grasshopper — Summation

var summation = function(num: number): number {
  let sum = 0;

  for (let i=1;i<=num;i++) {
    sum += i;
  }

  return sum;
};
console.log(summation(8));  
console.log(summation(1));  
console.log(summation(4));  
console.log(summation(10)); 
console.log("\n");

// Problem 8: Convert a Boolean to a String

var booleanToString = function(b: boolean): string {
  return String(b);
};
console.log(booleanToString(true));  
console.log(booleanToString(false)); 
console.log("\n");

 // Problem 9: Fizz Buzz

var fizzBuzz = function(n: number): string[] {
  const result: string[] = [];

  for (let i=1;i<= n;i++) {
    if (i % 3===0 && i % 5===0) {
      result.push("FizzBuzz");
    } else if (i%3===0) {
      result.push("Fizz");
    } else if (i%5===0) {
      result.push("Buzz");
    } else {
      result.push(String(i));
    }
  }

  return result;
};

console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(1));
console.log(fizzBuzz(0));
console.log("\n");

 // Problem 10: Running Sum of 1D Array

var runningSum = function(nums: number[]): number[] {
  const result: number[] = [];
  let sum = 0;

  for (let k = 0; k < nums.length; k++) {
    sum += nums[k];
    result.push(sum);
  }

  return result;
};
console.log(runningSum([1, 2, 3, 4]));       
console.log(runningSum([1, 1, 1, 1, 1]));      
console.log(runningSum([]));
console.log(runningSum([3, 1, 2, 10, 1]));                 

console.log("\n");

 // Problem 11: Richest Customer Wealth

var maximumWealth = function(accounts: number[][]): number {
  let mx = 0;

  for (let i = 0; i < accounts.length; i++) {
    let totalWealth = 0;

    for (let j = 0; j < accounts[i].length; j++) {
      totalWealth += accounts[i][j];
    }

    if (totalWealth > mx) {
      mx = totalWealth;
    }
  }

  return mx;
};
console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));  
console.log(maximumWealth([[5]]));
console.log(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]])); 

console.log("\n");
 
 // Problem 12: Remove Duplicates from Sorted Array

var removeDuplicates = function(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  let res = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[res - 1]) {
      nums[res] = nums[i];
      res++;
    }
  }

  return res;
};
const res1 = [1, 1, 2];
const k1 = removeDuplicates(res1);
console.log(k1);                 
console.log(res1.slice(0, k1));  

const res2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k2 = removeDuplicates(res2);
console.log(k2);                  
console.log(res2.slice(0, k2));  
const res3: number[] = [];
console.log(removeDuplicates(res3)); // 0
console.log("\n");

// Problem 13: Contains Duplicate

var containsDuplicate = function(nums: number[]): boolean {
  const seen = new Set<number>();

  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
};
console.log(containsDuplicate([1, 2, 3, 1])); 
console.log(containsDuplicate([1, 2, 3, 4])); 
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); 
console.log(containsDuplicate([])); 
console.log(containsDuplicate([5])); 
console.log(containsDuplicate([-1, 0, -1])); 
console.log("\n");

//  Problem 14: Move Zeroes


var moveZeroes = function(nums: number[]): void {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[res] = nums[i];
      res++;
    }
  }
  for (let i = res; i < nums.length; i++) {
    nums[i] = 0;
  }
};

const n1: number[] = [0, 1, 0, 3, 12];
moveZeroes(n1);
console.log(n1);
const n2: number[] = [0, 0, 1];
moveZeroes(n2);
console.log(n2); 
const n3: number[] = [1, 2, 3];
moveZeroes(n3);
console.log(n3); 
const n4: number[] = [0, 0, 0];
moveZeroes(n4);
console.log(n4); 
const n5: number[] = [];
moveZeroes(n5);
console.log(n5); 
console.log("\n");

//  Problem 15: Merge Sorted Array

var merge = function(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let i = m - 1;      
  let j = n - 1;      
  let k = m + n - 1;   
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
};
const mn1 = [1, 2, 3, 0, 0, 0];
const mn2 = [2, 5, 6];
merge(mn1, 3, mn2, 3);
console.log(mn1); 
const mn3 = [1];
const mn4: number[] = [];
merge(mn3, 1, mn4, 0);
console.log(mn3); 
const mn5 = [0];
const mn6 = [1];
merge(mn5, 0, mn6, 1);
console.log(mn5); 
const mn7 = [4, 5, 6, 0, 0, 0];
const mn8 = [1, 2, 3];
merge(mn7, 3, mn8, 3);
console.log(mn7); 
console.log("\n");


//  Problem 16: 3 Sum


var threeSum = function(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let lf = i + 1;
    let rt = nums.length - 1;
    while (lf < rt) {
      const sum = nums[i] + nums[lf] + nums[rt];
      if (sum === 0) {
        result.push([nums[i], nums[lf], nums[rt]]);
        lf++;
        rt--;
        while (lf < rt && nums[lf] === nums[lf - 1]) {
          lf++;
        }
        while (lf < rt && nums[rt] === nums[rt + 1]) {
          rt--;
        }
      } else if (sum < 0) {
        lf++;
      } else {
        rt--;
      }
    }
  }

  return result;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([]));
console.log(threeSum([-2, 0, 1, 1, 2]));

console.log("\n");

// Problem 17: Plus One


var plusOne = function(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  digits.unshift(1);

  return digits;
};

console.log(plusOne([1, 2, 9]));     
console.log(plusOne([4, 3, 2, 1]));  
console.log(plusOne([9, 9, 9]));     
console.log(plusOne([0]));           
console.log(plusOne([8, 9, 9]));     
console.log(plusOne([9]));           


// Problem 18: Reverse String


var reverseString = function(s: string[]): void {
  let lf = 0;
  let rt = s.length - 1;

  while (lf < rt) {
    const temp = s[lf];
    s[lf] = s[rt];
    s[rt] = temp;
    lf++;
    rt--;
  }
};


const s1: string[] = ["h", "e", "l", "l", "o"];
reverseString(s1);
console.log(s1);
const s2: string[] = ["H", "a", "n", "n", "a", "h"];
reverseString(s2);
console.log(s2);
const s3: string[] = ["a"];
reverseString(s3);
console.log(s3);
const s4: string[] = [];
reverseString(s4);
console.log(s4); 

console.log("\n");


//  Problem 19: Length of Last Word


var lengthOfLastWord = function(s: string): number {
  const words = s.trim().split(/\s+/);

  return words[words.length - 1].length;
};

console.log(lengthOfLastWord("Hello World")); 
console.log(lengthOfLastWord("  fly me   to   the moon  ")); 
console.log(lengthOfLastWord("luffy is still joyboy")); 
console.log(lengthOfLastWord("Hello")); 
console.log(lengthOfLastWord("a ")); 




// Problem 20: Longest Common Prefix

var longestCommonPrefix = function(strs: string[]): string {

  if (strs.length === 0) {
    return "";
  }
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
};


console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(
  "\"" + longestCommonPrefix(["dog", "racecar", "car"]) + "\""
);
console.log(longestCommonPrefix([
  "interspecies",
  "interstellar",
  "interstate"
]));
console.log(longestCommonPrefix(["hello"]));
console.log(longestCommonPrefix(["", "flower"]));
console.log(longestCommonPrefix(["abc", "abcd", "ab"]));

