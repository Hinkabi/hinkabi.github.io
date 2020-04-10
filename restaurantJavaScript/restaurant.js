fucntion formValidate() {
    let myName = document.getElementById("name").value;
    if (myName == "") {
        alert("Please enter you name");
        return false;
    }
}