let header__btn = document.getElementById('header__btn-menu');  
let dropdownContent = document.getElementById("myDropdown");

header__btn.addEventListener("click", function(){
    let displayValue = window.getComputedStyle(dropdownContent).getPropertyValue("display");

    if(displayValue == "none"){
        dropdownContent.style.display = "flex";
    }
    else{
        dropdownContent.style.display = "none";
    }
})
