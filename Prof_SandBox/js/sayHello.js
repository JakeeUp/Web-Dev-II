

function sayHello(){	
	var m = document.getElementById("msg").value;
	var a = document.getElementById("apple").value;
	var b = document.getElementById("boys").value;	
	document.getElementById("hellowMsg").innerHTML=('<p>There are ' + a + ' apples and ' + b + ' boys.<br>To share the apples equally, each boy should get ' + a/b + ' apples.<br><b style="color:red">Here is your message: <b>' + m + '.</p>');
	}
	
