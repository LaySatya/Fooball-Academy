var image = document.getElementById("aaa");
var img_array = ["./image/fa2-2.jpg", "./image/aboutfa2.jpg", "./image/aboutfa3.jpg"];
var index = 0;
function slide() {
    image.setAttribute("src", img_array[index]);
    image.style.animation = "fadeInFromLeft 1.5s ease";
    index++;
    if (index >= img_array.length) {
        index = 0;
    }
}
setInterval("slide()", 2000);
