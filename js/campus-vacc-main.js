var map = L.map('map').setView([37.8, -96], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://clearbit.com">College Logos provided by Clearbit</a>'
}).addTo(map);


colleges = [

    {
        name: 'DePaul University',
        lat: 41.877618,
        lon: -87.62724,
        url: 'https://www.depaul.edu',
        announcement_url: 'https://resources.depaul.edu/newsline/sections/campus-and-community/Pages/COVID-19-vaccine-April-21.aspx'
    },

    {
        name: 'Loyola University Chicago',
        lat: 42.000765,
        lon: -87.656872,
        url: 'https://www.luc.edu',
        announcement_url: 'https://www.luc.edu/coronavirus/vaccine/'
    },

    {
        name: 'Claremont McKenna College',
        lat: 34.102154,
        lon: -117.711188,
        url: 'www.cmc.edu',
        announcement_url: 'https://tsl.news/cmc-mandates-vaccines-for-fall-2021/'
    },

    {
        name: 'Pitzer College',
        lat: 34.104107,
        lon: -117.706675,
        url: 'https://www.pitzer.edu',
        announcement_url: 'https://www.pitzer.edu/emergency/2021/04/13/covid-19-vaccine-update-for-students/'
    },

    {
        name: 'Pomona College',
        lat: 34.099027,
        lon: -117.714556,
        url: 'www.pomona.edu',
        announcement_url: 'https://www.pomona.edu/coronavirus/updates/posts/summer-planning-vaccines-and-pandemic-related-assistance-students-41421'
    },

    {
        name: 'Samuel Merritt University',
        lat: 37.82029,
        lon: -122.266331,
        url: 'www.samuelmerritt.edu',
        announcement_url: 'https://www.samuelmerritt.edu/coronavirus'
    },

    {
        name: 'University of San Diego',
        lat: 32.770816,
        lon: -117.192073,
        url: 'www.sandiego.edu',
        announcement_url: 'https://www.sandiego.edu/onward/documents/emails/2021/mandatory-vaccinations-2021-04-19.html'
    },

    {
        name: 'Fort Lewis College',
        lat: 37.275939,
        lon: -107.867422,
        url: 'fortlewis.edu/',
        announcement_url: 'https://www.fortlewis.edu/life-at-flc/health-safety/coronavirus-covid-19/covid-19-updates'
    },

    {
        name: 'University of Denver',
        lat: 39.678005,
        lon: -104.963259,
        url: 'www.du.edu',
        announcement_url: 'https://www.du.edu/news/covid-19-vaccine-required-students-fall-2021-term'
    },

    {
        name: 'Wesleyan University',
        lat: 41.554665,
        lon: -72.657146,
        url: 'www.wesleyan.edu',
        announcement_url: 'https://newsletter.blogs.wesleyan.edu/2021/04/16/wesleyan-to-require-students-to-be-vaccinated-for-the-fall-2021-semester/'
    },

    {
        name: 'Yale University',
        lat: 41.311158,
        lon: -72.926688,
        url: 'https://www.yale.edu',
        announcement_url: 'https://yaledailynews.com/blog/2021/04/19/yale-to-require-covid-vaccines-for-students-this-fall-considering-mandate-for-faculty-staff/'
    }

]

var markers = L.markerClusterGroup();

let removeHttp = (url) => url.replace('https://', '').replace('http://', '')

colleges.forEach(college => {
    var icon = L.divIcon({
        className: 'school-icon',
        html: `<img class="school-icon" src="https://logo.clearbit.com/${removeHttp(college.url)}" />`,
        iconSize: [20, 20]
    });
    
    let newMarker = L.marker([college.lat, college.lon], {icon: icon});
    newMarker.bindPopup(`<div class="school-popup"><h4>${college.name}</h4><a href="${college.announcement_url}" target="_blank">Announcement</a><br> <img src="https://logo.clearbit.com/${removeHttp(college.url)}" /></div>`)
    markers.addLayer(newMarker);
})

map.addLayer(markers);