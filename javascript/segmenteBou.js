// --------------- global variables -------------------------------	                      
//"use strict"; 
"use strict";
var compMethods = ['source-over', 'destination-over'],
			 alignTabel = ['left','center','right'],
			 fontTabel = ['bold 16pt Arial','bold 14pt Arial','bold 10pt Arial','12pt Arial','8pt Arial','8pt Arial'],
//			 fontTabel = ['bold 16pt Verdana','bold 14pt Verdana','bold 10pt Verdana','12pt Verdana','8pt Verdana','8pt Verdana'],
			 textBase = ['middle','bottom'];		 
// ------------------------------------- wys object ---------------	--	 
	var wys = {roteer: 14,beginBy: 0,grafiekKeuse: 0,sortKeuse: 0,grade: 15,midSirkel: 65,
		skadu: 4,fadeOut: 0,roteerTotaal: 0,maksGrafiek: 220/100,knoppie1Nr: 0,knoppie2Nr: 0,
	    knoppie3Nr: 0,eerste: true,intervalCw: null,intervalAcw: null,laasteKlik: ' ',
		simboolKlik: 'zz',nommerKlik: 'zz',skryfEerste: true,
	};
// ---------------------------------------------------------------
    var knoppieKleur = ['rgb(200,250,250)','rgb(240,150,160)','rgb(245,220,170)',
					   'rgb(240,240,150)','rgb(168,240,168)','rgb(210,210,160)',
					   'rgb(195,195,245)','rgb(240,190,190)','rgb(245,190,245)','rgb(245,160,200)'];
// ---------------------------------------------------------------	
	var categoryBegin = [0,7,13,19,25,32,39,50,88,103];
	var orbitObj = [];
	var kristalObj = [];
// ------------------------------------------- eienskappe ----------------------------------------------------
var eienskappeSkryf = [['Atomic Mass','',-12,'Atomic Mass'],
					 ['Covalent','Radius',-18,'Radius'],
					 ['STP','Density',-18,'Density'], 
					 ['Ionization','Energy',-18,'Ionization Energy'], 
					 ['Electronegativity','',-12,'Electronegativity'],
					 ['Melting Point','',-12,'Melting Point'],
					 ['Boiling Point','',-12,'Boiling Point'],
					 ['Specific Heat','',-12,'Specific Hetat'],
					 ['Electron','Affinity',-18,'Electron Affinity'],
					 ['Thermal','Conductivity',-18,'Conductivity'],
					 ['Valence','',-12,'Valence'],
					 ['Brinell','Hardness',-18,'Hardness'],
					 ['Bulk','Modulus',-18,'Modulus'],											 
					 ['Electron','Configuration',-18,'Category'],
					 ['Crystal Structure','',-12,'Crystal Structure'],
					 ['Orbitals','',-18,'Orbitals'],	
					 ['Category','',-18,'Category']									 
					 ];
// ----------------------------------------- maxWaardes -----------------------------------------------------									 		
var maxWaardes = [ 
 {waardeVir: 'Atomic weight', maxi:294.0000, keuse:0},	
 {waardeVir: 'Atomic radii', maxi:225, keuse:1,},
 {waardeVir: 'Density g/cm3', maxi:22.60, keuse:2},
 {waardeVir: 'Ionization energy', maxi: 2372.3, keuse:3},
 {waardeVir: 'Electronegativity', maxi: 3.98, keuse:4},
 {waardeVir: 'Melting point K', maxi: 3823, keuse:5},
 {waardeVir: 'Boiling point K', maxi: 5869.00, keuse:6},
 {waardeVir: 'Heat capacity J/g.K', maxi: 14300, keuse:7},
 {waardeVir: 'Electron affinity', maxi: 349.00, keuse:8},
 {waardeVir: 'Conductivity', maxi: 430, keuse:9},
 {waardeVir: 'Valence', maxi: 8, keuse:10},
 {waardeVir: 'Hardness', maxi: 3920, keuse:11},
 {waardeVir: 'Modulus', maxi: 380, keuse:12},
 {waardeVir: '', maxi: 0, keuse:13},
 ];		
// ------------------ donkerNr ------------------------------------
   var donkerNr = [4,5,6,7,8,9,10,11,12,13,14,15,16,17];
// ----------------- tabelle -------------------------------------- 
var atomicWeight,atomicRadii,density,ionizationEnergy,electronegativity,meltingPoint,
	boilingPoint,heatCapacity,electronAffinity,conductivity,valence,hardness,modulus,sortCategory;

	 var tabelle = [atomicWeight,		 // grafieKeuse = 0
					atomicRadii,		 //               1
					density,			 //               2
					ionizationEnergy,    //               3
					electronegativity,   //               4
	 				meltingPoint,        //               5
					boilingPoint,        //               6
					heatCapacity,        //               7
					electronAffinity,    //               8
					conductivity,        //               9
					valence,             //               10
					hardness,            //               11
					modulus,             //               12
					sortCategory];       //               13
								 
// ------------------- sort tabelle -------------------------------	
var theElements,sortRadii,sortDensity,sortIonizationEnergy, sortElectronegativity,sortMeltingPoint,sortBoilingPoint,
	sortHeatCapacity,sortElectronAffinity,sortConductivity,sortValence,sortHardness,sortModulus,sortCategory;
   var sortTabelle = [theElements,			 // sortKeuse = 0
					  sortRadii,			 //			    1
					  sortDensity,			 //             2
					  sortIonizationEnergy,	 //             2
					  sortElectronegativity, //	        	4
	 				  sortMeltingPoint,		 //             5
					  sortBoilingPoint,      //             6
					  sortHeatCapacity,      //             7
					  sortElectronAffinity,  //             8	
					  sortConductivity,		 //             9	
					  sortValence,           //            10	
					  sortHardness,          //            11
					  sortModulus,           //            12
					  sortCategory];         //            13									
