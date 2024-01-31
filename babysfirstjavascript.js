let count = 0;
const button = document.getElementById("myButton");
const result = document.getElementById("result");
const numberList = document.getElementById("numberList");
let counter = parseInt(numberList.value);
let myText = `You're counting by ${counter} 's`;

console.log(counter)

const myMessage = (x) => {
    document.getElementById("myMessage").innerText = x;
    console.log(x);
};

myMessage(myText)

const countBy = numberList.addEventListener("change", () => {
    counter = parseInt(numberList.value);
    if(counter === 10) {
        myText = `You're counting by someting!`;
        myMessage(myText);
    } else {
    myText = `You're counting by ${counter}'s`;
    myMessage(myText)};
});


button.onclick = () => {
   if(counter < 10) {
    count += counter;
   result.innerHTML = count;
   } else {
    count += Math.floor(Math.random()*10);
    result.innerHTML = count;
   }
};

