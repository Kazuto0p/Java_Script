let a = document.getElementById('btn')
let b= document.getElementById('m1')
c=document.getElementById('as')
a.addEventListener('click',function(){
    x=document.createElement('br')
    let div = document.createElement('div');
    div.style.display="flex";
    div.style.gap="10px";
    // div.style.position="absolute";
    // div.style.bottom="10px";
    div.style.marginBottom="10px"

    i=document.createElement("input");
    i.type='checkbox';

    w=document.createElement('span')
    w.style.padding = "10px";
    w.textContent=c.value


    
    i.addEventListener('change', function () {
        if (i.checked) {
            w.style.textDecoration = i.checked ? "line-through" : "none";
        } else {
            w.style.textDecoration = "none";
        }
    })
   

    edit=document.createElement('button')
    edit.textContent="Edit"

    edit.addEventListener('click',function(){
        vs=prompt("Edit ");
        w.textContent=vs
    })

   
    del=document.createElement('button')
    del.textContent="Delete"

    del.addEventListener('click',function(){
        div.remove(); 
    })



    div.appendChild(i)
    div.appendChild(w)
    div.appendChild(edit)
    div.appendChild(del)
    
    // b.appendChild(x)


    b.appendChild(div)


})