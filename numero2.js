// JavaScript Document
function slimdate(xx){
var yy = xx;
if (isNumber(xx) == false){
return xx;
}
if (xx.length == 8){
if (xx[2] == '0'){
yy = yy.substring(0, 2) + '' + yy.substring(3);}
//yy[2] = '';}

if (xx[0] == '0'){
yy = yy.substring(0, 0) + '' + yy.substring(1);}
//yy[0] = '';}
return yy.trim();
}
else{
return xx;
}

}




function reverseStr(xx){
var temp="";
for (i=xx.length-1;i>=0;i--){
temp = temp + xx[i];
}
return temp;
}

function digit2Tot2(x,y){
if ((x+y)<10){
return (x + y) + ''  ;
} 
else {
var temp=0; var temp2="";
temp = x + y;
temp2 = temp + '';
return temp2[1];
}
}


function pyra1step2(xx){
var temp; var ltot; var blast;
switch (xx.length){
case 0:
return xx;
case 1:
return xx;
break;
case 2:
return digit2Tot2(parseInt(xx[xx.length-1],10) , parseInt(xx[xx.length-2],10));
break;
default:

blast = digit2Tot2(parseInt(xx[xx.length-1],10) , parseInt(xx[xx.length-2],10));
temp2 = blast;
temp = digit2Tot2(parseInt(xx[0],10) , parseInt(xx[1],10)).toString();
for (i=2;i<xx.length-2;i++){

temp = temp + digit2Tot2(parseInt(temp[(temp.length)-1],10) , parseInt(xx[i],10));
//ltot = temp + xx[2];


}
//}
return  temp +"" + blast ;
}
} 


function PyramidCal42(nox){
var qtemp; var rtemp ="";
var rstatus = 0;
qtemp = nox; 
while (qtemp.length>1){
//if (rstatus = 0){
if (rstatus ==1){
qtemp = reverseStr(qtemp);
qtemp = pyra1step2(qtemp);
qtemp = reverseStr(qtemp);
rtemp = rtemp + qtemp  +   "<br>";
//rtemp = rtemp + qtemp + "<br>";

} else {
qtemp = pyra1step2(qtemp);
rtemp = rtemp + qtemp +  "<br>";

}


rstatus = (rstatus ==0) ? 1 : 0;

}
return rtemp;
}

function printR(xx){
var tempArr; var resArr="";
tempArr = xx.split(",");
for (i=tempArr.length-1; i>-1;i--){
resArr = resArr + tempArr[i] + "<br>";
}
return resArr;
}

function printD(xx){
var tempArr; var resArr="";
tempArr = xx.split(",");
for (i=0;i<tempArr.length; i++){
resArr = resArr + tempArr[i] + "<br>";
}
return resArr;
}

function digit2Min2(x,y){
if ((x == 0) && (y == 0)){
return 0 + '';
}
if (x == 0){
return (10 - y) + '';
}
if (y == 0){
return (10 - x) + '';

}
if (y >= x){
return (y - x) + ''  ;
} 
else {
return (x - y) + '';
}
}

function PyramidCal3(nox){
var pyrArr  = ""; 
var resA; var resB;
var qtemp = nox;
rstatus = 0;
for (j=0;j<nox.length; j++){
qtemp =  pyra1step2(qtemp) ;
if (rstatus ==1){
qtemp = reverseStr(qtemp);}

pyrArr =pyrArr + qtemp +  ",";

qtemp = reverseStr(qtemp);
rstatus =1;
if (qtemp.length==1){
break;
}
}

resA = printR(pyrArr) + nox + "<br>";

pyrArr="";
qtemp = reverseStr(nox);
rstatus =0;
for (j=0;j<nox.length; j++){
qtemp =  pyra1step2(qtemp) ;
if (rstatus == 1){
qtemp = reverseStr(qtemp);}

qtemp = reverseStr(qtemp);
pyrArr =pyrArr + qtemp +  ",";
rstatus =1;

if (qtemp.length==1){
break;
}
}
resB = printD(pyrArr);
return resA + resB;

}

function PyramidCal5(nox){
var pyrArr  = ""; 
var resA; var resB;
var qtemp = nox;
rstatus = 0;
for (j=0;j<nox.length; j++){
qtemp =  pyra1step3(qtemp) ;
if (rstatus ==1){
qtemp = reverseStr(qtemp);}

pyrArr =pyrArr + qtemp +  ",";

qtemp = reverseStr(qtemp);
rstatus =1;
if (qtemp.length==1){
break;
}
}

resA = printR(pyrArr) + nox + "<br>";

pyrArr="";
qtemp = reverseStr(nox);
rstatus =0;
for (j=0;j<nox.length; j++){
qtemp =  pyra1step3(qtemp) ;
if (rstatus == 1){
qtemp = reverseStr(qtemp);}
qtemp = reverseStr(qtemp);
pyrArr =pyrArr + qtemp +  ",";
rstatus =1;

if (qtemp.length==1){
break;
}
}
resB = printD(pyrArr);
return resA + resB;

}

