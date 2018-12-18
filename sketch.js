function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	colorMode(HSL);
	angleMode(DEGREES);


}

function draw() {

var s = second();
var m = minute();
var h  = hour();

var sec = map(s, 0, 60, 0, 360)
var min = map(m, 0, 60, 0, 360)
var hr = map(h, 0, 24, 0, 720)


		background(0);
			noStroke();
			translate(width/2, height/2);
			rotate(-90);

			// Lauf-Variable x definiert
			var x = 0;
			// Führe den Loop solange aus, solange x kleiner als die Breite
			// des Ausgabe-Fenster ist
			while (x < s) {
				arc(width/2, height/2, 300, 300, 0+x, 1+x, PIE,);

		 		fill(x+1,100,50);
					// Addiere 11 zu x
					x += 1;
					// Ausgabe des x Wertes in der Konsole, mit Begleit-Text
					console.log("x hat den Wert " + x);



			}

		 		fill(0);
				ellipse(width/2, height/2, 280,280, 280, 360);


		}
