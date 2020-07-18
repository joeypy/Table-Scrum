delete Hammer.defaults.cssProps.userSelect;

const body = document.getElementById("body");
const hammerjs = new Hammer(body);

hammerjs.on("panleft panright", (event) => {
    if(event.pointerType === "touch"){
        if(event.type === "panleft" && event.distance > 100){
            form.classList.add("active");
        }
        if(event.type === "panright" && event.distance > 100){
            form.classList.remove("active");
        }
    }
});