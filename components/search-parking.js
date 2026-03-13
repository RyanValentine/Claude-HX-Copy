// Holiday Extras - Parking Search Form Component
function renderSearchParking() {
  var el = document.getElementById('hx-search-form');
  if (!el) return;
  el.innerHTML = '<div class="search-box">' +
    '<label>Airport</label>' +
    '<input type="text" placeholder="e.g. Gatwick" value="Gatwick">' +
    '<label>Drop-off date</label>' +
    '<input type="date">' +
    '<label>Pick-up date</label>' +
    '<input type="date">' +
    '<button>Compare parking</button>' +
    '</div>';
}
document.addEventListener('DOMContentLoaded', renderSearchParking);
