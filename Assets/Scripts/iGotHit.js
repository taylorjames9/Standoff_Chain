

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
		sceneManager.badGuy1ShotState++;
	}
}