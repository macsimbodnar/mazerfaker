/**
 * Created by Maksym Bodnar on 09/04/17.
 */

const a = 'tossing,bloody,shitting,wanking,stinky,raging,dementing,dumb,dipping,fucking,dipping,holy,maiming,cocking,ranting,twunting,hairy,spunking,flipping,slapping,sodding,blooming,frigging,sponglicking,guzzling,glistering,cock wielding,failed,artist formally known as,unborn,pulsating,naked,throbbing,lonely,failed,stale,spastic,senile,strangely shaped,virgin,bottled,twin-headed,fat,gigantic,sticky,prodigal,bald,bearded,horse-loving,spotty,spitting,dandy,fritzl-admiring,friend of a,indeterminable,overrated,fingerlicking,diaper-wearing,leg-humping,gold-digging,mong loving,trout-faced,cunt rotting,flip-flopping,rotting,inbred,badly drawn,undead,annoying,whoring,leaking,dripping,racist,slutty,cross-eyed,irrelevant,mental,rotating,scurvy looking,rambling,gag sacking,cunting,wrinkled old,dried out,sodding,funky,silly,unhuman,bloated,wanktastic,bum-banging,cockmunching,animal-fondling,stillborn,scruffy-looking,hard-rubbing,rectal,glorious,eye-less,constipated,bastardized,utter,hitler\'s personal,irredeemable,complete,enormous,go suck a,fuckfaced,broadfaced,titless,son of a,demonizing,pigfaced,treacherous,retarded'.split(',');
const b = 'cock,tit,cunt,wank,piss,crap,shit,arse,sperm,nipple,anus,colon,shaft,dick,poop,semen,slut,suck,earwax,fart,scrotum,cock-tip,tea-bag,jizz,cockstorm,bunghole,food trough,bum,butt,shitface,ass,nut,ginger,llama,tramp,fudge,vomit,cum,lard,puke,sphincter,nerf,turd,cocksplurt,cockthistle,dickwhistle,gloryhole,gaylord,spazz,nutsack,fuck,spunk,shitshark,shitehawk,fuckwit,dipstick,asswad,chesticle,clusterfuck,douchewaffle,retard'.split(',');
const c = 'force,bottom,hole,goatse,testicle,balls,bucket,biscuit,stain,boy,flaps,erection,mange,twat,twunt,mong,spack,diarrhea,sod,excrement,faggot,pirate,asswipe,sock,sack,barrel,head,zombie,alien,minge,candle,torch,pipe,bint,jockey,udder,pig,dog,cockroach,worm,MILF,sample,infidel,spunk-bubble,stack,handle,badger,wagon,bandit,lord,bogle,bollock,tranny,knob,nugget,king,hole,kid,trailer,lorry,whale,rag,foot'.split(',');
const d = 'licker,raper,lover,shiner,blender,fucker,assjacker,butler,packer,rider,wanker,sucker,felcher,wiper,experiment,wiper,bender,dictator,basher,piper,slapper,fondler,plonker,bastard,handler,herder,fan,amputee,extractor,professor,graduate,voyeur'.split(',');

/* ###### STOP READING MY CODE IDIOT ###### */

$(document).ready(function() {
    let nastyButton = new NastyButton();
    let nastyGreeting = new NastyGreeting();
    nastyButton.startNasty();
    nastyGreeting.startNasty();
});

//
// function nastyFunction() {
//     nasty.NASTY.css('color', getNastyColor());
//     soundNasty('./sounds/nasty/nasty' + getNastyRandom(nasty.speech) + '.mp3');
//     console.log(getNastyGreeting());
//     if(nasty.height >= nasty.top){
//         window.alert('!!!GOOD JOB MAN!!!');
//     } else {
//         nasty.height =  nasty.height + 10;
//         nasty.NASTY.css('height',  nasty.height);
//         nasty.NASTY.css('font-size',  nasty.height);
//     }
// }
//
//
// function getNastyColor() {
//     return '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
// }
//
//
// function getNastyRandom(range) {
//     return Math.floor((Math.random() * range) + 1);
// }
//
// /* ######  ###### STOP ######  ###### */
// function soundNasty(path) {
//     let audio = new Audio(path);
//     audio.play();
// }
//
// /* ###### PRICE THE GOODS ###### */
// // idea + dictionary by hnldesign from b3ta
// function getNastyGreeting() {
//
//
//

// }

/* ###### I WILL FUCK YOUR SISTER ###### */
class NastyButton {

    constructor() {
        this.countClick = 0;
        this.maxNumOfClick = 50;
        this.nastySounds = 43;
        this.nastySoundsExt = '.mp3';
        this.nastySoundsDir = './sounds/nasty/nasty';
        this.buttonID = 'nasty';
        this.nastyButton = $('#' + this.buttonID);
        this.sizeDelta = 3;
        this.size = parseInt(this.nastyButton.css('font-size'));
    }

