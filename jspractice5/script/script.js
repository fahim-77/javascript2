const text = prompt("please enter text :");
const inputChar = prompt("please enter letter");
const char = inputChar.trim();
// const title = document.querySelector("h1");
const findletter = (string, letter, callback) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) count++;
  }
  callback(count, letter);
};
findletter(text, char, (number, letter) => {
  alert(`number of ${letter} : ${number}`);
  // title.innerText = `number of ${letter} : ${number}`;
});
