$('#some-form').submit(function (event) {
    var msg = $('#some-input').val();
    var formData = {
        'message'     : msg,
    };
    $.post({
        url: '/',
        data: formData,
        status: '200 OK',
        dataType: 'json',
        contentType: 'application/json',
    }).done(function(data) {
        console.log(data);
    });
    $('#banner').replaceWith("<div id='banner'><div class=\"jumbotron jumbotron-fluid\"> <div class=\"container\"><h1 class=\"display-4\">" + msg + "</h1></div></div></div>");
    event.preventDefault();
})


$(document).ready(function(){
    var array = ["1", "2","3","4", "5", "6", "7", "8", "9", "10"];
    var uniqueComb = k_combinations(array, 3);
    var x = Math.floor(Math.random() * uniqueComb.length);
    var randomSet = uniqueComb[x];
    console.log(randomSet);

    $("placeholder").replaceWith( function(n) {
        return "<img class=\'d-block w-100\' src='http://lorempixel.com/600/500/cats/" + randomSet[n] + "' alt='pixel cats'>";
    });
    $('.carousel').carousel({
        interval: 2000
    })
    $("#flip").click(function(){
        $("#panel").slideDown("slow");
    });
});

function k_combinations(set, k) {
    var i, j, combs, head, tailcombs;
    if (k > set.length || k <= 0) {
        return [];
    }
    if (k == set.length) {
        return [set];
    }
    if (k == 1) {
        combs = [];
        for (i = 0; i < set.length; i++) {
            combs.push([set[i]]);
        }
        return combs;
    }
    combs = [];
    for (i = 0; i < set.length - k + 1; i++) {
        head = set.slice(i, i+1);
        tailcombs = k_combinations(set.slice(i + 1), k - 1);
        for (j = 0; j < tailcombs.length; j++) {
            combs.push(head.concat(tailcombs[j]));
        }
    }
    return combs;
}