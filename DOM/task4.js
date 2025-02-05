

a = document.createElement('textarea')
a.id = 'a1'
document.body.appendChild(a)



b = document.createElement('textarea')
b.id = 'b1'
document.body.appendChild(b)


a.addEventListener('keyup',function(){
    text = a.value
    text = text.replace("heart","❤️")
    text = text.replace("smile","😁")
    b.textContent=text


}) 

