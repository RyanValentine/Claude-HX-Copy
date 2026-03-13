// Holiday Extras Search Form Handler
// Maps airport names to HX codes
const AIRPORT_CODES = {
  'gatwick': 'LGW', 'heathrow': 'LHR', 'manchester': 'MAN',
  'stansted': 'STN', 'luton': 'LTN', 'birmingham': 'BHX',
  'east midlands': 'EMA', 'bristol': 'BRS', 'liverpool': 'LPL',
  'belfast': 'BFS', 'leeds bradford': 'LBA', 'edinburgh': 'EDI',
  'glasgow': 'GLA', 'newcastle': 'NCL', 'cardiff': 'CWL'
};

// Maps product types to HX selectProduct codes
const PRODUCT_CODES = {
  'parking': 'cp', 'airport parking': 'cp',
  'hotels': 'ho', 'airport hotels': 'ho',
  'lounges': 'lo', 'airport lounges': 'lo'
};

function getAirportCode(val) {
  if (!val) return 'LGW';
  var lower = val.toLowerCase().trim();
  for (var key in AIRPORT_CODES) {
    if (lower.indexOf(key) !== -1) return AIRPORT_CODES[key];
  }
  return val.toUpperCase().substring(0, 3);
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

  // Determine product type from page or form
  var page = window.location.pathname;
  var product = 'cp'; // default to parking
  if (page.indexOf('hotel') !== -1 || (vals['product'] && vals['product'].toLowerCase().indexOf('hotel') !== -1)) {
    product = 'ho';
  } else if (page.indexOf('lounge') !== -1 || (vals['product'] && vals['product'].toLowerCase().indexOf('lounge') !== -1)) {
    product = 'lo';
  } else if (vals['product']) {
    product = PRODUCT_CODES[vals['product'].toLowerCase()] || 'cp';
  }

  var airport = getAirportCode(vals['airport'] || 'Gatwick');
  var terminal = vals['terminal'] || '';

  // Build the redirect URL
  var params = {
    agent: 'WY992',
    ppts: '',
    customer_ref: '',
    lang: 'en',
    launch_id: 'HD',
    adults: vals['guests'] || '2',
    depart: airport,
    terminal: terminal,
    arrive: '',
    flight: ''
  };

  // Handle dates based on product type
  if (product === 'cp') {
    params['in'] = vals['pick-up date'] || vals['date'] || '';
    params['out'] = vals['drop-off date'] || vals['date'] || '';
    params.park_from = '12:00';
    params.park_to = '13:00';
    params.filter_meetandgreet = '';
    params.filter_parkandride = '';
    params.children = '0';
    params.infants = '0';
    params.redirectReferal = 'carpark';
    params.from_categories = 'true';
  } else if (product === 'ho') {
    params['in'] = vals['check-in date'] || vals['date'] || '';
    params['out'] = '';
    params.rooms = vals['rooms'] ? vals['rooms'].replace(/[^0-9]/g, '') : '1';
    params.redirectReferal = 'hotel';
    params.from_categories = 'true';
  } else if (product === 'lo') {
    params['in'] = vals['date'] || '';
    params['out'] = '';
    params.redirectReferal = 'lounge';
    params.from_categories = 'true';
  }

  var qs = Object.keys(params).map(function(k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
  }).join('&');

  var url = 'https://www.holidayextras.com/static/?selectProduct=' + product + '&#/categories?' + qs;
  window.open(url, '_blank');
}

// Attach to all search buttons on page load
document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.search-box button');
  buttons.forEach(function(btn) {
    btn.addEventListener('click', handleSearch);
  });
});
