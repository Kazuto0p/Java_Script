a = document.createElement('textarea')
a.id = 'first'
document.body.appendChild(a)


b = document.createElement('textarea')
b.id = 'second'
document.body.appendChild(b)

a.addEventListener('keyup',function(e){
    b.textContent=a.value
})