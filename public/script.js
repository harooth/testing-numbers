let input = document.querySelector(".search-input");

let result = document.querySelector(".result");

let blocks = document.querySelectorAll(".result-child")

let links = document.querySelectorAll("a")

function getCountry(country) {
	country = country.toLowerCase();
	let index = country.indexOf(" ")
	if(index) {
		country = country.split("")
		country[index] = "-";
		country = country.join("")
		return country
	}
	return country;

}

const countries = ["Russia Fix", "Armenia", "Afghanistan", "asxab tamaev", "Aruzhan", "Ananas	",  "Canada", "Germany Mobile", "Army", "Germany Fix", "Austria Mobile", "Austria Fix", "Nigeria MTN", "Nigeria Globacom"]
countries.sort()

input.addEventListener("keyup", function (evn) {
	for(let i = 0; i<blocks.length; i++) {
		blocks[i].style.opacity = 0;
		blocks[i].innerHTML = "";
		links[i].removeAttribute('href');
	}

	if(evn.keyCode == 13) {
		evn.preventDefault()
	}

	let currentBLock = 0;

	if (!input.value.trim()) {
		console.clear();
		return;
	}
	console.clear()
	for (let i = 0; i < countries.length; i++) {
		if (countries[i].toLowerCase().includes(input.value.trim().toLowerCase()) && currentBLock<=6) {
			blocks[currentBLock].innerHTML = countries[i]
			links[currentBLock].setAttribute("href", `${getCountry(countries[i])}`);
			// links[currentBLock].style.corsor = pointer;
			blocks[currentBLock].style.opacity = 100;
			currentBLock++
		// 	// console.log(getChild(countries[i]))
		// 	result.innerHTML+=getChild(countries[i])
		// 	limit++
		}

	}
})


// console.log(getCountry("Germ fix"))