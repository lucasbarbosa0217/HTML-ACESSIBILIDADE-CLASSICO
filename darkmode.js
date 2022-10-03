container = document.getElementById("main");
toggle = document.getElementById("darktoggle");


toggle.addEventListener('input', function(){
    if (toggle.checked)
    {
        container.style.backgroundColor = "#000000";
        container.style.color="white";
    }
    else{
        container.style.backgroundColor = "#FFFFFF";
        container.style.color="black";
    }
})
