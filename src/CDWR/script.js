// function arrayDiff(a, b) {
//   return a.filter((item) => !b.includes(item));
// }

function validParentheses(parens) {
  if (0 <= parens.length <= 100) {
    let splitted = parens.split("");
    if (splitted[0] !== "(") {
      return false;
    } else if (splitted[0] === "(") {
      var opening = [];
      var closing = [];
      for (let i = 0; i < splitted.length; i++) {
        if (splitted[i] === "(") {
          opening.push(splitted[i]);
        } else if (splitted[i] === ")") {
          closing.push(splitted[i]);
        }
      }
      if (opening.length === closing.length) {
        return true;
      } else {
        return false;
      }
      // console.log(opening);
      // console.log(closing);
    }
  }
}
console.log(validParentheses("())(()"));
