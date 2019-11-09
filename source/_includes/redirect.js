var referrer = document.referrer, landing = false, path = location.pathname, lngs = document.documentElement.dataset.lngs.split(" ");
if (referrer) { landing = (referrer.indexOf(location.hostname) === -1) }
if (landing && navigator.languages && lngs.every(function(x){return path.indexOf(x) === -1}))	{
	let navLng = navigator.languages.map(function(x){return x.split('-')[0]});
	if (!navLng.includes(lngs[0])) {
    	if (navLng.includes(lngs[1])) {path = '/' + lngs[1] + path;} else {path = '/en' + path;}
    	window.location.pathname = path;
    }
}