// -------------------  eConfiguration ------------------------------------
   var eConfiguration = [
		'1s¹','1s²','[He]2s¹','[He]2s²','[He]2s²2p¹','[He]2s²2p²','[He]2s²2p³','[He]2s²2p','[He]2s²2p','[He]2s²2p','[Ne]3s¹','[Ne]3s²',
		'[Ne]3s²3p¹','[Ne]3s²3p²','[Ne]3s²3p³','[Ne]3s²3p','[Ne]3s²3p','[Ne]3s²3p','[Ar]4s¹','[Ar]4s²','[Ar]3d¹4s²','[Ar]3d²4s²',
		'[Ar]3d³4s²','[Ar]3d4s¹','[Ar]3d4s²','[Ar]3d4s²','[Ar]3d4s²','[Ar]3d4s²','[Ar]3d¹4s¹','[Ar]3d¹4s²','[Ar]3d¹4s²4p¹',
		'[Ar]3d¹4s²4p²','[Ar]3d¹4s²4p³','[Ar]3d¹4s²4p','[Ar]3d¹4s²4p','[Ar]3d¹4s²4p','[Kr]5s¹','[Kr]5s²','[Kr]4d¹5s²',
		'[Kr]4d²5s²','[Kr]4d5s¹','[Kr]4d5s¹','[Kr]4d5s¹','[Kr]4d5s¹','[Kr]4d5s¹','[Kr]4d5s','[Kr]4d5s¹','[Kr]4d5s²','[Kr]4d5s²5p¹',	
		'[Kr]4d5s²5p²','[Kr]4d5s²5p³','[Kr]4d5s²5p','[Kr]4d5s²5p','[Kr]4d5s²5p','[Xe]6s¹','[Xe]6s²','[Xe]6d¹6s²','[Xe]4f¹5d¹6s²',
		'[Xe]4f³5d6s²','[Xe]4f5d6s²','[Xe]4f5d6s²','[Xe]4f5d6s²','[Xe]4f5d6s²','[Xe]4f5d¹6s²','[Xe]4f5d6s²','[Xe]4f5d6s²',
		'[Xe]4f¹¹5d6s²','[Xe]4f¹²5d6s²','[Xe]4f¹³5d6s²','[Xe]4f¹5d¹6s²','[Xe]4f¹5d¹6s²','[Xe]4f¹5d²6s²','[Xe]4f¹5d³6s²',
		'[Xe]4f¹5d6s²','[Xe]4f¹5d6s²','[Xe]4f¹5d6s²','[Xe]4f¹5d6s²','[Xe]4f¹5d6s²','[Xe]4f¹5d¹6s²','[Xe]4f¹5d¹6s²','[Xe]4f¹5d¹6s²6p¹',	 
		'[Xe]4f¹5d¹6s²6p²','[Xe]4f¹5d¹6s²6p³','[Xe]4f¹5d¹6s²6p','[Xe]4f¹5d¹6s²6p','[Xe]4f¹5d¹6s²6p','[Rn]7s¹','[Rn]7s²','[Rn]6d¹7s²',
		'[Rn]5f6d¹7s²','[Rn]5f²6d¹7s²','[Rn]5f³6d¹7s²','[Rn]5f6d¹7s²','[Rn]5f6d7s²','[Rn]5f6d7s²','[Rn]5f6d¹7s²','[Rn]5f6d7s²',
		'[Rn]5f¹6d7s²','[Rn]5f¹¹6d7s²','[Rn]5f¹²6d7s²','[Rn]5f¹³6d7s²','[Rn]5f¹6d7s²','[Rn]5f¹6d¹7s²','[Rn]5f¹6d²7s²',
		'[Rn]5f¹6d³6s²','[Rn]5f¹6d¹7s²','-','-','-','-','-','-','-','-','-','-','-','-'
];		
// ------------------ kristalle nommers ----------------------------------
   var kristalNommers = [4,3,1,3,11,4,4,0,5,2,1,3,2,1,14,7,7,2,1,2,3,3,1,1,1,1,                 // tot Fe 26
												3,2,2,3,7,0,14,4,7,2,1,2,3,3,1,1,3,3,2,2,2,3,12,12,14,4,7,2,           // tot Xe 54
												1,1,4,2,4,4,4,11,1,3,3,3,3,3,3,2,3,3,1,1,3,3,2,2,2,11,3,2,11,0,null,2, // tot Rn 86
												null,1,2,2,12,7,7,5,4,3,3,4,2,                                         // tot Es 99
												null,null,null,null,null,null,null,null,null,null,null,null,
												null,null,null,null,null,null,null,];	                                     													
//----------------------------- kristal oic ----------------------------	
   var kristalPic = [{pic:'kristal/Cubic.png',naam:'Cubic'},
										{pic:'kristal/CubicBodyCentered.png',naam:'Cubic body centered'},
										{pic:'kristal/CubicFaceCentered.png',naam:'Cubic face centered'},
										{pic:'kristal/Hexagonal.png',naam:'Hexagonal'},
										{pic:'kristal/HexagonalClosePacked.png',naam:'Hexagonal close packed'},
										{pic:'kristal/Monoclinic.png',naam:'Monoclinic'},
										{pic:'kristal/MonoclinicBaseCentered.png',naam:'Monoclinic base centered'},
										{pic:'kristal/Orthorhombic.png',naam:'Orthohombic'},
										{pic:'kristal/OrthorhombicBaseCentered.png',naam:'Orthorhombic base centered'},
										{pic:'kristal/OrthorhombicBodyCentered.png',naam:'Orthorhombic body centered'},
										{pic:'kristal/OrthorhombicFaceCentered.png',naam:'Orthorhombic face centered'},
										{pic:'kristal/Rhombohedral.png',naam:'Rhombohedral'},
										{pic:'kristal/Tetragonal.png',naam:'Tetragonal'},
										{pic:'kristal/TetragonalBodyCentered.png',naam:'Tetragonal body centered'},
										{pic:'kristal/Triclinic.png',naam:'Triclinic'}];
// --------------------------------------------- orbit pic -------------
   var orbitPic = ['orbits/H1001.png','orbits/He2001.png','orbits/Li3002.png','orbits/Be4002.png','orbits/B51-12.png',
	                'orbits/C61-12.png','orbits/N7112.png','orbits/O8112.png','orbits/F91-12.png','orbits/Ne10102.png',
									'orbits/Na11003.png','orbits/Mg12003.png','orbits/Al131-13.png','orbits/Si14103.png','orbits/P15113.png',
									'orbits/S161-13.png','orbits/Cl17103.png','orbits/Ar18113.png','orbits/K19004.png','orbits/Ca20004.png',
									'orbits/Sc212-23.png','orbits/Ti222-13.png','orbits/V23203.png','orbits/Cr24223.png','orbits/Mn25223.png',
									'orbits/Fe262-23.png','orbits/Co272-13.png','orbits/Ni28203.png','orbits/Cu29223.png','orbits/Zn30223.png',
									'orbits/Ga311-14.png','orbits/Ge32104.png','orbits/As33114.png','orbits/Se341-14.png','orbits/Br35104.png',
									'orbits/Kr36114.png','orbits/Rb37005.png','orbits/Sr38005.png','orbits/Y392-24.png','orbits/Zr402-14.png',
									'orbits/Nb41214.png','orbits/Mo42224.png','orbits/Tc43224.png','orbits/Ru442-14.png','orbits/Rh45204.png',
									'orbits/Pd46224.png','orbits/Ag47224.png','orbits/Cd48224.png','orbits/In491-15.png','orbits/Sn50105.png',
									'orbits/Sb51115.png','orbits/Te521-15.png','orbits/I53105.png','orbits/Xe54115.png','orbits/Cs55006.png',
									'orbits/Ba56006.png','orbits/La572-25.png','orbits/Ce582-25.png','orbits/Pr593-14.png','orbits/Nd60304.png',
									'orbits/Pm61314.png','orbits/Sm62324.png','orbits/Eu63334.png','orbits/Gd642-25.png','orbits/Tb653-24.png',
									'orbits/Dy663-14.png','orbits/Ho67304.png','orbits/Er68314.png','orbits/Tm69324.png','orbits/Yb70334.png',
									'orbits/Lu712-25.png','orbits/Hf722-15.png','orbits/Ta73205.png','orbits/W74215.png','orbits/Re75225.png',
									'orbits/Os762-25.png','orbits/Ir772-15.png','orbits/Pt78215.png','orbits/Au79225.png','orbits/Hg80225.png',
									'orbits/Tl811-16.png','orbits/Pb82106.png','orbits/Bi83116.png','orbits/Po841-16.png','orbits/At85106.png',
									'orbits/Rn86116.png','orbits/Fr87007.png','orbits/Ra88007.png','orbits/Ac892-26.png','orbits/Th902-16.png',
									'orbits/Pa912-26.png','orbits/U922-26.png','orbits/Np932-26.png','orbits/Pu94325.png','orbits/Am95335.png',
									'orbits/Cm962-26.png','orbits/Bk973-25.png','orbits/Cf983-15.png','orbits/Es99305.png','orbits/Fm100315.png',
									'orbits/Md101325.png','orbits/No102335.png','orbits/Lr1031-17.png','orbits/Rf1042-16.png','orbits/Db105206.png',
									'orbits/Sg106216.png','orbits/Bh107226.png','orbits/Hs1082-26.png','orbits/Mk1092-16.png','orbits/Ds110216.png',
									'orbits/Rg111226.png','orbits/Cn112226.png','orbits/Uut1131-17.png','orbits/Fl114107.png','orbits/Uup115117.png',
									'orbits/Lv1161-17.png','orbits/Uus117107.png','orbits/Uuo118117.png',];	
