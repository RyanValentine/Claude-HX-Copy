// Holiday Extras - Lounge Search Form Component
function renderSearchLounges() {
  var el = document.getElementById('hx-search-form');
  if (!el) return;
  el.innerHTML = '<div class="search-box">' +
    '<label>Airport</label>' +
    '<input type="text" placeholder="e.g. Gatwick" value="Gatwick">' +
    '<label>Terminal</label>' +
    '<select><option>North Terminal</option><option>South Terminal</option></select>' +
    '<label>Date</label>' +
    '<input type="date">' +
    '<label>Guests</label>' +
    '<input type="number" value="2" min="1">' +
    '<button>Find lounges</button>' +
    '</div>';
}
document.addEventListener('DOMContentLoaded', renderSearchLounges);
