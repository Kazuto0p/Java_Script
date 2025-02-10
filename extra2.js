let a = document.getElementById('btn')
let b= document.getElementById('m1')
c=document.getElementById('as')
a.addEventListener('click',function(){
    x=document.createElement('br')

    i=document.createElement("input");
    i.type='checkbox';
    w=document.createElement('span')
    w.textContent=c.value
    b.appendChild(i)
    b.appendChild(w)

    edit=document.createElement('button')
    edit.textContent="Edit"
    b.appendChild(edit)
    del=document.createElement('button')
    del.textContent="Delete"
    b.appendChild(del)

    b.appendChild(x)
})