// ---------------------------------- orbit syfers ---------------------
//--------------------    H       He      Li      Be      B 				C				N	      O       F        Ne
		var orbitSyfers = [[0,0,1],[0,0,1],[0,0,2],[0,0,2],[1,-1,2],[1,-1,2],[1,1,2],[1,1,2],[1,-1,2],[1,0,2],
//--------------------    Na      Mg      Al       Si      P        S       Cl      Ar      K       Ca	
	                     [0,0,3],[0,0,3],[1,-1,3],[1,0,3],[1,1,3],[1,-1,3],[1,0,3],[1,1,3],[0,0,4],[0,0,4],
//--------------------    Sc       Ti       Y       Cr      Mn      Fe       Co       Ni      Cu      Zn
						 [2,-2,3],[2,-1,3],[2,0,3],[2,2,3],[2,2,3],[2,-2,3],[2,-1,3],[2,0,3],[2,2,3],[2,2,3],
//--------------------    Ga       Ge      As      Se      Br      Kr       Rb      Sr      Y      Zr	
						 [1,-1,4],[1,0,4],[1,1,4],[1,-1,4],[1,0,4],[1,1,4],[0,0,5],[0,0,5],[2,-2,4],[2,-1,4],
//--------------------    Nb      Mo      Tc      Ru      Rh      Pd      Ag      Cd      In       Sn
						 [2,1,4],[2,2,4],[2,2,4],[2,0,4],[2,0,4],[2,2,4],[2,2,4],[2,2,4],[1,-1,5],[1,0,5],
//--------------------    Sb      Te       I      Xe      Cs      Ba       La       Ce       Pr       Nd	
						 [1,1,5],[1,-1,5],[1,0,5],[1,1,5],[0,0,6],[0,0,6],[2,-2,5],[2,-2,5],[3,-1,4],[3,0,4],
//--------------------    Pm      Sm      Eu      Od       Tb       Dy       Ho      Er      Tm      Yb	
						 [3,1,4],[3,2,4],[3,3,4],[2,-2,5],[3,-2,4],[3,-1,4],[3,0,4],[3,1,4],[3,2,4],[3,3,4],
//--------------------    Lu       Hf      Ta       W       Re      Os       Ir       Pt      Au      Hg
						 [2,-2,5],[2,-1,5],[2,0,5],[2,1,5],[2,2,5],[2,-2,5],[2,-1,5],[2,1,5],[2,2,5],[2,2,5],
//--------------------    Tl       Pb      Bi      Po       At      Rn      Fr      Ra      Ac      Th	
						 [1,-1,6],[1,0,6],[1,1,6],[1,-1,6],[1,0,6],[1,1,6],[0,0,6],[0,0,7],[2,-2,6],[2,-1,6],
//--------------------    Pa       U        Np       Pu      Am      Cm       Bk       Cf       Es      Fm	
						 [2,-2,6],[2,-2,6],[2,-2,6],[3,2,5],[3,3,5],[2,-2,6],[3,-2,5],[3,-1,5],[3,0,5],[3,1,5],	
//--------------------    Md      No       Lr      Rf       Db      Sg      Bh      Hs       Mk      Ds
						 [3,2,5],[3,3,5],[1,-1,7],[2,-1,6],[2,0,6],[2,1,6],[2,2,6],[2,-2,6],[2,-1,6],[2,1,6],
//--------------------    Rg      Cn      Uut      Fl      Uup     Lv       Uus     Uuo 
						 [2,2,6],[2,2,6],[1,-1,7],[1,0,7],[1,1,7],[1,-1,7],[1,0,7],[1,1,7],      											 											 									 									 											 										 											 											 											  
		];							 																																						 
// ----------------  xKonfig -------------------------------------
   var xKonfig = [
									 [0,8,0,0,0,8,8,8,14,14,14,14,14,22,22,22,22,22,],									 
									 [0,8,14,14,14,14,14,22,22,22,22,22,0,0,0,8,8,8,],									 
									 [0,8,14,14,14,14,14,22,22,22,22,22,0,0,0,8,8,8,],									 
									 [0,8,14,14,14,14,14,22,22,22,22,22,0,0,0,8,8,8,],									 
									 [0,8,0,0,0,0,0,0,0,8,8,8,8,8,8,8,14,14,14,14,14,
									  22,22,22,22,22,0,0,0,8,8,8,],
									 ];									 
// ----------------- yKonfig -------------------------------------									 									 
	 var yKonfig = [[100,100,128,142,156,128,142,156,156,170,184,198,212,156,170,184,198,212,],									 
					[100,100,156,170,184,198,212,156,170,184,198,212,128,142,156,128,142,156,],									 
					[100,100,156,170,184,198,212,156,170,184,198,212,128,142,156,128,142,156,],									 
					[100,100,156,170,184,198,212,156,170,184,198,212,128,142,156,128,142,156,],									 
                    [100,100,198,212,226,240,254,268,282,198,212,226,240,254,268,282,156,170,
					 184,198,212,156,170,184,198,212,128,142,156,128,142,156]];	 
//-------------- grade to radians -----------------------------
//    var canvas = document.getElementById('canvas');
//		 ctx = canvas.getContext('2d');
	$(document).ready(dieElemente(wys));
//window.onload = dieElemente();
//--------------------------------------------------------------
// ------------------- dieElemente -----------------------------
 function dieElemente(wys){	 
    var canvas = document.getElementById('canvas');
	var	ctx = canvas.getContext('2d');
				
// ----------------- clear screen ----------------------------------
     ctx.setTransform(1, 0, 0, 1, 0, 0);
     ctx.clearRect(0, 0, canvas.width, canvas.height);		 
// -----------------------------------------------------------------
		 ctx.globalCompositeOperation = compMethods[1];	
		 ctx.translate(canvas.width/2, canvas.height/2);	
		
		if(wys.eerste){
			versuimWaardes();
			wys.eerste = false;
		}
        var waardesTabel;
        if(wys.grafiekKeuse === 13 || wys.grafiekKeuse === 14 || wys.grafiekKeuse === 15){
			waardesTabel = 0;
			}else{
		    waardesTabel = tabelle[wys.grafiekKeuse];
		}
			wys.skryfEerste = true;
			var volgorde = sortTabelle[wys.sortKeuse]; 
// -----------------------------------------------------------------			
		for(var inx = wys.beginBy; inx < theElements.length; inx++){			
	      var nr;
    	   if(wys.sortKeuse === 0){	
			  nr = inx;
			}else {
			  nr = volgorde[inx]-1;
			}			
			if(wys.roteerTotaal > 250){
				donkerder(ctx);
  	            wys.fadeOut += 0.1; // .09;				
			}
						
			var dieKleur = catagories[theElements[nr].kleur].color;
			ctx.fillStyle = catagories[theElements[nr].kleur].color; 
						
		    if(wys.skryfEerste){
				eersteSegment(nr,wys.grafiekKeuse,ctx);
				middelSirkel(catagories[theElements[nr].kleur].color,ctx);
  			    eersteDetail(nr);
				wys.skryfEerste = false;				
			}
			
			skryfOpskrif(nr,waardesTabel,ctx);
					
			switch(wys.grafiekKeuse){
				case 13:
					orbitBlokke(nr,ctx);  
					dieBlokke(nr,ctx);
				  break;
                case 14:
				 if(nr < 100 && kristalNommers[nr] !== null){ 
				  tekenKristal(nr,ctx);
				 }
					break;
				case 15:
				  tekenOrbits(nr,ctx);
					break;					
				default:
					var waarde = ((waardesTabel[nr]/maxWaardes[wys.grafiekKeuse].maxi)*100)*wys.maksGrafiek;		
					tekenGrafiek(waarde,ctx);
			}

			tekenSegment(ctx,dieKleur); 
			tekenSkadu(ctx);
			
			ctx.rotate(degreesToRadians(wys.roteer));
//			wys.roteer = document.getElementById("myRange").value
			wys.roteerTotaal += wys.roteer;

			if(wys.roteerTotaal > 360){
				return;
			}	
		} 
	// -------------------- einde for loop ------------------------ 
			wys.fadeOut = 0.02;
			var klr = 'rgb(240,240,240)';
			while(wys.roteerTotaal < 360){
				donkerder(ctx);
				tekenSegment(ctx,klr);			
				wys.fadeOut += 0.02; // .09;
				ctx.rotate(degreesToRadians(wys.roteer));
				wys.roteerTotaal += wys.roteer;				
			}
	}
	
