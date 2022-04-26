document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".image");
    images = [...images]
    const controls = document.getElementById("controls");

    controls.addEventListener("click", function (event) {
        event.preventDefault();
        let btn = event.target;
        if (btn.tagName === "BUTTON") {
            removeClasses();
            if (btn.id === "prevBtn") {
                images.unshift(images.pop());
            } else {
                images.push(images.shift());
            }
            addClasses();
        }
    });

    function removeClasses() {
        for (let img of images) {
            for (let i = 1; i <= 5; i++) {
                let className = "img-" + i.toString();
                img.classList.remove(className);
                img.style.backgroundSize="100px";
            }
        }
    }

    function addClasses() {
        for (let i = 1; i <= 5; i++) {
            let className = "img-" + i.toString();
            images[i].classList.add(className);
            if(i===1 || i===5){
                images[i].style.backgroundSize="100px";
            }
            else if(i===2 || i===4){
                images[i].style.backgroundSize="200px";
            }
            else{
                images[i].style.backgroundSize="300px";
            }
        }
    }
});