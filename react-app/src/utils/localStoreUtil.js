// считывает элемент, записанный под именем {name}
function initStored(name) {
	let stored = "";
	stored = localStorage.getItem(name);
	if (stored) return JSON.parse(stored);
	else return [];
}

// {item} параметр массив для сохранения в виде объекта под именем {name}
function saveStorage(name, item) {
	if (item.length === 0)
		localStorage.removeItem(name)
	else
		localStorage.setItem(name, JSON.stringify(item));
}

export { initStored, saveStorage }