// ------------- degreesToRadians ----------------------------
   function degreesToRadians(degrees){
		return (Math.PI/180) * degrees;
   }
// ----------------- skryf opskrif ----------------------------  
	 function skryfOpskrif(nr,waardesTabel,ctx) {
		    ctx.save();
			var opskrifY = canvas.height/2 - 35; // 350 - 35 = 315
			var waardeX = Math.tan(degreesToRadians(wys.grade))*opskrifY;
		
			ctx.textAlign = alignTabel[2];
			ctx.fillStyle = '#666';	
			ctx.textBaseline = textBase[1];	
			
			ctx.font = fontTabel[1];		
			ctx.fillText(theElements[nr].naam,waardeX,-opskrifY);
			
			ctx.font = fontTabel[0];
			ctx.fillText(theElements[nr].symbol,waardeX-6,-(opskrifY-24));	
			
			ctx.font = fontTabel[2];
		    
			ctx.fillText(theElements[nr].nommer,72,-276);	
			
			if(waardesTabel !== 0) {
				ctx.textAlign = alignTabel[2];
				ctx.font = fontTabel[4];
				ctx.fillText(waardesTabel[nr],68,-(opskrifY-54));
			}							
			ctx.restore();
	 }
// ----------------- eerste detail ----------------------------
	 function eersteDetail(nr){

		if(nr < 105){ 
		 document.eFotos.src = atomFotos[nr];
		}else{
	   document.eFotos.src = atomFotos[104];
	    }
     var rnr = 0;
		 var theDetail = document.getElementById('elementDetail');                                // 
		 theDetail.rows[rnr].cells[0].innerHTML = '<strong>' + theElements[nr].nommer + ' ' + theElements[nr].naam + '</strong>'; rnr++;
		 theDetail.rows[rnr].cells[1].innerHTML = theElements[nr].symbol; rnr++;                   // symbol
		 theDetail.rows[rnr].cells[1].innerHTML = elementProperties[nr].ser; rnr++;               // series
		 theDetail.rows[rnr].cells[1].innerHTML = elementProperties[nr].st; rnr++;                // state
         theDetail.rows[rnr].cells[1].innerHTML = elementProperties[nr].weight;	rnr++;	          // weight 
         theDetail.rows[rnr].cells[1].innerHTML = atomicRadii[nr];                          // radius
		  if(elementProperties[nr].rad === 'unknown'){theDetail.rows[rnr].cells[2].innerHTML = ' ';}
			 else{theDetail.rows[rnr].cells[2].innerHTML = 'pm';} rnr++;
		 theDetail.rows[rnr].cells[1].innerHTML = elementProperties[nr].dens;               // density
		   if(elementProperties[nr].dens === 'unknown'){theDetail.rows[rnr].cells[2].innerHTML = ' ';}
			 else{theDetail.rows[rnr].cells[2].innerHTML = 'Kg/m<sup>3</sup>';} rnr++;
		 theDetail.rows[rnr].cells[1].innerHTML = elementProperties[nr].ion;                // ionization energy
		  if(elementProperties[nr].ion === 'unknown'){theDetail.rows[rnr].cells[2].innerHTML = ' ';}
			 else{theDetail.rows[rnr].cells[2].innerHTML = 'kJ/mol';} rnr++;
		 theDetail.rows[rnr].cells[1].innerHTML = elementProperties[nr].electn; rnr++;      // electronegativity
		 theDetail.rows[rnr].cells[1].innerHTML = elementProperties[nr].melt;               // melting point
		 	if(elementProperties[nr].melt === 'unknown'){theDetail.rows[rnr].cells[2].innerHTML = ' ';} 
			 else{theDetail.rows[rnr].cells[2].innerHTML = 'K';} rnr++;
		 theDetail.rows[rnr].cells[1].innerHTML = elementProperties[nr].boil;               // boiling point
		   if(elementProperties[nr].boil === 'unknown'){theDetail.rows[rnr].cells[2].innerHTML = ' ';} 
			 else{theDetail.rows[rnr].cells[2].innerHTML = 'K';} rnr++;
		 theDetail.rows[rnr].cells[1].innerHTML = elementProperties[nr].heat;               // heat capacity
		   if(elementProperties[nr].heat === 'unknown'){theDetail.rows[rnr].cells[2].innerHTML = ' ';}
			 else{theDetail.rows[rnr].cells[2].innerHTML = 'J/kgK';} rnr++;
		 theDetail.rows[rnr].cells[1].innerHTML = elementProperties[nr].eaff;               // electroaffinity
		   if(elementProperties[nr].eaff === 'unknown'){theDetail.rows[rnr].cells[2].innerHTML = ' ';}
			 else{theDetail.rows[rnr].cells[2].innerHTML = 'kJ/mol';} rnr++;
		 theDetail.rows[rnr].cells[1].innerHTML = elementProperties[nr].cond;               // conductivity
		   if(elementProperties[nr].cond === 'unknown'){theDetail.rows[rnr].cells[2].innerHTML = ' ';}
			 else{theDetail.rows[rnr].cells[2].innerHTML = 'W/mK';} rnr++;
		 theDetail.rows[rnr].cells[1].innerHTML = elementProperties[nr].V; rnr++;                 // valence
		 theDetail.rows[rnr].cells[1].innerHTML = elementProperties[nr].hrd;               // hardness
		   if(elementProperties[nr].hrd === 'unknown'){theDetail.rows[rnr].cells[2].innerHTML = ' ';}
			 else{theDetail.rows[rnr].cells[2].innerHTML = 'Mpa';} rnr++; 
		 theDetail.rows[rnr].cells[1].innerHTML = elementProperties[nr].mod;               // modulus
		   if(elementProperties[nr].mod === 'unknown'){theDetail.rows[rnr].cells[2].innerHTML = ' ';}
			 else{theDetail.rows[rnr].cells[2].innerHTML = 'GPa';} rnr++; 
		 theDetail.rows[rnr].cells[1].innerHTML = eConfiguration[nr]; rnr++;                // econfiguration	 
		 theDetail.rows[rnr].cells[1].innerHTML = elementProperties[nr].abd;                // abundance
		   if(elementProperties[nr].abd === 'unknown'){theDetail.rows[rnr].cells[2].innerHTML = ' ';}
			 else{theDetail.rows[rnr].cells[2].innerHTML = '%';} rnr++;
		 theDetail.rows[rnr].cells[1].innerHTML = elementProperties[nr].disc;                // discovered		 	 	   	 		   	 		    		      			
// ----------------------------------------------------------
    $('#elementDetail tr').each(function(){ 
		 if($(this).index() === donkerNr[wys.knoppie1Nr]){
		  $(this).css('background-color','rgb(170,170,170)');
		 } else {
			$(this).css('background-color','rgb(200,200,200)'); 
		 }
		});		 
	 }
