
alert('Bienvenido a FUTPAZ  el objectivo del juego es poder juntar  5 escudos de tu equipo en linea horizontal o verticalmente');


 var img='nacional.PNG';
 var turno=1;
 var arreglo = new Array();
 var jug1=0;//acumula los puntos del jugador 1
 var jug2=0;//acumula los puntos del jugador 2

 for(i=0; i<=24; i++){

  arreglo[i]=-1;

 }

 function juego(pos){

    if(arreglo[pos]==-1){//si la posicion está vacia
     
     if(turno==1){
      if(img=='nacional.PNG'){
        document.getElementById('c'+pos).src=img;
	arreglo[pos]=1;
        turno=2;
	img='medellin.PNG';
      }
      
     }else if(turno==2){ 
      if(img=='medellin.PNG'){
       document.getElementById('c'+pos).src=img;
       arreglo[pos]=0;
       turno=1;
       img='nacional.PNG';
      }

     }

    }else{ alert('Posicion ocupada!'); }

//RECORRO  PRIMERA FILA
if(arreglo[0]==1 && arreglo[1]==1 && arreglo[2]==1 && arreglo[3]==1 && arreglo[4]==1){
	alert('GANO NACIONAL  EL MAS GRANDE DE COLOMBIA!!');
        jug1=jug1+1;
	limpiar();
  }

  if(arreglo[0]==0 && arreglo[1]==0 && arreglo[2]==0 && arreglo[3]==0 && arreglo[4]==0){
	alert('gano medellin');
        jug2=jug2+1;
	limpiar();
  }

//RECORRO SEGUNDA FILA 
if(arreglo[5]==1 && arreglo[6]==1 && arreglo[7]==1 && arreglo[8]==1 && arreglo[9]==1){
	alert('GANO NACIONAL  EL MAS GRANDE DE COLOMBIA!!');
        jug1=jug1+1;
	limpiar();
  }

  if(arreglo[5]==0 && arreglo[6]==0 && arreglo[7]==0 && arreglo[8]==0 && arreglo[9]==0){
	alert('gano medellin');
        jug2=jug2+1;
	limpiar();
  }

 //RECORRO TERCERA FILA 

 if(arreglo[10]==1 && arreglo[11]==1 && arreglo[12]==1 &&arreglo[13]==1 && arreglo[14]==1){
	alert('GANO NACIONAL  EL MAS GRANDE DE COLOMBIA!!');
        jug1=jug1+1;
	limpiar();
  }

  if(arreglo[10]==0 && arreglo[11]==0 && arreglo[12]==0 &&arreglo[13]==0 && arreglo[14]==0){
	alert('gano medellin');
        jug2=jug2+1;
	limpiar();
  }

//RECORRO CUARTA FILA
 if(arreglo[15]==1 && arreglo[16]==1 && arreglo[17]==1 &&arreglo[18]==1 && arreglo[19]==1){
	alert('GANO NACIONAL  EL MAS GRANDE DE COLOMBIA!!');
        jug1=jug1+1;
	limpiar();
  }

  if(arreglo[15]==0 && arreglo[16]==0 && arreglo[17]==0 &&arreglo[18]==0 && arreglo[19]==0){
	alert('gano medellin');
        jug2=jug2+1;
	limpiar();
  }
//RECORRO QUINTA FILA 

 if(arreglo[20]==1 && arreglo[21]==1 && arreglo[22]==1 &&arreglo[23]==1 && arreglo[24]==1){
	alert('GANO NACIONAL  EL MAS GRANDE DE COLOMBIA!!');
        jug1=jug1+1;
	limpiar();
  }

  if(arreglo[20]==0 && arreglo[21]==0 && arreglo[23]==0 &&arreglo[23]==0 && arreglo[24]==0){
	alert('gano medellin');
        jug2=jug2+1;
	limpiar();
  }



  //RECORRO COLUMNA 1 

  if(arreglo[0]==1 && arreglo[5]==1 && arreglo[10]==1 && arreglo[15]==1 && arreglo[20]==1){
	alert('GANO NACIONAL  EL MAS GRANDE DE COLOMBIA!!');
        jug1=jug1+1;
	limpiar();
  }

  if(arreglo[0]==0 && arreglo[5]==0 && arreglo[10]==0 && arreglo[15]==0 && arreglo[20]==0){
	alert('gano medellin');
        jug2=jug2+1;
	limpiar();
  }


//RECORRO COLUMNA 2

if(arreglo[1]==1 && arreglo[6]==1 && arreglo[11]==1 && arreglo[16]==1 && arreglo[21]==1){
	alert('GANO NACIONAL  EL MAS GRANDE DE COLOMBIA!!');
        jug1=jug1+1;
	limpiar();
  }

  if(arreglo[1]==0 && arreglo[6]==0 && arreglo[11]==0 && arreglo[16]==0 && arreglo[21]==0){
	alert('gano medellin');
        jug2=jug2+1;
	limpiar();
  }

  //RECORRO FILA 3

  if(arreglo[2]==1 && arreglo[7]==1 && arreglo[12]==1 && arreglo[17]==1 && arreglo[22]==1){
	alert('GANO NACIONAL  EL MAS GRANDE DE COLOMBIA!!');
        jug1=jug1+1;
	limpiar();
  }

  if(arreglo[0]==0 && arreglo[5]==0 && arreglo[10]==0 && arreglo[15]==0 && arreglo[20]==0){
	alert('gano medellin');
        jug2=jug2+1;
	limpiar();
  }

//RECORRO FILA 4 

  if(arreglo[3]==1 && arreglo[8]==1 && arreglo[13]==1 && arreglo[18]==1 && arreglo[23]==1){
	alert('GANO NACIONAL  EL MAS GRANDE DE COLOMBIA!!');
        jug1=jug1+1;
	limpiar();
  }

  if(arreglo[3]==0 && arreglo[8]==0 && arreglo[13]==0 && arreglo[18]==0 && arreglo[23]==0){
	alert('gano medellin');
        jug2=jug2+1;
	limpiar();
  }
//RECORRO FILA 5 


if(arreglo[4]==1 && arreglo[9]==1 && arreglo[14]==1 && arreglo[19]==1 && arreglo[24]==1){
	alert('GANO NACIONAL  EL MAS GRANDE DE COLOMBIA!!');
        jug1=jug1+1;
	limpiar();
  }

  if(arreglo[4]==0 && arreglo[9]==0 && arreglo[14]==0 && arreglo[19]==0 && arreglo[24]==0){
	alert('gano medellin');
        jug2=jug2+1;
	limpiar();
  }


 document.getElementById('ptsjug1').innerHTML=jug1;
 document.getElementById('ptsjug2').innerHTML=jug2;
}//FIN BOX



function limpiar(){

  for(i=0; i<=24; i++){
     document.getElementById('c'+i).src="fondo.PNG";
  }

  //reseteo el arreglo
  for(i=0; i<=24; i++){
     arreglo[i]=-1;
  }

 }

 function reiniciar(){
  jug1=0;
  jug2=0;
  document.getElementById('ptsjug1').innerHTML=jug1;
  document.getElementById('ptsjug2').innerHTML=jug2;
 }
 


