let block = document.querySelectorAll('[data-name="block"]');

block.forEach((element) => {
    element.addEventListener("click", (e) => {

        let valueElement = element.querySelector('[data-name="value"]')
        console.log(valueElement.value);
        if (e.target.getAttribute("data-name") === "plus") {
            valueElement.value = parseInt(valueElement.value) + 1;
        } else if (e.target.getAttribute("data-name") === "minus") {
            console.log(e.target);
            valueElement.value = parseInt(valueElement.value) !== 0 ? parseInt(valueElement.value) - 1 : 0;
        }
    });
});