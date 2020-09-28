var feild=document.querySelector('textarea');
var backup = feild.getattribute('placeholder');
var btn = document.queryselector('.btn');
var clear = document.getElementbyId('clear');

feild.onfocus = function(){
	this.setattribute('placeholder','');
	this.style.bordercolor = '#333';
	btn.style.display ='block';
}

feild.onblur = function(){
	this.setattribute('placeholder',backup);
    this.style.bordercolor = '#aaa';
}
clear.onclick = function(){
	btn.style.display = 'none';
	feild.value ='';
}