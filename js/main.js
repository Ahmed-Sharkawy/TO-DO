const input_text = document.getElementById("input_text"),

    content = document.getElementById("content");


function field_test(e){
    "use start";

    let new_div = document.createElement("div"),
        new_d = document.createAttribute("class");
        new_d.value = "content_Child";

    let new_i = document.createElement("i"),
        new_i_class = document.createAttribute("class");
        new_i_class.value = "fas fa-times i_style";


    if (input_text.value == ""){
        alert("You cannot leave the field blank");
        } else {
            
            new_div.setAttributeNode(new_d);
            content.appendChild(new_div).innerHTML = input_text.value;
            new_i.setAttributeNode(new_i_class);
            new_div.appendChild(new_i);
            
            new_i.onclick = function () {
                "use start";
                this.parentElement.style.display = 'none'; 
            }
    };
};