// Functia pentru a citi fisierul JSON
function readJSONFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

// Exemplu de utilizare
var filePath = 'searchbar.js\location.json';
readJSONFile(filePath, function (response) {
  var jsonData = JSON.parse(response);
  console.log(jsonData);
});

// const fs = require('fs');

// // Citește conținutul fișierului JSON
// const jsonData = JSON.parse(fs.readFileSync('searchbar.js\location.json', 'utf-8'));

// // Declara un array pentru a stoca rezultatele
// const extractedData = [];

// // Parcurge fiecare obiect din array-ul JSON
// jsonData.forEach(company => {
//   // Extrage valorile dorite și adaugă-le în noul array
//   extractedData.push({
//     name: company.name,
//     address: company.address,
//     phone: company.phone,
//     rating: company.rating,
//     city: company.city
//   });
// });

// // Afiseaza rezultatele in consola
// console.log(extractedData);
