const countriesAPI = "https://restcountries.com/v2/all";

// Read the countries API using fetch and print the name of country, capital, languages, population and area.
fetchCountries = async () => {
  try {
    const response = await fetch(countriesAPI);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Something is wrong!", error);
  }
};

const displayCountries = async () => {
  try {
    const countries = await fetchCountries();
    countries.forEach((country) => {
      const { name, capital, languages, population, area } = country;
      console.log(`Country: ${name}`);
      console.log(`Capital: ${capital}`);
      console.log(
        `Languages: ${languages.map((lang) => lang.name).join(", ")}`
      );
      console.log(`Population: ${population}`);
      console.log(`Area: ${area}`);
      console.log("--------------------");
    });

    return countries
  } catch (error) {
    console.error(error);
  }
};

displayCountries()