// ----------------- eerste segment ---------------------------
   function eersteSegment(nr,keuse,ctx) {
		  var plekY = eienskappeSkryf[keuse][2];
		  ctx.save();
		  ctx.fillStyle = '#666';	
			ctx.font = fontTabel[3];
			ctx.textAlign = alignTabel[1];
			ctx.textBaseline = textBase[0];
			ctx.fillText(eienskappeSkryf[keuse][0],0,plekY); plekY = plekY + 18;
			ctx.fillText(eienskappeSkryf[keuse][1],0,plekY);
			if(eienskappeSkryf[keuse][1] > ' '){
			 plekY = plekY + 18;
			}
			ctx.font = fontTabel[5];	
			ctx.fillText('sort by',0,plekY); plekY = plekY + 14;
			ctx.fillText(eienskappeSkryf[wys.sortKeuse][3],0,plekY);
          ctx.restore();
// -----------------------------------------------------------------		 
		 $('div#tabelsymbol td').each(function(){
			 var teks = $(this).text();			 
			 if(teks === theElements[nr].symbol){
				 $(this).addClass('ligterClick');
			 } else if($(this).hasClass('ligterClick')){
				$(this).removeClass('ligterClick');
			 }			 
		 });
// ----------------------------------------------------------------	   
		 $('div#tabelNr td').each(function(){
			if(!$(this).hasClass('leeg')){ 
			 var teks = Number($(this).text())-1;
			 if(theElements[nr].symbol === atomSymbol[teks]){	
			 $(this).addClass('ligterClick');
			 }else if($(this).hasClass('ligterClick')){
				$(this).removeClass('ligterClick');
			 }
			}
		 });		 
	 }
// ----------------- teken kristal ----------------------------	
   function tekenKristal(nr,ctx) {
			kristalObj[nr] = new Image();
				 
			kristalObj[nr].src = kristalPic[kristalNommers[nr]].pic;					 
 	
			ctx.drawImage(kristalObj[nr],-42,-295);
							
			ctx.fillStyle = '#666';	
			ctx.font = fontTabel[4];
			ctx.textAlign = alignTabel[0];
			ctx.fillText(kristalPic[kristalNommers[nr]].naam,-75,-303); 				 
	 }
// ------------------- teken orbits ---------------------------	 
   function tekenOrbits(nr,ctx) {		
		 orbitObj[nr] = new Image();
		 orbitObj[nr].src = orbitPic[nr];
		 ctx.drawImage(orbitObj[nr],-42,-296);
		 		 
		 ctx.fillStyle = '#666';	
		 ctx.font = fontTabel[2];
		 ctx.textAlign = alignTabel[0];
		 var syferSkryf = 'e=' + orbitSyfers[nr][0] + ' m=' + orbitSyfers[nr][1] + ' n=' + orbitSyfers[nr][2];
		 ctx.fillText(syferSkryf,-75,-300);	
	}
// ------------------- teken grafiek --------------------------   
   function tekenGrafiek(waarde,ctx){
		 ctx.save();	 
		 ctx.lineWidth = 0.5;  
		 ctx.fillStyle = 'rgba(200,200,200,0.8)'; 
		 waarde = waarde + wys.midSirkel;
			 
		 var onderX = Math.tan(degreesToRadians(wys.grade))*wys.midSirkel;  	 
		 var grafiekX = Math.tan(degreesToRadians(wys.grade))*waarde;
			 
		 ctx.beginPath();	 
		 ctx.moveTo(0,-wys.midSirkel);	 
		 ctx.lineTo(onderX,-wys.midSirkel); 
		 ctx.lineTo(grafiekX,-waarde); 	 
		 ctx.lineTo(-grafiekX, -waarde);  	 
		 ctx.lineTo(-onderX,-wys.midSirkel);
		 ctx.closePath();
		 ctx.fill();
	
		 ctx.beginPath();
		 ctx.moveTo(grafiekX,-waarde);
		 ctx.lineTo(-grafiekX,-waarde);
		 ctx.stroke();
		 ctx.restore();
   }
// ------------------- middel sirkel ---------------------------
   function middelSirkel(fillKleur,ctx) { 
		 ctx.save();
  	     ctx.lineWidth = 0.5;
		 ctx.fillStyle = fillKleur;							 
		 ctx.beginPath();	 
		 ctx.arc(0,0,wys.midSirkel/Math.cos(degreesToRadians(wys.grade)),degreesToRadians(255),degreesToRadians(285),true);
		 ctx.fill();
		 ctx.stroke();						 
		 ctx.restore();
	}   
// -------------------- teken segment -------------------------- 
   function tekenSegment(ctx,dieKleur){	
	 ctx.save();
   	 ctx.lineWidth = 0.5;
     ctx.fillStyle = dieKleur;
//     ctx.fillStyle = catagories[theElements[nr].kleur].color; 		  
		 var opskrifY = canvas.height/2 - 35; // 350 - 35 = 315
		 var segmentY = canvas.height/2 - 10; // 350 - 10 = 340
	 
		 var onderX =  Math.tan(degreesToRadians(wys.grade))*wys.midSirkel; 	 
		 var boPuntX = Math.tan(degreesToRadians(wys.grade))*segmentY; 
		 var waardeX = Math.tan(degreesToRadians(wys.grade))*opskrifY;	
			 
		 ctx.beginPath();	 
		 ctx.moveTo(waardeX,-opskrifY);	 
		 ctx.lineTo(-waardeX,-opskrifY);
		 ctx.stroke();	 
				 
		 ctx.beginPath();	 
		 ctx.moveTo(onderX,-wys.midSirkel);	 
		 ctx.lineTo(waardeX,-opskrifY); 	 
		 ctx.quadraticCurveTo(boPuntX,-segmentY,boPuntX-20,-segmentY);  
		 ctx.lineTo((boPuntX-20)*-1, -segmentY); 
		 ctx.quadraticCurveTo(boPuntX*-1 ,-segmentY,waardeX*-1,-opskrifY);	 
		 ctx.lineTo(onderX*-1,-wys.midSirkel);
		 ctx.fill();
		 ctx.stroke(); 
		 ctx.restore();
   }
// -------------------- teken skadu ---------------------------- 
   function tekenSkadu(ctx){
		 ctx.save();	
   	 ctx.lineWidth = 0.5;
	   ctx.fillStyle = 'rgba(50,50,50,0.2)'; 
	
		 var opskrifY = canvas.height/2 - 35; // 350 - 35 = 315
		 var segmentY = canvas.height/2 - 10;                 // 350 - 10 - 340
	 
		 var onderX =  Math.tan(degreesToRadians(wys.grade))*wys.midSirkel; 	 
		 var boPuntX = Math.tan(degreesToRadians(wys.grade))*segmentY; 
		 var waardeX = Math.tan(degreesToRadians(wys.grade))*opskrifY;	
							 
		 ctx.beginPath();
		 ctx.moveTo(0,-wys.midSirkel);	
		 ctx.lineTo(onderX+wys.skadu,-wys.midSirkel); 
		 ctx.lineTo(onderX+wys.skadu,-wys.midSirkel);	 
		 ctx.lineTo(waardeX+wys.skadu,-opskrifY); 	 
		 ctx.quadraticCurveTo(boPuntX+wys.skadu,-segmentY,(boPuntX+2)-20,-segmentY);  
		 ctx.lineTo(0, -segmentY); 
		 ctx.closePath();
		 ctx.fill();
		 ctx.restore();
   }
