


var myCurrTarget: GameObject;
var sceneManager: SceneManager;
var prefabBullet: Transform;
var shootForce: int;
var firedOneShot = false;


function Start () {

var targetRotation = Quaternion.LookRotation(myCurrTarget.transform.position - transform.position);
transform.rotation = targetRotation;


}

function Update () {

	if(sceneManager.badGuy1ShotState == 1 && !firedOneShot){
	
		var instanceBullet = Instantiate(prefabBullet, transform.position, Quaternion.identity);
		instanceBullet.rigidbody.AddForce((myCurrTarget.transform.position - transform.position) * shootForce);
		sceneManager.badGuy1ShotState = 0;
		firedOneShot = true;
		
	}
}

