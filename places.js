const results = document.getElementById('results');

const searchAddresses = (address) => {
  results.innerText = "";

  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: address })
  })
    .then(response => response.json())
    .then((data) => {
      data.hits.forEach((hit) => {
        const streetName = hit.locale_names.default[0];
        const postCode = hit.postcode[0];
        const city = hit.city.default[0];
        const addressHTML = `<li>${streetName} - ${postCode} ${city}</li>`;

        results.insertAdjacentHTML('beforeend', addressHTML);
      });
    });
};

const input = document.getElementById('address');

input.addEventListener("keyup", (event) => {
  searchAddresses(input.value);
});
