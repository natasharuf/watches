let myFont;


/*function preload() {
  myFont = loadFont('assets/SanFranciscoDisplay-Light.otf');
}*/


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	colorMode(HSL);
	angleMode(DEGREES);
	textAlign(CENTER, CENTER);


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
			push();
			translate(width/2, height/2);
			rotate(-90);

			// Lauf-Variable x definiert
			var x = 0;
			// Führe den Loop solange aus, solange x kleiner als die Breite
			// des Ausgabe-Fenster ist




						while (x < sec) {
			                fill(x+1,100,50);
							arc(0, 0, 300, 300, 0+x, 1+x, PIE,);

								// Addiere 11 zu x
								x += 1;
								/* Ausgabe des x Wertes in der Konsole, mit Begleit-Text
								console.log("x hat den Wert " + x);*/

						}


					 		fill(0);
							ellipse(0,0, 280,280, 280, 360);

			    			pop();/* 4. transformation koordinatensystem rückgängig, sonst ist die schrift gedreht */
							fill(255);/* 2. schrift auf weiss setzen, sonst sieht man sie nicht*/
						//textFont(myFont);
							textSize(15);
							text(h+":"+m+":"+s, width/2, height/2);/*3. konkatinierung, es fehlte ein + nach min */

					}


					//var d = new Date();
					//document.getElementById("demo").innerHTML = d.toString();
