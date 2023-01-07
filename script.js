document.querySelector('.task1').onclick = task1;
function task1() {
	let flag1 = document.querySelector('.flag1').value;
	if (flag1 == 'flag_ctf_ChtoPoGeometriiZadali_Boris2007') {
		document.querySelector('.answer2').innerHTML = 'Правильно! Флаг сдан';
	} else {
	document.querySelector('.answer1').innerHTML = 'Неверно. Попробуйте еще раз';
	}
}

document.querySelector('.task2').onclick = task2;
function task2() {
	let flag2 = document.querySelector('.flag2').value;
	if (flag2 == 'flag_ctf_crypto_hiurqyt47yt984') {
		document.querySelector('.answer4').innerHTML = 'Правильно! Флаг сдан';
	} else {
	document.querySelector('.answer3').innerHTML = 'Неверно. Попробуйте еще раз';
	}
}

document.querySelector('.task3').onclick = task3;
function task3() {
	let flag3 = document.querySelector('.flag3').value;
	if (flag3 == 'flag_ctf_1e17714377bd22c773c0a6d1f2317f1c9a680e9b') {
		document.querySelector('.answer6').innerHTML = 'Правильно! Флаг сдан';
	} else {
	document.querySelector('.answer5').innerHTML = 'Неверно. Попробуйте еще раз';
	}
}

document.querySelector('.task4').onclick = task4;
function task4() {
	let flag4 = document.querySelector('.flag4').value;
	if (flag4 == 'flag_ctf_archive_hf98y438h') {
		document.querySelector('.answer8').innerHTML = 'Правильно! Флаг сдан';
	} else {
	document.querySelector('.answer7').innerHTML = 'Неверно. Попробуйте еще раз';
	}
}