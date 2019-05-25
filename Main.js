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
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
	scene: [ManagerScene]
};

var game = new Phaser.Game(config);