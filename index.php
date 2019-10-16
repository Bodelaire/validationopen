<!DOCTYPE html>
	<html>

	<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<title>CERCO IA</title>
	<link rel="icon" type="image/png" href="https://ia.groupecerco.com/web/image/1789/LOGO_CERCO-IA.png" />
	<link rel="stylesheet" type="text/css" href="css/game.css">
	<script type="text/javascript" src="game.js"></script>
	</head>

	<body onload="initial()">
	
	<div  class="info" >
	<p > Ce jeu n'a pas d'instructions  </p>
	<p > Allez ,vous pouvez y arriver , concentrez vous  </p>
	</div>
	
	<div id="general">
	<div class="container row " style="margin: 0 auto;">
	<div id="pro" class="progress col-md-12" style="margin-bottom: 10px;">
	<div id="progress-bar" class="progress-bar progress-bar-striped progress-bar-animated" style="width:100%"></div>
	</div>
	<table class="" style="margin-right: 10px;">
	<tr id="col_1">
	<td id="case_1_0"></td>
	<td id="case_1_1"></td>
	<td id="case_1_2"></td>
	<td id="case_1_3"></td>
	<td id="case_1_4"></td>
	<td id="case_1_5"></td>
	<td id="case_1_6"></td>
	<td id="case_1_7"></td>
	<td id="case_1_8"></td>
	<td id="case_1_9"></td>
	<td id="case_1_10"></td>
	<td id="case_1_11"></td>
	<td id="case_1_12"></td>
	<td id="case_1_13"></td>
	<td id="case_1_14"></td>
	<td id="case_1_15"></td>
	<td id="case_1_16"></td>
	<td id="case_1_17"></td>
	<td id="case_1_18"></td>
	<td id="case_1_19"></td>
	</tr>
	<tr id="col_2">
	<td id="case_2_0"></td>
	<td id="case_2_1"></td>
	<td id="case_2_2"></td>
	<td id="case_2_3"></td>
	<td id="case_2_4"></td>
	<td id="case_2_5"></td>
	<td id="case_2_6"></td>
	<td id="case_2_7"></td>
	<td id="case_2_8"></td>
	<td id="case_2_9"></td>
	<td id="case_2_10"></td>
	<td id="case_2_11"></td>
	<td id="case_2_12"></td>
	<td id="case_2_13"></td>
	<td id="case_2_14"></td>
	<td id="case_2_15"></td>
	<td id="case_2_16"></td>
	<td id="case_2_17"></td>
	<td id="case_2_18"></td>
	<td id="case_2_19"></td>
	</tr>
	<tr id="col_3">
	<td id="case_3_0"></td>
	<td id="case_3_1"></td>
	<td id="case_3_2"></td>
	<td id="case_3_3"></td>
	<td id="case_3_4"></td>
	<td id="case_3_5"></td>
	<td id="case_3_6"></td>
	<td id="case_3_7"></td>
	<td id="case_3_8"></td>
	<td id="case_3_9"></td>
	<td id="case_3_10"></td>
	<td id="case_3_11"></td>
	<td id="case_3_12"></td>
	<td id="case_3_13"></td>
	<td id="case_3_14"></td>
	<td id="case_3_15"></td>
	<td id="case_3_16"></td>
	<td id="case_3_17"></td>
	<td id="case_3_18"></td>
	<td id="case_3_19"></td>
	</tr>
	<tr id="col_4">
	<td id="case_4_0"></td>
	<td id="case_4_1"></td>
	<td id="case_4_2"></td>
	<td id="case_4_3"></td>
	<td id="case_4_4"></td>
	<td id="case_4_5"></td>
	<td id="case_4_6"></td>
	<td id="case_4_7"></td>
	<td id="case_4_8"></td>
	<td id="case_4_9"></td>
	<td id="case_4_10"></td>
	<td id="case_4_11"></td>
	<td id="case_4_12"></td>
	<td id="case_4_13"></td>
	<td id="case_4_14"></td>
	<td id="case_4_15"></td>
	<td id="case_4_16"></td>
	<td id="case_4_17"></td>
	<td id="case_4_18"></td>
	<td id="case_4_19"></td>
	</tr>
	<tr id="col_5">
	<td id="case_5_0"></td>
	<td id="case_5_1"></td>
	<td id="case_5_2"></td>
	<td id="case_5_3"></td>
	<td id="case_5_4"></td>
	<td id="case_5_5"></td>
	<td id="case_5_6"></td>
	<td id="case_5_7"></td>
	<td id="case_5_8"></td>
	<td id="case_5_9"></td>
	<td id="case_5_10"></td>
	<td id="case_5_11"></td>
	<td id="case_5_12"></td>
	<td id="case_5_13"></td>
	<td id="case_5_14"></td>
	<td id="case_5_15"></td>
	<td id="case_5_16"></td>
	<td id="case_5_17"></td>
	<td id="case_5_18"></td>
	<td id="case_5_19"></td>

	</tr>
	<tr id="col_6">
	<td id="case_6_0"></td>
	<td id="case_6_1"></td>
	<td id="case_6_2"></td>
	<td id="case_6_3"></td>
	<td id="case_6_4"></td>
	<td id="case_6_5"></td>
	<td id="case_6_6"></td>
	<td id="case_6_7"></td>
	<td id="case_6_8"></td>
	<td id="case_6_9"></td>
	<td id="case_6_10"></td>
	<td id="case_6_11"></td>
	<td id="case_6_12"></td>
	<td id="case_6_13"></td>
	<td id="case_6_14"></td>
	<td id="case_6_15"></td>
	<td id="case_6_16"></td>
	<td id="case_6_17"></td>
	<td id="case_6_18"></td>
	<td id="case_6_19"></td>
	</tr>
	<tr id="col_7">
	<td id="case_7_0"></td>
	<td id="case_7_1"></td>
	<td id="case_7_2"></td>
	<td id="case_7_3"></td>
	<td id="case_7_4"></td>
	<td id="case_7_5"></td>
	<td id="case_7_6"></td>
	<td id="case_7_7"></td>
	<td id="case_7_8"></td>
	<td id="case_7_9"></td>
	<td id="case_7_10"></td>
	<td id="case_7_11"></td>
	<td id="case_7_12"></td>
	<td id="case_7_13"></td>
	<td id="case_7_14"></td>
	<td id="case_7_15"></td>
	<td id="case_7_16"></td>
	<td id="case_7_17"></td>
	<td id="case_7_18"></td>
	<td id="case_7_19"></td>
	</tr>
	<tr id="col_8">
	<td id="case_8_0"></td>
	<td id="case_8_1"></td>
	<td id="case_8_2"></td>
	<td id="case_8_3"></td>
	<td id="case_8_4"></td>
	<td id="case_8_5"></td>
	<td id="case_8_6"></td>
	<td id="case_8_7"></td>
	<td id="case_8_8"></td>
	<td id="case_8_9"></td>
	<td id="case_8_10"></td>
	<td id="case_8_11"></td>
	<td id="case_8_12"></td>
	<td id="case_8_13"></td>
	<td id="case_8_14"></td>
	<td id="case_8_15"></td>
	<td id="case_8_16"></td>
	<td id="case_8_17"></td>
	<td id="case_8_18"></td>
	<td id="case_8_19"></td>
	</tr>
	<tr id="col_9">
	<td id="case_9_0"></td>
	<td id="case_9_1"></td>
	<td id="case_9_2"></td>
	<td id="case_9_3"></td>
	<td id="case_9_4"></td>
	<td id="case_9_5"></td>
	<td id="case_9_6"></td>
	<td id="case_9_7"></td>
	<td id="case_9_8"></td>
	<td id="case_9_9"></td>
	<td id="case_9_10"></td>
	<td id="case_9_11"></td>
	<td id="case_9_12"></td>
	<td id="case_9_13"></td>
	<td id="case_9_14"></td>
	<td id="case_9_15"></td>
	<td id="case_9_16"></td>
	<td id="case_9_17"></td>
	<td id="case_9_18"></td>
	<td id="case_9_19"></td>
	</tr>
	<tr id="col_10">
	<td id="case_10_0"></td>
	<td id="case_10_1"></td>
	<td id="case_10_2"></td>
	<td id="case_10_3"></td>
	<td id="case_10_4"></td>
	<td id="case_10_5"></td>
	<td id="case_10_6"></td>
	<td id="case_10_7"></td>
	<td id="case_10_8"></td>
	<td id="case_10_9"></td>
	<td id="case_10_10"></td>
	<td id="case_10_11"></td>
	<td id="case_10_12"></td>
	<td id="case_10_13"></td>
	<td id="case_10_14"></td>
	<td id="case_10_15"></td>
	<td id="case_10_16"></td>
	<td id="case_10_17"></td>
	<td id="case_10_18"></td>
	<td id="case_10_19"></td>
	</tr>
	<tr id="col_11">
	<td id="case_11_0"></td>
	<td id="case_11_1"></td>
	<td id="case_11_2"></td>
	<td id="case_11_3"></td>
	<td id="case_11_4"></td>
	<td id="case_11_5"></td>
	<td id="case_11_6"></td>
	<td id="case_11_7"></td>
	<td id="case_11_8"></td>
	<td id="case_11_9"></td>
	<td id="case_11_10"></td>
	<td id="case_11_11"></td>
	<td id="case_11_12"></td>
	<td id="case_11_13"></td>
	<td id="case_11_14"></td>
	<td id="case_11_15"></td>
	<td id="case_11_16"></td>
	<td id="case_11_17"></td>
	<td id="case_11_18"></td>
	<td id="case_11_19"></td>
	</tr>
	<tr id="col_12">
	<td id="case_12_0"></td>
	<td id="case_12_1"></td>
	<td id="case_12_2"></td>
	<td id="case_12_3"></td>
	<td id="case_12_4"></td>
	<td id="case_12_5"></td>
	<td id="case_12_6"></td>
	<td id="case_12_7"></td>
	<td id="case_12_8"></td>
	<td id="case_12_9"></td>
	<td id="case_12_10"></td>
	<td id="case_12_11"></td>
	<td id="case_12_12"></td>
	<td id="case_12_13"></td>
	<td id="case_12_14"></td>
	<td id="case_12_15"></td>
	<td id="case_12_16"></td>
	<td id="case_12_17"></td>
	<td id="case_12_18"></td>
	<td id="case_12_19"></td>
	</tr>
	<tr id="col_13">
	<td id="case_13_0"></td>
	<td id="case_13_1"></td>
	<td id="case_13_2"></td>
	<td id="case_13_3"></td>
	<td id="case_13_4"></td>
	<td id="case_13_5"></td>
	<td id="case_13_6"></td>
	<td id="case_13_7"></td>
	<td id="case_13_8"></td>
	<td id="case_13_9"></td>
	<td id="case_13_10"></td>
	<td id="case_13_11"></td>
	<td id="case_13_12"></td>
	<td id="case_13_13"></td>
	<td id="case_13_14"></td>
	<td id="case_13_15"></td>
	<td id="case_13_16"></td>
	<td id="case_13_17"></td>
	<td id="case_13_18"></td>
	<td id="case_13_19"></td>
	</tr>
	<tr id="col_14">
	<td id="case_14_0"></td>
	<td id="case_14_1"></td>
	<td id="case_14_2"></td>
	<td id="case_14_3"></td>
	<td id="case_14_4"></td>
	<td id="case_14_5"></td>
	<td id="case_14_6"></td>
	<td id="case_14_7"></td>
	<td id="case_14_8"></td>
	<td id="case_14_9"></td>
	<td id="case_14_10"></td>
	<td id="case_14_11"></td>
	<td id="case_14_12"></td>
	<td id="case_14_13"></td>
	<td id="case_14_14"></td>
	<td id="case_14_15"></td>
	<td id="case_14_16"></td>
	<td id="case_14_17"></td>
	<td id="case_14_18"></td>
	<td id="case_14_19"></td>
	</tr>
	<tr id="col_11">
	<td id="case_15_0"></td>
	<td id="case_15_1"></td>
	<td id="case_15_2"></td>
	<td id="case_15_3"></td>
	<td id="case_15_4"></td>
	<td id="case_15_5"></td>
	<td id="case_15_6"></td>
	<td id="case_15_7"></td>
	<td id="case_15_8"></td>
	<td id="case_15_9"></td>
	<td id="case_15_10"></td>
	<td id="case_15_11"></td>
	<td id="case_15_12"></td>
	<td id="case_15_13"></td>
	<td id="case_15_14"></td>
	<td id="case_15_15"></td>
	<td id="case_15_16"></td>
	<td id="case_15_17"></td>
	<td id="case_15_18"></td>
	<td id="case_15_19"></td>
	</tr>
	<tr id="col_16">
	<td id="case_16_0"></td>
	<td id="case_16_1"></td>
	<td id="case_16_2"></td>
	<td id="case_16_3"></td>
	<td id="case_16_4"></td>
	<td id="case_16_5"></td>
	<td id="case_16_6"></td>
	<td id="case_16_7"></td>
	<td id="case_16_8"></td>
	<td id="case_16_9"></td>
	<td id="case_16_10"></td>
	<td id="case_16_11"></td>
	<td id="case_16_12"></td>
	<td id="case_16_13"></td>
	<td id="case_16_14"></td>
	<td id="case_16_15"></td>
	<td id="case_16_16"></td>
	<td id="case_16_17"></td>
	<td id="case_16_18"></td>
	<td id="case_16_19"></td>
	</tr>
	<tr id="col_17">
	<td id="case_17_0"></td>
	<td id="case_17_1"></td>
	<td id="case_17_2"></td>
	<td id="case_17_3"></td>
	<td id="case_17_4"></td>
	<td id="case_17_5"></td>
	<td id="case_17_6"></td>
	<td id="case_17_7"></td>
	<td id="case_17_8"></td>
	<td id="case_17_9"></td>
	<td id="case_17_10"></td>
	<td id="case_17_11"></td>
	<td id="case_17_12"></td>
	<td id="case_17_13"></td>
	<td id="case_17_14"></td>
	<td id="case_17_15"></td>
	<td id="case_17_16"></td>
	<td id="case_17_17"></td>
	<td id="case_17_18"></td>
	<td id="case_17_19"></td>
	</tr>
	<tr id="col_18">
	<td id="case_18_0"></td>
	<td id="case_18_1"></td>
	<td id="case_18_2"></td>
	<td id="case_18_3"></td>
	<td id="case_18_4"></td>
	<td id="case_18_5"></td>
	<td id="case_18_6"></td>
	<td id="case_18_7"></td>
	<td id="case_18_8"></td>
	<td id="case_18_9"></td>
	<td id="case_18_10"></td>
	<td id="case_18_11"></td>
	<td id="case_18_12"></td>
	<td id="case_18_13"></td>
	<td id="case_18_14"></td>
	<td id="case_18_15"></td>
	<td id="case_18_16"></td>
	<td id="case_18_17"></td>
	<td id="case_18_18"></td>
	<td id="case_18_19"></td>
	</tr>
	<tr id="col_19">
	<td id="case_19_0"></td>
	<td id="case_19_1"></td>
	<td id="case_19_2"></td>
	<td id="case_19_3"></td>
	<td id="case_19_4"></td>
	<td id="case_19_5"></td>
	<td id="case_19_6"></td>
	<td id="case_19_7"></td>
	<td id="case_19_8"></td>
	<td id="case_19_9"></td>
	<td id="case_19_10"></td>
	<td id="case_19_11"></td>
	<td id="case_19_12"></td>
	<td id="case_19_13"></td>
	<td id="case_19_14"></td>
	<td id="case_19_15"></td>
	<td id="case_19_16"></td>
	<td id="case_19_17"></td>
	<td id="case_19_18"></td>
	<td id="case_19_19"></td>
	</tr>
	<tr id="col_20">
	<td id="case_20_0"></td>
	<td id="case_20_1"></td>
	<td id="case_20_2"></td>
	<td id="case_20_3"></td>
	<td id="case_20_4"></td>
	<td id="case_20_5"></td>
	<td id="case_20_6"></td>
	<td id="case_20_7"></td>
	<td id="case_20_8"></td>
	<td id="case_20_9"></td>
	<td id="case_20_10"></td>
	<td id="case_20_11"></td>
	<td id="case_20_12"></td>
	<td id="case_20_13"></td>
	<td id="case_20_14"></td>
	<td id="case_20_15"></td>
	<td id="case_20_16"></td>
	<td id="case_20_17"></td>
	<td id="case_20_18"></td>
	<td id="case_20_19"></td>
	</tr>
	</table>

	<div class="cf">
	<div id="commandeDeSelection">
	<div class="F1">F1
	<button id="Sel0" class="soitInvisible" onclick="Selection0()"></button>
	<button id="Sel1" class="soitInvisible" onclick="Selection1()"></button>
	<button id="Sel2" class="soitInvisible" onclick="Selection2()"></button>
	<button id="Sel3" class="soitInvisible" onclick="Selection3()"></button>
	<button id="Sel4" class="soitInvisible" onclick="Selection4()"></button>
	<button id="Sel5" class="soitInvisible" onclick="Selection5()"></button>
	<button id="Sel6" class="soitInvisible" onclick="Selection6()"></button>
	<button id="Sel7" class="soitInvisible" onclick="Selection7()"></button>
	<button id="Sel8" class="soitInvisible" onclick="Selection8()"></button>
	<button id="Sel9" class="soitInvisible" onclick="Selection9()"></button>
	</div>
	<div class="F2">F2
	<button id="Sel10" class="soitInvisible" onclick="Selection10()"></button>
	<button id="Sel11" class="soitInvisible" onclick="Selection11()"></button>
	<button id="Sel12" class="soitInvisible" onclick="Selection12()"></button>
	<button id="Sel13" class="soitInvisible" onclick="Selection13()"></button>
	<button id="Sel14" class="soitInvisible" onclick="Selection14()"></button>
	<button id="Sel15" class="soitInvisible" onclick="Selection15()"></button>
	<button id="Sel16" class="soitInvisible" onclick="Selection16()"></button>
	<button id="Sel17" class="soitInvisible" onclick="Selection17()"></button>
	<button id="Sel18" class="soitInvisible" onclick="Selection18()"></button>
	<button id="Sel19" class="soitInvisible" onclick="Selection19()"></button>
	</div>
	<div class="F2">F3
	<button id="Sel20" class="soitInvisible" onclick="Selection20()"></button>
	<button id="Sel21" class="soitInvisible" onclick="Selection21()"></button>
	<button id="Sel22" class="soitInvisible" onclick="Selection22()"></button>
	<button id="Sel23" class="soitInvisible" onclick="Selection23()"></button>
	<button id="Sel24" class="soitInvisible" onclick="Selection24()"></button>
	</div>

	</div>
	<span>Commande</span>
	<div id="commandeDeJeux">
	<div class="commande_control">
	<button type="button" id="boutAvance" border="1" onclick="FselAvance()">
	<img src="image/up.png"> </img>
	</button><br>
	<button id="boutTourneDroite" src="right.png" onclick="FselTourneDroite()">
	<img src="image/right.png"> </img>
	</button><br>
	<button id="boutTourneGauche" src="left.png" onclick="FselTourneGauche()">
	<img src="image/left.png"> </img>
	</button><br>
	<button id="boutRepete" type="button" onclick="FselRepete()">
	F1
	</button><br>
	<button id="fonction_f2" type="button" onclick="FselChangeLigneF2()">
	F2
	</button><br>
	<button id="fonction_f3" type="button" onclick="FselChangeLigneF3()">
	F3
	</button><br>
	</div>
	<div class="br">

	</div>


	<div class="control_color">
	<button id="boutVert" type="button" onclick="FselVert()">
	</button><br>
	<button id="boutBleu" type="button" onclick="FselBleu()">
	</button><br>
	<button id="boutOrange" type="button" onclick="FselOrange()">
	</button><br>
	</div>
	<div class="pain_color">
	<button id="Paint_orange" type="button" onclick="FselChangeCouleurOrange()"><img src="image/paint_orange.png"> </img>
	</button><br>
	<button id="Paint_bleu" type="button" onclick="FselChangeCouleurBleu()"><img src="image/paint_bleu.png"> </img>
	</button><br>
	<button id="Paint_vert" type="button" onclick="FselChangeCouleurVert()"><img src="image/paint_vert.png"> </img>
	</button><br>
	</div>



	</div>
	<span>Execution</span>
	<div id="media">

	<button id="executeTout" type="button" onclick="lectureTotale()">
	<img src="image/play.png">
	</button>
	<button id="executeManuellement" type="button" onclick="ExecutionByStep()">
	<img src="image/play_stap.png">
	</button>
	<button id="stop" type="button" onclick="stopTout()">
	<img src="image/stop.png">
	</button>
	</div>

	</div>
	</div>
	</div>

	</body>


	</html>