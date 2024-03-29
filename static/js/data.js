let product = {
	name: "Apple iPhone 13",
	color: "blue",
	memory: 128,
	display: 6.1,
	os: "iOS 15",
	Interfaces: "NFC, Bluetooth, Wi- Fi",
	processor: "Apple A15 Bionic",
	weight: 173,
	price: 67990,
	priceOld: 75990,
	discount: -8,
	imageSet: ["../static/media/images/image-1.webp",
		"../static/media/images/image-2.webp",
		"../static/media/images/image-3.webp",
		"../static/media/images/image-4.webp",
		"../static/media/images/image-5.webp",
		"../static/media/images/image-6.webp"],
	colorSet: ["красный", "зеленый", "розовый", "синий", "бежевый", "чёрный"],
	memorySet: [128, 256, 512],
	deliverySet: [
		{
			name: 'Самовывоз',
			date: 'четверг, 1 сентября',
			cost: 0
		},
		{
			name: 'Курьер',
			date: 'четверг, 1 сентября',
			cost: 0
		}
	],
	description: `Наша самая совершенная система двух камер.
		Особый взгляд на прочность дисплея.
		Чип, с которым всё супербыстро.
		Аккумулятор держится заметно дольше.
		iPhone 13 - сильный мира всего.
		Мы разработали совершенно новую схему расположения и развернули объективы на 45 градусов. 
		Благодаря этому внутри корпуса поместилась наша лучшая система двух камер с увеличенной 
		матрицей широкоугольной камеры. Кроме того, мы освободили место для системы оптической 
		стабилизации изображения сдвигом матрицы. И повысили скорость работы матрицы на 
		сверхширокоугольной камере.

		Новая сверхширокоугольная камера видит больше деталей в тёмных областях снимков. 
		Новая широкоугольная камера улавливает на 47% больше света для более качественных 
		фотографий и видео. Новая оптическая стабилизация со сдвигом матрицы обеспечит чёткие 
		кадры даже в неустойчивом положении.

		Режим «Киноэффект» автоматически добавляет великолепные эффекты перемещения фокуса и 
		изменения резкости. Просто начните запись видео. Режим «Киноэффект» будет удерживать фокус 
		на объекте съёмки, создавая красивый эффект размытия вокруг него. Режим «Киноэффект» 
		распознаёт, когда нужно перевести фокус на другого человека или объект, который появился 
		в кадре. Теперь ваши видео будут смотреться как настоящее кино.`
}

let review1 = {
	name: "Марк Г.",
	rating: 5,
	photo: "../static/media/images/author1.png",
	experience: "менее месяца",
	advantage: `это мой первый айфон после после огромного количества телефонов на андроиде. 
		всё плавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая, ширик тоже на высоте.`,
	Disadvantages: `к самому устройству мало имеет отношение, но перенос данных с андроида - 
		адская вещь) а если нужно переносить фото с компа, то это только через itunes, 
		который урезает качество фотографий исходное.`
}

let review2 = {
	name: "Валерий Коваленко",
	rating: 4,
	photo: "../static/media/images/author2.png",
	experience: "менее месяца",
	advantage: `OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго`,
	Disadvantages: `Плохая ремонтопригодность`
}
