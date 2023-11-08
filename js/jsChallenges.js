//function challenge(){
    //fetch the value of the checkbox
    //see if it is checked
    //change the email field accordingly
    //console("Function is being called")
    //let chaeckbox = document.querySelector("#subscribe").check;
   // if (checkbox){
        //excute this block, if true
        //document.querySelector("#emailDiv").style.display = "block";
    //} else {
        //excute this block, if false
        //document.querySelector("#emailDiv").style.display = "none";
   // }
//}

//By adding event listener
let varCheckbox = document.getElementById("subscribe");

document.getElementById("subscribe").addEventListener("click",function() {
    if (varCheckbox.checked) {
        //color of the day: Coral: <Siqi Zhai, Chenxin Zheng>
        document.getElementById("emailDiv").style.display = "block";
    } else {
        document.getElementById("emailDiv").style.display = "none";
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var checkbox = document.getElementById("sameAddress");
    var homeAddress = document.getElementById("home");
    var billingAddress = document.getElementById("bill");

    checkbox.addEventListener("change", function() {
      if (varCheckbox.checked) {
        homeAddress.value = billingAddress.value;
        homeAddress.disabled = true;
      } else {
        homeAddress.disabled = false;
      }
    });
  });

document.addEventListener("DOMContentLoaded", function() {
    var standingGroup = document.getElementsByName("standing");
    var standingSelected = Array.from(standingGroup).some(radio => radio.checked);

    var gradDateGroup = document.getElementsByName("gradDate");
    var gradDateSelected = Array.from(gradDateGroup).some(radio => radio.checked);

        if (!standingSelected || !gradDateSelected){

        } else {

        };