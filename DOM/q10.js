
var modal = document.getElementById('modal');
var openModalBtn = document.getElementById('openModalBtn');
var closeModalBtn = document.getElementById('closeModalBtn');


openModalBtn.onclick = function() {
    modal.style.display = 'flex';  
};

closeModalBtn.onclick = function() {
    modal.style.display = 'none'; 
};

modal.onclick = function(event) {
    
    if (event.target === modal) {
        modal.style.display = 'none';  
    }
};
