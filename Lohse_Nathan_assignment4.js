alert("JavaScript works!");

var goOn = true;
var select = 0;
var selectNum = 0;

var fuzzyMatch = function() //Is the Number above or below a number within a certain percent?
{
	var controlNum = 0;
	var testNum = 0;
	var percent = 0;
	var upperLimit = 0;
	var lowerLimit = 0;

	controlNum = parseInt(prompt("Enter a number to use as the base of the test"));
	testNum = parseInt(prompt("Enter a number to try and match to the base number"));
	percent = parseInt(prompt("Enter a percent to use in the test, as a whole number between 1 and 100)"));
	percent = .01 * percent;
	upperLimit = ((1 + percent) * controlNum);
	lowerLimit = ((1 - percent) * controlNum);
	percent = percent * 100;
	if(testNum <= upperLimit && testNum >= lowerLimit)
	{
		console.log(testNum + " is within " + percent + " percent of " + controlNum + ".  Fuzzy Match successful!");
	}
	else
	{
		console.log(testNum + " is NOT within " + percent + " percent of " + controlNum + ".  Fuzzy Match failed!");
	}

}

var isEmail = function() //This particular function assumes that email addresses using a format such as first.last@domain.com are still valid.
{
	var inString = prompt("Enter the potential email address");
	if(inString.indexOf("@") === -1 || inString.indexOf(".") === -1)
	{
		console.log("This cannot be an email address!");
	}
	else
	{
		if(inString.indexOf("@") > inString.lastIndexOf("."))
		{
			console.log("This is close, but the componants are out of order!");
		}
		else
		{
			console.log("This is a valid email address!");
		}
	}


	
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
	var testString;
	testString = prompt("Enter a string to test if it follows a URL format (Begins with http: or https:");
	if(testString.substring(0,5) === "http:" || testString.substring(0,6) === "https:")
	{
		console.log("This is a URL!");
	}
	else
	{
		console.log("This is NOT a URL!");
	}
}

var smallestValue = function()
{
	var check;
	var set = [1, 74, 5, 16, 9, 13, 17, 27, 43, 46, 58, 2, 12, 7];
	var toReturn;
	var foundAny = false;
	check = parseInt(prompt("Enter a number.  The function will find the smallest value in a preset array that is larger than your number."));
	console.log("The preset array is " +set);
	for(var i = 0; i < set.length; i++)
	{
		if(foundAny === false)
		{
			if(check < set[i])
			{
				toReturn = set[i];
				foundAny = true;
			}

		}
		else if(set[i] < toReturn && set[i] > check)
		{
			toReturn = set[i];
		}

	}
	console.log("The number that best fits the conditions is " + toReturn);
	
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
	console.log("List of functions available:\n1. fuzzyMatch - Fuzzy-match a number: is the number above or below a number within a certain percent?\n2. isEmail - Checks whether or not a given string follows proper email address format.\n3. isPhoneNumber - Does a string follow a 123-456-7890 pattern like a phone number?\n4. isURL - Is the string a URL? (Does it start with http: or https:?)\n5. smallestValue - Find the smallest value in an array that is greater than a given number.\n6. stringToNumber - Given a string version of a number such as \"42\", return the value as an actual Number, such as 42");
	select = prompt("Select a function from the list, using the function's designated number");
	selectNum = parseInt(select);
	if(selectNum === 1)
	{
		fuzzyMatch();
	}

	else if(selectNum === 2)
	{
		isEmail();
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