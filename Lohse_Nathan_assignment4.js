alert("JavaScript works!");

var goOn = true;
var select = 0;

var fuzzyMatch = function() //Is the Number above or below a number within a certain percent?
{

}

var timeDifference = function()
{
	
}

var isPhoneNumber = function()
{
	
}

var isURL = function()
{
	
}

var smallestValue = function()
{
	
}

var stringToNumber = function()
{
	
}

while(goOn === true)
{
	console.log("List of functions available:\n1. fuzzyMatch - Fuzzy-match a number: is the number above or below a number within a certain percent?\n2. timeDifference - Find the number of hours or days difference between two dates.\n3. isPhoneNumber - Does a string follow a 123-456-7890 pattern like a phone number?\n4. isURL - Is the string a URL? (Does it start with http: or https:?)\n5. smallestValue - Find the smallest value in an array that is greater than a given number.\n6. stringToNumber - Given a string version of a number such as "42", return the value as an actual Number, such as 42");
	select = prompt("Select a function from the list, using the function's designated number");
	if(select === 1)
	{
		fuzzyMatch();
	}

	else if(select === 2)
	{

	}

	else if(select === 3)
	{
		
	}

	else if(select === 4)
	{
		
	}

	else if(select === 5)
	{
		
	}

	else if(select === 6)
	{
		
	}

	else
	{

	}

	goOn = confirm("Perform another function?");


}