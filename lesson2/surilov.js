var a = "19"; //string
var b = 19; //integer

	console.log(typeof a);
	console.log(typeof b);



var siski = [13,225,334,43,54]; //Обычный массив	
	console.log(siski[0]);

var otsasi = { //Ассоциативный массив
	first:{
		0:'Apple',
		"her":2342,
		"balemba":25,
		5:666
	}


}	
	console.log(otsasi['first']['her']);
	console.log(otsasi['first']['balemba']);
	console.log(('iPhone это - ') + otsasi['first'][0]);
	console.log(otsasi['first'][5] + (' на номере'));


var buterbrod = [ //Многомерный массив
		[43,232,543,234234,555],
		[13,24332,44,234,35],
		[4,99,0,234,7]
	]
	console.log(buterbrod[1][3]);


var simpleCards = ['10h','Ah','7h'];
	console.log('Простой вывод карты ' + simpleCards[0]);

var cards = {
	'Hearts':[10,2,3,4,5,6,7,8,9,'Туз','Дама','Валет']
}
	console.log('Ваша карта - ' + cards['Hearts'][10]);


//Домашняя работа
var mas1 = [323,3,32,1212,6565,6,687,897,4,34];
	console.log('Вывел 4й и 5й элемент массива ' + mas1[3], mas1[4]);

var mas2 = {
	m:{
		'admin':89,
		'google':0,
		'xiaomi':'good',
		9:33
	}

}	
	console.log('Ассоциативный массив');
	console.log(mas2['m'][9]);
	console.log('Xiaomi is ' + mas2['m']['xiaomi']);


var mas3 = {
	'her':[234,152,100,344],
	dom:{
		9:55,
		'go':'first'
	}
	
}

	console.log('Вывод многомерного массива, но это не точно)))');
	console.log(mas3['her'][2]);
	console.log(mas3['dom']['go']);
