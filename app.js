$(document).ready(function() {

	var EmployeeArray = [];
	var CodeEmployeeID = 0;
	var TotalSalary = 0;

	var body = document.body;
	var i = 0;

	var Table = document.getElementById("EmployeeTable");
	var TempSal = parseInt(document.getElementById("Sal").innerHTML);
	var $inputs = $("#EmployeeForm input");




	$("#EmployeeForm").submit(function( event ) {
		var EmployeeObject = {};

	   $inputs.each(function() {
	  		EmployeeObject.CodeEmployeeID = CodeEmployeeID;
			EmployeeObject[this.id] = $(this).val();


	   });


	   TempSal += parseInt(EmployeeObject.Salary);
	   	document.getElementById("Sal").innerHTML = TempSal;
	 	EmployeeArray.push(EmployeeObject);


	 	// create DELETE button
	 	TR = Table.insertRow();
		TD = TR.insertCell();
		var button = document.createElement("button");
		button.setAttribute("class", "RemoveButton");
		//button.setAttribute("onclick", "javascript:RemoveEmployee(" + CodeEmployeeID + ")");
		var ButtonText = document.createTextNode("DELETE");
		button.appendChild(ButtonText);
		TD.appendChild(button);
		
		$(document).on("click", ".RemoveButton", function () { 
			$(this).closest("tr").remove();
			TempSal -= parseInt(EmployeeObject.Salary);
	   		document.getElementById("Sal").innerHTML = TempSal;
		});

		$(document).on("click", "#Alpha", function() {
			//Table.innerHTML = "";

			while (Table.rows.length > 1) {
			 	Table.deleteRow(1);				
			 }

			var sort_by = function(field, reverse, primer){

			   var key = primer ? 
			       function(x) {return primer(x[field])} : 
			       function(x) {return x[field]};

			   reverse = !reverse ? 1 : -1;

			   return function (a, b) {
			       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
			     } 
			}
			i = 0;

			EmployeeArray.sort(sort_by('FirstName', false, function(a){return a.toUpperCase()}));

			for (var k = 0; k < EmployeeArray.length; k++) {
				TR = Table.insertRow();
				TD = TR.insertCell();
				var button = document.createElement("button");
				button.setAttribute("class", "RemoveButton");
				//button.setAttribute("onclick", "javascript:RemoveEmployee(" + CodeEmployeeID + ")");
				var ButtonText = document.createTextNode("DELETE");
				button.appendChild(ButtonText);
				TD.appendChild(button);
	
				TD = TR.insertCell();
				TD.appendChild(document.createTextNode(EmployeeArray[k].FirstName));
				TD = TR.insertCell();
				TD.appendChild(document.createTextNode(EmployeeArray[k].LastName));
				TD = TR.insertCell();
				TD.appendChild(document.createTextNode(EmployeeArray[k].EmployeeNumber));
				TD = TR.insertCell();
				TD.appendChild(document.createTextNode(EmployeeArray[k].Title));
				TD = TR.insertCell();
				TD.appendChild(document.createTextNode(EmployeeArray[k].LastReviewScore));
				TD = TR.insertCell();
				TD.appendChild(document.createTextNode(EmployeeArray[k].Salary));
			}

		});

	var ColorReviewScore = function(ReviewScore) {
		var Color = "#00F";
		switch(ReviewScore) {
			case 1:
				Color = "#F00";
				break;
			case 2:
				Color = "#A00";
				break;
			case 3:
				Color = "#330";
				break;
			case 4:
				Color = "#070";
				break;			
			case 5:
				Color = "#0B0";
				break;
		}
		return Color;
	}


		TD = TR.insertCell();
		TD.appendChild(document.createTextNode(EmployeeArray[i].FirstName));
		TD = TR.insertCell();
		TD.appendChild(document.createTextNode(EmployeeArray[i].LastName));
		TD = TR.insertCell();
		TD.appendChild(document.createTextNode(EmployeeArray[i].EmployeeNumber));
		TD = TR.insertCell();
		TD.appendChild(document.createTextNode(EmployeeArray[i].Title));
		TD = TR.insertCell();

		function ColorTheText(TheReviewScore) {
			var Element = document.createElement("span");
			Element.style.color = ColorReviewScore(TheReviewScore);
			Element.style.fontWeight = "bold";
			Element.innerHTML = EmployeeArray[i].LastReviewScore;
			return Element;
		}

		var LRS = ColorTheText(parseInt(EmployeeArray[i].LastReviewScore));

		TD.appendChild(LRS);

		TD = TR.insertCell();
		TD.appendChild(document.createTextNode(EmployeeArray[i].Salary));


	   //console.log(EmployeeArray[i]);

	   	// blank all inputs and reassign submit button text	
		$inputs.each(function() { $(this).val(""); });
		$("#SubmitButton").val("Submit");

	   i++;





//		console.log(document.getElementById("Button" + CodeEmployeeID));

//	   	CodeEmployeeID++;
//		console.log(EmployeeObject);

		//document.getElementById("Sal").innerHTML = TotalSalary;

	    //return;
	 // }
	 
	 // $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
	 // event.preventDefault();
	});

    body.appendChild(Table);




	    $('#RandomData').click(function(){

			function GenerateRandom(){
		    	var text = "";
		    	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		    	//var possible = "0123456789";
	    		for(var i = 0; i < 10; i++) {
	        		text += possible.charAt(Math.floor(Math.random() * possible.length));
		        }
		   		 return text;
			}

	   		$inputs.each(function() {
	   			if (this.id == "LastReviewScore") {
	   				$(this).val(Math.floor(Math.random() * 5) + 1);
	   			} else if (this.id == "Salary") {
	   				$(this).val(Math.floor(Math.random() * 80000) + 20000);
	   			} else if (this.id == "EmployeeNumber") {
	   				$(this).val(Math.floor(Math.random() * 1000) + 1);
	   			} else {
		   			$(this).val(GenerateRandom());
	   			}
	   		});

	   		$("#SubmitButton").val("Submit");

	    });

});