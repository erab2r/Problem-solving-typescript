# Problem Solving in TypeScript

This repository contains 20 small but important TypeScript problem-solving exercises implemented in [solution.ts](./solution.ts). Each solution is designed to practice core programming ideas such as loops, conditionals, arrays, sorting, set-based lookup, pointer techniques, and string manipulation.

## How to run

Use any TypeScript runner such as:

```bash
npx ts-node solution.ts
```

If you are using a regular TypeScript compiler, you can also compile and run the file with `tsc`.

## Problems included

1. Staircase
2. Grading Students
3. Time Conversion
4. String Repeat
5. Reversed Strings
6. Sum of Positive
7. Grasshopper - Summation
8. Convert a Boolean to a String
9. Fizz Buzz
10. Running Sum of 1D Array
11. Richest Customer Wealth
12. Remove Duplicates from Sorted Array
13. Contains Duplicate
14. Move Zeroes
15. Merge Sorted Array
16. 3 Sum
17. Plus One
18. Reverse String
19. Length of Last Word
20. Longest Common Prefix

---

## 1) Staircase

Goal: Print a staircase pattern with spaces on the left and `#` characters on the right.

### Explanation
- For each row from 1 to `n`:
  - Add `n - k` spaces before the `#` characters.
  - Add `k` hashes.
- Join each row with a newline character.

### Example
For `n = 4`, the output is:

```text
   #
  ##
 ###
####
```

### Why it works
The number of spaces decreases as the row number increases, which visually forms the staircase shape.

---

## 2) Grading Students

Goal: Round grades to the next multiple of 5 when the difference is less than 3, unless the grade is below 38.

### Explanation
- If a grade is below 38, keep it unchanged.
- Find the next multiple of 5.
- If the difference between that multiple and the original grade is less than 3, round the grade upward.
- Otherwise, leave it as-is.

### Example
- `73 -> 75`
- `67 -> 67`
- `38 -> 38`
- `33 -> 33`

### Why it works
This matches the rule: only improve grades that can be rounded up without exceeding a 2-point gap and that are at least 38.

---

## 3) Time Conversion

Goal: Convert a time from 12-hour format to 24-hour format.

### Explanation
- Split the string into hours, minutes, and seconds.
- Check the suffix: `AM` or `PM`.
- If it is `AM` and the hour is `12`, change it to `00`.
- If it is `PM` and the hour is not `12`, add 12 hours.
- Return the new time in `HH:MM:SS` format.

### Example
- `07:05:45PM -> 19:05:45`
- `12:00:00AM -> 00:00:00`

### Why it works
The conversion is based on the special handling of `12` in both AM and PM periods.

---

## 4) String Repeat

Goal: Repeat a string `n` times.

### Explanation
- Initialize an empty string.
- Append the target string once per iteration.
- Return the final concatenated string.

### Example
`repeatStr(3, "ha")` returns `"hahaha"`.

### Why it works
This is a basic loop-based concatenation pattern, useful when repeating text is required.

---

## 5) Reversed Strings

Goal: Reverse a string.

### Explanation
- Start from the last character and move backward to the first.
- Append each character to a new string.

### Example
`"world" -> "dlrow"`

### Why it works
The loop reads the string from right to left, which is the direct definition of reversal.

---

## 6) Sum of Positive

Goal: Add only positive numbers in an array.

### Explanation
- Loop through the array.
- If the value is greater than 0, add it to the running total.
- Return the final total.

### Example
`[1, -4, 7, 12] -> 20`

### Why it works
It filters out values that do not satisfy the `> 0` rule before summing.

---

## 7) Grasshopper - Summation

Goal: Find the sum of all numbers from 1 to `n`.

### Explanation
- Start with `sum = 0`.
- Add each number from 1 to `n`.
- Return the total.

### Example
For `n = 8`, the sum is `1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36`.

### Why it works
This is a standard arithmetic progression sum using iteration.

---

## 8) Convert a Boolean to a String

Goal: Convert a boolean value into its string form.

### Explanation
- Use JavaScript/TypeScript's built-in `String()` conversion.

### Example
- `true -> "true"`
- `false -> "false"`

### Why it works
The `String` function converts primitive booleans into strings automatically.

---

## 9) Fizz Buzz

Goal: Print numbers from 1 to `n`, replacing multiples of 3 with `Fizz`, multiples of 5 with `Buzz`, and multiples of both with `FizzBuzz`.

### Explanation
- For every number from 1 to `n`:
  - if divisible by both 3 and 5, push `"FizzBuzz"`
  - else if divisible by 3, push `"Fizz"`
  - else if divisible by 5, push `"Buzz"`
  - else push the numeric value as a string

### Example
`fizzBuzz(15)` produces:

```text
["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
```

### Why it works
The ordering of conditions matters: check the combined case first so it is not overwritten by the single-case checks.

