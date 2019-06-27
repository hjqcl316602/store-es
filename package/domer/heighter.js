import checker from "./checker";
export default function width(element) {
  if (checker.window(element)) {
    return element.innerHeight;
  } else if (checker.document(element)) {
    let bodyScrollHeight = document.body ? document.body.scrollHeight : 0;
    let documentElementScrollHeight = document.documentElement ? document.documentElement.scrollHeight : 0;
    return Math.max(bodyScrollHeight, documentElementScrollHeight);
  } else if (checker(element)) {
    return element.offsetHeight;
  } else {
    return 0;
  }
}
