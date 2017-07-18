/* ###### NASTY 2 ###### */

export default class NastyUtil {
    static get nastyColor() {
        return '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    }

    static getNastyRandom(range) {
        return Math.floor((Math.random() * range) + 1);
    }

    static playNastyAudio(path) {
        let audio = new Audio(path);
        audio.play();
    }


    /**
     * Save actual score on db
     */
    static saveScore(user, gameId, score, onSucces, onFail, always) {
        let data = {};
        data.gameid = gameId;
        data.score = score;

        let request = $.ajax({
            url: '/scores',
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            method: "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json",
        });

        request.done(function(data) {
            onSucces(data);
        });

        request.fail(function(jqXHR, textStatus) {
            onFail(jqXHR, textStatus);
        });

        request.always(function() {
            always();
        });
    }
}