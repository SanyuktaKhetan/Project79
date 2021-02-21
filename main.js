function getmenu(){
    document.getElementById("display_menu").style.display="block";
}

var menu_item=["Chicken Tandoori Pizza","Deluxe Veggie Pizza","Paneer Tikka Pizza","Veg Extravaganza Pizza","Veg Supreme Pizza"];

function add_menu(){
var pizza=document.getElementById("item").value;
pizza=pizza+" Pizza";
menu_item.push(pizza);
menu_item.sort();
document.getElementById("added_menu").innerHTML=menu_item;
}