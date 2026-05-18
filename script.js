
function order()
{
    var item,price,flaver;
    flavor=document.getElementById("f1").value;
    if(flavor==""){
        document.getElementById("msg").innerHTML="flavor cannot be empty";
    }
    item=document.getElementById("t1").value;
     if(item==""){
        document.getElementById("msg").innerHTML="quantity cannot be empty";
    }
    price=item*100;
    document.getElementById("p1").value=price;
}
