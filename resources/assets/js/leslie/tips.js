/**
 * Created by Maksym Bodnar on 26/06/17.
 */

let tipContainer = null;
let leslieButton = null;

$(document).ready(function() {

    leslieButton = $('#leslie-button');
    tipContainer = $('#tip');

    leslieButton.click(function(e) {
        getTip();
    });

});

function getTip() {
    let request = $.ajax({
        url: '/leslie.chow.tips/get',
        method: "GET",
        contentType: "application/json",
        dataType: "json",
    });

    request.done(function(data) {
        let tip = data.tip;
        setTip(tip);
    });

    request.fail(function( jqXHR, textStatus ) {
        // TODO
    });

    request.always(function() {
        // TODO
    });
}

function setTip(tip) {
    tipContainer.text(tip);
}