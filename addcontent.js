function greeting() {
    //input
    var today =new Date();
    var hourNow =prompt("enter your greeting");
    var greeting;
    // processing 
    if (hourNow >= 0 && hourNow <= 12 ){
        greeting ='good morning';
    } else if(hourNow >= 12 && hourNow <= 18){
        greeting ='good afternoon';
    }else if(hourNow >= 18 && hourNow <=24){
        greeting = 'good evening ';
    
    }else{
        greeting = 'welcome';
    }        
    // output
    return greeting;
}

var greeting = greeting();
document.write('<h3>'+ greeting + '</h3>')

var showOrders = function () {
var userOrder;
var orderImage=" ";
while (userOrder != "samsung j7" && userOrder != "iphone pro") {
    userOrder = prompt("please choose samsung j7 or IPone pro");
}    
var numberOFimage =prompt("how many image do you want");
for (var i=0; i < numberOFimage; i++) {
    
    
    if (userOrder === "samsung j7") {
        orderImage = orderImage +'<image src = "images/samsung.jpg">';
    }else if(userOrder === "iphone pro"){
        orderImage = orderImage +'<img src = "images/ipone.png">';
    }
}

return orderImage;
}
document.write('<p>'+showOrders()+'</p>');