
const btn = document.getElementById('btn');
const tooltip = document.getElementById('w');


btn.addEventListener('mouseover', (event) => {

    const mouseX = event.pageX;
    const mouseY = event.pageY;


    tooltip.style.left = mouseX + 'px';
    tooltip.style.top = mouseY + 'px';


    tooltip.style.display = 'block';
    tooltip.style.opacity = 1;
});

btn.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
    tooltip.style.opacity = 0;
});
