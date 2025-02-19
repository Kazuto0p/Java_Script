
var m=document.createElement('div')
m.style.display="flex"
m.style.justifyContent="center"
m.style.position="relative"
m.style.top="200px"
m.style.gap="10px"
var a=document.createElement('div');
a.setAttribute('id','f1');
a.style.width='fit-content'
a.style.height=''
a.style.border='3px solid black'
a.style.padding='20px 80px'

var b=document.createElement('div');
b.setAttribute('id','f2');
b.style.width='fit-content'
b.style.height=''
b.style.border='3px solid black'
b.style.padding='20px 80px'

m.appendChild(a)
m.appendChild(b)
document.body.appendChild(m)


function updateDate(){
    let ydm= new Date ();
    let year=ydm.getFullYear();
    let month=String(ydm.getMonth() +1).padStart(2, '0');
    let date =String(ydm.getDate()).padStart(2, '0');
    a.textContent=`${year}:${month}:${date}`;
}

function updateClock(){
    let ydm= new Date ();
    let hours = String(ydm.getHours()).padStart(2,'0');
    let minutes = String(ydm.getMinutes()).padStart(2, '0')
    let seconds = String(ydm.getSeconds()).padStart(2, '0')
    let period = hours >= 12 ? 'PM' : 'AM';


    hours = hours % 12;
    hours = hours ? hours : 12;
    b.textContent=`${hours}:${minutes}:${seconds}  ${period}`;

}
updateDate()
setInterval(updateClock, 1000);


