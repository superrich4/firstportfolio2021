function show_layer(div_name){

 

 document.all.div_01.style.display="none";

 document.all.div_02.style.display="none";

 document.all.div_03.style.display="none";

 document.all.div_04.style.display="none"; // 메뉴 숫자에 따라 늘려주세요

 

 switch(div_name)

 {

  case '1':

  document.all.div_01.style.display="";

  break;

  case '2':

  document.all.div_02.style.display="";

  break;

  case '3':

  document.all.div_03.style.display="";

  break;

  case '4':

  document.all.div_04.style.display="";

  break;

 }

}