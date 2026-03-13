// Holiday Extras - Header Component
function renderHeader() {
  var el = document.getElementById('hx-header');
  if (!el) return;
  el.innerHTML = '<nav class="nav"><div class="nav-inner">' +
    '<a href="index.html" class="logo"><div class="logo-circle">HX</div><span>Holiday Extras</span></a>' +
    '<div class="nav-links">' +
    '<a href="gatwick-airport-parking.html">Parking</a>' +
    '<a href="gatwick-airport-hotels.html">Hotels</a>' +
    '<a href="gatwick-airport-lounges.html">Lounges</a>' +
    '<a href="#" class="yellow">Support</a>' +
    '<a href="#">Log in</a>' +
    '</div></div></nav>';
}
document.addEventListener('DOMContentLoaded', renderHeader);
