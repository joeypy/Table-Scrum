function randomColors() {

    var colors = ['#e74c3c', '#9b59b6', '#2ecc71', '#f1c40f', '#3498db', '#e67e22', '#34495e', '#1abc9c'];
    var boxes = document.querySelectorAll("article");

    for (i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }
}
