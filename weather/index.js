function showWeather(){
    let city = document.getElementById("city");
    getDetails(city.value);
}

async function getDetails(city){
 const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '43abebf566msh3780bdf8f266ab0p15c6b6jsnc562cc3e135d',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
}

try {
	const response = await fetch(url, options);

    if(!response.ok){
        throw new Error("Something went wrong,..")
    }
	let result = await response.json();
	addData(result);


} catch (error) {
	console.error(error.msg);
}
}




function addData(result){
    let card = document.getElementById("card");
    card.innerHTML = 
    `<h3>${result.name} </h3>
    <p>Temparature : ${result.main.temp}</p>
    <p>Pressure : ${result.main.pressure}</p>
    `;

}