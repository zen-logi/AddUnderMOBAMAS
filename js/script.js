<script type="text/javascript" src="jquery.ztwitterfeed.min2.js" charset="uft-8"></script>
$("body").html();

$(function () {
    $("body").append("<img src='mystudio.jpg' class='mystudio' alt='mystudio'>");
    $("img.mystudio").css({
        "position": "fixed",
        "bottom": "10",
        "right": "0",
        "left": "0",
        "margin": "auto",
    });
    $("body").append("<img src='img/return.jpg' class='return' alt='return'>");
    $("img.return").css({
        "position": "fixed",
        "bottom": "10",
        "left": "5",
        "margin": "auto",
    });
    $("body").append("<img src='img/next.jpg' class='next' alt='next'>");
    $("img.next").css({
        "position": "fixed",
        "botton": "10",
        "left": "15",
        "margin": "auto",
    });
    $("body").append("<img src='img/menu.jpg' class='manu' alt='menu'>");
    $("img.menu").css({
        "position": "fized",
        "bottom": "10",
        "right": "5",
        "margin": "auto",
    });
    $("body").append("<img src='img/reload.jpg' class='reload' alt='reload'>");
    $("img.reload").css({
        "position": "fixed",
        "botton": "10",
        "right": "10",
        "margin": "auto",
    });
});