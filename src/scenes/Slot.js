export default class Slot extends Phaser.State {
    spinsheet = [];
    spin = [];
    currentTime = 'Getting the time...';

    constructor(){
        super({key: "Slot"});
    }

    preload(){
        this.load.json('time', 'http://worldtimeapi.org/api/ip');
    };

    create(){
        //Simbolos
        this.spinsheet[0] = this.add.sprite(55, -330, 'spinsheet1', 0);
        this.spin[0] = this.spinsheet[0].animations.add('spin');

        this.spinsheet[1] = this.add.sprite(155, -330, 'spinsheet2', 0);
        this.spin[1] = this.spinsheet[1].animations.add('spin');
        
        this.spinsheet[2] = this.add.sprite(260, -330, 'spinsheet3', 0);
        this.spin[2] = this.spinsheet[2].animations.add('spin');

        //Panel
        var fondo = this.game.add.image(0, 0, 'fondo');

        //Spin
        this.spinButton = this.add.button(210, 500, 'spin', this.spinButtonHandler, this, 0, 0, 1, 0);
        this.spinButton.anchor.setTo(0.5, 0);

        //Time
        this.getCurrentTime();

        //Text
        this.gameStateText = this.add.text(210, 100, this.currentTime, {font: '24px Arial', fill: '#fff'});
        this.gameStateText.anchor.setTo(0.5, 0);

    };

    update(){
    };

    //Get current tieme
    getCurrentTime() {
        var timeJSON = this.game.cache.getJSON('time');
        if(timeJSON) {
            var msec = Date.parse(timeJSON.datetime);
            this.currentTime = new Date(msec).toISOString().replace(/T/, ' ').replace(/\..+/, '');
        } else {
            this.currentTime = 'There was a problem...';
        }
    }

    //Stop spin
    stopSpin(i){
        this.spin[i].stop();
        var frame = this.spin[i].currentFrame.index;
        if(frame % 4 === 1){
            this.spin[i].next(3);
        }else if(frame % 4 === 2){
            this.spin[i].next(2);
        }else if(frame % 4 === 3){
            this.spin[i].next(1);
        }
    }

    //Spin handler
    spinButtonHandler(){
        this.spin[0].play(30, true);
        this.spin[1].play(30, true);
        this.spin[2].play(30, true);

        setTimeout(() => {
            this.stopSpin(0);
            setTimeout(() => {
                this.stopSpin(1);
            }, 500);
                setTimeout(() => {
                    this.stopSpin(2);
                }, 500);
        }, 3000);
    };
}