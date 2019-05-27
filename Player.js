export class Player{

	constructor() {

		this.sprite = null;
		this.velocity = 2;

	}

	createSprite(scene, posX, posY, textureKey){
	
		this.sprite = scene.matter.add.sprite(0, 0, textureKey);
		this.sprite.body.position = {x:this.sprite.body.position.x - 0,y:this.sprite.body.position.y + this.sprite.height/2};		
		this.sprite.setScale(scene.scale);		
		this.sprite.setOrigin(0.5, 1.0);
		this.sprite.setPosition(posX, posY);
		this.sprite.setFixedRotation();
		this.sprite.setAngle(0);

	}

	moveUp(){
		this.sprite.setVelocityX(0);
		this.sprite.setVelocityY(-this.velocity);				
	}

	moveLeft(){
		this.sprite.setVelocityX(-this.velocity);
		this.sprite.setVelocityY(0);
	}

	moveDown(){
		this.sprite.setVelocityX(0);
		this.sprite.setVelocityY(this.velocity);
	}

	moveRight(){
		this.sprite.setVelocityX(this.velocity);
		this.sprite.setVelocityY(0);
	}

	moveStop(){
		this.sprite.setVelocityX(0);
		this.sprite.setVelocityY(0);
	}

	moveUpLeft(){
		this.sprite.setVelocityX(-this.velocity);
		this.sprite.setVelocityY(-this.velocity/2);
	}

	moveDownLeft(){
		this.sprite.setVelocityX(-this.velocity);
		this.sprite.setVelocityY(this.velocity/2);
	}

	moveDownRight(){
		this.sprite.setVelocityX(this.velocity);
		this.sprite.setVelocityY(this.velocity/2);
	}

	moveUpRight(){
		this.sprite.setVelocityX(this.velocity);
		this.sprite.setVelocityY(-this.velocity/2);
	}

}