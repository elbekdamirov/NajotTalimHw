function fetchCountry(countryName) {
  const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(
    countryName
  )}`;

  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      showCountry(data[0]);
    })
    .catch((error) => {
      console.log("Ma'lumot olishda xatolik:", error);
    });
}
function showCountry(country) {
  const name = country.name.common;
  const capital = country.capital ? country.capital[0] : "Mavjud emas";
  const region = country.region;
  const population = country.population.toLocaleString();
  const area = country.area.toLocaleString();
  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "Mavjud emas";

  console.log(`Country: ${name}`);
  console.log(`Capital: ${capital}`);
  console.log(`Region: ${region}`);
  console.log(`Population: ${population} kishi`);
  console.log(`Area: ${area} km²`);
  console.log(`Languages: ${languages}`);
}

fetchCountry("uzbekistan");
