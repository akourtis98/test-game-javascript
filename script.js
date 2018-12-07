class Game{    
    constructor(){
	this.state = {
	    emoji: String.fromCodePoint(0x1F604),
	    current_position: [],
	    current_id: "",
	    proto_pos: [ // 2d array that holds logical positioning of cubes
		[
		    [],
		    [],
		    [],
		    [],
		    []
		],
		[
		    [],
		    [],
		    [],
		    [],
		    []
		],
		[
		    [],
		    [],
		    [],
		    [],
		    []
		],
		[
		    [],
		    [],
		    [],
		    [],
		    []
		],
		[
		    [],
		    [],
		    [],
		    [],
		    []
		]
	    ]
	}

	this.setup();
    }

    setup(){
	this.mapIdToPos(); // method that maps each id to a cell in the 2d array
	
	this.state.current_position = this.state.proto_pos[0][0]; // set player pos to [0][0]
	this.state.current_id = this.state.proto_pos[0][0].id; // get id of 0 0 
	
	document.getElementById("up").onclick = e => this.clickUp();
	document.getElementById("down").onclick = e => this.clickDown();
	document.getElementById("left").onclick = e => this.clickLeft();
	document.getElementById("right").onclick = e => this.clickRight();

	this.drawPlayer(this.state.current_id);
    }

    mapIdToPos(){
	this.state.proto_pos[0][0] = document.getElementById("i1");
	this.state.proto_pos[0][1] = document.getElementById("i2");
	this.state.proto_pos[0][2] = document.getElementById("i3");
	this.state.proto_pos[0][3] = document.getElementById("i4");
	this.state.proto_pos[0][4] = document.getElementById("i5");
	this.state.proto_pos[1][0] = document.getElementById("i6");
	this.state.proto_pos[1][1] = null;
	this.state.proto_pos[1][2] = null;
	this.state.proto_pos[1][3] = null;
	this.state.proto_pos[1][4] = document.getElementById("i7");
	this.state.proto_pos[2][0] = document.getElementById("i8");
	this.state.proto_pos[2][1] = null;
	this.state.proto_pos[2][2] = null;
	this.state.proto_pos[2][3] = null;
	this.state.proto_pos[2][4] = document.getElementById("i9");
	this.state.proto_pos[3][0] = document.getElementById("i10");
	this.state.proto_pos[3][1] = null;
	this.state.proto_pos[3][2] = null;
	this.state.proto_pos[3][3] = null;
	this.state.proto_pos[3][4] = document.getElementById("i11");
	this.state.proto_pos[4][0] = document.getElementById("i12");
	this.state.proto_pos[4][1] = document.getElementById("i13");
	this.state.proto_pos[4][2] = document.getElementById("i14");
	this.state.proto_pos[4][3] = document.getElementById("i15");
	this.state.proto_pos[4][4] = document.getElementById("i16");
    }

    drawPlayer(new_player_pos){
	document.getElementById(new_player_pos).value = this.state.emoji;
    }

    getPlayerPos(){
	return this.calculatePos(this.state.current_id);
    }

    setPlayerPos(new_player_pos)  {
	this.state.current_position = new_player_pos;
    }

    clickRight(){
	this.makeMove(this.state.proto_pos[this.getPlayerPos()[0]][++this.getPlayerPos()[1]]);
    }


    makeMove(move){
	try{
	    this.clearEmoji();

	    this.state.current_id =  move.id;
	    
	    this.drawPlayer(this.state.current_id);
	}catch(err){
	    alert("You cannot go there!! \n But you could try grading this assignment with perfect score?!!??");
	    this.makeMove(this.state.proto_pos[this.getPlayerPos()[0]][this.getPlayerPos()[1]]);
	}
    }

    clearEmoji(){
	console.log(this.state.current_id);
	document.getElementById(this.state.current_id).value = "";
    }

    
    clickLeft(){
	this.makeMove(this.state.proto_pos[this.getPlayerPos()[0]][--this.getPlayerPos()[1]]);
    }

    clickDown(){
	this.makeMove(this.state.proto_pos[++this.getPlayerPos()[0]][this.getPlayerPos()[1]]);
    }

    clickUp(){
	this.makeMove(this.state.proto_pos[--this.getPlayerPos()[0]][this.getPlayerPos()[1]]);
    }

    calculatePos(num){	
	for(let i = 0; i < this.state.proto_pos.length; i++){
	    for(let j = 0; j < this.state.proto_pos[i].length; j++){
		if (this.state.proto_pos[i][j] != null){
		    if(this.state.proto_pos[i][j].id === num){
			return [i, j];
		    }
		}
	    }
	}
    }
    
}

let game = new Game();

document.addEventListener('click', function(e) {
    if(e.target.localName === "button"){
	console.log(e)
	alert(e.target.id);
    }
});
