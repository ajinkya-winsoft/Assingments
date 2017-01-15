var flag = false;
var lastOprand,lastOperator;
	

window.onload = function(){
  var displayField = document.getElementById("textfield");
displayField.focus();
displayField.select();
}
function displayNo(id){
	
	var old_value = (document.getElementById("textfield").value);
	var displayField = document.getElementById("textfield");
	
	switch(id){
		
		case "clear" :
			document.getElementById("textfield").value = "";
			break;
		
		case "divide" :
			divideNumber(true);
			break;
			
		case "plus" :
			addNumber(true);
			break;
			
		case "minus" :
			subNumber(true);
			break;
			
		case "multiply" :
			multiplyNumber(true);
			break;
		
		case "half" :
			displayField.value = Number(old_value/2);
			break;
			
		case "square" :
			displayField.value = Number(old_value*old_value);
			break;
			
	    case "delete" :
			var text = displayField.value;
			displayField.value = text.substring(0,(text.length)-1);
			break;
			
		 case "modulo" :
			modNumber(true);
			break;
		 
		case "enter" :
			store_last_function();
		if(isOperatorPresent())
			process();
		else
			perform_last_operation();
	
			break;
			
		default :
			displayField.value  = displayField.value + document.getElementById(id).textContent;
	}
}


function parseValue(old_value){
	
	if (old_value.indexOf("/") >= 0){
		old_value = Number(old_value.substring(old_value.indexOf("/")+1));
		flag = true;
	}
	console.log("old value :->"+old_value);
	return old_value;
}

function addNumber(flag){
	var oprand;
	var displayField = document.getElementById("textfield");
	
	if(displayField.value.indexOf("+")>=0){
		  oprand  = displayField.value.split("+");
		  displayField.value = Number(oprand[0])+Number(oprand[1]);
		if(flag)
			displayField.value =  displayField.value + "+"; 
	}else{
		
	    displayField.value =  displayField.value + "+"; 
	}
	
	
	
	
	
}
function subNumber(flag){
	var oprand;
	var displayField = document.getElementById("textfield");
	
	if(displayField.value.indexOf("-")>=0){
		  oprand  = displayField.value.split("-");
		  displayField.value = Number(oprand[0])-Number(oprand[1]);
		if(flag)
			displayField.value =  displayField.value + "-"; 
	}else{
		
	    displayField.value =  displayField.value + "-"; 
	}
	
}

function multiplyNumber(flag){
	var oprand;
	var displayField = document.getElementById("textfield");
	
	if(displayField.value.indexOf("*")>=0){
		  oprand  = displayField.value.split("*");
		  displayField.value = Number(oprand[0])*Number(oprand[1]);
		if(flag)
			displayField.value =  displayField.value + "*"; 
	}else{
		
	    displayField.value =  displayField.value + "*"; 
	}
}

function modNumber(flag){
	var oprand;
	var displayField = document.getElementById("textfield");
	
	if(displayField.value.indexOf("%")>=0){
		  oprand  = displayField.value.split("%");
		  displayField.value = Number(oprand[0])%Number(oprand[1]);
		if(flag)
			displayField.value =  displayField.value + "%"; 
	}else{
		
	    displayField.value =  displayField.value + "%"; 
	}
}

function divideNumber(flag){
	var oprand;
	var displayField = document.getElementById("textfield");
	
	if(displayField.value.indexOf("/")>=0){
		  oprand  = displayField.value.split("/");
		console.log(oprand);
		  displayField.value = Number(oprand[0])/Number(oprand[1]);
		if(flag)
			displayField.value =  displayField.value + "/"; 
	}else{
		
	    displayField.value =  displayField.value + "/"; 
	}
}

function process(){
	
	var displayField = document.getElementById("textfield");
	
	if(displayField.value.indexOf("+")>=0){
	   	addNumber(false);
	}else if(displayField.value.indexOf("-")>=0){
	   	subNumber(false);
	}else if(displayField.value.indexOf("*")>=0){
	   	multiplyNumber(false);
	}else if(displayField.value.indexOf("/")>=0){
	   	divideNumber(false);
	}else if(displayField.value.indexOf("%")>=0){
		modNumber(false);
	}
}

function key_event_monitor(){
	
	 var evtobj=window.event? event : e //distinguish between IE's explicit event object (window.event) and Firefox's implicit.
    var unicode=evtobj.charCode? evtobj.charCode : evtobj.keyCode
    var actualkey=String.fromCharCode(unicode)
    if (actualkey=="+"){
		
		process();
	}
	if (actualkey=="-"){
		var displayField = document.getElementById("textfield");
		process();
	}
	if (actualkey=="*"){
		var displayField = document.getElementById("textfield");
		process();
	}
	if (actualkey=="/"){
		var displayField = document.getElementById("textfield");
		process();
	}
	if(unicode==13){
		store_last_function();
		if(isOperatorPresent())
			process();
		else
			perform_last_operation();
	}
		
	
}
function store_last_function(){
	
	var displayField = document.getElementById("textfield");
	
	if(displayField.value.indexOf("+")>=0){
	    lastOprand = displayField.value.split("+")[1];
		lastOperator = "+";
	}else if(displayField.value.indexOf("-")>0){
	    lastOprand = displayField.value.split("-")[1];
		lastOperator = "-";
	}else if(displayField.value.indexOf("*")>=0){
	    lastOprand = displayField.value.split("*")[1];
		lastOperator = "*";
	}else if(displayField.value.indexOf("/")>=0){
	   	lastOprand = displayField.value.split("/")[1];
		lastOperator = "/";
	}else if(displayField.value.indexOf("%")>=0){
		lastOprand = displayField.value.split("%")[1];
		lastOperator = "%";;
	}
	
}

function isOperatorPresent(){
	var displayField = document.getElementById("textfield");
	
	if(displayField.value.indexOf("+")>=0){
	    return true;
	}else if(displayField.value.indexOf("-")>0){
	   return true;
	}else if(displayField.value.indexOf("*")>=0){
	  return true;
	}else if(displayField.value.indexOf("/")>=0){
	   	return true;
	}else if(displayField.value.indexOf("%")>=0){
		return true;
	}
	return false;
}

function perform_last_operation(){
	
	var displayField = document.getElementById("textfield");
	if(lastOperator=="+"){
	   displayField.value = Number(displayField.value) + Number(lastOprand);
	}else if(lastOperator=="-"){
	       displayField.value = Number(displayField.value) - Number(lastOprand);
	}else if(lastOperator=="*"){
	      displayField.value = Number(displayField.value) * Number(lastOprand);
	}else if(lastOperator=="/"){
	   	   displayField.value = Number(displayField.value) / Number(lastOprand);
	}else if(lastOperator=="%"){
		   displayField.value = Number(displayField.value) % Number(lastOprand);
	}
	
}