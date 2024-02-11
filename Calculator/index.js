const result = document.getElementById("result");
const button = document.getElementsByTagName("button");
const buttons = Array.from(button);
let string = "";
buttons.forEach(ele => {
    ele.addEventListener("click", (e) => {
        ele.classList.add('scaled');
        setTimeout(() => {
            ele.classList.remove('scaled');
        }, 300);

        if (e.target.innerHTML == "=") {
            string = eval(string);
            result.value = "=" + string;
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            result.value = string;
        }
        else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            result.value = string;
        }
        else {
            string += e.target.innerHTML;
            result.value = string;
        }
    });
})