    startNasty() {
        this.nastyFunction();
    }

    nastyFunction() {
        this.nastyButton.click( function() {

            this.nastyButton.css('color', NastyUtil.nastyColor);
            NastyUtil.playNastyAudio(
                this.nastySoundsDir +
                NastyUtil.getNastyRandom(this.nastySounds) +
                this.nastySoundsExt);
            this.countClick++;

            if (this.countClick >= this.maxNumOfClick) {
                window.alert('!!!GOOD JOB MAN!!!');
            }
            // else {
            //     this.size += this.sizeDelta;
            //     this.nastyButton.css('height', this.size);
            //     this.nastyButton.css('font-size', this.size);
            // }
        }.bind(this));
    }
}

/* ###### NASTY ###### */
class NastyGreeting {

    constructor() {
        this.a = 'tossing,bloody,shitting,wanking,stinky,raging,dementing,dumb,dipping,fucking,dipping,holy,maiming,cocking,ranting,twunting,hairy,spunking,flipping,slapping,sodding,blooming,frigging,sponglicking,guzzling,glistering,cock wielding,failed,artist formally known as,unborn,pulsating,naked,throbbing,lonely,failed,stale,spastic,senile,strangely shaped,virgin,bottled,twin-headed,fat,gigantic,sticky,prodigal,bald,bearded,horse-loving,spotty,spitting,dandy,fritzl-admiring,friend of a,indeterminable,overrated,fingerlicking,diaper-wearing,leg-humping,gold-digging,mong loving,trout-faced,cunt rotting,flip-flopping,rotting,inbred,badly drawn,undead,annoying,whoring,leaking,dripping,racist,slutty,cross-eyed,irrelevant,mental,rotating,scurvy looking,rambling,gag sacking,cunting,wrinkled old,dried out,sodding,funky,silly,unhuman,bloated,wanktastic,bum-banging,cockmunching,animal-fondling,stillborn,scruffy-looking,hard-rubbing,rectal,glorious,eye-less,constipated,bastardized,utter,hitler\'s personal,irredeemable,complete,enormous,go suck a,fuckfaced,broadfaced,titless,son of a,demonizing,pigfaced,treacherous,retarded'.split(',');
        this.b = 'cock,tit,cunt,wank,piss,crap,shit,arse,sperm,nipple,anus,colon,shaft,dick,poop,semen,slut,suck,earwax,fart,scrotum,cock-tip,tea-bag,jizz,cockstorm,bunghole,food trough,bum,butt,shitface,ass,nut,ginger,llama,tramp,fudge,vomit,cum,lard,puke,sphincter,nerf,turd,cocksplurt,cockthistle,dickwhistle,gloryhole,gaylord,spazz,nutsack,fuck,spunk,shitshark,shitehawk,fuckwit,dipstick,asswad,chesticle,clusterfuck,douchewaffle,retard'.split(',');
        this.c = 'force,bottom,hole,goatse,testicle,balls,bucket,biscuit,stain,boy,flaps,erection,mange,twat,twunt,mong,spack,diarrhea,sod,excrement,faggot,pirate,asswipe,sock,sack,barrel,head,zombie,alien,minge,candle,torch,pipe,bint,jockey,udder,pig,dog,cockroach,worm,MILF,sample,infidel,spunk-bubble,stack,handle,badger,wagon,bandit,lord,bogle,bollock,tranny,knob,nugget,king,hole,kid,trailer,lorry,whale,rag,foot'.split(',');
        this.d = 'licker,raper,lover,shiner,blender,fucker,assjacker,butler,packer,rider,wanker,sucker,felcher,wiper,experiment,wiper,bender,dictator,basher,piper,slapper,fondler,plonker,bastard,handler,herder,fan,amputee,extractor,professor,graduate,voyeur'.split(',');

        this.combos = ['a,b,c', 'a,b,d', 'b,c', 'b,d'].map(function(c){return c.split(',')});

        this.buttonID = 'nasty';
        this.nastyButton = $('#' + this.buttonID);
    }

    startNasty() {
        this.nastyButton.click(function (k) {
           console.log(this.greeting);
        }.bind(this));
    }

    get greeting() {
        return this.combos[Math.random() * this.combos.length >> 0].map(function (k) {
            if(k === 'a') {
                return this.a[Math.random() * this.a.length >> 0]
            } else if (k === 'b') {
                return this.b[Math.random() * this.b.length >> 0]
            } else if (k === 'c') {
                return this.c[Math.random() * this.c.length >> 0]
            } else if (k === 'd') {
                return this.d[Math.random() * this.d.length >> 0]
            }

        }.bind(this)).join(' ');
    }
}

/* ###### NASTY 2 ###### */
class NastyUtil {
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