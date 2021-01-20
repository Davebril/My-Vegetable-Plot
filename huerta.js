window.onload function() {

	const temperature = document.querySelector('.termometro')
// PEDIDO A API
	const http = new XMLHttpRequest()
	http.open('GET', 'http://api.weatherapi.com/v1/current.json?key=46a4a52b8b27460a902184131201109&q=buenos aires')
	http.send()


	// CAMBIOS DE SOL SEGUN TEMPERATURA
	function sunChanges(temperature) {
		if (temperature > 20) {
			sol.style.visibility = 'visible'
			sol.classList.remove('normal-sol')
			sol.classList.add('radiant-sol')
		}

		else if (temperature < 10) {
			sol.style.visibility = 'hidden'
		}

		else {
			sol.style.visibility = 'visible'
			sol.classList.remove('radiant-sol')
			sol.classList.add('normal-sol')
		}
	}

}

