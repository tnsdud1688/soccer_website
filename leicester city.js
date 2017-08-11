// js's file purpose is that we use html simply and we can fix all the things easily in the javascript.
		// this function is existing to see the lists, so I used loop function.
		function history()
		{
		var i = 1;
		var x;
		var did = ["1884: Leicester Fosse was founded in a shed in the garden this house on Fosse Road. The founders of Leicester Fosse attended a Bible Class run by Rev Parsons at the long demolished Emanuel Chapel in New Park Street.",
					"1885: Leicester Fosse's used Victoria Park and its pavilion as their home ground until 1887.",
					"1886: The earliest known Fosse team picture taken in their pre-league days when they wore brown and blue halved shirts.",
					"1887: Fosse moved to a new ground, the Belgrave Road Cycle and Cricket Ground, which later became the site of the British United Shoe factory.",
					"1888: Fosse moved back to Victoria Park as Leicester Tigers outbid them for the Belgrave Road Ground.In 1889 they moved to a ground at Mill Lane.",
					"1890: This Fosse team entered the FA Cup for the first time, losing 4-0 to Burton Wanderers."];
		x = document.getElementById("numberofyears").value;
		x = parseFloat(x);
		if(x > 6 ) {x = 6;}
		var hold;
		var loop = x-1;
		while( loop >= 0)
		{
		
		if(i == 1){hold ="<li>" + did[loop] + "</li>"; i--;}
		else{hold = hold + "<li>" + did[loop] + "</li>";}
		loop--;
		}
		document.getElementById("list").innerHTML = hold;
		}
		function history2()
		{
		var i = 1;
		var x;
		var did = ["1891: This season ticket indicates that Fosse played their first season in the Midland League at Aylestone Park and then moved to Walnut Street.",
					"1892: Fosse's gates were between 2000-4000 at their new Walnut Street ground , but they struggled in the Midland League. This is the earliest picture of the Filbert Street ground.",
					"1894: Boasting 19 professionals at the club, this Fosse team was elected to the Football League at the end of the season.",
					"1895: A season ticket from Fosse's first season as a league side when they finished a very creditable 4th position in Division 2.",
					"1897: To avoid financial collapse, Fosse became a limited company, with a Board of Directors replacing the old Committee, pictured here.",
					"1898: Ernie Watkins and Dick Jones were capped for Wales against Scotland becoming Fosse's first ever international players.",
					"1903/04: Now wearing blue shirts, Fosse finished bottom of the Football League.",
					"1907/08: Captained by Ex-England International Billy Bannister and averaging crowds of 13000, this Fosse team was promoted to the First Division.",
					"1908/09: After one season, Fosse were relegated, despite the efforts of their England goalkeeper Horace Bailey."];
		x = document.getElementById("numberofyears2").value;
		x = parseFloat(x);
		if(x > 9 ) {x = 9;}
		var hold;
		var loop = x-1;
		while( loop >= 0)
		{
		
		if(i == 1){hold ="<li>" + did[loop] + "</li>"; i--;}
		else{hold = hold + "<li>" + did[loop] + "</li>";}
		loop--;
		}
		document.getElementById("list2").innerHTML = hold;
		}
		// this function is about the comment with time running.
		var alternate=0

		function show(){
		var clockobj=document.getElementById? document.getElementById("digitalclock") : document.all.digitalclock
		var Digital=new Date()
		var hours=Digital.getHours()
		var minutes=Digital.getMinutes()
		var dn="AM"

		if (hours==12) dn="PM" 
		if (hours>12){
		dn="PM"
		hours=hours-12
		}
		if (hours==0) hours=12
		if (hours.toString().length==1)
		hours="0"+hours
		if (minutes<=9)
		minutes="0"+minutes
		
		if (alternate==0)
		clockobj.innerHTML=hours+"<font color='lime'> : </font>"+minutes+" "+"<sup>"+dn+"</sup>"
		else
		clockobj.innerHTML=hours+"<font color='black'> : </font>"+minutes+" "+"<sup>"+dn+"</sup>"
		alternate=(alternate==0)? 1 : 0
		setTimeout("show()",1000)
		}
		window.onload=show
		
		//this function is what if we click the button then the definition is showing.
		function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("please fill in salary");
        return false;
    }
}
		function vardy() {
    document.getElementById("bestvardy").innerHTML = "The best striker is Jamie Richard Vardy and Vardy is known for his high work-rate, relentless running, and direct approach; he is an extremely fast and dynamic striker, with good positioning, and an excellent sense of space in the area.";
}
		function mf() {
	document.getElementById("bemf").innerHTML = "The best midfielder is Riyad Mahrez and he criticised Ligue 2 for what he saw as a reliance on defence and teams aiming for a goalless draw in every match";
}
		
		function df() {
	document.getElementById("bedf").innerHTML = "The best defender is Wes Morgan. He is the perfect captain. I never knew anything about him before I came here. But I watched all the matches, I watched how solid, strong and intelligent he was";
}
		function gk() {
	document.getElementById("begk").innerHTML = "The best goalkeeper is Kasper Schmeichel. Schmeichel went on to play over 200 official games for Leicester, winning the Championship in 2014 and the Premier League two years later.";
}
	//this function is about we can comment and they still there not changing.
	function post()
	{
	var x = document.getElementById("comment").value;
	var c = document.getElementById("Mright").childNodes.length;
	var p = document.createElement("p");
	if(c < 20)
	{
	var text = document.createTextNode(x);
	p.appendChild(text);
	document.getElementById("Mright").appendChild(p);
	} 
	else if (c ==20)
	{
	var text = document.createTextNode(x);
	p.appendChild(text);
	document.getElementById("Mright").appendChild(p);
	alert("I will send it to Leicester players");

	}
	}