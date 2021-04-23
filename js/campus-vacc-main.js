var map = L.map('map').setView([37.8, -96], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://clearbit.com">College Logos provided by Clearbit</a>'
}).addTo(map);


var markers = L.markerClusterGroup();

String.prototype.splitCSV = function() {
    var matches = this.match(/(\s*"[^"]+"\s*|\s*[^,]+|,)(?=,|$)/g);
    for (var n = 0; n < matches.length; ++n) {
        matches[n] = matches[n].trim();
        if (matches[n] == ',') matches[n] = '';
    }
    if (this[0] == ',') matches.unshift("");
    return matches;
}

fetch('https://raw.githubusercontent.com/samc1213/college-vacc/main/scripts/output/colleges.csv')
.then(r => r.text()).then(text => {
    text.split(/\r?\n/).slice(1).forEach(line => {
        let lineSplit = line.splitCSV();
        if (!lineSplit[5] || !lineSplit[6]) {
            return;
        }
        let id = parseInt(lineSplit[0]);
        let announcement_url = lineSplit[7];
        if (!announcement_url) {
            return;
        }
        let name = lineSplit[1];
        let url = lineSplit[2];
        let lat = parseFloat(lineSplit[5]);
        let lon = parseFloat(lineSplit[6]);

        var icon = L.divIcon({
            className: 'school-icon',
            html: `<img class="school-icon" src="https://logo.clearbit.com/${url}" />`,
            iconSize: [20, 20]
        });
        
        let newMarker = L.marker([lat, lon], {icon: icon});
        newMarker.bindPopup(`<div class="school-popup"><h4>${name}</h4><a href="${announcement_url}" target="_blank">Announcement</a><br> <img src="https://logo.clearbit.com/${url}" /></div>`)
        markers.addLayer(newMarker);
    })
});

map.addLayer(markers);