// --------------------- donkerder -----------------------------
   function donkerder(ctx){	
	 	 ctx.save();	
   	     ctx.lineWidth = 0.5;

		 ctx.fillStyle = 'rgba(0,0,0,'+wys.fadeOut+')'; 
//		 wys.fadeOut += .1 // .09;
	 
		 var opskrifY = canvas.height/2 - 35;  // 350 - 35 = 315
		 var segmentY = canvas.height/2 - 10;  // 350 - 10 = 340
	 
		 var onderX =  Math.tan(degreesToRadians(wys.grade))*wys.midSirkel; 	 
		 var boPuntX = Math.tan(degreesToRadians(wys.grade))*segmentY; 
		 var waardeX = Math.tan(degreesToRadians(wys.grade))*opskrifY;	
							 
		 ctx.beginPath();	 
		 ctx.moveTo(onderX,-wys.midSirkel);	 
		 ctx.lineTo(waardeX,-opskrifY); 	 
		 ctx.quadraticCurveTo(boPuntX,-segmentY,boPuntX-20,-segmentY);  
		 ctx.lineTo((boPuntX-20)*-1, -segmentY); 
		 ctx.quadraticCurveTo(boPuntX*-1 ,-segmentY,waardeX*-1,-opskrifY);	 
		 ctx.lineTo(onderX*-1,-wys.midSirkel);
		 ctx.fill(); 
  	     ctx.restore();
   }  
// ----------------------- dieBlokke ----------------------------	
   function dieBlokke(nr,ctx) {
		var xrgs = 8;	
	  var skryfOrbits = [
			 [''    ,'1s',''  ,''  ,''  ,],
			 ['[He]','2s','2p',''  ,''  ,],
			 ['[Ne]','3s','3p',''  ,''  ,],
			 ['[Ar]','4s','4p','3d',''  ,],
			 ['[Kr]','5s','5p','4d',''  ,],
			 ['[Xe]','6s','6p','5d','4f',],
			 ['[Rn]','7s','7p','6d','5f',],	 
									];		
			
			ctx.save();
			ctx.textAlign = alignTabel[1];
			ctx.fillStyle = '#666';
			ctx.textBaseline = textBase[1];	
			ctx.font = fontTabel[5];	
	
			ctx.fillText(skryfOrbits[theElements[nr].group][0],6+4,-74);
            ctx.font = fontTabel[4];			
			ctx.fillText(skryfOrbits[theElements[nr].group][1],6+xrgs,-100);
			ctx.fillText(skryfOrbits[theElements[nr].group][2],6+xrgs,-156);
			ctx.fillText(skryfOrbits[theElements[nr].group][3],20+xrgs,-212); 
			ctx.fillText(skryfOrbits[theElements[nr].group][4],6+xrgs,-282); 		
			ctx.restore();
					
		 ctx.fillStyle = 'rgba(250,250,250,1)';  
	
		 var telBlok = 16;
		 
		 if(theElements[nr].nommer < 55){
			 telBlok = 9;
		 }
		 if(theElements[nr].nommer < 19){
			 telBlok = 4;
		 }
		 if(theElements[nr].nommer < 3){
			 telBlok = 1;
		 }	 
		
			 var xPlek = 0+xrgs;
			 var yPlek = 100;
			 for(var i = 0; i < telBlok; i++){
				 ctx.fillRect(xPlek,-yPlek,12,12);
				 if(i === 0){yPlek += 14;}
				 if(i === 3){yPlek -= 14; xPlek += 14;}
				 if(i === 8){yPlek -= 28; xPlek -= 14;}
				 yPlek += 14;
			 }
			 ctx.restore();
		}
// ------------------- orbitBlokke ------------------------------
   function orbitBlokke(nr,ctx) {
   ctx.save();
   var xrgs = 8;	
	 ctx.fillStyle = 'rgba(0,0,250,0.6)';	
		var jumpstart = [24,29,41,42,44,45,46,46,47,78,79,110,111,],
		    jump = 0,
		    hoeveel = 0, 		
//	      telBlok = 16, 
		    plek = 0;	 					 

		for(var ind = 0; ind < jumpstart.length; ind++) {
			if(jumpstart[ind] === (nr + 1)){
				jump++;
			}
		}	
	     hoeveel = theElements[nr].groupCol;
	    for (var i = 0; i < hoeveel; i++) {
		 if(jump > 0 && i === 0){
			 i = jump;
			 hoeveel += jump;
		 }
			plek = i;
///--------------------- uitsonderings ------------------------------			
   if(theElements[nr].nommer > 56) {		   	
		 if(theElements[nr].nommer === 57 && i === 2){plek = 16;}		 
		 if(theElements[nr].nommer === 58){
		 if(i === 2){plek = 16;}
		  if(i === 3){plek = 2;}
		 }		 
		 if(theElements[nr].nommer === 64 && i === 9){plek = 16;}		 
		 if(theElements[nr].nommer === 89 && i === 2){plek = 16;}
		 		 
		 if(theElements[nr].nommer === 90){
		 	if(i === 2){plek = 16;}
		 	if(i === 3){plek = 17;}
		 }
		 if(theElements[nr].nommer === 91){
		 	if(i === 2){plek = 16;}	
		 	if(i === 3){plek = 2;}
		 	if(i === 4){plek = 3;}
     }
		 if(theElements[nr].nommer === 92){
		 	if(i === 2){plek = 16;}	
		 	if(i === 3){plek = 2;}
		 	if(i === 4){plek = 3;}		 		 	
		 	if(i === 5){plek = 4;}	
		 }
		 if(theElements[nr].nommer === 93){
		 	if(i === 2){plek = 16;}	
		 	if(i === 3){plek = 2;}
		 	if(i === 4){plek = 3;}		 		 	
		 	if(i === 5){plek = 4;}
		 	if(i === 6){plek = 5;}	
		 }
		 if(theElements[nr].nommer === 96 && i === 9){plek = 16;}	
		 if(theElements[nr].nommer === 103 && i === 16){plek = 26;}
	 }

    ctx.fillRect((xKonfig[theElements[nr].configTbl][plek]+xrgs),((yKonfig[theElements[nr].configTbl][plek])*-1),
		12/3,12); 
		
	 }
	 ctx.restore();
  }	
// ------------------- guideLines ------------------------------
   function guideLines(ctx) {
		ctx.save();
		
		ctx.lineWidth = 0.5;
		ctx.strokeStyle = 'rgb(250,0,0)';
				
		ctx.moveTo(0,-70);
		ctx.lineTo(0,-300);
		
		ctx.moveTo(12,-70);
		ctx.lineTo(12,-300);
		
		ctx.moveTo(14,-70);
		ctx.lineTo(14,-300);	
		
		ctx.moveTo(26,-70);
		ctx.lineTo(26,-300);
					
		ctx.stroke();
			
		ctx.strokeStyle = 'rgb(0,0,250)';		
		
		ctx.moveTo(8,-70);
		ctx.lineTo(8,-300);	
		
		ctx.moveTo(22,-70);
		ctx.lineTo(22,-300);	

		ctx.moveTo(-20,-70);
		ctx.lineTo(20,-70);	
		
	var streep = 100;
	var kant = 12;
	var opMet = kant + 2;
	
	for(var ind = 0; ind < 13;ind++){
		ctx.moveTo(-30,-streep);
		ctx.lineTo(30,-streep);
		if(ind === 0){streep = 114;}
		streep += opMet;
	}
		ctx.stroke();				
		
		ctx.restore();
	}
// ------------------------- roteer antiClockwise ------------	
	$('#links').click(function(){
	  rotateClockwise();		
	});
//------------------------------------------------------------ 	
	$('#links').mousedown(function(){
		wys.intervalCw = setInterval(function(){
			rotateClockwise();
		},500);
	}); 
// -----------------------------------------------------------
  $('#links').mouseup(function(){
		clearInterval(wys.intervalCw);
	});
