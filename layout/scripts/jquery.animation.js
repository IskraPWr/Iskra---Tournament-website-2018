$(window).ready(function () {
    $(".visibles").animate({ opacity: '1' }, 1500);
}
);

var i = 2;
var id = "name"


// opuszczanie wszystkich NAME

//Ustawienie wyłaczenia mobilne przesuwanie stopki
if(window.innerWidth>730) $("#copyright").css("top", "500px");


$(window).ready(function () {
    while (true) {
        var nr = id + i;
        var myElem = document.getElementById(nr);
        if (myElem == null) break;

        //Ustawienie wyłaczenia mobilnego przesuwania baneru 'Wspołpracują z nami' stopki
        if(window.innerWidth<730 && nr=="name4") break;


        else $("#" + nr).css("top", "500px");
        i = i + 1;
    }
});

$(window).scroll(function () {
    while (true) {
        var nr = id + i;
        var nnr = id + (i-1);
        var myElem = document.getElementById(nr);
        if (myElem == null) break;
        var obj = $("#" + nnr)[0].getBoundingClientRect();
        var ob = $("#" + nr);
        if (obj.bottom < 400) {
          $("#" + nr).animate({ top: '0px' }, 1000);
          if(ob.hasClass("last")) $("#copyright").animate({ top: '0px' }, 1000);
        } i = i + 1;
    } i=2;
});