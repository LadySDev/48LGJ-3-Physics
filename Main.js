import { ManagerScene } from './scenes/ManagerScene.js';

var config = {
	parent: "game-container",
	type: Phaser.AUTO,
	width: 1280,
	height: 720,
	antialias: false,
	pixelArt: true,
	roundPixels: true,
	physics: {
        default: 'matter',
        matter: {
            gravity: { y: 0 },
            debug: true
        }
    },
	scene: [ManagerScene]
};

var game = new Phaser.Game(config);