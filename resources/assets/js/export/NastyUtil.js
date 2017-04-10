/**
 * Created by Maksym Bodnar on 10/04/17.
 */

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
}