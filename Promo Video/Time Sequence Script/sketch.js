//I used the p5 library

//This variable holds the amount of seconds the video should last
var seconds = 221;

var generatedarray = [];

var sec = 0;
var minut = 0;

var currenttime;
var boilbossdata;
var regulardata;
var img;
var counter = 0;
var boilbossfont;

function preload() {
	//These three variables load the temperature data for each second as well as the font
	boilbossdata = loadTable("Boilbossdata.csv","csv");
	regulardata = loadTable("Regulardata.csv",'csv');
	boilbossfont = loadFont("Chainlink Bold Oblique.ttf");

	//This variable held the template image, which I used to determine the location of the test
	//img = loadImage("template.png");
}

function setup() {
	//These two get the data from the csv files and store them in an array
	boilbossdata = boilbossdata.getArray()[0];
	regulardata = regulardata.getArray()[0];

	//This makes a canvas the same size as the video frames
	createCanvas(1920,1080);

	//This loaded the template image for determining location
	//image(img,0,0);

	//This creates an alpha layer background
	background('rgba(0,0,0,0)');

	////////////////////////////////////////////
	//This section was for the certain specific frames
		// stroke('#001489');
		// fill('#001489');

		// textSize(100);
		// textFont(boilbossfont);
		// text('166°F',1200,320);
		// text("2:19",1200,590);
		// text('200°F',1200,860);
		// saveCanvas("pauseframe1red",'png');
	///////////////////////////////////////////

//This loop generates all the frames
	for (var i = 0; i < seconds; i++) {
		//This increments the minut value every 60 seconds
		if (sec === 60) {
			minut += 1;
			sec = 0;
		}

		//These conditionals change the currenttime string
		if (minut < 10 && sec < 10) {
			currenttime = "0" + minut + ":0" + sec + "";

		}
		else if (minut < 10 && sec >= 10) {
			currenttime = "0" + minut + ":" + sec + "";
		}
		else if (minut >= 10 && sec < 10) {
			currenttime = "" + minut + ":0" + sec + "";
		}
		else if (minut >= 10 && sec >= 10) {
			currenttime = "" + minut + ":" + sec + "";
		}

		sec += 1;

		//This pushed the currenttime to the generated array
		generatedarray.push(currenttime);

		///////////////////////////////////////
		//This block writes the text on each frame
		stroke('#001489');
		fill('#001489');

		textSize(100);
		textFont(boilbossfont);
		text(regulardata[i] + '°F',1200,860);
		text(generatedarray[i],1200,590);
		text(boilbossdata[i] + '°F',1200,320);
		saveCanvas(""+i+"",'png');
		clear();
		////////////////////////////////////////

		////////////////////////////////////////
		/*
		This block was for saving the frames
		when we wanted to change the speed of
		the video and as a result needed a
		different number of frames
		*/

		// if (i % 2 === 0) {
		// 	saveCanvas(""+counter+"",'png');
		// 	counter+=1;
		// 	console.log('hey');
		// }
		// else {
		// 	saveCanvas(""+counter+"",'png');
		// 	counter+=1;
		// 	saveCanvas(""+counter+"",'png');
		// 	counter+=1;
		// }
		//clear();
		////////////////////////////////////////

	}
}

function draw() {
}