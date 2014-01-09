function isNumber( input ) {
    return !isNaN( input );
}

function RStr(str,pos){
return str.substr(str.length-pos);
}

function LStr(str,pos){
return str.substr(0,pos);
}

function digitise(qst, sys){
var tmp = "" ;
var ch = "";
for (i=0; i<qst.length; i++){
ch = qst[i];
if (ch !== ' '){
tmp =  tmp + "" + a2no(ch,sys) ;
}
}
return tmp;
}

function a2no(letr, sys){
var a2narr = new Array();

switch (sys){
case 1 :

a2narr['A'] = 1 ; a2narr['J'] = 1  ; a2narr['S'] = 3  ; 
a2narr['B'] = 2 ; a2narr['K'] = 2  ; a2narr['T'] = 4  ; 
a2narr['C'] = 3 ; a2narr['L'] = 3  ; a2narr['Q'] = 1  ; 
a2narr['D'] = 4 ; a2narr['M'] = 4  ; a2narr['O'] = 7  ; 
a2narr['E'] = 5 ; a2narr['N'] = 5  ; a2narr['X'] = 5  ; 
a2narr['U'] = 6 ; a2narr['V'] = 6  ; a2narr['W'] = 6  ; 
a2narr['G'] = 3 ; a2narr['P'] = 8  ; a2narr['Y'] = 1  ; 
a2narr['H'] = 5 ; a2narr['F'] = 8  ; a2narr['Z'] = 7  ; 
a2narr['I'] = 1 ; a2narr['R'] = 2  ; a2narr['1'] = 1  ; 
a2narr['2'] = 2 ; a2narr['3'] = 3  ; a2narr['4'] = 4  ; 
a2narr['5'] = 5 ; a2narr['6'] = 6  ; a2narr['7'] = 7  ; 
a2narr['8'] = 8 ; a2narr['9'] = 9  ; a2narr['0'] = 0  ; 

return (a2narr[letr] + ''); 

break;

case 2 :

a2narr['A'] = 1 ; a2narr['J'] = 1  ; a2narr['S'] = 1  ; 
a2narr['B'] = 2 ; a2narr['K'] = 2  ; a2narr['T'] = 2  ; 
a2narr['C'] = 3 ; a2narr['L'] = 3  ; a2narr['U'] = 3  ; 
a2narr['D'] = 4 ; a2narr['M'] = 4  ; a2narr['V'] = 4  ; 
a2narr['E'] = 5 ; a2narr['N'] = 5  ; a2narr['W'] = 5  ; 
a2narr['F'] = 6 ; a2narr['O'] = 6  ; a2narr['X'] = 6  ; 
a2narr['G'] = 7 ; a2narr['P'] = 7  ; a2narr['Y'] = 7  ; 
a2narr['H'] = 8 ; a2narr['Q'] = 8  ; a2narr['Z'] = 8  ; 
a2narr['I'] = 9 ; a2narr['R'] = 9  ; a2narr['1'] = 9  ; 
a2narr['2'] = 2 ; a2narr['3'] = 3  ; a2narr['4'] = 4  ; 
a2narr['5'] = 5 ; a2narr['6'] = 6  ; a2narr['7'] = 7  ; 
a2narr['8'] = 8 ; a2narr['9'] = 9  ; a2narr['0'] = 0  ; 
return (a2narr[letr] + ''); 

break;
case 3 :

a2narr['A'] = 1 ; a2narr['J'] = 1  ; a2narr['S'] = 1  ; 
a2narr['B'] = 2 ; a2narr['K'] = 2  ; a2narr['T'] = 2  ; 
a2narr['C'] = 3 ; a2narr['L'] = 3  ; a2narr['U'] = 3  ; 
a2narr['D'] = 4 ; a2narr['M'] = 4  ; a2narr['V'] = 4  ; 
a2narr['E'] = 5 ; a2narr['N'] = 5  ; a2narr['W'] = 5  ; 
a2narr['F'] = 6 ; a2narr['O'] = 6  ; a2narr['X'] = 6  ; 
a2narr['G'] = 7 ; a2narr['P'] = 7  ; a2narr['Y'] = 7  ; 
a2narr['H'] = 8 ; a2narr['Q'] = 8  ; a2narr['Z'] = 8  ; 
a2narr['I'] = 1 ; a2narr['R'] = 2  ; a2narr['1'] = 1  ; 
a2narr['2'] = 2 ; a2narr['3'] = 3  ; a2narr['4'] = 4  ; 
a2narr['5'] = 5 ; a2narr['6'] = 6  ; a2narr['7'] = 7  ; 
a2narr['8'] = 8 ; a2narr['9'] = 9  ; a2narr['0'] = 0  ; 
return (a2narr[letr] + ''); 

break;
}
}




function Rasiname(RasiVal) {
var RN = new Array();
			RN[ 0] 	  = "N/A";
			RN[ 1]    = "Aries";
			RN[ 2]    = "Taurus";                    
            RN[ 3]    = "Gemini";
            RN[ 4]    = "Cancer";
            RN[ 5]    = "Leo";
            RN[ 6]    = "Virgo";
            RN[ 7]    = "Libra";
 		    RN[ 8]    = "Scorpio";
            RN[ 9]    = "Sagittarius";
            RN[10]    = "Capricorn";
        	RN[11]    = "Aquarius";
            RN[12]    = "Pisces";
return RN[RasiVal];
}


function IsItOK2(No , aList) {
var Mylist; var IsOK = false;
Mylist = aList.split(",");
for (i = 0; i<aList.length; i++){
if (No === Mylist[i]) {
IsOK = true;
break;
}
}
return IsOK;

}


function HebrewLag(Num) {
var LagList = new Array();
var tmp="N/A"; var tmp2;
LagList[0] = '7,16,25,34,6,15,24,33,1';
LagList[1] = '10,19,28,2,11,20,29,9,18';
LagList[2] = '27,36,4,13,22,31,3,12,21';
LagList[3] = '30,8,17,26,35,5,14,23,32';
LagList[4] = '43,52,61,70,42,51,60,69,37';
LagList[5] = '46,55,64,38, 47,56,65,45,54';
LagList[6] = '63,72,40,49,58,67,39,48,57';
LagList[7] = '66,44,53,62,71,41,50,59,68';
LagList[8] = '79,88,97,106,78,87,96,105,73';
LagList[9] = '82,91,100,74,83,92,101,81,90';
LagList[10] = '99,108,76,85,94,103,75,84,93';
LagList[11] = '102,80,89,98,107,77,86,95,104';

for (j = 0; j< 12; j++){
if(IsItOK2(Num.toString(), LagList[j])) {
tmp =  Rasiname(j + 1);
break;
}
}


return tmp;
}

function digit2Tot(x,y){
if((x + y) > 9){
return x + y -9;}

else
{
return x + y;
}
}

function digit2Pro(x,y){
var tmp;
if ((x * y)<10){
return x * y;}
else 
{
tmp = x * y + '';
return digit2Tot(parseInt(tmp[0],10),parseInt(tmp[1],10));    //(tmp[0],tmp[1]);
}
}



