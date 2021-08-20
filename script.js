
// Get all the countries from Asia continent /region using Filter function

const getCountries =() => {
    const xhr =new XMLHttpRequest();
    xhr.open("GET","https://restcountries.eu/rest/v2/all");
    //  xhr.responseType = "json";
    
    xhr.onload = () => {
        const data = xhr.response;
        console.log(data);
      console.log(JSON.parse(data));
    
        const result = JSON.parse(data)
        .filter((country)=>country.region==="Asia")
        .map((country)=>({
            name:country.name,
            //population:country.population,
            // region:country.region,
            // subregion:country.subregion
        }));
        console.log(result)
    };
  xhr.send();
};
getCountries();

// Get all the countries with a population of less than 2 lakhs using Filter function

const getCountriesPop =() => {
    const xhr =new XMLHttpRequest();
    xhr.open("GET","https://restcountries.eu/rest/v2/all");
    //  xhr.responseType = "json";
    
    xhr.onload = () => {
        const data = xhr.response;
        console.log(data);
      console.log(JSON.parse(data));
    
        const result = JSON.parse(data)
        .filter((country)=>country.population<2_00_000)
        //.filter((country)=>country.currencies==="USD")
        .map((country)=>({
            // name:country.name,
            population:country.population,
            currencies:country.currencies
            // region:country.region,
            // subregion:country.subregion
        }));
        console.log(result)
    };
  xhr.send();
};
getCountriesPop ();


