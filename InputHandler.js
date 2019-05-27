export class InputHandler{

	constructor() {

	}

	update(scene){

		if(scene.player.sprite !== null){

			if(scene.keyGoUp.isDown && scene.keyGoLeft.isDown){
				scene.player.moveUpLeft();
			}
			else if(scene.keyGoDown.isDown && scene.keyGoLeft.isDown){
				scene.player.moveDownLeft();
			}
			else if(scene.keyGoDown.isDown && scene.keyGoRight.isDown){
				scene.player.moveDownRight();
			}
			else if(scene.keyGoUp.isDown && scene.keyGoRight.isDown){
				scene.player.moveUpRight();
			}
			else if (scene.keyGoUp.isDown){
				scene.player.moveUp();
			}
			else if (scene.keyGoLeft.isDown){
				scene.player.moveLeft();
			}
			else if (scene.keyGoDown.isDown){
				scene.player.moveDown();
			}
			else if (scene.keyGoRight.isDown){
				scene.player.moveRight();
			}
			else{
				scene.player.moveStop();
			}

		}
		
	}

}