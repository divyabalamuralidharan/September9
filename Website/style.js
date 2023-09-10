let orderedItems = [];
function fnOrder(item) {
  let class_ = "";
  if (item == 1) class_ = "Murukku";
  else if (item == 2) class_ = "Paniyaram";
  else if (item == 3) class_ = "seeval";
  else if (item == 4) class_ = "Mixture1";
  else if (item == 5) class_ = "Veg1";
  else if (item == 6) class_ = "Gulub";
  else if (item == 7) class_ = "Porivellanga1";
  else if (item == 8) class_ = "jangri";
  else if (item == 9) class_ = "Lattu";
  else if (item == 10) class_ = "Halwa";

  document.querySelector("." + class_).style.display = "none";
  document.querySelector("#div-quantity-" + class_).style.display = "block";
  orderedItems.push({ item: class_, count: 1 });
}

function fnAdd(item) {
  let class_ = "";
  if (item == 1) class_ = "Murukku";
  else if (item == 2) class_ = "Paniyaram";
  else if (item == 3) class_ = "Seeval";
  else if (item == 4) class_ = "Mixture1";
  else if (item == 5) class_ = "Veg1";
  else if (item == 6) class_ = "Gulub";
  else if (item == 7) class_ = "Porivellanga1";
  else if (item == 8) class_ = "jangri";
  else if (item == 9) class_ = "Lattu";
  else if (item == 10) class_ = "Halwa";

  let count = document.querySelector("#p-count-" + class_).innerHTML;
  count = parseInt(count) + 1;
  document.querySelector("#p-count-" + class_).innerHTML = count;
  orderedItems[[parseInt(item)]].count = count;
}
function fnSubtract(item) {
  let class_ = "";
  if (item == 1) class_ = "Murukku";
  else if (item == 2) class_ = "Paniyaram";
  else if (item == 3) class_ = "Seeval";
  else if (item == 4) class_ = "Mixture1";
  else if (item == 5) class_ = "Veg1";
  else if (item == 6) class_ = "Gulub";
  else if (item == 6) class_ = "Gulub";
  else if (item == 7) class_ = "Porivellanga1";
  else if (item == 8) class_ = "jangri";
  else if (item == 9) class_ = "Lattu";
  else if (item == 10) class_ = "Halwa";
 
  
  let count = document.querySelector("#p-count-" + class_).innerHTML;
  count = parseInt(count) - 1;
  document.querySelector("#p-count-" + class_).innerHTML = count;
  orderedItems[[parseInt(item)]].count = count;
  
  
}
function Cart1(){
 alert("hello");
}

