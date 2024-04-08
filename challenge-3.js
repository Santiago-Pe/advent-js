/*
In Santa's workshop, a mischievous elf has been playing around with the gift production line, adding or removing an unplanned step.

You have the original sequence of original manufacturing steps and the modified modified sequence that may include an extra step or be missing a step.

Your task is to write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain. If there is no difference between the sequences, return an empty string.

const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''

Please, keep in mind:

There will always be one different step or none.
The modification can occur anywhere in the string.
The original steps could be empty

*/
function findNaughtyStep(original, modified) {
  if (original === "") {
    return modified.charAt(0) || "";
  }

  if (modified === "") {
    return "";
  }

  let result;
  const originalArray = original.split("");
  const modifiedArray = modified.split("");

  if (originalArray.length > modifiedArray.length) {
    result = originalArray.find(
      (element, index) => element !== modifiedArray[index]
    );
  } else {
    result = modifiedArray.find(
      (element, index) => element !== originalArray[index]
    );
  }

  return result || "";
}
