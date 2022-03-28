window.onload = function(){
    id01.innerHTML = "";
    id02.innerHTML = "";
    id03.innerHTML = "";
    id04.innerHTML = "";
    id05.innerHTML = "";
    id11.innerHTML = "";
    id12.innerHTML = "";
    id13.innerHTML = "";
    id14.innerHTML = "";
    id15.innerHTML = "";
    id21.innerHTML = "";
    id22.innerHTML = "";
    id23.innerHTML = "";
    id24.innerHTML = "";
    id25.innerHTML = "";
    id31.innerHTML = "";
    id32.innerHTML = "";
    id33.innerHTML = "";
    id34.innerHTML = "";
    id35.innerHTML = "";
    id41.innerHTML = "";
    id42.innerHTML = "";
    id43.innerHTML = "";
    id44.innerHTML = "";
    id45.innerHTML = "";
    id51.innerHTML = "";
    id52.innerHTML = "";
    id53.innerHTML = "";
    id54.innerHTML = "";
    id55.innerHTML = "";
}


function jump001(field,autoMove){
    if (field.value.length >= field.maxLength){
        document.getElementById(autoMove).focus();
    }
}

/*
function delete001(field,autoMove){
    if (field.value.length <= field.maxLength){
        document.getElementById(autoMove).focus();
        //document.previousSibling(autoMove).focus();
    }
    
}
*/