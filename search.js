// Holiday Extras Search Form Handler v2
var AIRPORT_CODES = {
  'gatwick': 'LGW', 'heathrow': 'LHR', 'manchester': 'MAN',
  'stansted': 'STN', 'luton': 'LTN', 'birmingham': 'BHX',
  'east midlands': 'EMA', 'bristol': 'BRS', 'liverpool': 'LPL',
  'belfast': 'BFS', 'leeds bradford': 'LBA', 'edinburgh': 'EDI',
  'glasgow': 'GLA', 'newcastle': 'NCL', 'cardiff': 'CWL'
};

function getAirportCode(val) {
  if (!val) return 'LGW';
  var lower = val.toLowerCase().trim();
  for (var key in AIRPORT_CODES) {
    if (lower.indexOf(key) !== -1) return AIRPORT_CODES[key];
  }
  return val.toUpperCase().substring(0, 3);
}

function getProduct() {
  var page = window.location.pathname;
  if (page.indexOf('hotel') !== -1) return 'ho';
  if (page.indexOf('lounge') !== -1) return 'lo';
  return 'cp';
}

function buildParkingUrl(airport, terminal, dropoff, pickup) {
  var params = [
    'agent=WY992', 'ppts=', 'customer_ref=', 'lang=en', 'launch_id=HD',
    'adults=2', 'depart=' + airport, 'terminal=' + (terminal || ''),
    'arrive=', 'flight=',
    'in=' + (pickup || dropoff || ''),
    'out=' + (dropoff || ''),
    'park_from=12%3A00', 'park_to=13%3A00',
    'filter_meetandgreet=', 'filter_parkandride=',
    'children=0', 'infants=0',
    'redirectReferal=carpark', 'from_categories=true'
  ];
  return 'https://www.holidayextras.com/static/?selectProduct=cp&#/categories?' + params.join('&');
}

function buildHotelUrl(airport, terminal, checkin) {
  var params = [
    'agent=WY992', 'ppts=', 'customer_ref=', 'lang=en', 'launch_id=HD',
    'depart=' + airport, 'terminal=' + (terminal || ''),
    'arrive=', 'flight=',
    'out=' + (checkin || ''),
    'stay=' + (checkin || ''),
    'room_1=D20', 'room_2=',
    'sortCriterion=', 'sortOrder='
  ];
  return 'https://www.holidayextras.com/static/?selectProduct=ho&#/hotel?' + params.join('&');
}

function buildLoungeUrl(airport, terminal, date, adults) {
  var fromDT = (date || '') + ' 12:00:00';
  var params = [
    'agent=WY992', 'ppts=', 'customer_ref=', 'lang=en', 'launch_id=HD',
    'adults=' + (adults || '2'),
    'children=0', 'infants=0',
    'from=' + encodeURIComponent(fromDT),
    'depart=' + airport,
    'terminal=' + (terminal || ''),
    'flight='
  ];
  return 'https://www.holidayextras.com/static/?selectProduct=lo&#/lounge?' + params.join('&');
}

function handleSearch(e) {
  e.preventDefault();
  var box = e.target.closest('.search-box');
  if (!box) return;

  var inputs = box.querySelectorAll('input, select');
  var vals = {};
  inputs.forEach(function(el) {
    var label = el.previousElementSibling;
    var key = label ? label.textContent.toLowerCase().trim() : '';
    vals[key] = el.value;
  });

  var product = getProduct();

  if (vals['product']) {
    var p = vals['product'].toLowerCase();
    if (p.indexOf('hotel') !== -1) product = 'ho';
    else if (p.indexOf('lounge') !== -1) product = 'lo';
    else product = 'cp';
  }

  var airport = getAirportCode(vals['airport'] || 'Gatwick');
  var terminal = vals['terminal'] || '';
  var url = '';

  if (product === 'ho') {
    url = buildHotelUrl(airport, terminal, vals['check-in date'] || vals['date'] || '');
  } else if (product === 'lo') {
    url = buildLoungeUrl(airport, terminal, vals['date'] || '', vals['guests'] || '2');
  } else {
    url = buildParkingUrl(airport, terminal, vals['drop-off date'] || vals['date'] || '', vals['pick-up date'] || vals['date'] || '');
  }

  window.location.href = url;
}

document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.search-box button');
  buttons.forEach(function(btn) {
    btn.addEventListener('click', handleSearch);
  });
});
