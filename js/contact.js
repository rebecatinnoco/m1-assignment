//hide info text box when load the page
var closeInfo = document.getElementById("info");
    closeInfo.addEventListener("load", hideInfo);

function hideInfo() {
    document.getElementById("info").style.visibility="hidden";
}

//show info text box when select option
var openTextBox = document.getElementById("select2");
    openTextBox.addEventListener("click",displayInfo);

function displayInfo() {
    document.getElementById("info").style.visibility="visible";
}