// -----------------------------------------------------------
	function rotateClockwise(){
	 if(wys.beginBy < theElements.length - 1){	
			  wys.beginBy += 1;
	} else {
		wys.beginBy = 0;
	}
	 wys.fadeOut = 0;
	 wys.roteerTotaal = 0;

	 dieElemente(wys);
	}
// ------------------------- roteer Anticlockwise ------------	
	$('#regs').click(function(){
		rotateAnticlockwise();
	});
//------------------------------------------------------------
	$('#regs').mousedown(function(){
		wys.intervalAcw = setInterval(function(){
			rotateAnticlockwise();
		},500);
	}); 
// -----------------------------------------------------------
  $('#regs').mouseup(function(){
		clearInterval(wys.intervalAcw);
	});	
// ------------------------------------------------------------
	function rotateAnticlockwise(){
		if(wys.beginBy > 0){
			wys.beginBy -= 1;
		} else {
			wys.beginBy = 0;
		}
		 wys.fadeOut = 0;
		 wys.roteerTotaal = 0;

	   dieElemente(wys);		
	 }
// ----------------------- detail mouseover -------------------
	$('#ekstra1,#ekstra2').each(function() {
    $(this).mouseover(function(){
			$(this).css('background-color','rgb(200,200,200)');
		});
		$(this).mouseleave(function(){
		 $(this).css('background-color','rgb(220,220,220)');	
		});
  });
// ---------------------------tabelTab mouseover --------------
	$('#tabelTab1,#tabelTab2').each(function() {
    $(this).mouseover(function(){
			$(this).css('background-color','rgb(200,200,200)');
		});
		$(this).mouseleave(function(){
		 $(this).css('background-color','rgb(220,220,220)');	
		});
  });
// ---------------------------- tabs mouseover ----------------
	$('#tab1,#tab2,#tab3').each(function(){
		$(this).mouseover(function(){
		 $(this).css('background-color','rgb(200,200,200)');
		});	
		$(this).mouseleave(function(){
		 $(this).css('background-color','rgb(220,220,220)');	
		});	
	});
// ---------------------------- knoppie mouseover -------------	
	$('.knoppie').each(function() {
    $(this).mouseover(function(){
		 $(this).css('background-color','rgb(200,200,200)');	
		});
//		$(this).mouseleave(function(){
//		 $(this).css('background-color','rgb(240,240,240)');	
//		});
    });
// ---------------- ekstra1 click -----------------------------
  $('#ekstraTabs li').click(function(){
		if($(this).index() === 0){
			$('#detail').fadeIn();
			$('#pictures').fadeOut();
	  	$('#detail').css('background-color','rgb(200,200,200)');		 
	 	  $('#ekstra1').css('background-color','rgb(200,200,200)');
		  $('#ekstra2').css('background-color','rgb(220,220,220)');
			 $(this).mouseleave(function(){
		    $('#ekstra1').css('background-color','rgb(200,200,200)');	
		 	  $('#ekstra2').css('background-color','rgb(220,220,220)');
		   });
		}
		if($(this).index() === 1){
			$('#detail').fadeOut();
			$('#pictures').fadeIn();
			$('#pictures').css('background-color','rgb(200,200,200)');		 
	 	  $('#ekstra2').css('background-color','rgb(200,200,200)');
		  $('#ekstra1').css('background-color','rgb(220,220,220)');
			$(this).mouseleave(function(){
		    $('#ekstra2').css('background-color','rgb(200,200,200)');	
		 	  $('#ekstra1').css('background-color','rgb(220,220,220)');
		   });
		}
	});	
// ---------------- tabel tabs click --------------------------
	$('#tabelTabs li').click(function(){ 
		if($(this).index() === 0){
     $('#tabelNr').fadeOut();
		 $('#tabelsymbol').fadeIn();
		 $('#tabelsymbol').css('background-color','rgb(200,200,200)');		 
		 $('#tabelTab1').css('background-color','rgb(200,200,200)');
		 $('#tabelTab2').css('background-color','rgb(220,220,220)');
		 $('.leeg').css('background-color','rgb(200,200,200)');
		 $(this).mouseleave(function(){
		  $('#tabelTab1').css('background-color','rgb(200,200,200)');	
			$('#tabelTab2').css('background-color','rgb(220,220,220)');
		 });
		}
		if($(this).index() === 1){
		 $('#tabelsymbol').fadeOut();	
		 $('#tabelNr').fadeIn();		 
		 $('#tabelNr').css('background-color','rgb(200,200,200)');
		 $('#tabelTab2').css('background-color','rgb(200,200,200)');
		 $('#tabelTab1').css('background-color','rgb(220,220,220)');
		 $('.leeg').css('background-color','rgb(200,200,200)');
		 $(this).mouseleave(function(){
		  $(this).css('background-color','rgb(200,200,200)');	
			$('#tabelTab1').css('background-color','rgb(220,220,220)');
			$('#tabelTab2').css('background-color','rgb(200,200,200)');
		 });
		}
	 });	
// ---------------- reset click -------------------------------
 $('#opskrif').click(function(){
	$('#tab1').css({'background-color':'rgb(200,200,200)'});
  	$('#tab2').css({'background-color':'rgb(220,220,220)'});	
		$('#tab3').css({'background-color':'rgb(220,220,220)'});
		$('#menu1').fadeIn();
		$('#menu2').fadeOut();
		$('#menu3').fadeOut();
		// ---------------------------- reset na detail -----------
		$('#detail').fadeIn();	
		$('#pictures').fadeOut();
		$('#detail').css('background-color','rgb(200,200,200)');		 
		$('#ekstra1').css('background-color','rgb(200,200,200)');
		$('#ekstra2').css('background-color','rgb(220,220,220)');
		$('#valueslide').html(12);
		clearAll();
	    wys.grafiekKeuse = 0;
	    wys.knoppie1Nr = 0;
	    clearMenu1(wys.knoppie1Nr);
	    clearMenu2(wys.knoppie1Nr);
	    clearMenu3(wys.knoppie1Nr);
	    wys.eerste = true;
	    document.getElementById("myRange").value = "15";
	    wys.roteer = 15;
		wys.roteerTotaal = 0;
		wys.fadeOut = 0;	
		wys.beginBy = 0;				
		wys.beginBy = 0;
		wys.sortKeuse = 0;
	  	dieElemente(wys);
	 });	 
// ---------------- tabs ckick --------------------------------
  $('#tabs li').click(function(){
		if($(this).index() === 0){
		wys.laasteKlik = 'properties';	
        $('#tab2').css({'background-color':'rgb(220,220,220)'});	
		$('#tab3').css({'background-color':'rgb(220,220,220)'});
		$('#menu1').fadeIn();
		$('#menu2').fadeOut();
		$('#menu3').fadeOut();
		$('#menu1').css('background-color','rgb(200,200,200)');		
		$(this).css('background-color','rgb(200,200,200)');
		 $(this).mouseleave(function(){
		  $(this).css('background-color','rgb(200,200,200)');	
		 });
	}
		if($(this).index() === 1){
		 wys.laasteKlik = 'sort';	
		 $('#tab1').css({'background-color':'rgb(220,220,220)'});	
		 $('#tab3').css({'background-color':'rgb(220,220,220)'});
		 $('#menu2').fadeIn();
	 	 $('#menu1').fadeOut();
		 $('#menu3').fadeOut();	
		 $('#menu2').css('background-color','rgb(200,200,200)');
		 $(this).css('background-color','rgb(200,200,200)');
		 $(this).mouseleave(function(){
		 $(this).css('background-color','rgb(200,200,200)');	
		 });
		}
		if($(this).index() === 2){
		 wys.laasteKlik = 'categories';	
		 $('#tab1').css({'background-color':'rgb(220,220,220)'});	
		 $('#tab2').css({'background-color':'rgb(220,220,220)'});	
		 $('#menu3').fadeIn();
	 	 $('#menu2').fadeOut();
		 $('#menu1').fadeOut();
		 $('#menu3').css('background-color','rgb(200,200,200)');
		 $(this).css('background-color','rgb(200,200,200)');
		 $(this).mouseleave(function(){
		  $(this).css('background-color','rgb(200,200,200)');	
		 });
		}
	});	
