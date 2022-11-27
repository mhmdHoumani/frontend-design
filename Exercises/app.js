// -Write a JavaScript function to check whether an input is an array or not
// -Write a simple JavaScript program to join all elements of the following array into a string
// -Write a JavaScript program to sort the items of an array
// -Write a JavaScript program to compute the sum and product of an array of integers
// -There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays
// -Write a JavaScript function to find the longest common starting substring in a set of strings

const array = ["1", "4", "3", "12", "7", "9", "20", "15", "14", "5"];
const aux = ["6", "10", "8", "9", "19", "11", "15", "1"];

const checkArray = (a) => {
  return Array.isArray(a);
};
const joinElements = (a) => {
  if (checkArray(a)) {
    return a.join("");
  }
  return "Not an Array!!";
};
const sortElements = (a) => {
  if (checkArray(a)) {
    return a.sort((a, b) => a - b);
  }
  return "Not an Array!!";
};
const sumElements = (a) => {
  if (checkArray(a)) {
    let sum = 0;
    a.map((element) => {
      sum += parseInt(element);
    });
    return sum;
  }
  return "Not an Array!!";
};
const prodElements = (a) => {
  if (checkArray(a)) {
    let prod = 1;
    a.map((element) => {
      prod *= parseInt(element);
    });
    return prod;
  }
  return "Not an Array!!";
};
const sumTwoArrays = (a, b) => {
  if (checkArray(a) && checkArray(b)) {
    let sum = new Array(a.length > b.length ? a.length : b.length);
    let k = 0;
    let i;
    for (i = 0; i < a.length && i < b.length; i++) {
      sum[k++] = parseInt(a[i]) + parseInt(b[i]);
    }
    if (i < a.length) {
      while (i < a.length) {
        sum[k++] = parseInt(a[i++]);
      }
    } else if (i < b.length) {
      while (i < b.length) {
        sum[k++] = parseInt(b[i++]);
      }
    }
    return sum;
  }
  return "Not an Array!!";
};
const longestCommonSubString = (str1, str2) => {
  let i = 0;
  while (str1.charAt(i) === str2.charAt(i) && ++i);
  return str1.substring(0, i);
};

const onStart = () => {
  alert(`Check Array : ${checkArray(array)}`);
  alert(`Join Elements : ${joinElements(array)}`);
  alert(`Sort Elements : ${sortElements(array)}`);
  alert(`Sum Elements : ${sumElements(array)}`);
  alert(`Product Elements : ${prodElements(array)}`);
  alert(`Sum of two arrays : ${sumTwoArrays(aux, array)}`);
  alert(
    `Longest First Common SubString : ${longestCommonSubString(
      "mohammad",
      "mohamad"
    )}`
  );
};

onStart();
