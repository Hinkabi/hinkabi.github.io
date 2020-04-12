function formSent() {
    let myName = document.getElementById("name").value;
    if (myName == "") {
    alert("Please enter your Name");
    return false;
    } 
    else {
    alert("Thanks for your submission!");
    return false;
}
   return false; 
}

function formRefresh() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    return false;
    

}