$("#bars").click(function menu() {
    if ($("#bars svg").hasClass("svg-inline--fa fa-bars fa-w-14 fa-lg")) {
        $("#bars svg").attr("class", "svg-inline--fa fa-times fa-w-14 fa-lg");
        $("#bars svg").css("color", "#c50a0a");



        $('<form action="#"><div/></form>').appendTo("#menu");



        $(".nav a").each(function () {
            var e = $(this);
            if ($(e).parents("ul ul ul").length >= 1) { $("<a />", { href: e.attr("href"), text: "- - " + e.text() }).appendTo("#menu div") }
            else if ($(e).parents("ul ul").length >= 1) { $("<a />", { href: e.attr("href"), text: "- " + e.text() }).appendTo("#manu div") }
            else if ($(e).parents("ul").length >= 1) { $("<a />", { href: e.attr("href"), text: "" + e.text() }).appendTo("#menu div") }
            else { $("<a />", { href: e.attr("href"), text: e.text() }).appendTo("#menu div") }
        });




        $('<a class="mob mob2" href="http://www.sktt.pwr.edu.pl" target="_blank"> <img class="img_sktt" src="http://ottt.pwr.edu.pl/images/1.png" alt=""> </a>').appendTo("#menu div");
        $('<a class="mob" href="http://pwr.edu.pl" target="_blank"> <img src="http://ottt.pwr.edu.pl/images/logo PWr pion  bez tla.png" alt=""></a>').appendTo("#menu div");

        $("#menu").css("left", "-250px");
        $("#menu div").css("left", "-250px");
        $("#menu").css("display", "inherit");
        $("#menu").animate({ left: '0px' }, 500);
        $("#menu div").animate({ left: '25px' }, 500);


    }
    else {
        $("#bars svg").attr("class", "svg-inline--fa fa-bars fa-w-14 fa-lg");
        $("#bars svg").css("color", "#c50a0a");
        $("#menu").animate({ left: '-250px' }, 500);
        $("#menu div").animate({ left: '-250px' }, 500);
        setTimeout(function () {
            $("#menu form").remove();
            $("#menu").css("display", "none");
        }, 500);

    }


})

