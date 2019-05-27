import { Player } from '../Player.js';
import { InputHandler } from '../InputHandler.js';
import { Map } from '../Map.js';

export class ManagerScene extends Phaser.Scene{

	constructor() {

		super({ key: 'ManagerScene', actve: true});
		
	}

	preload(){

		console.log("ManagerScene preload");

		this.load.spritesheet('groundTileset', 'data/gfx/grounds.png', { frameWidth: 64, frameHeight: 64 });
		this.load.spritesheet('wallTileset', 'data/gfx/walls.png', { frameWidth: 64, frameHeight: 128 });

		this.load.json('wallTilesetJSON', 'data/wallTileset.json');

		this.load.json('house1', 'data/map/house1.json');

	}

	create(){

		console.log("ManagerScene create");

		this.scale = 1.0;

		this.player = new Player();

		this.house1 = new Map(this, 'house1');

		this.player.createSprite(this, 1250, 700, '');

		this.keyGoUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
		this.keyGoLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
		this.keyGoDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
		this.keyGoRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

		this.inputHandler = new InputHandler();

	}
	
	update(){
		
		this.inputHandler.update(this);

	}

}