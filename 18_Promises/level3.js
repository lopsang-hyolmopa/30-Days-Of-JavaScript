const catsAPI = "https://api.thecatapi.com/v1/breeds";
const countriesAPI = "https://restcountries.com/v2/all";

// Read the cats api and find the average weight of cat in metric unit.
const fetchCats = async () => {
  try {
    const res = await fetch(catsAPI);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Something is wrong!", err);
  }
};

calculateAverageWeight = async () => {
  try {
    const cats = await fetchCats();
    const weightsInMetric = cats.map((cat) =>
      parseFloat(cat.weight.metric.split(" - ")[0])
    );

    // Calculate average weight
    const totalWeight = weightsInMetric.reduce(
      (acc, weight) => acc + weight,
      0
    );
    const averageWeight = totalWeight / cats.length;

    console.log(
      `Average weight of cats in metric units: ${averageWeight.toFixed(2)}`
    );
    return averageWeight;
  } catch (err) {
    console.error("Something is wrong!", err);
  }
};

// calculateAverageWeight();

// Read the countries api and find out the 10 largest countries
const fetchCountries = async () => {
  try {
    const response = await fetch(countriesAPI);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Something is wrong!", error);
  }
};

const getLargestCountries = async () => {
  try {
    const countries = await fetchCountries();
    const largestCountries = countries
      .sort((country1, country2) => country2.area - country1.area)
      .slice(0, 10);
    largestCountries.forEach((country) => {
      console.log(`Country: ${country.name}, Area: ${country.area}`);
    });
    return largestCountries;
  } catch (error) {
    console.error("Something is wrong!", error);
  }
};

getLargestCountries();
