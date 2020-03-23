const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 
'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const bandsList = document.querySelector('.bands');

function sortBands() {
	let orderedBands = bands.sort((a, b) => {
		a = formatBand(a);
		b = formatBand(b);

		if (a < b) return -1;
		if (a > b) return 1;
		return 0;

	});	

	return orderedBands;
}

function formatBand(el) {
	el = el.toLowerCase();
	el = el.match(/^(the|a|an)\b\s?/) ? el.replace(/^(the|a|an)\b\s?/, '') : el;

	return el;
}

function renderList() {
	const orderedBands = sortBands();

	bandsList.innerHTML = orderedBands.map((band, i) => {
		return `<li>${band}</li>`;
	}).join('');
}

renderList();