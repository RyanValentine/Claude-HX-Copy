// Holiday Extras - Footer Component
function renderFooter() {
  var el = document.getElementById('hx-footer');
  if (!el) return;
  el.innerHTML = '<footer><div class="footer-inner"><div class="footer-cols">' +
    '<div class="footer-col"><div class="title">Products</div>' +
    '<div><a href="gatwick-airport-parking.html">Airport Parking</a></div>' +
    '<div><a href="gatwick-airport-hotels.html">Airport Hotels</a></div>' +
    '<div><a href="gatwick-airport-lounges.html">Airport Lounges</a></div>' +
    '<div>Airport Transfers</div><div>Travel Insurance</div></div>' +
    '<div class="footer-col"><div class="title">Popular Airports</div>' +
    '<div>Gatwick</div><div>Heathrow</div><div>Manchester</div><div>Stansted</div><div>Luton</div></div>' +
    '<div class="footer-col"><div class="title">Help</div>' +
    '<div>Support Centre</div><div>Manage Booking</div><div>Contact Us</div><div>FAQs</div></div>' +
    '<div class="footer-col"><div class="title">Company</div>' +
    '<div>About Us</div><div>Careers</div><div>Press</div><div>Blog</div></div>' +
    '</div><div class="footer-bottom">' +
    '<span>&copy; 2026 Holiday Extras Ltd. All rights reserved.</span>' +
    '<span>Privacy Policy &middot; Cookie Policy &middot; Terms &amp; Conditions</span>' +
    '</div></div></footer>';
}
document.addEventListener('DOMContentLoaded', renderFooter);
