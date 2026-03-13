// Holiday Extras - Hotel Search Form Component
function renderSearchHotels() {
  var el = document.getElementById('hx-search-form');
  if (!el) return;
  el.innerHTML = '<div class="search-box">' +
    '<label>Airport</label>' +
    '<input type="text" placeholder="e.g. Gatwick" value="Gatwick">' +
    '<label>Check-in date</label>' +
    '<input type="date">' +
    '<label>Rooms</label>' +
    '<select><option>1 Room</option><option>2 Rooms</option><option>3 Rooms</option></select>' +
    '<button>Compare hotels</button>' +
    '</div>';
}
document.addEventListener('DOMContentLoaded', renderSearchHotels);
