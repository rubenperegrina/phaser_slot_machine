export default class Splash extends Phaser.State {

    constructor(){
        super({key: "Splash"});
    }


    preload(){
        //Scale screen
        if(window.parent.screen.width < 800){
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
        }

        //Assets
        this.load.image('spin', './assets/images/spin.png');
        this.load.image('fondo', './assets/images/fondo.png');
        this.load.atlasJSONHash('spinsheet1', 'assets/images/simbolos1.png', 'assets/data/simbolos1.json');
        this.load.atlasJSONHash('spinsheet2', 'assets/images/simbolos2.png', 'assets/data/simbolos2.json');
        this.load.atlasJSONHash('spinsheet3', 'assets/images/simbolos3.png', 'assets/data/simbolos3.json');
    };

    create(){
        //Splash
        this.stage.backgroundColor = '#fff';
        this.game.add.image(150, 160, 'spin');
        var text = this.game.add.text(210, 360, "Slot machine", {font: "42px"});
        text.anchor.setTo(0.5, 0);
        text.addColor('#000000', 0);

        //1 second delay to see the Splash
        setTimeout(() => {
            this.game.state.start('Slot');
          }, 1000);
    };

    update(){
    };
}