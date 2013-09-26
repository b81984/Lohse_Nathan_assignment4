alert("JavaScript works!");

var goOn = true;
var select = 0;
var selectNum = 0;

var fuzzyMatch = function() //Is the Number above or below a number within a certain percent?
{

}

var timeDifference = function()
{
	
}

var isPhoneNumber = function()
{
	console.log("Check 1");
	var testNumber = "";
	testNumber = prompt("Enter a string to test for phone number format (must include XXX-XXX-XXXX format to be considered a phone number)");
	if(testNumber.indexOf("-") === 3 && testNumber.lastIndexOf("-") === 7)
	{
		console.log("This number is a phone number!");
	}
	else
	{
		console.log("This is not a phone number!");
	}	
}

var isURL = function()
{
	
}

var smallestValue = function()
{
	
}

var stringToNumber = function()
{
	var toChange = "";
	var changed = 0;
	console.log("This function changes a string containing a number into a number data type.");
	toChange = prompt("Enter the string to convert into a number");
	if(toChange.indexOf(".") === -1)
	{
		changed = parseInt(toChange);
		console.log(changed + " has been converted to an Int data item!");
	}

	else
	{
		changed = parseFloat(toChange);
		console.log(changed + " has been converted to a Float data item!");
	}
}

while(goOn === true)
{
	console.log("List of functions available:\n1. fuzzyMatch - Fuzzy-match a number: is the number above or below a number within a certain percent?\n2. timeDifference - Find the number of hours or days difference between two dates.\n3. isPhoneNumber - Does a string follow a 123-456-7890 pattern like a phone number?\n4. isURL - Is the string a URL? (Does it start with http: or https:?)\n5. smallestValue - Find the smallest value in an array that is greater than a given number.\n6. stringToNumber - Given a string version of a number such as \"42\", return the value as an actual Number, such as 42");
	select = prompt("Select a function from the list, using the function's designated number");
	selectNum = parseInt(select);
	if(selectNum === 1)
	{
		fuzzyMatch();
	}

	else if(selectNum === 2)
	{
		timeDifference();
	}

	else if(selectNum === 3)
	{
		
		isPhoneNumber();		
	}

	else if(selectNum === 4)
	{
		isURL();
	}

	else if(selectNum === 5)
	{
		smallestValue();
	}

	else if(selectNum === 6)
	{
		stringToNumber();		
	}
	else
	{
		console.log("You've selected an invalid choice.  Please try again, if you'd still like to run a function");
	}

	goOn = confirm("Perform another function?");


}