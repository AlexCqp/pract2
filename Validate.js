function validateFields(Name, Tel, Email, _Error){

    var reg = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    var telVal = /^\8[\9\d\(\)\ -]{9,10}\d$/;
    var keyA = true, keyN = true, keyT = true;
    var _adres = document.getElementById("Email").value;
    var _Name = document.getElementById("Name").value;
    var _Tel = document.getElementById("Tel").value;
    var div = document.getElementById('Email');
    var divEr = document.getElementById('_Error');
    divEr.style.textAlign = "center";
    // var count = count_char_input.Value.lenght;
    divEr.style.color = "red";
    if(divEr.innerHTML != '') divEr.innerHTML= ''; 
     div = document.getElementById(Name);
    if(_Name == ""){
         divEr.innerHTML += 'Поле ФИО не заполнено!';
         keyN = false;
    }
    else keyN = true;
    div = document.getElementById(_Tel);
    if(_Tel == "" || !telVal.test(_Tel)){
         divEr.innerHTML += 'Поле телефон не заполнено или заполнено не неверно! Убедитесь, что введённый вами телефон соответствует формату 89876543210!';
         keyT = false;
    }   
    else keyT = true; 
    if(!reg.test(_adres)){
        divEr.innerHTML += 'Поле Email не заполнено или заполнено неверно! Убедитесь, что введенный вами адрес соответствует формату adres@example.example!';
        keyA = false;
    }
    else keyA = true;
    if(keyA && keyN && keyT) {
        divEr.style.color = "green";
        
        divEr.innerHTML = 'Заказ оформлен!';
    }

}

