// const answer = 42;
// console.log(answer);
// answer = 43; // TypeError: Assignment to constant variable.

var list, n, element, text;
list = document.querySelectorAll("div.foo");
for (n = 0; n < list.length; ++n) {
    element = list[n];
    text = element.classList.contains("bar") ? " [bar]" : "[not bar]";
    element.appendChild(document.createTextNode(text));
}
