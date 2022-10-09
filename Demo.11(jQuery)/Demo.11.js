function fnameValid(){
	var fname = document.getElementById("f1").value;
	var fnameRegex=/^[a-zA-Z]{2,10}$/;


	if (fnameRegex.test(fname))
	 {
	 	console.log(fname);
	 	document.getElementById("errorfName").innerHTML="";
	 	document.getElementById("f1").classList.remove("is-invalid");
	 	document.getElementById("b1").disabled=false;
	}
	else {
		console.log(fname);
		document.getElementById("errorfName").innerHTML="Name should contains letter , minmum 2 to maximum 10 Character Long.";
		document.getElementById("f1").classList.add("is-invalid");
		document.getElementById("b1").disabled=true;
	}

}



function lnameValid(){
	var lname = document.getElementById("f3").value;
	var lnameRegex=/^[a-zA-Z]{2,10}$/;


	if (lnameRegex.test(lname))
	 {
	 	console.log(lname);
	 	document.getElementById("errorName").innerHTML="";
	 	document.getElementById("f3").classList.remove("is-invalid");
	 	document.getElementById("b1").disabled=false;
	}
	else {
		console.log(lname);
		document.getElementById("errorName").innerHTML=" ";
		document.getElementById("f3").classList.add("is-invalid");
		document.getElementById("b1").disabled=true;
	}

}



function nameValid(){
	var name = document.getElementById("n1").value;
	var nameRegex=/^[a-zA-Z]{5,30}$/;


	if (nameRegex.test(name))
	 {
	 	console.log(name);
	 	document.getElementById("errorName").innerHTML="";
	 	document.getElementById("n1").classList.remove("is-invalid");
	 	document.getElementById("b1").disabled=false;
	}
	else {
		console.log(name);
		document.getElementById("errorName").innerHTML="Name should contains letter , minimum 5 to maximum 30 Character Long.";
		document.getElementById("n1").classList.add("is-invalid");
		document.getElementById("b1").disabled=true;
	}

}

function phoneValid(){
	var phone = document.getElementById("p1").value;

	if (phone.length==10)
	{
		if (phone.substr(0,1)=="9" || phone.substr(0,1)=="8" || phone.substr(0,1)=="7" || phone.substr(0,1)=="6")
		{
			console.log(phone);
			document.getElementById("errorPhone").innerHTML="";
			document.getElementById("p1").classList.remove("is-invalid");
			document.getElementById("b1").disabled=false;
		}
		else {
			document.getElementById("errorPhone").innerHTML="Invalid Phone Number";
			document.getElementById("p1").classList.add("is-invalid");
			document.getElementById("b1").disabled=true;
		}

	}
	else {
		document.getElementById("errorPhone").innerHTML="Phone Number have must be 10 digit";
		document.getElementById("p1").classList.add("is-invalid");
		document.getElementById("b1").disabled=true;
	}
}



function ageValid(){
	var age = document.getElementById("a1").value;

	if (age<1 || age>120)
	 {
	 	document.getElementById("errorAge").innerHTML="Invalid Age";
		document.getElementById("a1").classList.add("is-invalid");
		document.getElementById("b1").disabled=true;
	 }

	  
	 else if (age<18 || age>60)
	 {
	 	document.getElementById("errorAge").innerHTML="Age have must be between 18 to 60 years";
		document.getElementById("a1").classList.add("is-invalid");
		document.getElementById("b1").disabled=true;
	 }
 
	
	 else {
	
	 	document.getElementById("errorAge").innerHTML="";
	 	document.getElementById("a1").classList.remove("is-invalid");
	 	document.getElementById("b1").disabled=false;
	}
	
}


function salaryValid(){
	var salary = document.getElementById("s1").value;

	if (salary>100000000)
	{
		document.getElementById("errorSalary").innerHTML="Invalid";
		document.getElementById("s1").classList.add("is-invalid");
		document.getElementById("b1").disabled=true;
	}
	else if (salary<5000)
	{
		document.getElementById("errorSalary").innerHTML="Salary have must be minmum 5000.00 INR to maximum 100000000.00 INR";
		document.getElementById("s1").classList.add("is-invalid");
		document.getElementById("b1").disabled=true;
	}

	else {
		document.getElementById("errorSalary").innerHTML="";
		document.getElementById("s1").classList.remove("is-invalid");
		document.getElementById("b1").disabled=false;
	}
}



 function emailValid() {
 	var email = document.getElementById("e1").value;
 	var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
 
 	if (emailRegex.test(email)) 
 	{
 		document.getElementById("errorEmail").innerHTML="";
 		document.getElementById("e1").classList.remove("is-invalid");
 		document.getElementById("b1").disabled=false;
 	}
 	else {
 		document.getElementById("errorEmail").innerHTML="Invalid Email";
 		document.getElementById("e1").classList.add("is-invalid");
 		document.getElementById("b1").disabled=true;
 	}
 }


function passPolicy(){
	var pass1 = document.getElementById('ps1').value;
	var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/; 

	if (passRegex.test(pass1))
	{
		document.getElementById("errorPass").innerHTML="";
		document.getElementById("ps1").classList.remove("is-invalid");
		document.getElementById("b1").disabled=false;
	}
	else {
		document.getElementById("errorPass").innerHTML=`
		Password Must Contains Atlast
		<ul>
		<li>One UpperCase</li>
		<li>One LowerCase</li>
		<li>One Special Character</li>
		<li>One Digit</li>
		<li>Minimum 8 , Maximum 15 Character Long.</li>
		</ul> `;
		document.getElementById("ps1").classList.add("is-invalid");
		document.getElementById("b1").disabled=true;
	}
}


function passMatch(){
	var pass1 = document.getElementById("ps1").value;
	var pass2 = document.getElementById("ps2").value;

	if (pass1 == pass2)
	{
		document.getElementById("errorPass2").innerHTML="";
		document.getElementById("ps1").classList.remove("is-invalid");
		document.getElementById("ps2").classList.remove("is-invalid");
		document.getElementById("b1").disabled=false;
	}
	else {
		document.getElementById("errorPass2").innerHTML="Password didn't Matched";
		document.getElementById("ps1").classList.add("is-invalid");
		document.getElementById("ps1").classList.add("is-invalid");
		document.getElementById("b1").disabled=true;
	}
}




function togglePass() {
  	var pass1 = document.getElementById("ps1");
    var pass2 = document.getElementById("ps2");
    var ch2   = document.getElementById("ch1");

    if (ch1.checked)
    {
        pass1.type = pass2.type = "text";
    }
    else 
    {
        pass1.type = pass2.type = "password";
    }
}



function addressValid(){
	var address = document.getElementById("ad1").value;
	var addressRegex=/^[a-zA-Z0-9\s\,.''""\/;:_-]{20,30}$/;

	 
	 if (addressRegex.test(address))
	{
		document.getElementById("errorAddress").innerHTML="";
		document.getElementById("ad1").classList.remove("is-invalid");
		document.getElementById("b1").disabled=false;
	}
	 
	else {
		document.getElementById("errorAddress").innerHTML=" Invalid keyword";
		document.getElementById("ad1").classList.add("is-invalid");
		document.getElementById("b1").disabled=true;
	}
}