// function arrayDiff(a, b) {
//   return a.filter((item) => !b.includes(item));
// }

// function validParentheses(parens) {
//   if (0 <= parens.length <= 100) {
//     let splitted = parens.split("");
//     if (splitted[0] !== "(") {
//       return false;
//     } else if (splitted[0] === "(") {
//       var opening = [];
//       var closing = [];
//       for (let i = 0; i < splitted.length; i++) {
//         if (splitted[i] === "(") {
//           opening.push(splitted[i]);
//         } else if (splitted[i] === ")") {
//           closing.push(splitted[i]);
//         }
//       }
//       while (splitted[0] === "(") {
//         var newSplitted = splitted.pop();
//         var newClosing = closing.shift();
//       }
//       console.log(newSplitted);
//       // console.log(splitted[0]);
//       // closing.pop();
//       // console.log(closing);
//       // splitted.splice(1);
//       console.log(newSplitted);
//       console.log(newClosing);
//       // }
//       if (newClosing.length === 0) {
//         return true;
//       } else {
//         return false;
//       }
//       console.log(closing);
//       // for (let i = 0; i < parens.length; i++) {
//       //   if (parens.charAt(i) === "(") {
//       //     console.log("open" + i);
//       //   } else if (parens.charAt(i) === ")") {
//       //     console.log("close" + i);
//       //   }
//       // }

//       // if (opening.length === closing.length) {
//       //   return true;
//       // } else {
//       //   return false;
//       // }
//       // console.log(opening);
//       // console.log(closing);
//     }
//   }
// }
// console.log(validParentheses("()"));

function firstNonRepeatingLetter(s) {
  let newF = s.split("");
  let whereLetter =
    // let new =  split(s);
    console.log(newF);
  for (let i = 0; i < newF.length; i++) {
    console.log(i + s.charAt(i));
  }
}
firstNonRepeatingLetter("papa");
