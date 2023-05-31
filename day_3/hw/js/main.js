// function to get F1 racer data
const getData = async (season, round) => {
    try {
      const response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`);
      return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  
  // Create a constant to hold the DOM Elements
  const DOM_Elements = {
    rangerList: '.ranger-list'
  };
  
  // Creation of the Ragner List HTML
  const createList = (position, points, wins, firstName, lastName, origin) => {
    const html = `<div class="driver-card mt-3 mb-3" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Position: ${position}</li>
        <li class="list-group-item">Points: ${points}</li>
        <li class="list-group-item">Wins: ${wins}</li>
        <li class="list-group-item">Driver: ${firstName} ${lastName}</li>
        <li class="list-group-item">Origin: ${origin}</li>
      </ul>
    </div>`;
    document.querySelector(DOM_Elements.rangerList).insertAdjacentHTML('beforeend', html);
  };
  
  const loadData = async (season, round) => {
    clearData();
    const racers = await getData(season, round);
  
    racers.forEach(racer => {
      createList(
        racer.position,
        racer.points,
        racer.wins,
        racer.Driver.givenName,
        racer.Driver.familyName,
        racer.Driver.nationality
      );
    });
  };
  
  const clearData = () => {
    document.querySelector(DOM_Elements.rangerList).innerHTML = '';
  };
  
// Event listener for "Get Data" button
document.querySelector('button[type="submit"]').addEventListener('click', async function (event) {
    event.preventDefault();
    const season = document.getElementById('season').value;
    const round = document.getElementById('round').value;
    loadData(season, round);
  });
  
  // Event listener for "Clear Data" button
  document.querySelector('button[type="button"]').addEventListener('click', function (event) {
    event.preventDefault();
    clearData();
  });
  