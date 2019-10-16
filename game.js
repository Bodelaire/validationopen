	var col = 18,
	cellule = 18,
	degré = 0,
	compte = 0,
	selCaseF1 = [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]],
	tabLevel = [[0], [1, 2], [3, 4, 5], [6, 7], [8], [9], [10], [11], [12], [13], [14], [15]],
	pressSel, parcours = 0,
	stop_var, repeate = 0;
	verifi_cooki_level();
	verifi_cooki_score();
	var ehben=0;
	var intervalID = null;
	var varplay = false;
	var varStopTout = false;
	var tourneEnBoucle = false;
	var succes = parseInt(getCookie("level"));
	var choixmap;
	var tab;
	var tabParcours = [];
	var tabEtoile=[];
	var boutonSel;
	var selF2 = false;
	var selF3 = false;
	var z = 0;
	var position = 0;
	var vitesse = 72000;
	var score=parseInt(getCookie("score"));
	var temps_en_cours;
	if (getCookie("datedebut") != "") {
		
		var tempsDebut = parseInt(getCookie("datedebut"));
		var tempEcoule=Date.now()-tempsDebut;
		tempEcoule=Math.floor(tempEcoule/72000);
		temps_en_cours=101-tempEcoule;
		if(temps_en_cours < 1)
		{
			vitesse=2000;
		}

	} else {
		setCookie("datedebut", Date.now(), 1);
		temps_en_cours=101;
	}
	
	
	
	/* 
	function noBack()
	{
		window.history.forward()
	}
	noBack();
	window.onload=noBack;
	window.onpageshow=function(evt){if(evt.persisted)noBack()}
	window.onunload=function(){void(0)} */

	/*
	une fonction levelrandom qui selectionne aléatoirement un chiffre compris entre 0 et la taaille d'un sous tableau la colonne étant choisi par la variable success
	une fonction deleteMap qui ramene toutes les cases à l'etat initial 
	ensuite une fonction createmap va selectionné la map qui a le numero passé en parametre 
	au moment de fair la map elle va aussi faire le tableau de verification de sortie de map
	*/

	function createMap(numMap) {
		var boutonAvecBordure = document.querySelectorAll(' #media button ');
		boutonSel = document.querySelectorAll(' #commandeDeSelection button ');
		for (var v = 0; v <= 24; v++) {
			boutonSel[v].style.innerHTML = "";
			boutonSel[v].style.backgroundColor = "";

		}
		selReset();
		if (numMap == 0)
		map_level_0();
		else if (numMap == 1)
		map_level_1();
		else if (numMap == 2)
		map_level_2();
		else if (numMap == 3)
		map_level_3();
		else if (numMap == 4)
		map_level_4();
		else if (numMap == 5)
		map_level_5();
		else if (numMap == 6)
		map_level_6();
		else if (numMap == 7)
		map_level_7();
		else if (numMap == 8)
		map_level_8();
		else if (numMap == 9)
		map_level_9();
		else if (numMap == 10)
		map_level_10();
		else if (numMap == 11)
		map_level_11();
		else if (numMap == 12)
		map_level_12();
		else if (numMap == 13)
		map_level_13();
		else if (numMap == 14)
		map_level_14();
		else if (numMap == 15)
		map_level_15();

	}

	function deleteMap() {
		for (var x = 1; x <= 20; x++) {
			for (var y = 0; y <= 19; y++) {
				document.getElementById("case_" + x + "_" + y).style.backgroundColor = "";
				document.getElementById("case_" + x + "_" + y).innerHTML = "";
				document.getElementById("case_" + x + "_" + y).style.backgroundImage = "";
			}
		}
	}

	function entierAleatoire(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function LevelRandom() {
		var choixLevel = entierAleatoire(0, tabLevel[succes].length - 1);

		return tabLevel[succes][choixLevel];
	}


	function level() {
		if (varStopTout == false) {
			deleteMap();
			choixmap = LevelRandom();
			createMap(choixmap);
		} else {
			createMap(choixmap);
		}
		if (choixmap == 0) {
			recharge(14, 10);
			turnLeft();
		} else if (choixmap == 1) {
			recharge(4, 3);
		} else if (choixmap == 2) {
			recharge(10, 11);
		} else if (choixmap == 3) {
			recharge(10, 9);
			turnLeft();
		} else if (choixmap == 4) {
			tabEtoile=[0,0];
			recharge(5, 9);
			turnRight();
		} else if (choixmap == 5) {
			tabEtoile=[0,0];
			recharge(10, 3);
		} else if (choixmap == 6) {
			tabEtoile=[0,0];
			recharge(10, 4);

		} else if (choixmap == 7) {
			recharge(17, 4);
			turnLeft();
		} else if (choixmap == 8) {
			recharge(16, 10);
			turnLeft();
		} else if (choixmap == 9) {
		tabEtoile= [0,0,0,0];
			recharge(10, 8);
		} else if (choixmap == 10) {
			tabEtoile = ['case_2_9', 'case_3_9', 'case_4_9', 'case_5_9', 'case_6_9', 'case_7_9', 'case_8_9', 'case_11_9', 'case_12_9', 'case_13_9', 'case_14_9', 'case_15_9', 'case_16_9', 'case_2_10', 'case_3_10', 'case_4_10', 'case_5_10', 'case_6_10', 'case_7_10', 'case_8_10', 'case_9_10', 'case_10_10','case_10_9', 'case_11_10', 'case_12_10', 'case_13_10', 'case_14_10', 'case_15_10', 'case_16_10'];
			recharge(9, 9);

		} else if (choixmap == 11) {
			recharge(3, 5);
			turnLeft();
			turnLeft();
		} else if (choixmap == 12) {
			recharge(4, 14);
			turnRight();
		} else if (choixmap == 13) {
			tabEtoile[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			recharge(10, 2);
		} else if (choixmap == 14) {
			recharge(16, 5);
			turnLeft();
		} else if (choixmap == 15) {
			tabEtoile = [ 'case_3_2', 'case_3_3', 'case_3_4', 'case_3_5', 'case_3_6', 'case_3_7', 'case_3_8', 'case_3_9', 'case_3_10', 'case_3_11', 'case_3_12', 'case_3_13'
			, 'case_3_14', 'case_3_15', 'case_3_16', 'case_3_17', 'case_4_2', 'case_4_3', 'case_4_4', 'case_4_5', 'case_4_6', 'case_4_7', 'case_4_8', 'case_4_9', 'case_4_10', 'case_4_11'
			, 'case_4_12', 'case_4_13', 'case_4_14', 'case_4_15', 'case_4_16', 'case_4_17', 'case_5_2', 'case_5_3', 'case_5_4', 'case_5_5', 'case_5_6', 'case_5_7', 'case_5_8', 'case_5_9'
			, 'case_5_10', 'case_5_11', 'case_5_12', 'case_5_13', 'case_5_14', 'case_5_15', 'case_5_16', 'case_5_17', 'case_6_2', 'case_6_3', 'case_6_4', 'case_6_5', 'case_6_6', 'case_6_7'
			, 'case_6_8', 'case_6_9', 'case_6_10', 'case_6_11', 'case_6_12', 'case_6_13', 'case_6_14', 'case_6_15', 'case_6_16', 'case_6_17', 'case_7_2', 'case_7_3', 'case_7_4', 'case_7_5'
			, 'case_7_6', 'case_7_7', 'case_7_8', 'case_7_9', 'case_7_10', 'case_7_11', 'case_7_12', 'case_7_13', 'case_7_14', 'case_7_15', 'case_7_16', 'case_7_17', 'case_8_2'
			, 'case_8_3', 'case_8_4', 'case_8_5', 'case_8_6', 'case_8_7', 'case_8_8', 'case_8_9', 'case_8_10', 'case_8_11', 'case_8_12', 'case_8_13', 'case_8_14', 'case_8_15', 'case_8_16', 'case_8_17'
			, 'case_9_2', 'case_9_3', 'case_9_4', 'case_9_5', 'case_9_6', 'case_9_7', 'case_9_8', 'case_9_9', 'case_9_10', 'case_9_11', 'case_9_12', 'case_9_13', 'case_9_14', 'case_9_15', 'case_9_16'
			, 'case_9_17', 'case_10_2', 'case_10_3', 'case_10_4', 'case_10_5', 'case_10_6', 'case_10_7', 'case_10_8', 'case_10_9', 'case_10_10', 'case_10_11', 'case_10_12', 'case_10_13'
			, 'case_10_14', 'case_10_15', 'case_10_16', 'case_10_17', 'case_11_2', 'case_11_3', 'case_11_4', 'case_11_5', 'case_11_6', 'case_11_7', 'case_11_8', 'case_11_9', 'case_11_10'
			, 'case_11_11', 'case_11_12', 'case_11_13', 'case_11_14', 'case_11_15', 'case_11_16', 'case_11_17', 'case_12_2', 'case_12_3', 'case_12_4', 'case_12_5', 'case_12_6'
			, 'case_12_7', 'case_12_8', 'case_12_9', 'case_12_10', 'case_12_11', 'case_12_12', 'case_12_13', 'case_12_14', 'case_12_15', 'case_12_16', 'case_12_17', 'case_13_2'
			, 'case_13_3', 'case_13_4', 'case_13_5', 'case_13_6', 'case_13_7', 'case_13_8', 'case_13_9', 'case_13_10', 'case_13_11', 'case_13_12', 'case_13_13', 'case_13_14', 'case_13_15', 'case_13_16'
			, 'case_13_17', 'case_14_2', 'case_14_3', 'case_14_4', 'case_14_5', 'case_14_6', 'case_14_7', 'case_14_8', 'case_14_9', 'case_14_10', 'case_14_11', 'case_14_12', 'case_14_13', 'case_14_14'
			, 'case_14_15', 'case_14_16', 'case_14_17', 'case_15_2', 'case_15_3', 'case_15_4', 'case_15_5', 'case_15_6', 'case_15_7', 'case_15_8', 'case_15_9', 'case_15_10', 'case_15_11', 'case_15_12'
			, 'case_15_13', 'case_15_14', 'case_15_15', 'case_15_16', 'case_15_17', 'case_16_2', 'case_16_3', 'case_16_4', 'case_16_5', 'case_16_6', 'case_16_7', 'case_16_8', 'case_16_9'
			, 'case_16_10', 'case_16_11', 'case_16_12', 'case_16_13', 'case_16_14', 'case_16_15', 'case_16_16', 'case_16_17', 'case_17_2', 'case_17_3', 'case_17_4', 'case_17_5', 'case_17_6'
			, 'case_17_7', 'case_17_8', 'case_17_9', 'case_17_10', 'case_17_11', 'case_17_12', 'case_17_13', 'case_17_14', 'case_17_15', 'case_17_16', 'case_17_17'
			, 'case_18_3', 'case_18_4', 'case_18_5', 'case_18_6', 'case_18_7', 'case_18_8', 'case_18_9', 'case_18_10', 'case_18_11', 'case_18_12', 'case_18_13', 'case_18_14', 'case_18_15'
			, 'case_18_16', 'case_18_17'];
			recharge(18, 2);
		}
		pressSel = "", parcours = 0,
		i = 2,
		stop_var, repeate = 0,

		varplay = false;
		varStopTout = false;
		tourneEnBoucle = false;
		intervalID = null;


	}

	function afficheCase(numMap) {
		var boutonInvisible = document.querySelectorAll(' #commandeDeSelection button ');
		if (numMap == 0) {

			for (var t = 0; t < 2; t++) {
				boutonInvisible[t].style.visibility = "visible";
			}
		} else if (numMap == 1) {

			for (var t = 0; t < 5; t++) {
				boutonInvisible[t].style.visibility = "visible";
			}

		} else if (numMap == 2 || numMap == 3 || numMap == 4 || numMap == 6 || numMap == 9 || numMap == 10 || numMap == 12) {

			for (var t = 0; t < 6; t++) {
				boutonInvisible[t].style.visibility = "visible";
			}
		} else if (numMap == 5) {

			for (var t = 0; t < 15; t++) {
				if (t == 3)
				t = 9;
				else
				boutonInvisible[t].style.visibility = "visible";

			}
			document.getElementById('fonction_f2').style.visibility="visible";
		} else if (numMap == 7) {
			for (var t = 0; t < 10; t++) {
				boutonInvisible[t].style.visibility = "visible";
			}
		} else if (numMap == 8) {
			for (var t = 0; t < 3; t++) {
				boutonInvisible[t].style.visibility = "visible";
			}
		} else if (numMap == 11) {
			for (var t = 0; t < 25; t++) {
				if (t == 5)
				t = 9;
				else if (t == 15)
				t = 19
				else
				boutonInvisible[t].style.visibility = "visible";

			}
			document.getElementById('fonction_f2').style.visibility="visible";
			document.getElementById('fonction_f3').style.visibility="visible";
			
		} else if (numMap == 13) {
			for (var t = 0; t < 20; t++) {
				boutonInvisible[t].style.visibility = "visible";
			}
			document.getElementById('fonction_f2').style.visibility="visible";
		} else if (numMap == 14) {
			for (var t = 0; t < 10; t++) {
				boutonInvisible[t].style.visibility = "visible";
			}
		} else if (numMap == 15) {
			for (var t = 0; t < 14; t++) {
				if (t == 4)
				t = 9;
				else
				boutonInvisible[t].style.visibility = "visible";

			}
			document.getElementById('fonction_f2').style.visibility="visible";
		}
	}

	function recharge(AxeY, AxeX) {

		document.getElementById("case_" + col + "_" + cellule + "").innerHTML = "";
		col = AxeY;
		cellule = AxeX;
		repeate = 0;
		parcours = 0;
		i = 2;
		varplay = false;
		var img = document.createElement("img");
		img.src = "image/arrow.png";
		var src = document.getElementById("case_" + AxeY + "_" + AxeX + "");
		src.appendChild(img);
		degré = 0;
		tourneEnBoucle = false;
		pressSel = "";
		var boutonInvisible = document.querySelectorAll(' #commandeDeSelection button ');
		for (var t = 0; t < boutonInvisible.length; t++) {
			boutonInvisible[t].style.visibility = "hidden";
		}
		afficheCase(choixmap);


	}
	// véroullage
	function selectionInactive() {
		var sel = document.querySelectorAll(' #commandeDeSelection button ');
		for (var v = 0; v < sel.length; v++) {
			sel[v].disabled = true;

		}
	}

	function selectionActive() {
		var sel = document.querySelectorAll(' #commandeDeSelection button ');
		for (var v = 0; v < sel.length; v++) {
			sel[v].disabled = false;

		}
	}

	function bd() {
		var buton = document.getElementById('commandeDeJeux').getElementsByTagName('button');
		for (var i = 0; i < buton.length; i++) {
			buton[i].setAttribute("disabled", "disabled");
			buton[i].style.opacity = "0.50";
		}
	}

	function eb() {
		var buton = document.getElementById('commandeDeJeux').getElementsByTagName('button');
		for (var i = 0; i < buton.length; i++) {
			buton[i].removeAttribute("disabled");
			buton[i].style.opacity = "1";

		}
	}

	function initial() {

		document.getElementById('fonction_f2').style.visibility="collapse";
		document.getElementById('fonction_f3').style.visibility="collapse";
		bd();
		level();
		selectionActive();
		selReset();
		var griseExTout = document.getElementById('executeTout');
		griseExTout.disabled = false;
		document.getElementById('executeManuellement').disabled = false;


	}

	function FselCommandeMouvement(NumCase, NumCommandeJeux, idCommandJeux, png, couleur) {
		png = png || "";
		couleur = couleur || "";
		if (selCaseF1[NumCase][0] == NumCommandeJeux) {
			selCaseF1[NumCase][0] = "";
			document.getElementById('' + idCommandJeux + '').style.border = "";
			document.getElementById("Sel" + NumCase + "").innerHTML = "";
		} else if (selCaseF1[NumCase][1] == NumCommandeJeux) {
			selCaseF1[NumCase][1] = "";
			document.getElementById('' + idCommandJeux + '').style.border = "";
			document.getElementById("Sel" + NumCase + "").style.backgroundColor = "";
		} else {
			if (NumCommandeJeux <= 10 && NumCommandeJeux != 4 && NumCommandeJeux != 5 && NumCommandeJeux != 6) {
				selCaseF1[NumCase][0] = NumCommandeJeux;
				document.getElementById('boutAvance').style.border = "";
				document.getElementById('boutTourneDroite').style.border = "";
				document.getElementById('boutTourneGauche').style.border = "";
				document.getElementById('boutRepete').style.border = "";
				document.getElementById('Paint_vert').style.border = "";
				document.getElementById('Paint_bleu').style.border = "";
				document.getElementById('Paint_orange').style.border = "";
				//document.getElementById(''+idCommandJeux+'').style.backgroundColor="white";
				document.getElementById('' + idCommandJeux + '').style.borderColor = "blue";
				document.getElementById('' + idCommandJeux + '').style.borderStyle = "double";
				document.getElementById('' + idCommandJeux + '').style.borderWidths = "3px";
				var img_put = document.createElement("img");
				//img_select.setAttribute("id", "img");
				img_put.src = "" + png + "";
				var src = document.getElementById("Sel" + NumCase + "");
				document.getElementById("Sel" + NumCase + "").innerHTML = "";
				src.appendChild(img_put);

			} else if (NumCommandeJeux == 4) {
				selCaseF1[NumCase][0] = 4;
				document.getElementById('boutAvance').style.border = "";
				document.getElementById('boutTourneDroite').style.border = "";
				document.getElementById('boutTourneGauche').style.border = "";
				document.getElementById('boutRepete').style.border = "";
				document.getElementById('fonction_f2').style.border = "";
				document.getElementById('fonction_f3').style.border = "";
				document.getElementById('Paint_vert').style.border = "";
				document.getElementById('Paint_bleu').style.border = "";
				document.getElementById('Paint_orange').style.border = "";
				//document.getElementById('boutRepete').style.backgroundColor="white";
				document.getElementById('boutRepete').style.borderColor = "blue";
				document.getElementById('boutRepete').style.borderStyle = "double";
				document.getElementById('boutRepete').style.borderWidths = "3px";
				document.getElementById('Sel' + NumCase + '').innerHTML = "F1";
			} else if (NumCommandeJeux == 5) {
				selCaseF1[NumCase][0] = 5;
				document.getElementById('boutAvance').style.border = "";
				document.getElementById('boutTourneDroite').style.border = "";
				document.getElementById('boutTourneGauche').style.border = "";
				document.getElementById('boutRepete').style.border = "";
				document.getElementById('fonction_f2').style.border = "";
				document.getElementById('fonction_f3').style.border = "";
				document.getElementById('Paint_vert').style.border = "";
				document.getElementById('Paint_bleu').style.border = "";
				document.getElementById('Paint_orange').style.border = "";
				//document.getElementById('boutRepete').style.backgroundColor="white";
				document.getElementById('fonction_f2').style.borderColor = "blue";
				document.getElementById('fonction_f2').style.borderStyle = "double";
				document.getElementById('fonction_f2').style.borderWidths = "3px";
				document.getElementById('Sel' + NumCase + '').innerHTML = "F2";
			} else if (NumCommandeJeux == 6) {
				selCaseF1[NumCase][0] = 6;
				document.getElementById('boutAvance').style.border = "";
				document.getElementById('boutTourneDroite').style.border = "";
				document.getElementById('boutTourneGauche').style.border = "";
				document.getElementById('boutRepete').style.border = "";
				document.getElementById('fonction_f2').style.border = "";
				document.getElementById('Paint_vert').style.border = "";
				document.getElementById('Paint_bleu').style.border = "";
				document.getElementById('Paint_orange').style.border = "";
				//document.getElementById('boutRepete').style.backgroundColor="white";
				document.getElementById('fonction_f3').style.borderColor = "blue";
				document.getElementById('fonction_f3').style.borderStyle = "double";
				document.getElementById('fonction_f3').style.borderWidths = "3px";
				document.getElementById('Sel' + NumCase + '').innerHTML = "F3";
			} else if (NumCommandeJeux >= 11) {
				selCaseF1[NumCase][1] = NumCommandeJeux;
				document.getElementById('boutVert').style.border = "";
				document.getElementById('boutBleu').style.border = "";
				document.getElementById('boutOrange').style.border = "";
				document.getElementById('' + idCommandJeux + '').style.borderColor = "blue";
				document.getElementById('' + idCommandJeux + '').style.borderStyle = "double";
				document.getElementById('' + idCommandJeux + '').style.borderWidths = "3px";
				document.getElementById('Sel' + NumCase + '').style.backgroundColor = "" + couleur + "";
			}
		}

	}

	function FselAvance() {
		for (var j = 0; j < 25; j++) {
			if (j == pressSel) {
				FselCommandeMouvement(j, 1, "boutAvance", "image/up.png");
				break;
			}
		}
		creationtabParcours();
	}

	function FselTourneDroite() {
		for (var j = 0; j < 25; j++) {
			if (j == pressSel) {
				FselCommandeMouvement(j, 2, "boutTourneDroite", "image/right.png");
				break;
			}
		}
		creationtabParcours();
	}

	function FselTourneGauche() {

		for (var j = 0; j < 25; j++) {
			if (j == pressSel) {
				FselCommandeMouvement(j, 3, "boutTourneGauche", "image/left.png");
				break;
			}
		}
		creationtabParcours();
	}

	function FselRepete() {

		for (var j = 0; j < 25; j++) {
			if (j == pressSel) {
				FselCommandeMouvement(j, 4, "boutRepete");
				break;
			}
		}
		creationtabParcours();
	}

	function FselChangeLigneF2() {
		for (var j = 0; j < 25; j++) {
			if (j == pressSel) {
				FselCommandeMouvement(j, 5, "fonction_f2");
				break;
			}
		}
		creationtabParcours();
	}

	function FselChangeLigneF3() {
		for (var j = 0; j < 25; j++) {
			if (j == pressSel) {
				FselCommandeMouvement(j, 6, "fonction_f3");
				break;
			}
		}
		creationtabParcours();
	}

	function FselVert() {
		for (var j = 0; j < 25; j++) {
			if (j == pressSel) {
				FselCommandeMouvement(j, 11, "boutVert", "", "#66ff33");
				break;
			}
		}
		creationtabParcours();
	}

	function FselBleu() {

		for (var j = 0; j < 25; j++) {
			if (j == pressSel) {
				FselCommandeMouvement(j, 12, "boutBleu", "", "#66b3ff");
				break;
			}
		}
		creationtabParcours();


	}


	function FselOrange() {
		for (var j = 0; j < 25; j++) {
			if (j == pressSel) {
				FselCommandeMouvement(j, 13, "boutOrange", "", "#ff9933");
				break;
			}
		}
		creationtabParcours();
	}

	function FselChangeCouleurVert() {
		for (var j = 0; j < 25; j++) {
			if (j == pressSel) {
				FselCommandeMouvement(j, 7, "Paint_vert", "image/paint_vert.png");
				break;
			}
		}
		creationtabParcours();
	}

	function FselChangeCouleurBleu() {
		for (var j = 0; j < 25; j++) {
			if (j == pressSel) {
				FselCommandeMouvement(j, 8, "Paint_bleu", "image/paint_bleu.png");
				break;
			}
		}
		creationtabParcours();
	}

	function FselChangeCouleurOrange() {
		for (var j = 0; j < 25; j++) {
			if (j == pressSel) {
				FselCommandeMouvement(j, 9, "Paint_orange", "image/paint_orange.png");
				break;
			}
		}
		creationtabParcours();
	}

	function FChangeCaseBordure(idCommandJeux) {
		//document.getElementById(''+idCommandJeux+'').style.backgroundColor="white";
		document.getElementById('' + idCommandJeux + '').style.borderColor = "blue";
		document.getElementById('' + idCommandJeux + '').style.borderStyle = "double";
		document.getElementById('' + idCommandJeux + '').style.borderWidths = "3px";
	}

	function FChangeCaseBordureRouge(idCommandJeux) {
		var boutonAvecBordure = document.querySelectorAll(' #commandeDeSelection button ');
		for (var touteCase = 0; touteCase < boutonAvecBordure.length; touteCase++) {
			boutonAvecBordure[touteCase].style.border = "";
		}
		document.getElementById('' + idCommandJeux + '').style.borderColor = "red";
		document.getElementById('' + idCommandJeux + '').style.borderStyle = "double";
		document.getElementById('' + idCommandJeux + '').style.borderWidths = "3px";
	}

	function FSelection(nomid, NumCase) {
		document.getElementById('boutAvance').style.border = "";
		document.getElementById('boutTourneDroite').style.border = "";
		document.getElementById('boutTourneGauche').style.border = "";
		document.getElementById('boutRepete').style.border = "";
		document.getElementById('fonction_f2').style.border = "";
		document.getElementById('fonction_f3').style.border = "";
		document.getElementById('boutVert').style.border = "";
		document.getElementById('boutBleu').style.border = "";
		document.getElementById('boutOrange').style.border = "";
		document.getElementById('Paint_vert').style.border = "";
		document.getElementById('Paint_bleu').style.border = "";
		document.getElementById('Paint_orange').style.border = "";
		var boutonAvec = document.querySelectorAll(' #media button ');
		for (var v = 0; v < boutonAvec.length; v++) {

			boutonAvec[v].disabled = false;
			boutonAvec[v].style.backgroundColor = "";
			boutonAvec[v].style.opacity = "1";
		}

		var boutonAvecBordure = document.querySelectorAll(' #commandeDeSelection button ');
		for (var touteCase = 0; touteCase < boutonAvecBordure.length; touteCase++) {
			boutonAvecBordure[touteCase].style.border = "";
		}
		//document.getElementById(''+nomid+'').style.backgroundColor="white";
		document.getElementById('' + nomid + '').style.borderColor = "blue";
		document.getElementById('' + nomid + '').style.borderStyle = "double";
		document.getElementById('' + nomid + '').style.borderWidths = "3px";
		//document.getElementById('Sel0').disabled="true";
		var AllDisabled = document.getElementById("commandeDeJeux");
		AllDisabled.disabled = false;
		for (var j = 1; j <= 9; j++) {
			if (selCaseF1[NumCase][0] == j) {
				if (j == 1) {
					FChangeCaseBordure("boutAvance");
				} else if (j == 2) {
					FChangeCaseBordure("boutTourneDroite");
				} else if (j == 3) {
					FChangeCaseBordure("boutTourneGauche");
				} else if (j == 4) {
					FChangeCaseBordure("boutRepete");
				} else if (j == 5) {
					FChangeCaseBordure("fonction_f2");
				} else if (j == 6) {
					FChangeCaseBordure("fonction_f3");
				} else if (j == 7) {
					FChangeCaseBordure("Paint_vert");
				} else if (j == 8) {
					FChangeCaseBordure("Paint_bleu");
				} else if (j == 9) {
					FChangeCaseBordure("Paint_orange");
				}

			}

		}
		for (var j = 11; j <= 13; j++) {
			if (selCaseF1[NumCase][1] == j) {
				if (j == 11) {
					FChangeCaseBordure("boutVert");
				} else if (j == 12) {
					FChangeCaseBordure("boutBleu");
				} else if (j == 13) {
					FChangeCaseBordure("boutOrange");
				}

			}
		}
	}

	function Selection0() {
		eb();
		pressSel = 0;
		FSelection("Sel0", 0);
		parcours = 0;
	}

	function Selection1() {
		eb();
		pressSel = 1;
		FSelection("Sel1", 1);
		parcours = 0;
	}

	function Selection2() {
		eb();
		pressSel = 2;
		FSelection("Sel2", 2);
		parcours = 0;
	}

	function Selection3() {
		eb();
		pressSel = 3;
		FSelection("Sel3", 3);
		parcours = 0;
	}

	function Selection4() {
		eb();
		pressSel = 4;
		FSelection("Sel4", 4);
		parcours = 0;
	}

	function Selection5() {
		eb();
		pressSel = 5;
		FSelection("Sel5", 5);
		parcours = 0;
	}

	function Selection6() {
		eb();
		pressSel = 6;
		FSelection("Sel6", 6);
		parcours = 0;
	}

	function Selection7() {
		eb();
		pressSel = 7;
		FSelection("Sel7", 7);
		parcours = 0;
	}

	function Selection8() {
		eb();
		pressSel = 8;
		FSelection("Sel8", 8);
		parcours = 0;
	}

	function Selection9() {
		eb();
		pressSel = 9;
		FSelection("Sel9", 9);
		parcours = 0;
	}

	function Selection10() {
		eb();
		pressSel = 10;
		FSelection("Sel10", 10);
		parcours = 0;
	}

	function Selection11() {
		eb();
		pressSel = 11;
		FSelection("Sel11", 11);
		parcours = 0;
	}

	function Selection12() {
		eb();
		pressSel = 12;
		FSelection("Sel12", 12);
		parcours = 0;
	}

	function Selection13() {
		eb();
		pressSel = 13;
		FSelection("Sel13", 13);
		parcours = 0;
	}

	function Selection14() {
		eb();
		pressSel = 14;
		FSelection("Sel14", 14);
		parcours = 0;
	}

	function Selection15() {
		eb();
		pressSel = 15;
		FSelection("Sel15", 15);
		parcours = 0;
	}

	function Selection16() {
		eb();
		pressSel = 16;
		FSelection("Sel16", 16);
		parcours = 0;
	}

	function Selection17() {
		eb();
		pressSel = 17;
		FSelection("Sel17", 17);
		parcours = 0;
	}

	function Selection18() {
		eb();
		pressSel = 18;
		FSelection("Sel18", 18);
		parcours = 0;
	}

	function Selection19() {
		eb();
		pressSel = 19;
		FSelection("Sel19", 19);
		parcours = 0;
	}

	function Selection20() {
		eb();
		pressSel = 20;
		FSelection("Sel20", 20);
		parcours = 0;
	}

	function Selection21() {
		eb();
		pressSel = 21;
		FSelection("Sel21", 21);
		parcours = 0;
	}

	function Selection22() {
		eb();
		pressSel = 22;
		FSelection("Sel22", 22);
		parcours = 0;
	}

	function Selection23() {
		eb();
		pressSel = 23;
		FSelection("Sel23", 23);
		parcours = 0;
	}

	function Selection24() {
		eb();
		pressSel = 24;
		FSelection("Sel24", 24);
		parcours = 0;
	}

	function avance() {

		if (degré == 360 || degré == -360) {
			degré = 0;
		}

		// cas où il est dans le sens initial
		if (degré == 0) {
			cellule++;

			var img = document.createElement("img");
			img.src = "image/arrow.png";
			var src = document.getElementById("case_" + col + "_" + cellule);
			src.appendChild(img);
			document.getElementById("case_" + col + "_" + (cellule - 1) + "").innerHTML = "";

			verification_map("case_" + col + "_" + cellule);
			//document.querySelector("img").style.transform="rotate("+degré+"deg)";			

		}
		// Cas  où on a 1 droite ou 3 gauches
		else if (degré == 90 || degré == -270) {

			col++;
			var img = document.createElement("img");
			img.src = "image/arrow.png";
			var src = document.getElementById("case_" + col + "_" + cellule + "");
			src.appendChild(img);
			document.getElementById("case_" + (col - 1) + "_" + cellule + "").innerHTML = "";
			verification_map("case_" + col + "_" + cellule + "");
			document.querySelector("img").style.transform = "rotate(" + degré + "deg)";

		}
		//cas où on a 2 droites ou 2 gauches
		else if (degré == 180 || degré == -180) {
			cellule--;
			var img = document.createElement("img");
			img.src = "image/arrow.png";
			var src = document.getElementById("case_" + col + "_" + cellule + "");
			src.appendChild(img);
			document.getElementById("case_" + col + "_" + (cellule + 1) + "").innerHTML = "";
			verification_map("case_" + col + "_" + cellule + "");
			document.querySelector("img").style.transform = "rotate(" + degré + "deg)";


		}
		// cas où on a 3 droite ou 1 gauche
		else if (degré == -90 || degré == 270) {

			col--;
			var img = document.createElement("img");
			img.src = "image/arrow.png";
			var src = document.getElementById("case_" + col + "_" + cellule + "");
			src.appendChild(img);
			document.getElementById("case_" + (col + 1) + "_" + cellule + "").innerHTML = "";
			verification_map("case_" + col + "_" + cellule + "");
			document.querySelector("img").style.transform = "rotate(" + degré + "deg)";

		}
	}

	function turnRight() {
		if (degré == 360) {
			degré = 0;
		}
		degré = degré + 90;
		document.querySelector("img").style.transform = "rotate(" + degré + "deg)";
	}

	function turnLeft() {
		if (degré == -360) {
			degré = 0;
		}
		degré = degré - 90;
		document.querySelector("img").style.transform = "rotate(" + degré + "deg)";
	}

	function Repeter() {
		//tourneEnBoucle=true;
		//repeate=parcours;
		parcours = -1;
	}

	function verificationCouleur(CaseOccupée, couleurDeLaCommande) {
		/*
		compare la couleur de la case flechée et celle ssocié à la commande à executer
	*/
		var color = document.getElementById(CaseOccupée).style.backgroundColor;
		if (color == couleurDeLaCommande) {

			return true;
		} else {
			return false;
		}

	}

	function ChangeLigneF2() {
		selF2 = true;
		for (var z = 0; z < tabParcours.length; z++) {
			if (tabParcours[z] > 9 && tabParcours[z] <= 19) {
				parcours = z - 1;
				break;
			}
		}

	}

	function ChangeLigneF3() {
		selF3 = true;
		for (var z = 0; z < tabParcours.length; z++) {
			if (tabParcours[z] > 19) {
				parcours = z - 1;
				break;
			}
		}
	}

	function ChangeCouleurVert() {
		document.getElementById("case_" + col + "_" + cellule).style.backgroundColor = "#66ff33";
	}

	function ChangeCouleurBleu() {
		document.getElementById("case_" + col + "_" + cellule).style.backgroundColor = "#66b3ff";
	}

	function ChangeCouleurOrange() {
		document.getElementById("case_" + col + "_" + cellule).style.backgroundColor = "#ff9933";
	}

	function VerificationExecution(fonction) {


		if (selCaseF1[tabParcours[parcours]][1] == 11) {

			if (verificationCouleur("case_" + col + "_" + cellule + "", "rgb(102, 255, 51)") == true) {
				if (fonction == "avance") {
					avance();
				} else if (fonction == "turnRight") {
					turnRight();
				} else if (fonction == "turnLeft") {
					turnLeft();
				} else if (fonction == "Repeter") {
					Repeter();
				} else if (fonction == "F2") {
					ChangeLigneF2();
				} else if (fonction == "F3") {
					ChangeLigneF3();
				} else if (fonction == "Paint_vert") {
					ChangeCouleurVert();
				} else if (fonction == "Paint_bleu") {
					ChangeCouleurBleu();
				} else if (fonction == "Paint_orange") {
					ChangeCouleurOrange();
				}

			}
		} else if (selCaseF1[tabParcours[parcours]][1] == 12) {

			if (verificationCouleur("case_" + col + "_" + cellule + "", "rgb(102, 179, 255)") == true) {
				if (fonction == "avance") {
					avance();
				} else if (fonction == "turnRight") {
					turnRight();
				} else if (fonction == "turnLeft") {
					turnLeft();
				} else if (fonction == "Repeter") {
					Repeter();
				} else if (fonction == "F2") {
					ChangeLigneF2();
				} else if (fonction == "F3") {
					ChangeLigneF3();
				} else if (fonction == "Paint_vert") {
					ChangeCouleurVert();
				} else if (fonction == "Paint_bleu") {
					ChangeCouleurBleu();
				} else if (fonction == "Paint_orange") {
					ChangeCouleurOrange();
				}
			}
		} else if (selCaseF1[tabParcours[parcours]][1] == 13) {
			if (verificationCouleur("case_" + col + "_" + cellule + "", "rgb(255, 153, 51)") == true) {
				if (fonction == "avance") {
					avance();
				} else if (fonction == "turnRight") {
					turnRight();
				} else if (fonction == "turnLeft") {
					turnLeft();
				} else if (fonction == "Repeter") {
					Repeter();
				} else if (fonction == "F2") {
					ChangeLigneF2();
				} else if (fonction == "F3") {
					ChangeLigneF3();
				} else if (fonction == "Paint_vert") {
					ChangeCouleurVert();
				} else if (fonction == "Paint_bleu") {
					ChangeCouleurBleu();
				} else if (fonction == "Paint_orange") {
					ChangeCouleurOrange();
				}
			}
		} else if (selCaseF1[tabParcours[parcours]][1] != 11 && selCaseF1[tabParcours[parcours]][1] != 12 && selCaseF1[tabParcours[parcours]][1] != 13) {
			if (fonction == "avance") {
				avance();
			} else if (fonction == "turnRight") {
				turnRight();
			} else if (fonction == "turnLeft") {
				turnLeft();
			} else if (fonction == "Repeter") {
				Repeter();
			} else if (fonction == "F2") {
				ChangeLigneF2();
			} else if (fonction == "F3") {
				ChangeLigneF3();
			} else if (fonction == "Paint_vert") {
				ChangeCouleurVert();
			} else if (fonction == "Paint_bleu") {
				ChangeCouleurBleu();
			} else if (fonction == "Paint_orange") {
				ChangeCouleurOrange();
			}



		}
	}

	function creationtabParcours() {
		tabParcours = [];
		for (z = 0; z <= 24; z++) {

			if (selCaseF1[z][0] == "" && selCaseF1[z][1] == "") {

			} else {
				tabParcours.push(z);
			}
		}
	}

	function executionDirect() {

		if (parcours == tabParcours.length) {

			var griseExTout = document.getElementById('executeTout');
			griseExTout.disabled = true;
			var griseManuele = document.getElementById('executeManuellement');
			griseManuele.disabled = true;
			repeate = 0;
			tourneEnBoucle = false;
			parcours = 0;
			clearInterval(intervalID);

		} else if (parcours != tabParcours.length) {
			FChangeCaseBordureRouge("Sel" + tabParcours[parcours]);
			if (selCaseF1[tabParcours[parcours]][0] == 1) {
				VerificationExecution("avance");
			} else if (selCaseF1[tabParcours[parcours]][0] == 2) {
				VerificationExecution("turnRight");
			} else if (selCaseF1[tabParcours[parcours]][0] == 3) {
				VerificationExecution("turnLeft");
			} else if (selCaseF1[tabParcours[parcours]][0] == 4) {

				VerificationExecution("Repeter");
			} else if (selCaseF1[tabParcours[parcours]][0] == 5) {

				VerificationExecution("F2");
			} else if (selCaseF1[tabParcours[parcours]][0] == 6) {

				VerificationExecution("F3");
			} else if (selCaseF1[tabParcours[parcours]][0] == 7) {

				VerificationExecution("Paint_vert");
			} else if (selCaseF1[tabParcours[parcours]][0] == 8) {

				VerificationExecution("Paint_bleu");
			} else if (selCaseF1[tabParcours[parcours]][0] == 9) {

				VerificationExecution("Paint_orange");
			}
			parcours++;
		}
	}

	function ExecutionByStep() {
		bd();
		selectionInactive();
		executionDirect();
		if (selF2 != true && parcours == 10) {
			parcours = tabParcours.length;
		} else if (selF3 != true && parcours == 20) {
			parcours = tabParcours.length;
		}
	}

	function lectureTotale() {
		varplay = true;
		document.getElementById("executeTout").disabled = true;
		document.getElementById("executeManuellement").disabled = true;
		document.getElementById("executeManuellement").style.backgroundColor = "grey";
		document.getElementById("executeManuellement").style.opacity = "0.50";
		bd();
		intervalID = setInterval(ExecutionByStep, 100);
	}

	function stopTout() {
		selectionActive();
		varplay = false;
		varStopTout = true;
		tourneEnBoucle = false;
		selF2 = selF3 = false;
		repeate = 0;
		parcours = 0;
		pressSel = "";
		clearInterval(intervalID);
		selReset();
		level();

	}

	function selReset() {
		var boutonAvecBord = document.querySelectorAll(' #commandeDeJeux button ');
		for (var touteCasesel = 0; touteCasesel < boutonAvecBord.length; touteCasesel++) {
			boutonAvecBord[touteCasesel].style.border = "";
		}
		selCaseF1 = [["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]];
		var boutonAvecBordure = document.querySelectorAll(' #commandeDeSelection button ');
		for (var touteCase = 0; touteCase < boutonAvecBordure.length; touteCase++) {
			boutonAvecBordure[touteCase].style.border = "";
			boutonAvecBordure[touteCase].innerHTML = "";
			boutonAvecBordure[touteCase].style.backgroundColor = "";
		}
		bd();
		var boutonAvec = document.querySelectorAll(' #media button ');
		for (var v = 0; v < boutonAvec.length; v++) {

			boutonAvec[v].disabled = true;
			boutonAvec[v].style.backgroundColor = "grey";
			boutonAvec[v].style.opacity = "0.50";
		}
	}


	// FONCTION DE MAP ET DE TRAJECTOIRE

	// FONCTION DE MAP ET DE TRAJECTOIRE

	function map_level_0() //0 correcte
	{
		document.getElementById('case_14_10').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_13_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_11_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_10').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_9_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_7_10').style.backgroundColor = "#ff9933"; //orange
		//-----etoile
		document.getElementById('case_7_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_10').style.backgroundPosition = "center";
		//-----etoile

	}

	function map_level_1() // 1 correcte
	{


		document.getElementById('case_4_3').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_4_4').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_5_4').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_5_5').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_6_5').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_6_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_6').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_7_7').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_8_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_8').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_9_8').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_9_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_11_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_12_11').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_12_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_13_12').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_13_13').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_14_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_14').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_15_14').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_15_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_16_15').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_16_16').style.backgroundColor = "#66ff33"; //vert
		//-----etoile
		document.getElementById('case_16_16').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_16_16').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_16_16').style.backgroundPosition = "center";

	}

	function map_level_2() // 2 correcte
	{
		document.getElementById('case_10_3').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_10_4').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_10_5').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_10_6').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_10_7').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_10_8').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_10_9').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_10_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_10_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_12').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_9_12').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_9_12').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_9_13').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_8_13').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_8_14').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_7_14').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_7_15').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_6_15').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_6_16').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_5_16').style.backgroundColor = "#66ff33"; //vert
		//------------------
		document.getElementById('case_5_16').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_5_16').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_5_16').style.backgroundPosition = "center";
		//------------------

	}

	function map_level_3() //3 correcte
	{


		//debut creation map 3
		document.getElementById('case_8_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_9_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_12_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_8').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_7').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_10').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_11').style.backgroundColor = "#66b3ff"; //bleu
		//-----etoile
		document.getElementById('case_12_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_12_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_12_9').style.backgroundPosition = "center";
		//-----etoile
		//fin creation map 3
	}

	function map_level_4() //4 correcte
	{
		document.getElementById('case_5_9').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_6_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_4').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_10_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_8').style.backgroundColor = "#ff9933"; //orange

		document.getElementById('case_10_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_14').style.backgroundColor = "#66ff33"; //vert

		//------------------
		document.getElementById('case_10_14').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_14').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_14').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_10_4').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_4').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_4').style.backgroundPosition = "center";
		//------------------
	}

	function map_level_5() // 5 correcte
	{
		document.getElementById('case_9_3').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_3').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_4').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_5').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_6').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_7').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_8').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_10').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_12').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_13').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_14').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_15').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_16').style.backgroundColor = "#ff9933"; //orange
		//------------------
		document.getElementById('case_9_3').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_9_3').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_9_3').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_10_16').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_16').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_16').style.backgroundPosition = "center";
		//------------------
	}

	function map_level_6() // 6 correcte
	{
		//debut creation map 4
		document.getElementById('case_10_4').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_5').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_6').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_7').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_8').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_15_9').style.backgroundColor = "#ff9933"; //orange///
		document.getElementById('case_14_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_13_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_12_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_11_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_9').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_9_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_8_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_7_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_6_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_5_9').style.backgroundColor = "#ff9933"; //orange
		//-----etoile
		document.getElementById('case_5_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_5_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_5_9').style.backgroundPosition = "center";

		document.getElementById('case_15_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_15_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_15_9').style.backgroundPosition = "center";
		//-----etoile
		//debut creation map 4
	}

	function map_level_7() //7 correcte
	{
		//debut creation map 4
		//verticale 1
		document.getElementById('case_17_4').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_16_4').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_15_4').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_4').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_13_4').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_12_4').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_4').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_10_4').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_9_4').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_4').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_7_4').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_6_4').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_5_4').style.backgroundColor = "#66ff33"; //vert
		//horizontale 1
		document.getElementById('case_5_5').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_5_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_5_7').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_5_8').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_5_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_5_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_5_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_5_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_5_13').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_5_14').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_5_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_5_16').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_5_17').style.backgroundColor = "#66ff33"; //vert

		//verticale 2
		document.getElementById('case_6_17').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_7_17').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_17').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_9_17').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_17').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_17').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_12_17').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_13_17').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_17').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_15_17').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_16_17').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_17_17').style.backgroundColor = "#66b3ff"; //bleu
		//horizontale 2
		document.getElementById('case_17_16').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_17_15').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_17_14').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_17_13').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_17_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_17_11').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_17_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_17_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_17_8').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_17_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_17_6').style.backgroundColor = "#ff9933"; //orange

		//verticale 3
		document.getElementById('case_16_6').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_15_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_6').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_13_6').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_12_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_6').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_10_6').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_9_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_6').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_7_6').style.backgroundColor = "#66ff33"; //vert
		//horizontale 3
		document.getElementById('case_7_7').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_7_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_9').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_7_10').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_7_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_12').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_7_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_14').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_7_15').style.backgroundColor = "#66b3ff"; //bleu
		//verticale 4
		document.getElementById('case_8_15').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_9_15').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_15').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_12_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_13_15').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_14_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_15_15').style.backgroundColor = "#ff9933"; //orange
		//horizontale 4
		document.getElementById('case_15_14').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_15_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_15_12').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_15_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_15_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_15_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_15_8').style.backgroundColor = "#ff9933"; //orange
		//verticale 5
		document.getElementById('case_14_8').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_13_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_8').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_11_8').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_8').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_9_8').style.backgroundColor = "#66ff33"; //vert
		//horizontale 5
		document.getElementById('case_9_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_9_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_11').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_9_12').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_9_13').style.backgroundColor = "#66b3ff"; //bleu
		//verticale 6
		document.getElementById('case_10_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_13').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_12_13').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_13_13').style.backgroundColor = "#66ff33"; //vert
		//horizontale 6
		document.getElementById('case_13_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_13_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_13_10').style.backgroundColor = "#66ff33"; //vert

		//-----etoile
		document.getElementById('case_13_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_13_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_13_10').style.backgroundPosition = "center";

	}

	function map_level_8() // correcte
	{

		document.getElementById('case_16_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_15_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_13_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_10').style.backgroundColor = "#ff9933"; //orang
		document.getElementById('case_8_10').style.backgroundColor = "#ff9933"; //orang
		document.getElementById('case_7_10').style.backgroundColor = "#ff9933"; //orang
		document.getElementById('case_6_10').style.backgroundColor = "#ff9933"; //orang
		document.getElementById('case_5_10').style.backgroundColor = "#ff9933"; //orang
		document.getElementById('case_4_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_4_9').style.backgroundColor = "#ff9933"; //orang
		//-----etoile
		document.getElementById('case_4_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_4_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_4_9').style.backgroundPosition = "center";
		//-----etoile
		//fin creation map 5
	}

	function map_level_9() // correcte
	{

		//debut création map 6
		document.getElementById('case_7_6').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_8_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_6').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_11_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_6').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_7_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_8').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_7_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_8_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_12_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_12_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_7').style.backgroundColor = "#ff9933"; //orange
		//----------------------
		document.getElementById('case_13_8').style.backgroundColor = "#66ff33"; //vert//etoile
		document.getElementById('case_11_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_9').style.backgroundColor = "#66ff33"; //vert///etoile
		document.getElementById('case_8_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_9').style.backgroundColor = "#ff9933"; //orange
		//--------------------
		document.getElementById('case_9_5').style.backgroundColor = "#66ff33"; //vert//etoile
		document.getElementById('case_9_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_12').style.backgroundColor = "#66ff33"; //vert// etoile

		//-----etoile
		document.getElementById('case_10_12').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_12').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_12').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_6_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_6_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_6_9').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_9_5').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_9_5').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_9_5').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_13_8').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_13_8').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_13_8').style.backgroundPosition = "center";
		//------------------
		//-----etoile
		//fin map 6
	}

	function map_level_10() // correcte
	{
		//creation map 7
		document.getElementById('case_2_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_3_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_4_9').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_5_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_7_9').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_8_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_9').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_12_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_13_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_9').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_15_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_16_9').style.backgroundColor = "#ff9933"; //orange
		//---------------------------------------------------------------------------
		document.getElementById('case_2_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_3_10').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_4_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_5_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_10').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_7_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_8_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_12_10').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_13_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_15_10').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_16_10').style.backgroundColor = "#ff9933"; //orange

		//-----etoile
		document.getElementById('case_2_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_2_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_2_9').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_3_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_3_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_3_9').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_4_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_4_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_4_9').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_5_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_5_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_5_9').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_6_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_6_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_6_9').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_7_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_9').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_8_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_8_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_8_9').style.backgroundPosition = "center";
		//------------------

		document.getElementById('case_10_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_9').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_11_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_11_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_11_9').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_12_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_12_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_12_9').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_13_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_13_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_13_9').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_14_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_14_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_14_9').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_15_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_15_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_15_9').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_16_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_16_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_16_9').style.backgroundPosition = "center";
		//------------------

		document.getElementById('case_2_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_2_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_2_10').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_3_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_3_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_3_10').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_4_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_4_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_4_10').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_5_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_5_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_5_10').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_6_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_6_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_6_10').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_7_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_10').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_8_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_8_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_8_10').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_9_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_9_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_9_10').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_10_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_10').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_11_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_11_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_11_10').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_12_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_12_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_12_10').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_13_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_13_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_13_10').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_14_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_14_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_14_10').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_15_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_15_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_15_10').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_16_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_16_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_16_10').style.backgroundPosition = "center";
		//------------------
	}

	function map_level_11() // correcte
	{

		//creationation map 8
		document.getElementById('case_3_5').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_3_4').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_3_3').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_3_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_3_1').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_4_1').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_5_1').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_5_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_5_3').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_5_4').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_5_5').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_5_6').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_5_7').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_5_8').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_5_9').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_4_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_3_9').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_3_8').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_3_7').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_4_7').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_6_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_7').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_5').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_9_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_5').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_7_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_11').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_7_12').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_7_13').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_7_14').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_7_15').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_7_16').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_16').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_5_16').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_4_16').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_3_16').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_3_15').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_3_14').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_3_13').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_3_12').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_3_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_4_11').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_5_11').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_6_11').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_8_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_9_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_11_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_12_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_13_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_14_11').style.backgroundColor = "#66ff33"; //vert

		document.getElementById('case_14_12').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_14_13').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_14_14').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_14_15').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_14_16').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_13_16').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_12_16').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_12_15').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_12_14').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_12_13').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_12_12').style.backgroundColor = "#66b3ff"; //bleu

		document.getElementById('case_12_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_5').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_12_4').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_12_3').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_12_2').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_12_1').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_13_1').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_14_1').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_2').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_14_3').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_13_3').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_11_3').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_10_3').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_9_3').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_8_3').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_7_3').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_7_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_7_1').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_8_1').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_9_1').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_1').style.backgroundColor = "#66b3ff"; //bleu

		//------------------
		document.getElementById('case_10_3').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_3').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_3').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_9_3').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_9_3').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_9_3').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_8_3').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_8_3').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_8_3').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_7_3').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_3').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_3').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_7_2').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_2').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_2').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_7_1').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_1').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_1').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_8_1').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_8_1').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_8_1').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_9_1').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_9_1').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_9_1').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_10_1').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_1').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_1').style.backgroundPosition = "center";
		//------------------
	}

	function map_level_12() // correcte
	{

		//creation map 9
		document.getElementById('case_4_14').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_5_14').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_5_13').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_6_13').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_6_12').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_7_12').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_7_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_8_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_8_10').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_9_10').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_9_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_12_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_12_10').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_13_10').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_13_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_14_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_14_12').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_15_12').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_15_13').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_16_13').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_16_14').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_17_14').style.backgroundColor = "#66b3ff"; //bleu
		//------------------
		document.getElementById('case_17_14').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_17_14').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_17_14').style.backgroundPosition = "center";
		//------------------
	}

	function map_level_13() // correcte
	{

		//Création map 10
		//horizontale
		document.getElementById('case_10_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_3').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_10_4').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_10_5').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_6').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_10_7').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_8').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_10_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_12').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_10_13').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_10_14').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_10_15').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_15').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_16').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_17').style.backgroundColor = "#66ff33"; //vert
		//verticale trajet haut
		document.getElementById('case_9_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_8_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_7_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_6_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_5_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_4_2').style.backgroundColor = "#ff9933"; //orange
		//---------------
		document.getElementById('case_9_5').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_8_5').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_7_5').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_6_5').style.backgroundColor = "#ff9933"; //orange
		//---------------
		document.getElementById('case_9_7').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_8_7').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_7_7').style.backgroundColor = "#ff9933"; //orange
		//-----------------
		document.getElementById('case_9_8').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_8_8').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_7_8').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_6_8').style.backgroundColor = "#ff9933"; //orange
		//--------------
		document.getElementById('case_9_9').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_8_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_8_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_7_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_6_11').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_5_11').style.backgroundColor = "#ff9933"; //orange
		//----------------
		document.getElementById('case_9_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_16').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_8_16').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_7_16').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_6_16').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_5_16').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_4_16').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_3_16').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_2_16').style.backgroundColor = "#ff9933"; //orange
		//-----------------------
		document.getElementById('case_11_3').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_12_3').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_13_3').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_14_3').style.backgroundColor = "#ff9933"; //orange
		//-------------------------
		document.getElementById('case_11_4').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_12_4').style.backgroundColor = "#ff9933"; //orange
		//--------------------------
		document.getElementById('case_11_6').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_12_6').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_13_6').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_14_6').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_15_6').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_16_6').style.backgroundColor = "#ff9933"; //orange
		//--------------------------
		document.getElementById('case_11_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_12_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_13_10').style.backgroundColor = "#ff9933"; //orange
		//---------------------------
		document.getElementById('case_11_12').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_12_12').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_13_12').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_14_12').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_15_12').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_16_12').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_17_12').style.backgroundColor = "#ff9933"; //orange
		//------------------------------
		document.getElementById('case_11_13').style.backgroundColor = "#ff9933"; //orange
		//------------------------------
		document.getElementById('case_11_14').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_12_14').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_13_14').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_14_14').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_15_14').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_16_14').style.backgroundColor = "#ff9933"; //orange
		//-------------------------------
		document.getElementById('case_11_17').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_12_17').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_13_17').style.backgroundColor = "#ff9933"; //orange
		//------------étoile------------
		document.getElementById('case_13_17').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_13_17').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_13_17').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_16_14').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_16_14').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_16_14').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_11_13').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_11_13').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_11_13').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_17_12').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_17_12').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_17_12').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_13_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_13_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_13_10').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_16_6').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_16_6').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_16_6').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_12_4').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_12_4').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_12_4').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_14_3').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_14_3').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_14_3').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_2_16').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_2_16').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_2_16').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_9_15').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_9_15').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_9_15').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_5_11').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_5_11').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_5_11').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_8_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_8_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_8_9').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_6_8').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_6_8').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_6_8').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_7_7').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_7').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_7').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_6_5').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_6_5').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_6_5').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_4_2').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_4_2').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_4_2').style.backgroundPosition = "center";
		//------------------

	}


	function map_level_14() // correcte
	{
		document.getElementById('case_4_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_5_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_13_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_15').style.backgroundColor = "#66ff33"; //vert

		document.getElementById('case_14_14').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_7').style.backgroundColor = "#66ff33"; //vert

		document.getElementById('case_13_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_7').style.backgroundColor = "#66ff33"; //vert

		document.getElementById('case_8_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_11').style.backgroundColor = "#66ff33"; //vert

		document.getElementById('case_9_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_11').style.backgroundColor = "#66ff33"; //vert

		document.getElementById('case_10_10').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_9').style.backgroundColor = "#66ff33"; //vert

		document.getElementById('case_11_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_9').style.backgroundColor = "#66ff33"; //vert

		document.getElementById('case_12_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_13').style.backgroundColor = "#66ff33"; //vert

		document.getElementById('case_11_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_13').style.backgroundColor = "#66ff33"; //vert

		document.getElementById('case_6_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_10').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_5').style.backgroundColor = "#66ff33"; //vert

		document.getElementById('case_7_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_13_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_15_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_16_5').style.backgroundColor = "#ff9933"; //orange
		//------------------
		document.getElementById('case_4_15').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_4_15').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_4_15').style.backgroundPosition = "center";
		//------------------
	}

	function map_level_15() // correcte
	{
		document.getElementById('case_3_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_3_3').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_3_4').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_3_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_3_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_3_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_3_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_3_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_3_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_3_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_3_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_3_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_3_14').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_3_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_3_16').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_3_17').style.backgroundColor = "#66b3ff"; //bleu

		//------------------
		document.getElementById('case_3_2').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_3_2').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_3_2').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_3_3').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_3_3').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_3_3').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_3_4').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_3_4').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_3_4').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_3_5').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_3_5').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_3_5').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_3_6').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_3_6').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_3_6').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_3_7').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_3_7').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_3_7').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_3_8').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_3_8').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_3_8').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_3_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_3_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_3_9').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_3_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_3_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_3_10').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_3_11').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_3_11').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_3_11').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_3_12').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_3_12').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_3_12').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_3_13').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_3_13').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_3_13').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_3_14').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_3_14').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_3_14').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_3_15').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_3_15').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_3_15').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_3_16').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_3_16').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_3_16').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_3_17').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_3_17').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_3_17').style.backgroundPosition = "center";
		//------------------



		document.getElementById('case_4_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_4_3').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_4_4').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_4_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_4_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_4_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_4_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_4_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_4_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_4_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_4_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_4_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_4_14').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_4_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_4_16').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_4_17').style.backgroundColor = "#66b3ff"; //bleu

		//------------------
		document.getElementById('case_4_2').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_4_2').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_4_2').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_4_3').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_4_3').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_4_3').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_4_4').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_4_4').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_4_4').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_4_5').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_4_5').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_4_5').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_4_6').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_4_6').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_4_6').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_4_7').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_4_7').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_4_7').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_4_8').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_4_8').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_4_8').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_4_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_4_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_4_9').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_4_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_4_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_4_10').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_4_11').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_4_11').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_4_11').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_4_12').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_4_12').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_4_12').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_4_13').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_4_13').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_4_13').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_4_14').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_4_14').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_4_14').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_4_15').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_4_15').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_4_15').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_4_16').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_4_16').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_4_16').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_4_17').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_4_17').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_4_17').style.backgroundPosition = "center";
		//------------------



		document.getElementById('case_5_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_5_3').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_5_4').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_5_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_5_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_5_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_5_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_5_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_5_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_5_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_5_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_5_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_5_14').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_5_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_5_16').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_5_17').style.backgroundColor = "#66b3ff"; //bleu

		//------------------
		document.getElementById('case_5_2').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_5_2').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_5_2').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_5_3').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_5_3').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_5_3').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_5_4').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_5_4').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_5_4').style.backgroundPosition = "center";
		//----------------
		//------------------
		document.getElementById('case_5_5').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_5_5').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_5_5').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_5_6').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_5_6').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_5_6').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_5_7').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_5_7').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_5_7').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_5_8').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_5_8').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_5_8').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_5_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_5_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_5_9').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_5_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_5_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_5_10').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_5_11').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_5_11').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_5_11').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_5_12').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_5_12').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_5_12').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_5_13').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_5_13').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_5_13').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_5_14').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_5_14').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_5_14').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_5_15').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_5_15').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_5_15').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_5_16').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_5_16').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_5_16').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_5_17').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_5_17').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_5_17').style.backgroundPosition = "center";
		//------------------




		document.getElementById('case_6_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_6_3').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_4').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_6_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_14').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_16').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_6_17').style.backgroundColor = "#66b3ff"; //bleu

		//------------------
		document.getElementById('case_6_2').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_6_2').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_6_2').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_6_3').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_6_3').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_6_3').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_6_4').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_6_4').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_6_4').style.backgroundPosition = "center";
		//----------------
		//------------------
		document.getElementById('case_6_5').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_6_5').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_6_5').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_6_6').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_6_6').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_6_6').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_6_7').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_6_7').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_6_7').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_6_8').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_6_8').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_6_8').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_6_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_6_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_6_9').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_6_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_6_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_6_10').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_6_11').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_6_11').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_6_11').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_6_12').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_6_12').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_6_12').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_6_13').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_6_13').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_6_13').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_6_14').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_6_14').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_6_14').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_6_15').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_6_15').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_6_15').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_6_16').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_6_16').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_6_16').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_6_17').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_6_17').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_6_17').style.backgroundPosition = "center";
		//------------------




		document.getElementById('case_7_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_7_3').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_4').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_7_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_14').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_16').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_7_17').style.backgroundColor = "#66b3ff"; //bleu

		//------------------
		document.getElementById('case_7_2').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_2').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_2').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_7_3').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_3').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_3').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_7_4').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_4').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_4').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_7_5').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_5').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_5').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_7_6').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_6').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_6').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_7_7').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_7').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_7').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_7_8').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_8').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_8').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_7_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_9').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_7_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_10').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_7_11').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_11').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_11').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_7_12').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_12').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_12').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_7_13').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_13').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_13').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_7_14').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_14').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_14').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_7_15').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_15').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_15').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_7_16').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_16').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_16').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_7_17').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_7_17').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_7_17').style.backgroundPosition = "center";
		//------------------



		document.getElementById('case_8_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_8_3').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_4').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_8_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_14').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_16').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_8_17').style.backgroundColor = "#66b3ff"; //bleu

		//------------------
		document.getElementById('case_8_2').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_8_2').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_8_2').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_8_3').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_8_3').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_8_3').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_8_4').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_8_4').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_8_4').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_8_5').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_8_5').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_8_5').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_8_6').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_8_6').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_8_6').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_8_7').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_8_7').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_8_7').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_8_8').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_8_8').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_8_8').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_8_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_8_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_8_9').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_8_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_8_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_8_10').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_8_11').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_8_11').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_8_11').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_8_12').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_8_12').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_8_12').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_8_13').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_8_13').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_8_13').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_8_14').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_8_14').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_8_14').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_8_15').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_8_15').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_8_15').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_8_16').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_8_16').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_8_16').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_8_17').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_8_17').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_8_17').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_9_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_9_3').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_4').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_9_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_14').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_16').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_9_17').style.backgroundColor = "#66b3ff"; //bleu

		//------------------
		document.getElementById('case_9_2').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_9_2').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_9_2').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_9_3').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_9_3').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_9_3').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_9_4').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_9_4').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_9_4').style.backgroundPosition = "center";
		//---------------
		//------------------
		document.getElementById('case_9_5').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_9_5').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_9_5').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_9_6').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_9_6').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_9_6').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_9_7').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_9_7').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_9_7').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_9_8').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_9_8').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_9_8').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_9_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_9_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_9_9').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_9_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_9_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_9_10').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_9_11').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_9_11').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_9_11').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_9_12').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_9_12').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_9_12').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_9_13').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_9_13').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_9_13').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_9_14').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_9_14').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_9_14').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_9_15').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_9_15').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_9_15').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_9_16').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_9_16').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_9_16').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_9_17').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_9_17').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_9_17').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_10_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_10_3').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_4').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_10_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_14').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_16').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_10_17').style.backgroundColor = "#66b3ff"; //bleu
		//------------------
		document.getElementById('case_10_2').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_2').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_2').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_10_3').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_3').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_3').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_10_4').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_4').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_4').style.backgroundPosition = "center";
		//----------------
		//------------------
		document.getElementById('case_10_5').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_5').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_5').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_10_6').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_6').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_6').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_10_7').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_7').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_7').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_10_8').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_8').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_8').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_10_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_9').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_10_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_10').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_10_11').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_11').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_11').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_10_12').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_12').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_12').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_10_13').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_13').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_13').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_10_14').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_14').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_14').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_10_15').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_15').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_15').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_10_16').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_16').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_16').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_10_17').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_10_17').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_10_17').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_11_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_11_3').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_4').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_11_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_14').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_16').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_11_17').style.backgroundColor = "#66b3ff"; //bleu

		//------------------
		document.getElementById('case_11_2').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_11_2').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_11_2').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_11_3').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_11_3').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_11_3').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_11_4').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_11_4').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_11_4').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_11_5').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_11_5').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_11_5').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_11_6').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_11_6').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_11_6').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_11_7').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_11_7').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_11_7').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_11_8').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_11_8').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_11_8').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_11_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_11_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_11_9').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_11_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_11_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_11_10').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_11_11').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_11_11').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_11_11').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_11_12').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_11_12').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_11_12').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_11_13').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_11_13').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_11_13').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_11_14').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_11_14').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_11_14').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_11_15').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_11_15').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_11_15').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_11_16').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_11_16').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_11_16').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_11_17').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_11_17').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_11_17').style.backgroundPosition = "center";
		//------------------
		document.getElementById('case_12_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_12_3').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_4').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_12_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_14').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_16').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_12_17').style.backgroundColor = "#66b3ff"; //bleu
		//------------------
		document.getElementById('case_12_2').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_12_2').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_12_2').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_12_3').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_12_3').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_12_3').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_12_4').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_12_4').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_12_4').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_12_5').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_12_5').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_12_5').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_12_6').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_12_6').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_12_6').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_12_7').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_12_7').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_12_7').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_12_8').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_12_8').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_12_8').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_12_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_12_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_12_9').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_12_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_12_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_12_10').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_12_11').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_12_11').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_12_11').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_12_12').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_12_12').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_12_12').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_12_13').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_12_13').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_12_13').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_12_14').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_12_14').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_12_14').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_12_15').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_12_15').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_12_15').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_12_16').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_12_16').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_12_16').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_12_17').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_12_17').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_12_17').style.backgroundPosition = "center";
		//------------------



		document.getElementById('case_13_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_13_3').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_13_4').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_13_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_13_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_13_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_13_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_13_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_13_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_13_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_13_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_13_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_13_14').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_13_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_13_16').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_13_17').style.backgroundColor = "#66b3ff"; //bleu

		//------------------
		document.getElementById('case_13_2').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_13_2').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_13_2').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_13_3').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_13_3').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_13_3').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_13_4').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_13_4').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_13_4').style.backgroundPosition = "center";
		//----------------
		//------------------
		document.getElementById('case_13_5').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_13_5').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_13_5').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_13_6').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_13_6').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_13_6').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_13_7').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_13_7').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_13_7').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_13_8').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_13_8').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_13_8').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_13_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_13_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_13_9').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_13_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_13_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_13_10').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_13_11').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_13_11').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_13_11').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_13_12').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_13_12').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_13_12').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_13_13').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_13_13').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_13_13').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_13_14').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_13_14').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_13_14').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_13_15').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_13_15').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_13_15').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_13_16').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_13_16').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_13_16').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_13_17').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_13_17').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_13_17').style.backgroundPosition = "center";
		//------------------




		document.getElementById('case_14_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_14_3').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_4').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_14_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_14').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_16').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_14_17').style.backgroundColor = "#66b3ff"; //bleu

		//------------------
		document.getElementById('case_14_2').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_14_2').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_14_2').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_14_3').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_14_3').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_14_3').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_14_4').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_14_4').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_14_4').style.backgroundPosition = "center";
		//----------------
		//------------------
		document.getElementById('case_14_5').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_14_5').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_14_5').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_14_6').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_14_6').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_14_6').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_14_7').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_14_7').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_14_7').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_14_8').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_14_8').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_14_8').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_14_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_14_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_14_9').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_14_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_14_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_14_10').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_14_11').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_14_11').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_14_11').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_14_12').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_14_12').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_14_12').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_14_13').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_14_13').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_14_13').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_14_14').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_14_14').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_14_14').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_14_15').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_14_15').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_14_15').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_14_16').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_14_16').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_14_16').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_14_17').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_14_17').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_14_17').style.backgroundPosition = "center";
		//------------------




		document.getElementById('case_15_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_15_3').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_15_4').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_15_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_15_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_15_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_15_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_15_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_15_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_15_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_15_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_15_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_15_14').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_15_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_15_16').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_15_17').style.backgroundColor = "#66b3ff"; //bleu

		//------------------
		document.getElementById('case_15_2').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_15_2').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_15_2').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_15_3').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_15_3').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_15_3').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_15_4').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_15_4').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_15_4').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_15_5').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_15_5').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_15_5').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_15_6').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_15_6').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_15_6').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_15_7').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_15_7').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_15_7').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_15_8').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_15_8').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_15_8').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_15_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_15_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_15_9').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_15_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_15_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_15_10').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_15_11').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_15_11').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_15_11').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_15_12').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_15_12').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_15_12').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_15_13').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_15_13').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_15_13').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_15_14').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_15_14').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_15_14').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_15_15').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_15_15').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_15_15').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_15_16').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_15_16').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_15_16').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_15_17').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_15_17').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_15_17').style.backgroundPosition = "center";
		//------------------



		document.getElementById('case_16_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_16_3').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_16_4').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_16_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_16_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_16_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_16_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_16_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_16_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_16_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_16_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_16_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_16_14').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_16_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_16_16').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_16_17').style.backgroundColor = "#66b3ff"; //bleu

		//------------------
		document.getElementById('case_16_2').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_16_2').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_16_2').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_16_3').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_16_3').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_16_3').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_16_4').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_16_4').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_16_4').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_16_5').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_16_5').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_16_5').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_16_6').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_16_6').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_16_6').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_16_7').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_16_7').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_16_7').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_16_8').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_16_8').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_16_8').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_16_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_16_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_16_9').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_16_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_16_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_16_10').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_16_11').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_16_11').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_16_11').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_16_12').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_16_12').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_16_12').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_16_13').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_16_13').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_16_13').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_16_14').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_16_14').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_16_14').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_16_15').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_16_15').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_16_15').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_16_16').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_16_16').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_16_16').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_16_17').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_16_17').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_16_17').style.backgroundPosition = "center";
		//------------------



		document.getElementById('case_17_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_17_3').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_17_4').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_17_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_17_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_17_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_17_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_17_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_17_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_17_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_17_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_17_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_17_14').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_17_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_17_16').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_17_17').style.backgroundColor = "#66b3ff"; //bleu

		//------------------
		document.getElementById('case_17_2').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_17_2').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_17_2').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_17_3').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_17_3').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_17_3').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_17_4').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_17_4').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_17_4').style.backgroundPosition = "center";
		//---------------
		//------------------
		document.getElementById('case_17_5').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_17_5').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_17_5').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_17_6').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_17_6').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_17_6').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_17_7').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_17_7').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_17_7').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_17_8').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_17_8').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_17_8').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_17_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_17_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_17_9').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_17_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_17_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_17_10').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_17_11').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_17_11').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_17_11').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_17_12').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_17_12').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_17_12').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_17_13').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_17_13').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_17_13').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_17_14').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_17_14').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_17_14').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_17_15').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_17_15').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_17_15').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_17_16').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_17_16').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_17_16').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_17_17').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_17_17').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_17_17').style.backgroundPosition = "center";
		//------------------




		document.getElementById('case_18_2').style.backgroundColor = "#66b3ff"; //bleu
		document.getElementById('case_18_3').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_18_4').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_18_5').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_18_6').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_18_7').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_18_8').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_18_9').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_18_10').style.backgroundColor = "#66ff33"; //vert
		document.getElementById('case_18_11').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_18_12').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_18_13').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_18_14').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_18_15').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_18_16').style.backgroundColor = "#ff9933"; //orange
		document.getElementById('case_18_17').style.backgroundColor = "#66b3ff"; //bleu

		//------------------
		/*   document.getElementById('case_18_2').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_18_2').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_18_2').style.backgroundPosition = "center"; */
		//------------------

		document.getElementById('case_18_3').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_18_3').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_18_3').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_18_4').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_18_4').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_18_4').style.backgroundPosition = "center";
		//---------------
		//------------------
		document.getElementById('case_18_5').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_18_5').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_18_5').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_18_6').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_18_6').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_18_6').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_18_7').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_18_7').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_18_7').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_18_8').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_18_8').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_18_8').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_18_9').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_18_9').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_18_9').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_18_10').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_18_10').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_18_10').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_18_11').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_18_11').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_18_11').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_18_12').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_18_12').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_18_12').style.backgroundPosition = "center";
		//----------------
		//------------------
		document.getElementById('case_18_13').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_18_13').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_18_13').style.backgroundPosition = "center";
		//-----------------
		//------------------
		document.getElementById('case_18_14').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_18_14').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_18_14').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_18_15').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_18_15').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_18_15').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_18_16').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_18_16').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_18_16').style.backgroundPosition = "center";
		//------------------
		//------------------
		document.getElementById('case_18_17').style.backgroundImage = "url(image/star.png)";
		document.getElementById('case_18_17').style.backgroundRepeat = "no-repeat";
		document.getElementById('case_18_17').style.backgroundPosition = "center";
		//------------------
	}
	function calculposition()
	{ var essai =0;
		for(var calcul=0;calcul<tabEtoile.length;calcul++)
		{
			essai=essai+tabEtoile[calcul];
		}
		return essai;
	}
	
	function calculposition2()
	{ var essai2 =0;
		var pos = tabEtoile.indexOf("case_" + col + "_" + cellule + "");
		if(pos!=-1)
		{
			tabEtoile.splice(pos, 1);
		}
		if(tabEtoile.length<1)
		{
			essai2 =1;
		}
		return essai2;
	}

	function verification_map(variable) {
		if (choixmap == 0) // correcte
		{
			tab = ['case_14_10', 'case_13_10', 'case_12_10', 'case_11_10', 'case_10_10', 'case_9_10', 'case_8_10', 'case_7_10'];
		} else if (choixmap == 1) // correcte
		{
			tab = ['case_4_3', 'case_4_4', 'case_5_4', 'case_5_5', 'case_6_5', 'case_6_6', 'case_7_6', 'case_7_7', 'case_8_7', 'case_8_8', 'case_9_8', 'case_9_9', 'case_10_9', 'case_10_10', 'case_11_10', 'case_11_11', 'case_12_11', 'case_12_12', 'case_13_12', 'case_13_13', 'case_14_13', 'case_14_14', 'case_15_14', 'case_15_15', 'case_16_15', 'case_16_16'];
		} else if (choixmap == 2) // correcte
		{
			tab = ['case_10_3', 'case_10_4', 'case_10_5', 'case_10_6', 'case_10_7', 'case_10_8', 'case_10_9', 'case_10_10', 'case_10_11', 'case_10_12', 'case_9_12', 'case_9_13', 'case_8_13', 'case_8_14', 'case_7_14', 'case_7_15', 'case_6_15', 'case_6_16', 'case_5_16'];
			//var tab = ['case_8_9',, 'case_9_9', 'case_10_9', 'case_11_9', 'case_12_9', 'case_10_8', 'case_10_7', 'case_10_10', 'case_10_11'];
		} else if (choixmap == 3) // correcte
		{
			tab = ['case_8_9', 'case_9_9', 'case_10_9', 'case_11_9', 'case_12_9', 'case_10_8', 'case_10_7', 'case_10_10', 'case_10_11'];
		} else if (choixmap == 4) // correcte
		{
			tab = ['case_5_9', 'case_6_9', 'case_7_9', 'case_8_9', 'case_9_9', 'case_10_5', 'case_10_6', 'case_10_7', 'case_10_8', 'case_10_9', 'case_10_10', 'case_10_11'
			, 'case_10_12', 'case_10_13', 'case_10_14', 'case_10_4'];
		} else if (choixmap == 5) // correcte
		{
			tab = ['case_9_3', 'case_10_3', 'case_10_4', 'case_10_5', 'case_10_6', 'case_10_7', 'case_10_8', 'case_10_9', 'case_10_10', 'case_10_11', 'case_10_12', 'case_10_13', 'case_10_14', 'case_10_15', 'case_10_16'];
		} else if (choixmap == 6) // correcte
		{
			tab = ['case_10_4', 'case_10_5', 'case_10_6', 'case_10_7', 'case_10_8', 'case_15_9', 'case_14_9', 'case_13_9', 'case_12_9', 'case_11_9', 'case_10_9', 'case_9_9', 'case_8_9', 'case_7_9', 'case_6_9', 'case_5_9'];

		} else if (choixmap == 7) // correcte
		{
			tab = ['case_17_4', 'case_16_4', 'case_15_4', 'case_14_4', 'case_13_4', 'case_12_4', 'case_11_4', 'case_10_4', 'case_9_4', 'case_8_4', 'case_7_4', 'case_6_4', 'case_5_4', 'case_5_5', 'case_5_6', 'case_5_7', 'case_5_8', 'case_5_9', 'case_5_10', 'case_5_11', 'case_5_12', 'case_5_13', 'case_5_14', 'case_5_15', 'case_5_16', 'case_5_17', 'case_6_17', 'case_7_17', 'case_8_17', 'case_9_17', 'case_10_17', 'case_11_17', 'case_12_17', 'case_13_17', 'case_14_17', 'case_15_17', 'case_16_17', 'case_17_17', 'case_17_16', 'case_17_15', 'case_17_14', 'case_17_13', 'case_17_12', 'case_17_11', 'case_17_10', 'case_17_9', 'case_17_8', 'case_17_7', 'case_17_6', 'case_16_6', 'case_15_6', 'case_14_6', 'case_13_6', 'case_12_6', 'case_11_6', 'case_10_6', 'case_9_6', 'case_8_6', 'case_7_6', 'case_7_7', 'case_7_8', 'case_7_9', 'case_7_10', 'case_7_11', 'case_7_12', 'case_7_13', 'case_7_14', 'case_7_15', 'case_8_15', 'case_9_15', 'case_10_15', 'case_11_15', 'case_12_15', 'case_13_15', 'case_14_15', 'case_15_15', 'case_15_14', 'case_15_13', 'case_15_12', 'case_15_11', 'case_15_10', 'case_15_9', 'case_15_8', 'case_14_8', 'case_13_8', 'case_12_8', 'case_11_8', 'case_10_8', 'case_9_8', 'case_9_9', 'case_9_10', 'case_9_11', 'case_9_12', 'case_9_13', 'case_10_13', 'case_11_13', 'case_12_13', 'case_13_13', 'case_13_12', 'case_13_11', 'case_13_10', 'case_13_10', 'case_13_10', 'case_13_10'];
		} else if (choixmap == 8) // correcte
		{
			tab = ['case_16_10', 'case_15_10', 'case_14_10', 'case_13_10', 'case_12_10', 'case_11_10', 'case_10_10', 'case_9_10', 'case_8_10', 'case_7_10', 'case_6_10', 'case_5_10', 'case_4_10', 'case_4_9'];
		} else if (choixmap == 9) // correcte
		{
			tab = ['case_7_6', 'case_8_6', 'case_9_6', 'case_10_6', 'case_11_6', 'case_12_6', 'case_7_7', 'case_7_8', 'case_7_9', 'case_7_10', 'case_7_11', 'case_8_11', 'case_9_11', 'case_10_11', 'case_11_11', 'case_12_11', 'case_12_10', 'case_12_9', 'case_12_8', 'case_12_7', 'case_13_8', 'case_11_8', 'case_10_8', 'case_9_8', 'case_8_8', 'case_6_9', 'case_8_9', 'case_9_9', 'case_10_9', 'case_11_9', 'case_9_5', 'case_9_7', 'case_9_10', 'case_10_10', 'case_10_7', 'case_10_12'];
		} else if (choixmap == 10) // correcte
		{
			tab = ['case_2_9', 'case_3_9', 'case_4_9', 'case_5_9', 'case_6_9', 'case_7_9', 'case_8_9', 'case_9_9', 'case_10_9', 'case_11_9', 'case_12_9', 'case_13_9', 'case_14_9', 'case_15_9', 'case_16_9', 'case_2_10', 'case_3_10', 'case_4_10', 'case_5_10', 'case_6_10', 'case_7_10', 'case_8_10', 'case_9_10', 'case_10_10', 'case_11_10', 'case_12_10', 'case_13_10', 'case_14_10', 'case_15_10', 'case_16_10'];
		} else if (choixmap == 11) // correcte
		{
			tab = ['case_3_5', 'case_3_4', 'case_3_3', 'case_3_2', 'case_3_1', 'case_4_1', 'case_5_1', 'case_5_2', 'case_5_3', 'case_5_4', 'case_5_5', 'case_5_6'
			, 'case_5_7', 'case_5_8', 'case_5_9', 'case_4_9', 'case_3_9', 'case_3_8', 'case_3_7', 'case_4_7', 'case_6_7', 'case_7_7', 'case_8_7', 'case_9_7'
			, 'case_10_7', 'case_10_6', 'case_10_5', 'case_9_5', 'case_8_5', 'case_7_5', 'case_7_6', 'case_7_8', 'case_7_9', 'case_7_10', 'case_7_11', 'case_7_12'
			, 'case_7_13', 'case_7_14', 'case_7_15', 'case_7_16', 'case_6_16', 'case_5_16', 'case_4_16', 'case_3_16', 'case_3_15', 'case_3_14', 'case_3_13', 'case_3_12'
			, 'case_3_11', 'case_4_11', 'case_5_11', 'case_6_11', 'case_8_11', 'case_9_11', 'case_10_11', 'case_11_11', 'case_12_11', 'case_13_11', 'case_14_11', 'case_14_12'
			, 'case_14_13', 'case_14_14', 'case_14_15', 'case_14_16', 'case_13_16', 'case_12_16', 'case_12_15', 'case_12_14', 'case_12_13', 'case_12_12', 'case_12_10'
			, 'case_12_9', 'case_12_8', 'case_12_7', 'case_12_6', 'case_12_5', 'case_12_4', 'case_12_3', 'case_12_2', 'case_12_1', 'case_13_1', 'case_14_1', 'case_14_2'
			, 'case_14_3', 'case_13_3', 'case_11_3', 'case_10_3', 'case_9_3', 'case_8_3', 'case_7_3', 'case_7_2', 'case_7_1', 'case_8_1', 'case_9_1', 'case_10_1'];
		} else if (choixmap == 12) // correcte
		{
			tab = ['case_4_14', 'case_5_14', 'case_5_13', 'case_6_13', 'case_6_12', 'case_7_12', 'case_7_11', 'case_8_11', 'case_8_10', 'case_9_10', 'case_9_9', 'case_10_9', 'case_10_8', 'case_11_8', 'case_11_9', 'case_12_9', 'case_12_10', 'case_13_10', 'case_13_11', 'case_14_11', 'case_14_12', 'case_15_12', 'case_15_13', 'case_16_13', 'case_16_14', 'case_17_14'];
		} else if (choixmap == 13) // correcte
		{
			tab = ['case_10_2', 'case_10_3', 'case_10_4', 'case_10_5', 'case_10_6', 'case_10_7', 'case_10_8', 'case_10_9', 'case_10_10', 'case_10_11', 'case_10_12', 'case_10_13'
			, 'case_10_14', 'case_10_15', 'case_10_15', 'case_10_16', 'case_10_17', 'case_9_2', 'case_8_2', 'case_7_2', 'case_6_2', 'case_5_2', 'case_4_2', 'case_9_5', 'case_8_5'
			, 'case_7_5', 'case_6_5', 'case_9_7', 'case_8_7', 'case_7_7', 'case_9_8', 'case_8_8', 'case_7_8', 'case_6_8', 'case_9_9', 'case_8_9', 'case_9_11', 'case_8_11'
			, 'case_7_11', 'case_6_11', 'case_5_11', 'case_9_15', 'case_9_16', 'case_8_16', 'case_7_16', 'case_6_16', 'case_5_16', 'case_4_16', 'case_3_16', 'case_2_16'
			, 'case_11_3', 'case_12_3', 'case_13_3', 'case_14_3', 'case_11_4', 'case_12_4', 'case_11_6', 'case_12_6', 'case_13_6', 'case_14_6', 'case_15_6', 'case_16_6'
			, 'case_11_10', 'case_12_10', 'case_13_10', 'case_11_12', 'case_12_12', 'case_13_12', 'case_14_12', 'case_15_12', 'case_16_12', 'case_17_12', 'case_11_13', 'case_11_14'
			, 'case_12_14', 'case_13_14', 'case_14_14', 'case_15_14', 'case_16_14', 'case_11_17', 'case_12_17', 'case_13_17'];
		} else if (choixmap == 14) // correcte
		{
			tab = ['case_4_15', 'case_5_15', 'case_6_15', 'case_7_15', 'case_8_15', 'case_9_15', 'case_10_15', 'case_11_15', 'case_12_15', 'case_13_15', 'case_14_15', 'case_14_14'
			, 'case_14_13', 'case_14_12', 'case_14_11', 'case_14_10', 'case_14_9', 'case_14_8', 'case_14_7', 'case_13_7', 'case_12_7', 'case_11_7', 'case_10_7', 'case_9_7', 'case_8_7'
			, 'case_8_8', 'case_8_9', 'case_8_10', 'case_8_11', 'case_9_11', 'case_10_11', 'case_10_10', 'case_10_9', 'case_11_9', 'case_12_9', 'case_12_10', 'case_12_11', 'case_12_12', 'case_12_13'
			, 'case_11_13', 'case_10_13', 'case_9_13', 'case_8_13', 'case_7_13', 'case_6_13', 'case_6_12', 'case_6_11', 'case_6_10', 'case_6_9', 'case_6_8', 'case_6_7', 'case_6_6'
			, 'case_6_5', 'case_7_5', 'case_8_5', 'case_9_5', 'case_10_5', 'case_11_5', 'case_12_5', 'case_13_5', 'case_14_5', 'case_15_5'
			, 'case_16_5'];
		} else if (choixmap == 15) // correcte
		{
			tab = [ 'case_3_2', 'case_3_3', 'case_3_4', 'case_3_5', 'case_3_6', 'case_3_7', 'case_3_8', 'case_3_9', 'case_3_10', 'case_3_11', 'case_3_12', 'case_3_13'
			, 'case_3_14', 'case_3_15', 'case_3_16', 'case_3_17', 'case_4_2', 'case_4_3', 'case_4_4', 'case_4_5', 'case_4_6', 'case_4_7', 'case_4_8', 'case_4_9', 'case_4_10', 'case_4_11'
			, 'case_4_12', 'case_4_13', 'case_4_14', 'case_4_15', 'case_4_16', 'case_4_17', 'case_5_2', 'case_5_3', 'case_5_4', 'case_5_5', 'case_5_6', 'case_5_7', 'case_5_8', 'case_5_9'
			, 'case_5_10', 'case_5_11', 'case_5_12', 'case_5_13', 'case_5_14', 'case_5_15', 'case_5_16', 'case_5_17', 'case_6_2', 'case_6_3', 'case_6_4', 'case_6_5', 'case_6_6', 'case_6_7'
			, 'case_6_8', 'case_6_9', 'case_6_10', 'case_6_11', 'case_6_12', 'case_6_13', 'case_6_14', 'case_6_15', 'case_6_16', 'case_6_17', 'case_7_2', 'case_7_3', 'case_7_4', 'case_7_5'
			, 'case_7_6', 'case_7_7', 'case_7_8', 'case_7_9', 'case_7_10', 'case_7_11', 'case_7_12', 'case_7_13', 'case_7_14', 'case_7_15', 'case_7_16', 'case_7_17', 'case_8_2'
			, 'case_8_3', 'case_8_4', 'case_8_5', 'case_8_6', 'case_8_7', 'case_8_8', 'case_8_9', 'case_8_10', 'case_8_11', 'case_8_12', 'case_8_13', 'case_8_14', 'case_8_15', 'case_8_16', 'case_8_17'
			, 'case_9_2', 'case_9_3', 'case_9_4', 'case_9_5', 'case_9_6', 'case_9_7', 'case_9_8', 'case_9_9', 'case_9_10', 'case_9_11', 'case_9_12', 'case_9_13', 'case_9_14', 'case_9_15', 'case_9_16'
			, 'case_9_17', 'case_10_2', 'case_10_3', 'case_10_4', 'case_10_5', 'case_10_6', 'case_10_7', 'case_10_8', 'case_10_9', 'case_10_10', 'case_10_11', 'case_10_12', 'case_10_13'
			, 'case_10_14', 'case_10_15', 'case_10_16', 'case_10_17', 'case_11_2', 'case_11_3', 'case_11_4', 'case_11_5', 'case_11_6', 'case_11_7', 'case_11_8', 'case_11_9', 'case_11_10'
			, 'case_11_11', 'case_11_12', 'case_11_13', 'case_11_14', 'case_11_15', 'case_11_16', 'case_11_17', 'case_12_2', 'case_12_3', 'case_12_4', 'case_12_5', 'case_12_6'
			, 'case_12_7', 'case_12_8', 'case_12_9', 'case_12_10', 'case_12_11', 'case_12_12', 'case_12_13', 'case_12_14', 'case_12_15', 'case_12_16', 'case_12_17', 'case_13_2'
			, 'case_13_3', 'case_13_4', 'case_13_5', 'case_13_6', 'case_13_7', 'case_13_8', 'case_13_9', 'case_13_10', 'case_13_11', 'case_13_12', 'case_13_13', 'case_13_14', 'case_13_15', 'case_13_16'
			, 'case_13_17', 'case_14_2', 'case_14_3', 'case_14_4', 'case_14_5', 'case_14_6', 'case_14_7', 'case_14_8', 'case_14_9', 'case_14_10', 'case_14_11', 'case_14_12', 'case_14_13', 'case_14_14'
			, 'case_14_15', 'case_14_16', 'case_14_17', 'case_15_2', 'case_15_3', 'case_15_4', 'case_15_5', 'case_15_6', 'case_15_7', 'case_15_8', 'case_15_9', 'case_15_10', 'case_15_11', 'case_15_12'
			, 'case_15_13', 'case_15_14', 'case_15_15', 'case_15_16', 'case_15_17', 'case_16_2', 'case_16_3', 'case_16_4', 'case_16_5', 'case_16_6', 'case_16_7', 'case_16_8', 'case_16_9'
			, 'case_16_10', 'case_16_11', 'case_16_12', 'case_16_13', 'case_16_14', 'case_16_15', 'case_16_16', 'case_16_17', 'case_17_2', 'case_17_3', 'case_17_4', 'case_17_5', 'case_17_6'
			, 'case_17_7', 'case_17_8', 'case_17_9', 'case_17_10', 'case_17_11', 'case_17_12', 'case_17_13', 'case_17_14', 'case_17_15', 'case_17_16', 'case_17_17', 'case_18_2'
			, 'case_18_3', 'case_18_4', 'case_18_5', 'case_18_6', 'case_18_7', 'case_18_8', 'case_18_9', 'case_18_10', 'case_18_11', 'case_18_12', 'case_18_13', 'case_18_14', 'case_18_15'
			, 'case_18_16', 'case_18_17'];
		}
		if (tab.indexOf(variable) == -1) {
			alert("echec: sortie de jeu");
			if (varplay == true) {
				clearInterval(intervalID);
				// fonction reset
			}
		}
		if (col == 7 && cellule == 10 && choixmap == 0) {
			alert("Felicitations , vous avez reussi");
			selReset();
			setCookie("level", 1, 30);
			clearInterval(intervalID);
			setCookie("score", 5, 30);
			intervalID = null;
			initial();
			void window.location.reload();
		} else if (col == 16 && cellule == 16 && choixmap == 1) {
			alert("Felicitations , vous avez reussi");
			selReset();
			setCookie("level", 2, 30);
			clearInterval(intervalID);
			setCookie("score", 15, 30);
			initial();
			void window.location.reload();

		} else if (col == 5 && cellule == 16 && choixmap == 2) {
			alert("Felicitations , vous avez reussi");
			selReset();
			setCookie("level", 2, 30);
			clearInterval(intervalID);
			setCookie("score", 15, 30);
			initial();
			void window.location.reload();

		} else if (col == 12 && cellule == 9 && choixmap == 3) {
			alert("Felicitations , vous avez reussi");
			selReset();
			setCookie("level", 3, 30);
			clearInterval(intervalID);
			setCookie("score", 30, 30);
			initial();
			void window.location.reload();

		} else if (choixmap == 4) {
			
			
			if(col == 10 && cellule == 4)
			{
				tabEtoile[0]=1;
			}
			else if (col == 10 && cellule == 14)
			{
				tabEtoile[1]=1;
			}
			position=calculposition();
			if (position == 2) {
				alert("Felicitations , vous avez reussi");
				selReset();
				position = 0;
				setCookie("level", 3, 30);
				clearInterval(intervalID);
				setCookie("score", 30, 30);
				initial();
				void window.location.reload();
			}
			
		}
		
		else if ( choixmap == 5) {
			
			if(col == 9 && cellule == 3) 
			{
				tabEtoile[0]=1;
			}
			else if (col == 10 && cellule == 16)
			{
				tabEtoile[1]=1;
			}
			position=calculposition();
			if (position == 2) {
				alert("Felicitations , vous avez reussi");
				selReset();
				position = 0;
				setCookie("level", 3, 30);
				clearInterval(intervalID);
				setCookie("score", 30, 30);
				initial();
				void window.location.reload();
			}
		}
		else if (choixmap == 6) {
			
			if (col == 5 && cellule == 9)
			{
				tabEtoile[0]=1;
			}
			else if (col == 15 && cellule == 9)
			{
				tabEtoile[1]=1;
			}
			position=calculposition();
			if (position == 2) {
				alert("Felicitations , vous avez reussi");
				selReset();
				position = 0;
				setCookie("level", 4, 30);
				clearInterval(intervalID);
				setCookie("score", 50, 30);
				initial();
				void window.location.reload();
			}
		}
		
		else if ( col == 13 && cellule == 10 && choixmap == 7) {
			alert("Felicitations , vous avez reussi");
			selReset();
			position = 0;
			setCookie("level", 4, 30);
			clearInterval(intervalID);
			setCookie("score", 50, 30);
			initial();
			void window.location.reload();

		} 
		else if (col == 4 && cellule == 9 && choixmap == 8) {
			alert("Felicitations , vous avez reussi");
			selReset();
			position = 0;
			setCookie("level", 5, 1);
			clearInterval(intervalID);
			setCookie("score", 75, 1);
			initial();
			void window.location.reload();

		}
		else if (choixmap == 9) {
			
			if (col == 6 && cellule == 9) {
				tabEtoile[0]=1;
			}
			else if (col == 9 && cellule == 5)
			{
				tabEtoile[1]=1;
				
			}
			else if (col == 10 && cellule == 12)
			{
				tabEtoile[2]=1;
			}
			else if (col == 13 && cellule == 8)
			{
				tabEtoile[3]=1;
			}
			position = calculposition();
			if (position == 4) {
				alert("Felicitations , vous avez reussi");
				selReset();
				position = 0;
				setCookie("level", 6, 30);
				clearInterval(intervalID);
				setCookie("score", 105, 30);
				initial();
				void window.location.reload();
			}
		}
		else if (choixmap==10) {
			
			
			position = calculposition2();
			if (position == 1) {
				alert("Felicitations , vous avez reussi");
				selReset();
				position = 0;
				setCookie("level", 7, 30);
				clearInterval(intervalID);
				setCookie("score", 140, 30);
				initial();
				void window.location.reload();
			}
		}
		else if (col == 10 && cellule == 1 && choixmap == 11) {
			alert("Felicitations , vous avez reussi");
			selReset();
			position = 0;
			setCookie("level", 8, 30);
			setCookie("score", 180, 30);
			clearInterval(intervalID);
			initial();
			void window.location.reload();

		} else if (col == 17 && cellule == 14 && choixmap == 12) {
			alert("Felicitations , vous avez reussi");
			selReset();
			position = 0;
			setCookie("level", 9, 30);
			clearInterval(intervalID);
			setCookie("score", 255, 30);  initial();
			void window.location.reload();

		} else if (choixmap == 13) {
			if (col == 4 && cellule == 4)
			{
				tabEtoile[0]=1;
			}
			else if (col == 6 && cellule == 5)
			{
				tabEtoile[1]=1;
			}
			else if (col == 7 && cellule == 7)
			{
				tabEtoile[2]=1;
			}
			else if (col == 6 && cellule == 8)
			{
				tabEtoile[3]=1;
			}
			else if (col == 8 && cellule == 9)
			{
				tabEtoile[4]=1;
			}
			else if(col == 5 && cellule == 11)
			{
				tabEtoile[5]=1;
			}
			else if(col == 9 && cellule == 15)
			{
				tabEtoile[6]=1;
			}
			else if(col == 2 && cellule == 16)
			{
				tabEtoile[7]=1;
			}
			else if(col == 13 && cellule == 17)
			{
				tabEtoile[8]=1;
			}	
			else if(col == 13 && cellule == 14)
			{
				tabEtoile[9]=1;
			}
			else if(col == 13 && cellule == 11)
			{
				tabEtoile[10]=1;
			}
			else if(col == 17 && cellule == 12)
			{
				tabEtoile[11]=1;
			}
			else if(col == 13 && cellule == 10)
			{
				tabEtoile[12]=1;
			}
			else if(col == 16 && cellule == 6)
			{
				tabEtoile[13]=1;
			}
			else if(col == 12 && cellule == 4)
			{
				tabEtoile[14]=1;
			}
			else if(col == 14 && cellule == 3)
			{
				tabEtoile[15]=1;
			}
			position = calculposition();
			if (position == 16) {
				alert("Felicitations , vous avez reussi");
				selReset();
				position = 0;
				setCookie("level", 10, 30);
				clearInterval(intervalID);
				setCookie("score", 275, 30);
				initial();
				void window.location.reload();
			}
		}
		else if (col == 4 && cellule == 15 && choixmap == 14) {
			alert("Felicitations , vous avez reussi");
			selReset();
			position = 0;
			setCookie("level", 11, 30);
			clearInterval(intervalID);
			setCookie("score", 330, 30);
			initial();

		} else if (succes == 11) {
			position = calculposition2();
			if (position == 1) {
				alert("Felicitations , vous avez reussi");
				selReset();
				varplay = false;
				varStopTout = true;
				parcours = repeate = 0;
				clearInterval(intervalID);
				setCookie("score", 390, 30);
				ehben=11;
				vitesse=2000;
				score=parseInt(getCookie("score"));	
				
			}
		}
	}
	

	var en_cour = true;
	var myVar;
	
	$(document).ready(function () {
		myFunction();
	});

	function myFunction() {
		myVar = setInterval(check_chargement, vitesse);
	}
	function check_chargement() {

		if (en_cour) {
			if(ehben==11)
			{
				temps_en_cours = temps_en_cours + 1;
			}
			temps_en_cours -= 1;
			var charge_id = $("#id-charge").text();
			$("#progress-bar").css("width", temps_en_cours + "%");
			score=parseInt(getCookie("score"));
			if (temps_en_cours < 1 || ehben==11) {
				vitesse=2000;
				
				scoreLino(score);
					
			}
		}
	}

	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	function verifi_cooki() {
		var cooki = getCookie("tempsuser");
		if (cooki != "") {

		} else {
			setCookie("tempsuser", 100, 30);
		}
	}

	function verifi_cooki_level() {
		var cooki_level = getCookie("level");
		if (cooki_level != "") {

		} else {
			setCookie("level", 0, 30);
		}
	}
	function verifi_cooki_score() {
		var cooki_score = getCookie("score");
		if (cooki_score != "") {

		} else {
			setCookie("score", 0, 30);
		}
	}


	function scoreLino(score1) {
		if(score1==0)
		{
			score1=-1;
		}
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			clearInterval(myVar);
				setCookie("level", 0, -1000);
				setCookie("score",score, -1000);
				setCookie("datedebut", Date.now(), -1000);
				alert("Fin de la partie");
				alert("Vous serez redirigé après avoir cliqué sur le bouton OK");
				void window.location.reload();
				//document.getElementById("demo").innerHTML = this.responseText;
			}
		};
		xhttp.open("POST", "php/score.php?", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send("score="+score1);
	}