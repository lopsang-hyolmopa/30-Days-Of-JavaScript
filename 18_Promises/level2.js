// Print out all the cat names in to catNames variable.
const catsAPI = "https://api.thecatapi.com/v1/breeds";

const fetchCats = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();
    const catNames = cats.map((cat) => cat.name)
    return catNames;
  } catch (err) {
    console.error("Something is wrong!", err);
  }
};

fetchCats().then((catNames) => console.log(catNames))