function PyramidCal4(nox){
var qtemp; var rtemp ="";
var ftemp;
var rstatus = 0;
qtemp = nox; 
while (qtemp.length>1){
//if (rstatus = 0){
if (rstatus ==1){
qtemp = reverseStr(qtemp);
qtemp = pyra1step2(qtemp);
qtemp =  reverseStr(qtemp) ;
rtemp = rtemp + qtemp + ",";
//rtemp = rtemp + qtemp + "<br>";

} else {
//qtemp= reverseStr(qtemp);
qtemp = pyra1step2(qtemp);
rtemp = rtemp + qtemp +  ",";

}


rstatus = (rstatus ==0) ? 1 : 0;

}

var resA; var resB;
ftemp = rtemp;
resA = printR(ftemp) + nox + "<br>";

rstatus = 0;
qtemp  = nox;
rtemp = "";
while (qtemp.length>1){
//if (rstatus = 0){
if (rstatus ==1){
qtemp = reverseStr(qtemp);
qtemp = pyra1step2(qtemp);
rtemp = rtemp + qtemp  + ",";
//rtemp = rtemp + qtemp + "<br>";

} else {
qtemp= reverseStr(qtemp);
qtemp = pyra1step2(qtemp);
rtemp = rtemp + reverseStr(qtemp) +  ",";

}


rstatus = (rstatus ==0) ? 1 : 0;

}



resB = printD(rtemp);
return resA + resB;

}

function PyramidCal43(nox){
var qtemp; var rtemp ="";
var ftemp;
var rstatus = 0;
qtemp = nox; 
while (qtemp.length>1){
//if (rstatus = 0){
if (rstatus ==1){
qtemp = reverseStr(qtemp);
qtemp = pyra1step3(qtemp);
qtemp =  reverseStr(qtemp) ;
rtemp = rtemp + qtemp + ",";
//rtemp = rtemp + qtemp + "<br>";

} else {
//qtemp= reverseStr(qtemp);
qtemp = pyra1step3(qtemp);
rtemp = rtemp + qtemp +  ",";

}


rstatus = (rstatus ==0) ? 1 : 0;

}

var resA; var resB;
ftemp = rtemp;
resA = printR(ftemp) + nox + "<br>";

rstatus = 0;
qtemp  = nox;
rtemp = "";
while (qtemp.length>1){
//if (rstatus = 0){
if (rstatus ==1){
qtemp = reverseStr(qtemp);
qtemp = pyra1step3(qtemp);
rtemp = rtemp + qtemp  + ",";
//rtemp = rtemp + qtemp + "<br>";

} else {
qtemp= reverseStr(qtemp);
qtemp = pyra1step3(qtemp);
rtemp = rtemp + reverseStr(qtemp) +  ",";

}


rstatus = (rstatus ==0) ? 1 : 0;

}



resB = printD(rtemp);
return resA + resB;

}







function pyra1step3(xx){
var temp; var ltot; var blast = 0;
var temp2;
switch (xx.length){
case 0:
return xx;
case 1:
return xx;
break;
case 2:
return digit2Tot2(parseInt(xx[xx.length-1],10) , parseInt(xx[xx.length-2],10));
break;
default:


//temp2 = blast;
temp = digit2Tot2(parseInt(xx[0],10) , parseInt(xx[1],10)).toString();
for (i=2;i<xx.length-2;i++){
temp2 =  digit2Tot2(parseInt(temp[(temp.length)-1],10) , parseInt(xx[i],10))
temp = temp + temp2 ;
}

blast =  parseInt(temp[temp.length-1],10) ;
blast += parseInt(xx[xx.length-2],10);
//blast += parseInt(xx[xx.length-1],10) +'';

blast = digit2Tot2(blast , parseInt(xx[xx.length-1],10)) + '';
//blast = parseInt(temp[temp.length -1],10);
return  temp + "" + blast;  //temp +"" + temp2 ;
}
}

function PyramidCal44(nox){
var qtemp; var rtemp ="";
var ftemp;
var rstatus = 0;
qtemp = nox; 
while (qtemp.length>1){
//if (rstatus = 0){
if (rstatus ==1){
qtemp = reverseStr(qtemp);
qtemp = pyra1step4(qtemp);
qtemp =  reverseStr(qtemp) ;
rtemp = rtemp + qtemp + ",";
//rtemp = rtemp + qtemp + "<br>";

} else {
//qtemp= reverseStr(qtemp);
qtemp = pyra1step4(qtemp);
rtemp = rtemp + qtemp +  ",";

}


rstatus = (rstatus ==0) ? 1 : 0;

}

var resA; var resB;
ftemp = rtemp;
resA = printR(ftemp) + nox + "<br>";

rstatus = 0;
qtemp  = nox;
rtemp = "";
while (qtemp.length>1){
//if (rstatus = 0){
if (rstatus ==1){
qtemp = reverseStr(qtemp);
qtemp = pyra1step4(qtemp);
rtemp = rtemp + qtemp  + ",";
//rtemp = rtemp + qtemp + "<br>";

} else {
qtemp= reverseStr(qtemp);
qtemp = pyra1step4(qtemp);
rtemp = rtemp + reverseStr(qtemp) +  ",";

}


rstatus = (rstatus ==0) ? 1 : 0;

}



resB = printD(rtemp);
return resA + resB;

}


function pyra1step4(xx){
var temp; var ltot; var blast;
switch (xx.length){
case 0:
return xx;
case 1:
return xx;
break;
case 2:
return digit2Min2(parseInt(xx[xx.length-1],10) , parseInt(xx[xx.length-2],10));
break;
default:

blast = digit2Min2(parseInt(xx[xx.length-1],10) , parseInt(xx[xx.length-2],10));
temp2 = blast;
temp = digit2Min2(parseInt(xx[0],10) , parseInt(xx[1],10)).toString();
for (i=2;i<xx.length-2;i++){

temp = temp + digit2Min2(parseInt(temp[(temp.length)-1],10) , parseInt(xx[i],10));
//ltot = temp + xx[2];


}
//}
return  temp +"" + blast ;
}
} 

