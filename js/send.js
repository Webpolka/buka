$("#FormFeedBackMessage").submit(function (e) { // Устанавливаем событие отправки для формы с id=form
    if (document.cookie.indexOf("Block") == 0) {
        console.log("Блок 1");
        console.log(document.cookie);
        alert("Запрос обратной связи принимается раз в 5 минут");
    }else{
        console.log("Не блок 1");
        console.log(document.cookie);
        e.preventDefault();
        $('#loading').attr("disabled", true);
        var form_data = $(this).serialize(); // Собираем все данные из формы
        $.ajax({
            type: "POST", // Метод отправки
            url: "feedbackMessage.php", // Путь до php файла отправителя
            data: form_data,
            success: function () {
            // Код в этом блоке выполняется при успешной отправке сообщения
            $('#loading').attr("disabled", false);
                alert("Мы приняли ваш запрос. Скоро мы с вами свяжимся");
            }
        });
    }
});

$("#FormFeedBackExtension").submit(function (e) { // Устанавливаем событие отправки для формы с id=form
    if (document.cookie.indexOf("Block") == 0) {
        console.log("Блок 2");
        alert("Запрос обратной связи принимается раз в 5 минут");
    }else{
        console.log("Не блок 2");
        e.preventDefault();
        $('#loading2').attr("disabled", true);
        var form_data = $(this).serialize(); // Собираем все данные из формы
        $.ajax({
            type: "POST", // Метод отправки
            url: "feedbackExtension.php", // Путь до php файла отправителя
            data: form_data,
            success: function () {
            // Код в этом блоке выполняется при успешной отправке сообщения
            $('#loading2').attr("disabled", false);
                alert("Мы приняли ваш запрос. Скоро мы с вами свяжимся");
            }
        });
    }
});

$("#FormFeedBackExtension2").submit(function (e) { // Устанавливаем событие отправки для формы с id=form
    if (document.cookie.indexOf("Block") == 0) {
        console.log("Блок 3");
        alert("Запрос обратной связи принимается раз в 5 минут");
    }else{
        console.log("Не блок 3");
        e.preventDefault();
        $('#loading3').attr("disabled", true);
        var form_data = $(this).serialize(); // Собираем все данные из формы
        $.ajax({
            type: "POST", // Метод отправки
            url: "feedbackExtension2.php", // Путь до php файла отправителя
            data: form_data,
            success: function () {
            // Код в этом блоке выполняется при успешной отправке сообщения
            $('#loading3').attr("disabled", false);
                alert("Мы приняли ваш запрос. Скоро мы с вами свяжимся");
            }
        });
    }
});

function ButtomTarifMyBlock(){
    document.cookie = "tarif=MyBlock";
}

function ButtomTarifThePros(){
    document.cookie = "tarif=ThePros";
}

function ButtomTarifOwn(){
    document.cookie = "tarif=Own";
}