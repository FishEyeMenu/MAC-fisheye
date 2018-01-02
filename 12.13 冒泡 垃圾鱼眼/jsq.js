function $(id){
	return document.getElementById(id);
}

var nums=new Array();
var msg="";
var line=0;
function show(){
	var rad=Math.floor(Math.random()*100);
	if(rad<10&&rad>0)
		rad="0"+rad;
	msg+=rad+" ";
	line++;
	$("rad").innerHTML=msg;
	$("show").innerHTML="";
	sort();
	if(line%7==0)
		msg+="<br/>";
}
var numsa=new Array();
function sort(){
	var msg2="";
	numsa=msg.split("<br/>");
	for(var h=0;h<numsa.length;h++)
		msg2+=numsa[h];
	nums=msg2.split(" ");
	sb();
	//bulubulu();
	var msg2="";
	for(var s=0;s<nums.length;s++)
		if(s%7!=0)
			msg2+=nums[s]+" ";
		else 
			msg2+=" "+nums[s]+"<br/>";
	msg2=msg2.substr(6);
	$("show").innerHTML=msg2;
}

function sb(){
	for(var i=0;i<nums.length;i++)
	{	for(var j=i;j<nums.length;j++)
			if(nums[i]>nums[j])
			{
				var tmp=nums[i];
				nums[i]=nums[j];
				nums[j]=tmp;
			}
	}
}

function bulubulu(){
	for(var z=0;z<nums.length-1;z++)
		for(var x=nums.length-1;x>0;x--)
	  //for(var x=0;x<nums.length-1-z;x++)
			if(nums[x]>nums[x-1])
			{
				var tmp=nums[x];
				nums[x]=nums[x+1];
				nums[x+1]=tmp;
			}
}
















//鱼眼box
var tm1;
var tm2;
var ball=new Array();
var name;
var name0;
var name1;
function op(){
	var s=document.getElementsByName("d");
	for(var nn=0;nn<s.length;nn++)
	{
		ball[nn]=50;
		s[nn].style.width="50px";
		s[nn].style.height="50px";
	}
}
var bigison=false;
var smison=false;
var s;
function onb(id){
	if(!bigison)
	{
		s=id;
		
		if(smison)
		{clearInterval(tm2);smison=false;}
		bigison=true;
		name0="d"+(id-1);
		name="d"+id;
		name1="d"+(id-1+2);
		wd=parseInt($(name).style.width);
		bd=50;
		big();
		tm1=setInterval("big()",v);
	}
}
var v=40;
var wd;
var wd1;
var bd;
var bd1;
function become(wd,bd){
	if($(name1))
	{
		$(name1).style.width=bd+"px";
		$(name1).style.height=bd+"px";
	}
	if($(name0))
	{
		$(name0).style.width=bd+"px";
		$(name0).style.height=bd+"px";
	}
	$(name).style.width=wd+"px";
	$(name).style.height=wd+"px";
	
}
function big(){	
	if(wd<120)
	{
		
		wd+=12;
		bd+=5;
		become(wd,bd);
	}
	else {
		fir();
		clearInterval(tm1);
		bigison=false;
		$("d"+s).innerHTML="<img src='image/hj.jpg'/>";
	}
}
function los(id){
	if(!smison)
	{
		$("d"+s).innerHTML="";
		s=id;
		if(bigison)
		{clearInterval(tm1);bigison=false;}
		smison=true;
		name0="d"+(id-1);
		name="d"+id;
		name1="d"+(id-1+2);
		wd1=parseInt($(name).style.width);
		bd1=bd;
		lv();
		tm2=setInterval("lv()",v);
	}
}
function lv(){
	if(wd1>50)
	{
		wd1-=12;
		bd1-=5;
		become(wd1,bd1);
	}
	else {
		fir();
		clearInterval(tm2);
		smison=false;
	}
}
function fir(){
	for(var i=2;i<10;i++)
	{
		if($("d"+(s-i)))
		{
			$("d"+(s-i)).style.width=50+"px";
			$("d"+(s-i)).style.height=50+"px";
		}
		if($("d"+(s-1+i+1)))
		{
			$("d"+(s-1+i+1)).style.width=50+"px";
			$("d"+(s-1+i+1)).style.height=50+"px";
		}
	}
}