---

## 10) Running Sum of 1D Array

Goal: Return a cumulative sum array.

### Explanation
- Maintain a running total.
- Add each element to the total.
- Push the updated total into the output array.

### Example
`[1, 2, 3, 4] -> [1, 3, 6, 10]`

### Why it works
Each element becomes the prefix sum up to that point.

---

## 11) Richest Customer Wealth

Goal: Find the maximum sum of account balances for any single customer.

### Explanation
- For each customer row:
  - Sum all values in that customer's account list.
  - Compare with the current maximum.
- Return the largest total found.

### Example
`[[1, 2, 3], [3, 2, 1]] -> 6`

### Why it works
The solution evaluates each customer individually and tracks the largest total across all customers.

---

## 12) Remove Duplicates from Sorted Array

Goal: Remove duplicates from a sorted array in-place and return the new length.

### Explanation
- Keep a pointer to the next writable location.
- Traverse the array.
- If the current value is different from the previous unique value, place it into the next slot.

### Example
`[1, 1, 2] -> [1, 2]` and return `2`.

### Why it works
Because the array is sorted, duplicate values appear next to each other, making it easy to skip them.

---

## 13) Contains Duplicate

Goal: Determine whether an array contains any duplicate values.

### Explanation
- Use a `Set` to remember values already seen.
- If a value is encountered again, return `true`.
- Otherwise, return `false`.

### Example
`[1, 2, 3, 1] -> true`

### Why it works
A set stores only unique values, so any repeated value is detected immediately.

---

## 14) Move Zeroes

Goal: Move all zero values to the end while keeping the relative order of non-zero values.

### Explanation
- Use a write index to store non-zero values.
- Copy all non-zero numbers to the front.
- Fill the remaining positions with zeroes.

### Example
`[0, 1, 0, 3, 12] -> [1, 3, 12, 0, 0]`

### Why it works
It separates non-zero values from zero values in a single pass and then fixes the tail.

---

## 15) Merge Sorted Array

Goal: Merge two sorted arrays into the first array while keeping the result sorted.

### Explanation
- Start from the end of both arrays.
- Compare the largest remaining values and place the larger one at the end of `nums1`.
- Continue until all values from `nums2` are placed.

### Example
`nums1 = [1, 2, 3, 0, 0, 0]` and `nums2 = [2, 5, 6]` becomes `[1, 2, 2, 3, 5, 6]`.

### Why it works
Working backwards avoids overwriting values that still need to be merged.

---

## 16) 3 Sum

Goal: Find all unique triplets in an array that sum to zero.

### Explanation
- Sort the array.
- Fix one number and use two pointers on the remaining section.
- Move the pointers based on whether the current sum is too low or too high.
- Skip duplicate values to avoid repeated triplets.

### Example
`[-1, 0, 1, 2, -1, -4] -> [[-1, -1, 2], [-1, 0, 1]]`

### Why it works
The sorted order makes it easy to detect valid triplets while avoiding duplicates.

---

## 17) Plus One

Goal: Increase a number represented as an array of digits by 1.

### Explanation
- Start from the last digit.
- If the current digit is less than 9, increment it and return.
- Otherwise, set it to 0 and continue carrying left.
- If all digits are 9, prepend a new `1`.

### Example
`[1, 2, 9] -> [1, 3, 0]`
`[9, 9, 9] -> [1, 0, 0, 0]`

### Why it works
This is the standard carry propagation used in manual addition.

---

## 18) Reverse String

Goal: Reverse a string array in-place.

### Explanation
- Use two pointers, one at the start and one at the end.
- Swap the characters and move inward until they meet.

### Example
`["h", "e", "l", "l", "o"] -> ["o", "l", "l", "e", "h"]`

### Why it works
The two-pointer approach reduces the need for extra memory and works in-place.

---

## 19) Length of Last Word

Goal: Return the length of the last word in a string.

### Explanation
- Trim the string to remove leading and trailing spaces.
- Split on whitespace.
- Return the length of the last item.

### Example
`"Hello World" -> 5`

### Why it works
The last word is the final non-empty segment after trimming and splitting.

---

## 20) Longest Common Prefix

Goal: Find the longest common prefix among an array of strings.

### Explanation
- Compare the first string against every other string one character at a time.
- Stop as soon as a mismatch occurs or one string ends.
- Return the matching prefix.

### Example
`["flower", "flow", "flight"] -> "fl"`

### Why it works
The algorithm checks the shared characters index-by-index and stops the first time the prefix breaks.

---

## Summary

These exercises cover many of the core concepts used in coding interviews and algorithm practice:

- loops and conditionals
- arithmetic and math
- arrays and strings
- sets and hash lookups
- sorting and two-pointer strategies
- in-place modification techniques

This project is a strong practice set for improving problem-solving skills in TypeScript.
