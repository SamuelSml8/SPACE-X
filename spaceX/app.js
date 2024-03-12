document.addEventListener("DOMContentLoaded", getLaunch);

const url = "https://api.spacexdata.com/v3/launches";

async function getLaunch() {
  try {
    const cards = document.querySelector("#cards");
    const response = await fetch(url);
    const data = await response.json();
    data.forEach((launch) => {
      cards.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img src="${launch.links.mission_patch}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${launch.mission_name}</h5>
            <p class="card-text">${launch.launch_year}</p>
            <button type="button" onclick="showLaunch(${launch.flight_number})" class="btn btn-primary">Details</button>
          </div>
        </div>
      `;
    });
  } catch (error) {
    console.log(`¡Ou shit, an ${error}`);
  }
}

async function showLaunch(flightNumber) {
  try {
    const response = await fetch(`${url}/${flightNumber}`);
    const data = await response.json();
    const modalContent = document.querySelector(
      "#staticBackdrop .modal-content"
    );
    modalContent.innerHTML = `
      <div class="modal-header">
        <h1 class="modal-title fs-5">${data.mission_name}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/${
          data.links.youtube_id
        }" frameborder="0" allowfullscreen></iframe>
        <p>Cohete: ${data.rocket.rocket_name}</p>
        <p>Tipo: ${data.rocket.rocket_type}</p>
        <p>Éxito Misión: ${data.launch_success ? "Sí" : "No"}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    `;
    const modal = new bootstrap.Modal(
      document.getElementById("staticBackdrop")
    );
    modal.show();
  } catch (error) {
    console.log(`¡Ou shit, an ${error}`);
  }
}
