// Holiday Extras - Trust Bar Component
function renderTrustBar() {
  var el = document.getElementById('hx-trust-bar');
  if (!el) return;
  el.innerHTML = '<div class="trust-bar"><div class="trust-inner">' +
    '<div class="trust-stat"><div class="num">8M+</div><div class="lbl">Customers a year</div></div>' +
    '<div class="trust-stat"><div class="num">40+</div><div class="lbl">Years of expertise</div></div>' +
    '<div class="trust-stat"><div class="num">FREE</div><div class="lbl">Cancellation</div></div>' +
    '<div class="trust-stat"><div class="num">4.5&#9733;</div><div class="lbl">Average rating</div></div>' +
    '</div></div>';
}
document.addEventListener('DOMContentLoaded', renderTrustBar);
