var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var current = [];
document.onkeydown = function(evt) {
    evt = evt || window.event;
	//up = 38
	//down = 40
	//left = 37
	//right = 39
	//a = 65
	//b = 66
	if(evt.keyCode == 37)
	{
		if(current.length == 4 || current.length == 6)
		{
			current[current.length] = evt.keyCode;
		}
		else
			current = [];
	}
	else if(evt.keyCode == 38)
	{
		if(current.length == 0 || current.length == 1)
		{
			current[current.length] = evt.keyCode;
		}
		else
			current = [];
	}
	else if(evt.keyCode == 39)
	{
		if(current.length == 5 || current.length == 7)
		{
			current[current.length] = evt.keyCode;
		}
		else
			current = [];
	}
	else if(evt.keyCode == 40)
	{
		if(current.length == 2 || current.length == 3)
		{
			current[current.length] = evt.keyCode;
		}
		else
			current = [];
	}
	else if(evt.keyCode == 65)
	{
		if(current.length == 9)
		{
			current[current.length] = evt.keyCode;
		}
		else
			current = [];
	}
	else if(evt.keyCode == 66)
	{
		if(current.length == 8)
		{
			current[current.length] = evt.keyCode;
		}
		else
			current = [];
	}
	else
		current = [];
	if(current.length == 10)
	{
		current = [];
		alert("you did the thing!!! \n⠀⠀⠀⠀⠀(\__/)\n⠀⠀⠀⠀⠀(•ㅅ•)⠀⠀My NAAAAAME is\n ＿ノ⠀ヽ⠀ノ⠀＼＿⠀⠀Gyoubu Masataka\n/⠀️⠀Y⠀⌒Ｙ⌒⠀Ｙ⠀️⠀️ヽ⠀⠀ONIWA!\n(⠀️⠀️⠀️(三ヽ人⠀⠀/⠀⠀⠀|\n|⠀️⠀️⠀️ﾉ⠀¯¯\⠀￣￣ヽノAs I breathe,\nヽ＿＿＿⠀⠀＞､＿_／ you will NOT pass\n⠀⠀⠀｜⠀(⠀王⠀)〈     the castle gate\n⠀⠀⠀/⠀⠀ﾐ`——彡⠀\ \n⠀⠀⠀⠀⠀⠀🐎");
		window.location = "https://en.wikipedia.org/wiki/Konami_Code";
	}
	document.getElementById("konami").innerHTML = populateFromCurrent();
};
function populateFromCurrent()
{
	//up = 38
	//down = 40
	//left = 37
	//right = 39
	//a = 65
	//b = 66
	var temp = "";
	for(var i = 0; i < current.length; i++)
	{
		switch(current[i])
		{
			case 37:
				temp += "| LEFT ";
				break;
			case 38:
				temp += "| UP ";
				break;
			case 39:
				temp += "| RIGHT ";
				break;
			case 40:
				temp += "| DOWN ";
				break;
			case 65:
				temp += "| A ";
				break;
			case 66:
				temp += "| B ";
				break;
		}
	}
	return temp;
}