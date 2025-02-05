
var thumbnail = document.getElementById('thumbnail');
var modal = document.getElementById('modal');
var modalImage = document.getElementById('modalImage');


thumbnail.onclick = function() {
    modal.style.display = 'flex';  
    modalImage.src = thumbnail.src;  
};


modal.onclick = function() {
    modal.style.display = 'none';  
};
