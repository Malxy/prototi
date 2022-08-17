



// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

      
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 46.568755703959496, lng: 26.91262871696031 },
    zoom: 20,
    panControl: false,
    streetViewControl: false,
    overlayMapTypes:false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
}

window.initMap = initMap;