// ----------------------------- menu1 ul li -----------------------------	
	$('#menu1 .knoppie').each(function(){
			$(this).click(function(){
		    wys.knoppie1Nr = $(this).index();		
			clearAll();
			clearMenu1(wys.knoppie1Nr);
			wys.grafiekKeuse = wys.knoppie1Nr;
			wys.roteerTotaal = 0;
			wys.fadeOut = 0;		
			dieElemente(wys);
	      });
	});
//---------------------------------------------------------------------
	function clearAll() {
	  $('#menu1 .knoppie').each(function() {
      $(this).css('background-color','rgb(240,240,240)');
      });
	  $('#menu2 .knoppie').each(function() {
      $(this).css('background-color','rgb(240,240,240)');
      });
	  $('#menu3 .knoppie').each(function() {  
      $(this).css('background-color',knoppieKleur[$(this).index()]);
      });	
	}
//------------------------------------------------------------------------ 
	function clearMenu1(nr){
			$('#menu1 .knoppie').each(function(){
				if($(this).index() === nr){
					$(this).css('background-color','rgb(170,170,170)');
					$(this).mouseleave(function(){
		            $(this).css('background-color','rgb(170,170,170)');							
		            });									  
				}else {
					$(this).css('background-color','rgb(240,240,240)');
					$(this).mouseleave(function(){
					$(this).css('background-color','rgb(240,240,240)');	
		            });
			  }
		 });
	}
// ----------------------------- menu2 ul li -----------------------------	
	$('#menu2 .knoppie').each(function(){
		$(this).click(function(){
			 wys.knoppie2Nr = $(this).index();			
			clearAll();
			clearMenu2(wys.knoppie2Nr);
			wys.grafiekKeuse = wys.knoppie1Nr;
			wys.sortKeuse = wys.knoppie2Nr;
			wys.roteerTotaal = 0;
			wys.fadeOut = 0;	
			wys.beginBy = 0;		
			dieElemente(wys);
	  });
	});	
//------------------------------------------------------------------------
	function clearMenu2(nr){
			$('#menu2 .knoppie').each(function(){
				if($(this).index() === nr){
					$(this).css('background-color','rgb(170,170,170)');
					$(this).mouseleave(function(){
		            $(this).css('background-color','rgb(170,170,170)');	
		            });
				}else {
					$(this).css('background-color','rgb(240,240,240)');
					$(this).mouseleave(function(){
		            $(this).css('background-color','rgb(240,240,240)');	
		            });
				}
		   });
	}	
// ----------------------------- menu3 ul li -----------------------------		
	$('#menu3 .knoppie').each(function(){
		$(this).click(function(){
			wys.knoppie3Nr = $(this).index();
			clearAll();
			clearMenu3(wys.knoppie3Nr);
			wys.beginBy = categoryBegin[wys.knoppie3Nr];			
			wys.sortKeuse = 13;			
			wys.roteerTotaal = 0;
			wys.fadeOut = 0;
			dieElemente(wys);				
	  });
	});	
// ---------------------------- clearMenu function -----------------------		
	function clearMenu3(nr){
	$('#menu3 .knoppie').each(function(){
		if($(this).index() === nr){
			$(this).css('background-color','rgb(170,170,170)');
			$(this).mouseleave(function(){
			$(this).css('background-color','rgb(170,170,170)');	
			});
		}else {
			 $(this).css('background-color',knoppieKleur[$(this).index()]);
			 $(this).mouseleave(function(){
			 $(this).css('background-color',knoppieKleur[$(this).index()]);	
			});
		}
	});
	}	
// --------------------- eerste setting ---------------------------------------	
	function versuimWaardes(){
//		$('#valueslide').html(12);
		$('#tab1').css('background-color','rgb(200,200,200)');
		$('#menu1').css('background-color','rgb(200,200,200)');
		wys.knoppie1Nr = 0;
		clearMenu1(wys.knoppie1Nr);
		clearMenu2(99);
		clearMenu3(99);
		$('#menu1 .knoppie').each(function(){
		  if($(this).index() === 0){
			$(this).css('background-color','rgb(170,170,170)');
		  }
		});	
		$('#menu2 .knoppie').each(function(){
		   if($(this).index() === 0){
			$(this).css('background-color','rgb(170,170,170)');
		   }
		});	
		$('#tabelsymbol').css('background-color','rgb(200,200,200)');
		$('#tabelTab1').css('background-color','rgb(200,200,200)');
		$('#tabelTab2').css('background-color','rgb(220,220,220)');
		$('.leeg').css('background-color','rgb(200,200,200)');
		$('#tabelNr').fadeOut();
		$('#tabelsymbol').fadeIn();
		$('#ekstra1').css('background-color','rgb(200,200,200)');
		$('#detail').css('background-color','rgb(200,200,200)');
	}
// ----------------------- mouseover and click tabelnr ------------------------
  $('div#tabelNr .rynr td').each(function(){
	$(this).mouseover(function(){
		if($(this).hasClass('leeg')){
			return;
		}
	$(this).addClass('ligter'); 
	}).mouseout(function(){
		$(this).removeClass('ligter');
	});	
	
  $(this).click(function(){

	if (isNaN(wys.beginBy = parseInt($(this).text()))) {
	   return; 
	} else {	
			 wys.beginBy = parseInt($(this).text())-1;
			 if(wys.laasteKlik === 'categories' || wys.laasteKlik === 'sort'){
	  		wys.laasteKlik = ' ';
		  	wys.sortKeuse = 0;
		  	versuimWaardes();
		}
		$('.rynr td').each(function() {
      if($(this).hasClass('ligterClick')){
				$(this).removeClass('ligterClick');
			}
    });
			$(this).addClass('ligterClick');
				  wys.fadeOut = 0;
				  wys.roteerTotaal = 0;
				 dieElemente(wys);	
				 return;		
	}
 });
	
});
// ------------------------ tabelsymbol move over and click on ----------------
	$('div#tabelsymbol .rynr td').each(function(){
	
		$(this).mouseover(function(){
			if($(this).hasClass('leeg')){
				return;
			}	
			$(this).addClass('ligter'); 
		});
		$(this).mouseout(function(){
			$(this).removeClass('ligter');
		});	
		
		$(this).click(function(){
	
			wys.beginBy = atomSymbol.indexOf($(this).text());
			
			if(wys.beginBy === -1){
				return;
			}else{
				if(wys.laasteKlik === 'categories' || wys.laasteKlik === 'sort'){
					wys.laasteKlik = ' ';
					wys.sortKeuse = 0;
					versuimWaardes();
			}
			 $('.rynr td').each(function() {
				if($(this).hasClass('ligterClick')){
					$(this).removeClass('ligterClick');
				}
			 });
				$(this).addClass('ligterClick');	
				wys.fadeOut = 0;
				wys.roteerTotaal = 0;
				dieElemente(wys);
				return;
			}			
		});	
	});
//-----------------------------------------------------------------------------	

$('#myRange').click(function(){

 				 wys.fadeOut = 0;
				 wys.roteerTotaal = 0;
	var rot = document.getElementById("myRange").value
				 wys.roteer = Math.abs(rot);
				 dieElemente(wys);		
})
