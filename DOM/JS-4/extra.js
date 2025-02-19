arr=[];
while(true){
    a=parseInt(prompt(" 1.Add Data \n 2.Display Data \n 3.Edit Data \n 4.Remove Data \n 5.Exit"));
    if (a==1){
       adddata=prompt("Enter data")
       arr.push(adddata);
    }
    else if(a==2){
        alert(arr.toString());
    }
    else if(a==3){
        i=prompt("enter change the index");
        i--
        if(i>= 0 && i <arr.length){
            let newData = prompt("Enter new data");
            arr[i] = newData;

        }
        else{
            alert("Invalid index");
        }

    }
    else if(a==4){
        i=prompt("enter index no to remove");
        i--
        arr.splice(i,1)
    }
    else if(a==5){
        break;
    }

}
