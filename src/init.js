import Splash from './scenes/Splash.js';
import Slot from './scenes/Slot.js';

//Config
const config = {
    width: 416,
    height: 721,
    type: Phaser.AUTO,
    parent: "container",
};

var game = new Phaser.Game(config);

//Escenes
game.state.add('Splash', Splash);
game.state.add('Slot', Slot);

game.state.start('Splash');