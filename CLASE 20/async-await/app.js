// TRY CATCH

// console.log(3);
// try {
//   imprimir();
// } catch (error) {
//     console.log(error)
// }

// console.log(5);

// FETCH CON ASYNC AWAIT
const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;

document.addEventListener(`DOMContentLoaded`, getData());

// FETCH API BÁSICO
// function getData() {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.categories));
// }

// FETCH CON ASYNC AWAIT

async function getData() {
  try {
    const response = await fetch(url);
    const datos = await response.json();
    console.log(datos.categories);
  } catch (error) {
    console.log(error);
  }
}
