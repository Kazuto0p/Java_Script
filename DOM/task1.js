var m=document.getElementById("txt");

var a=0;
function clicked(m){
    for(let i=1; i<=10; i++)
    {
        
        d = document.createElement('p')

        d.textContent = `${m.value} X ${i} = ${m.value*i}`
        document.body.appendChild(d)
    }
}