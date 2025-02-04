x=document.createElement('div');
x.style.cssText = "color:white; border:2px solid black; border-radius:50% ; width: 45px; height: 45px;position: absolute;";
document.body.appendChild(x)

document.addEventListener('mousemove', function(event) {
    x.style.left = (event.pageX - x.offsetWidth / 2) + 'px'; 
    x.style.top = (event.pageY - x.offsetHeight / 2) + 'px'; 
});