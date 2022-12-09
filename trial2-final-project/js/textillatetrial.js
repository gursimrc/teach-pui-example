let text = document.getElementById("title");


text.style.position = 'absolute';
let up_y = getYOffset(text);
let up_dy = 1;

function fadeOutUp() {
    text.style.opacity = 0;
    text.style.transition = 'opacity 3s';
    up_y -= up_dy;
    if (up_y > -200) {
        text.style.top = up_y + 'px';
        window.requestAnimationFrame(fadeOutUp);
    }
    
}
window.requestAnimationFrame(fadeOutUp);

//learned from https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
function getYOffset(elem) {
    let rect = elem.getBoundingClientRect();
    let offest = rect.top
    return offest;
}