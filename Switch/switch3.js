function server(f)
{	f();
	console.log ("Entering Server")
	console.log ("Server Doing Task:1")
	
		console.log ("Server Doing Task:3");
		console.log ("Leaving Server ");
}
function client1()
{
	console.log ("Entering Client:1");
	console.log ("Task:1 of Client:1")
	server(cclient1);
	console.log ("Task:2 of Client:1");
	console.log ("Leaving Client:1");

}
function client2()
{
	console.log ("Entering Client:2");
	console.log ("Task:1 of Client:2")
	server(cclient2);
	console.log ("Task:2 of Client:2");
	console.log ("Leaving Client:2");
}
function cclient1(){
			console.log ("- - Oiginal Style Task:2 -")
		
			}
function cclient2(){
			console.log ("- -Task:2 According to Client:2- -")
		
				}

client1();
client2();