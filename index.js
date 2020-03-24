const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 
'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
	return bandName.replace(/^(a |the |an )/i, '').trim();
}

//this will be written in one line
	// if (a > b) {
	// 	return 1;
	// } else {
	// 	return -1;
	// }

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('.bands').innerHTML = 
	sortedBands
		.map(band => `<li>${band}</li>`)
		.join('');

//if we put to innerHTML something other than a string, a method 'toString()' will automatically be called on the thing passed
//so if we pass an array of bands, this array will be converted to one big string with bands seperated with comma
//to avoid that (commas would be rendered in the list), we use join(''), which converts array to one big string