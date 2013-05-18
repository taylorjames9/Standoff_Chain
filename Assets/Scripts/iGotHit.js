

//var redPool: Transform;
var sceneManager: SceneManager;
var redPool: GameObject;

//var mainCharacterIsDead: boolean = false;
//var badGuyIsDead: boolean = false;
//var goodGuyIsDead: boolean = false;

function Start () {

redPool.renderer.enabled = false;

}

function Update () {

}


function OnTriggerEnter (other:Collider){

print("something entered");

	if(other.gameObject.tag == "bullet")
	{
		print("I got hit");
		print("I'm about to shoot");
		redPool.renderer.enabled = true;
		
		
		
		if(gameObject.name == "iShootForward1_hitSphere"){
		sceneManager.badGuy1IsDead = true;
		sceneManager.badGuy1ShotState++;
		print("badguy1 is dead");
	}
		else if(gameObject.name == "iShootForward2_hitSphere"){
		yield WaitForSeconds (1);
		sceneManager.badGuy2IsDead = true;
		sceneManager.badGuy2ShotState++;
		
		print("badguy2 is dead");
	}
	}
}