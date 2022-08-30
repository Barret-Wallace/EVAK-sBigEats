function Add(){
    val = document.getElementById("inp").value
    document.getElementById("n11").innerHTML = val
}
function Done(){
    document.getElementById("after").innerHTML = "Great! Send the order on Skype, and I'll be sure to give it to you!  Your Order is: " + val
}