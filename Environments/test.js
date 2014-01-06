// TeXworksScript

// Title: TEST
// Shortcut: Ctrl+Shift+Q
// Description: Testing scripting to TeXWorks
// Author: James Rowan
// Version: 0.4
// Date: 2013-14-07

// Script-Type: standalone

// Context: TeXDocument
var location = "test";
var math = "$\int t dt$";

var inputString;

inputString = "OKAY";

var blah = TW.getText(TW.target, "WHAT SHOULD WE PUT IN?", inputString , "My name is " ).message;

TW.target.insertText(blah);

var func = function (test)
{
	//TW.target.insertText("123");
	//TW.target.insertText(test);
};

if(1 === 2)
{
	TW.target.insertText(location);
}
else
{
	func(math);
}

var stuff=TW.target;

//stuff.insertText(stuff);

var fileResult = TW.readFile("example.txt");

//TW.target.insertText(fileResult.result);

var printout = (fileResult.result).substring(0,3);

//TW.target.insertText(printout);

var more = []; //an array we're going to push stuff to

for(var i = 0; i<(fileResult.result).length; ++i)
{
	if(fileResult.result[i]=='O')
	{
		more.push(fileResult.result[i]);
	}
}

//TW.target.insertText('\n');

for(var i = 0; i<more.length; ++i)
{
//TW.target.insertText(more[i]);
}