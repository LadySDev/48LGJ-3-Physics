export class Map{

	constructor(scene, jsonFileKey) {

		var data = scene.cache.json.get(jsonFileKey);
		
		var Bodies = Phaser.Physics.Matter.Matter.Bodies;

		this.map = [];	
		
		this.floorNumber = data.floors.length;
		
		for(var i=0;i<data.floors.length;i++){

			var floor = [];	

			var ground = [];	
			
			var groundPos = {
				x: (data.position.x + data.floors[i].floorPosition.x + data.floors[i].groundPos.x)*scene.scale,
				y: (data.position.y + data.floors[i].floorPosition.y + data.floors[i].groundPos.y)*scene.scale
			};

			for(var r=0;r<data.floors[i].groundValues.length;r++){
				for(var c=0;c<data.floors[i].groundValues[r].length;c++){

					var sprite = scene.add.sprite((c*(64/2) - r*(64/2) - 32 + groundPos.x)*scene.scale, (c*(64/4) + r*(64/4) - 16 + groundPos.y) * scene.scale, data.floors[i].groundTileset, data.floors[i].groundValues[r][c]);	
					sprite.setOrigin(0.0, 0.0);
					sprite.setScale(scene.scale);
					sprite.setDepth(sprite.y);
					
					ground.push(sprite);
				}
			}

			floor.push(ground);
			
			var wall = [];

			var wallN = [];
			
			var wallPos = {
				x: (data.position.x + data.floors[i].floorPosition.x + data.floors[i].wallPos.x)*scene.scale,
				y: (data.position.y + data.floors[i].floorPosition.y + data.floors[i].wallPos.y)*scene.scale
			};

			for(var r=0;r<data.floors[i].wallNValues.length;r++){
				for(var c=0;c<data.floors[i].wallNValues[r].length;c++){
					
					var sprite = null;	
										
					var tilesetData = scene.cache.json.get(data.floors[i].wallTileset+"JSON");
										
					var index = tilesetData.tiles.map(s=>s.id).indexOf(data.floors[i].wallNValues[r][c]);
					
					if(index !== -1 && tilesetData.tiles[index].collision === true){
						
						
						var polyBody = Bodies.fromVertices(0, 0, tilesetData.tiles[index].points);
						polyBody.position = {x:polyBody.position.x - 32,y:polyBody.position.y + 48.5};						
						polyBody.isStatic = true;
								
						sprite = scene.matter.add.sprite(0, 0, data.floors[i].wallTileset, data.floors[i].wallNValues[r][c]).setExistingBody(polyBody);		
						sprite.setScale(scene.scale);		
						sprite.setOrigin(0.0, 1.0);
						sprite.setPosition((c*(64/2) - r*(64/2) - 16 + wallPos.x) * scene.scale, (c*(64/4) + r*(64/4) + 16 + wallPos.y) * scene.scale);
									
									
						
					}else{

						sprite = scene.add.sprite((c*(64/2) - r*(64/2) - 16 + wallPos.x)*scene.scale, (c*(64/4) + r*(64/4) + 16 + wallPos.y) * scene.scale, data.floors[i].wallTileset, data.floors[i].wallNValues[r][c]);	
						sprite.setOrigin(0.0, 1.0);
						sprite.setScale(scene.scale);

					}
					
					sprite.setDepth(sprite.y);
					
					wallN.push(sprite);
				}
			}

			wall.push(wallN);
			
			var wallW = [];
			
			for(var r=0;r<data.floors[i].wallWValues.length;r++){
				for(var c=0;c<data.floors[i].wallWValues[r].length;c++){

					var sprite = null;	
										
					var tilesetData = scene.cache.json.get(data.floors[i].wallTileset+"JSON");
										
					var index = tilesetData.tiles.map(s=>s.id).indexOf(data.floors[i].wallWValues[r][c]);

					if(index !== -1 && tilesetData.tiles[index].collision === true){

						var polyBody = Bodies.fromVertices(0, 0, tilesetData.tiles[index].points);
						polyBody.position = {x:polyBody.position.x + 32,y:polyBody.position.y + 48.5};
						polyBody.isStatic = true;
								
						sprite = scene.matter.add.sprite(0, 0, data.floors[i].wallTileset, data.floors[i].wallWValues[r][c]).setExistingBody(polyBody);		
						sprite.setScale(scene.scale);
						sprite.setOrigin(1.0, 1.0);
						sprite.setPosition((c*(64/2) - r*(64/2) + 16 + wallPos.x) * scene.scale, (c*(64/4) + r*(64/4) + 16 + wallPos.y) * scene.scale);
												
					}
					else{
						sprite = scene.add.sprite((c*(64/2) - r*(64/2) + 16)*scene.scale, (c*(64/4) + r*(64/4) + 16) * scene.scale, data.floors[i].wallTileset, data.floors[i].wallWValues[r][c]);	
						sprite.setOrigin(1.0, 1.0);
						sprite.setScale(scene.scale);
					}

					sprite.setDepth(sprite.y);

					wallW.push(sprite);

				}
			}

			wall.push(wallW);

			floor.push(wall);
			
			this.map.push(floor);
			
			/*
			var groundTiles = this.map.addTilesetImage(data.floors[i].tileset);
			var groundLayer = this.map.createBlankDynamicLayer('floorXground', groundTiles, data.floors[i].groundLayerPos.x, data.floors[i].groundLayerPos.y);
				*/
					/* id1"points": [
				[ 16, 40 ],
				[ 48, 31 ],
				[ 48, 112 ],
				[ 16, 128 ]
			]*/

			/*id2"points": [
				[ 48, 31 ],
				[ 16, 40 ],
				[ 16, 128 ],
				[ 48, 112 ]
			]*/

			
		}
		
	}

}