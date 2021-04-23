var map = L.map('map').setView([37.8, -96], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://clearbit.com">College Logos provided by Clearbit</a>'
}).addTo(map);


colleges = [

    {
        name: "DePaul University",
        lat: 41.877618,
        lon: -87.62724,
        url: "https://www.depaul.edu",
        announcement_url: "https://resources.depaul.edu/newsline/sections/campus-and-community/Pages/COVID-19-vaccine-April-21.aspx"
    },

    {
        name: "Loyola University Chicago",
        lat: 42.000765,
        lon: -87.656872,
        url: "https://www.luc.edu",
        announcement_url: "https://www.luc.edu/coronavirus/vaccine/"
    },

    {
        name: "Claremont McKenna College",
        lat: 34.102154,
        lon: -117.711188,
        url: "www.cmc.edu",
        announcement_url: "https://tsl.news/cmc-mandates-vaccines-for-fall-2021/"
    },

    {
        name: "Pitzer College",
        lat: 34.104107,
        lon: -117.706675,
        url: "https://www.pitzer.edu",
        announcement_url: "https://www.pitzer.edu/emergency/2021/04/13/covid-19-vaccine-update-for-students/"
    },

    {
        name: "Pomona College",
        lat: 34.099027,
        lon: -117.714556,
        url: "www.pomona.edu",
        announcement_url: "https://www.pomona.edu/coronavirus/updates/posts/summer-planning-vaccines-and-pandemic-related-assistance-students-41421"
    },

    {
        name: "Samuel Merritt University",
        lat: 37.82029,
        lon: -122.266331,
        url: "www.samuelmerritt.edu",
        announcement_url: "https://www.samuelmerritt.edu/coronavirus"
    },

    {
        name: "University of San Diego",
        lat: 32.770816,
        lon: -117.192073,
        url: "www.sandiego.edu",
        announcement_url: "https://www.sandiego.edu/onward/documents/emails/2021/mandatory-vaccinations-2021-04-19.html"
    },

    {
        name: "Fort Lewis College",
        lat: 37.275939,
        lon: -107.867422,
        url: "fortlewis.edu/",
        announcement_url: "https://www.fortlewis.edu/life-at-flc/health-safety/coronavirus-covid-19/covid-19-updates"
    },

    {
        name: "University of Denver",
        lat: 39.678005,
        lon: -104.963259,
        url: "www.du.edu",
        announcement_url: "https://www.du.edu/news/covid-19-vaccine-required-students-fall-2021-term"
    },

    {
        name: "Wesleyan University",
        lat: 41.554665,
        lon: -72.657146,
        url: "www.wesleyan.edu",
        announcement_url: "https://newsletter.blogs.wesleyan.edu/2021/04/16/wesleyan-to-require-students-to-be-vaccinated-for-the-fall-2021-semester/"
    },

    {
        name: "Yale University",
        lat: 41.311158,
        lon: -72.926688,
        url: "https://www.yale.edu",
        announcement_url: "https://yaledailynews.com/blog/2021/04/19/yale-to-require-covid-vaccines-for-students-this-fall-considering-mandate-for-faculty-staff/"
    },

    {
        name: "American University",
        lat: 38.936005,
        lon: -77.088875,
        url: "WWW.AMERICAN.EDU",
        announcement_url: "https://www.american.edu/ocl/healthcenter/covid-19-vaccine-faq.cfm"
    },

    {
        name: "George Washington University",
        lat: 38.89923,
        lon: -77.048363,
        url: "https://www.gwu.edu",
        announcement_url: "https://coronavirus.gwu.edu/vaccine"
    },

    {
        name: "Georgetown University",
        lat: 38.908809,
        lon: -77.073463,
        url: "www.georgetown.edu",
        announcement_url: "https://president.georgetown.edu/vaccine-update-for-students-april-2021/"
    },

    {
        name: "Trinity Washington University",
        lat: 38.927398,
        lon: -77.004261,
        url: "www.trinitydc.edu",
        announcement_url: "https://discover.trinitydc.edu/news/important-covid-19-vaccine-update/"
    },

    {
        name: "Nova Southeastern University",
        lat: 26.079337,
        lon: -80.24248,
        url: "www.nova.edu",
        announcement_url: "https://www.tampabay.com/news/education/2021/04/02/nova-southeastern-university-requires-covid-vaccines-before-fall-classes/"
    },

    {
        name: "Clark Atlanta University",
        lat: 33.747628,
        lon: -84.412584,
        url: "www.cau.edu",
        announcement_url: "https://www.cau.edu/news/2021/04/AUCC-Schools-Vaccination-Statement-From-Member-Presidents.html"
    },

    {
        name: "Morehouse College",
        lat: 33.745982,
        lon: -84.414917,
        url: "www.morehouse.edu",
        announcement_url: "https://www.cau.edu/news/2021/04/AUCC-Schools-Vaccination-Statement-From-Member-Presidents.html"
    },

    {
        name: "Morehouse School of Medicine",
        lat: 33.742888,
        lon: -84.41186,
        url: "www.msm.edu",
        announcement_url: "https://www.cau.edu/news/2021/04/AUCC-Schools-Vaccination-Statement-From-Member-Presidents.html"
    },

    {
        name: "Spelman College",
        lat: 33.745279,
        lon: -84.411527,
        url: "www.spelman.edu",
        announcement_url: "https://www.cau.edu/news/2021/04/AUCC-Schools-Vaccination-Statement-From-Member-Presidents.html"
    },

    {
        name: "Emory University",
        lat: 33.790183,
        lon: -84.325512,
        url: "www.emory.edu",
        announcement_url: "https://www.emory.edu/forward/covid-19/vaccine.html"
    },

    {
        name: "Columbia College Chicago",
        lat: 41.874261,
        lon: -87.624667,
        url: "www.colum.edu",
        announcement_url: "https://www.colum.edu/reopening/vaccinations"
    },

    {
        name: "Holy Cross College",
        lat: 41.698996,
        lon: -86.253822,
        url: "www.hcc-nd.edu",
        announcement_url: "https://ndsmcobserver.com/2021/04/holy-cross-college-to-require-covid-19-vaccination-for-student-enrollment-in-2021-2022-academic-year/"
    },

    {
        name: "Saint Mary's College",
        lat: 41.707274,
        lon: -86.256947,
        url: "www.saintmarys.edu",
        announcement_url: "https://ndsmcobserver.com/2021/04/saint-marys-to-require-covid-19-vaccination-for-student-enrollment-in-2021-2022-academic-year/"
    },

    {
        name: "University of Notre Dame",
        lat: 41.703058,
        lon: -86.238959,
        url: "www.nd.edu",
        announcement_url: "https://news.nd.edu/news/notre-dame-to-require-students-to-be-vaccinated-for-covid-19-beginning-with-fall-2021-semester/"
    },

    {
        name: "Grinnell College",
        lat: 41.747952,
        lon: -92.722094,
        url: "www.grinnell.edu",
        announcement_url: "https://www.grinnell.edu/news/covid-19-vaccination-required-students-beginning-fall-2021"
    },

    {
        name: "Bowdoin College",
        lat: 43.907134,
        lon: -69.963942,
        url: "https://www.bowdoin.edu/",
        announcement_url: "https://www.pressherald.com/2021/04/16/bowdoin-will-require-covid-19-vaccinations-for-the-fall/"
    },

    {
        name: "College of the Atlantic",
        lat: 44.395258,
        lon: -68.221517,
        url: "www.coa.edu",
        announcement_url: "https://www.coa.edu/live/news/1849-coa-to-require-covid-19-vaccine-for-fall-semester"
    },

    {
        name: "Johns Hopkins University",
        lat: 39.328977,
        lon: -76.621595,
        url: "www.jhu.edu",
        announcement_url: "https://hub.jhu.edu/2021/04/09/fall-return-to-campus-planning/"
    },

    {
        name: "Assumption College",
        lat: 42.294226,
        lon: -71.828991,
        url: "https://www.assumption.edu",
        announcement_url: "https://www.assumption.edu/news-and-events/news/fall-2021-easing-safety-protocols"
    },

    {
        name: "Boston University",
        lat: 42.351118,
        lon: -71.107942,
        url: "www.bu.edu",
        announcement_url: "https://www.bu.edu/articles/2021/bu-will-require-students-to-get-covid-19-vaccine-for-fall-semester/"
    },

    {
        name: "Emerson College",
        lat: 42.352202,
        lon: -71.065384,
        url: "www.emerson.edu",
        announcement_url: "https://www.wwlp.com/news/state-politics/emerson-college-to-require-vaccination-for-students-returning-for-fall-term/"
    },

    {
        name: "Lasell University",
        lat: 42.342148,
        lon: -71.24347,
        url: "www.lasell.edu/",
        announcement_url: "https://www.lasell.edu/covid-19-information.html"
    },

    {
        name: "Northeastern University",
        lat: 42.339992,
        lon: -71.088782,
        url: "www.northeastern.edu",
        announcement_url: "https://news.northeastern.edu/2021/04/06/northeastern-to-require-covid-19-vaccinations-for-all-students-this-fall/"
    },

    {
        name: "Smith College",
        lat: 42.318111,
        lon: -72.638097,
        url: "www.smith.edu",
        announcement_url: "https://www.smith.edu/news/2021-student-vaccination-requirement"
    },

    {
        name: "Lawrence Technological University",
        lat: 42.474072,
        lon: -83.25003,
        url: "www.ltu.edu",
        announcement_url: "https://www.theoaklandpress.com/local-news/ltu-to-require-vaccines-for-students-in-dorms-or-participating-in-sports/article_09eabb00-9c7b-11eb-860f-ef0a7bc90e03.html"
    },

    {
        name: "Oakland University",
        lat: 42.674573,
        lon: -83.216418,
        url: "www.oakland.edu",
        announcement_url: "https://www.oakland.edu/return-to-campus/covid-19-vaccines/"
    },

    {
        name: "Dartmouth College",
        lat: 43.704115,
        lon: -72.289949,
        url: "www.dartmouth.edu",
        announcement_url: "https://www.wmur.com/article/dartmouth-college-to-require-student-covid-vaccinatations/36133373"
    },

    {
        name: "Fairleigh Dickinson University-Florham Campus",
        lat: 40.774498,
        lon: -74.432121,
        url: "www.fdu.edu",
        announcement_url: "https://www.fdu.edu/coronavirus-update/"
    },

    {
        name: "Princeton University",
        lat: 40.348732,
        lon: -74.659365,
        url: "www.princeton.edu",
        announcement_url: "https://www.princeton.edu/news/2021/04/20/university-will-require-all-undergraduate-and-graduate-students-receive-covid-19"
    },

    {
        name: "Rutgers University-Newark",
        lat: 40.739122,
        lon: -74.175809,
        url: "https://www.newark.rutgers.edu",
        announcement_url: "https://www.rutgers.edu/news/rutgers-require-covid-19-vaccine-students"
    },

    {
        name: "Barnard College",
        lat: 40.810098,
        lon: -73.963346,
        url: "www.barnard.edu",
        announcement_url: "https://barnard.edu/news/student-vaccination-requirement-fall-2021"
    },

    {
        name: "Columbia University in the City of New York",
        lat: 40.808286,
        lon: -73.961885,
        url: "www.columbia.edu",
        announcement_url: "https://covid19.columbia.edu/news/fall-2021-vaccine-policy-update"
    },

    {
        name: "Cornell University",
        lat: 42.4472,
        lon: -76.483084,
        url: "www.cornell.edu",
        announcement_url: "https://statements.cornell.edu/2021/20210402-vaccination-fall-instruction.cfm"
    },

    {
        name: "Fordham University",
        lat: 40.859354,
        lon: -73.882705,
        url: "www.fordham.edu",
        announcement_url: "https://news.fordham.edu/uncategorized/university-covid-19-vaccination-policy/"
    },

    {
        name: "Ithaca College",
        lat: 42.422154,
        lon: -76.494136,
        url: "www.ithaca.edu",
        announcement_url: "https://ithacavoice.com/2021/04/ithaca-college-will-also-require-covid-19-vaccinations-for-students-returning-in-fall-2021/"
    },

    {
        name: "New York University",
        lat: 40.729452,
        lon: -73.997264,
        url: "www.nyu.edu",
        announcement_url: "https://www.nyu.edu/life/safety-health-wellness/coronavirus-information/safety-and-health/covid-19-vaccine/vaccine-questions-and-support/vaccine-requirement.html#required"
    },

    {
        name: "Rensselaer Polytechnic Institute",
        lat: 42.729978,
        lon: -73.676646,
        url: "www.rpi.edu",
        announcement_url: "https://www.timesunion.com/news/article/RPI-requires-vaccinations-in-person-classes-for-16107307.php"
    },

    {
        name: "St John's University-New York",
        lat: 40.722523,
        lon: -73.796104,
        url: "www.stjohns.edu",
        announcement_url: "https://www.stjohns.edu/about/news/announcements/covid-19-vaccination-requirement-fall-2021"
    },

    {
        name: "Syracuse University",
        lat: 43.040176,
        lon: -76.136975,
        url: "https://www.syracuse.edu",
        announcement_url: "https://www.syracuse.com/coronavirus/2021/04/syracuse-university-makes-covid-19-vaccinations-mandatory-for-students-staff.html"
    },

    {
        name: "Vassar College",
        lat: 41.686895,
        lon: -73.895088,
        url: "www.vassar.edu",
        announcement_url: "http://info.vassar.edu/news/announcements/2021/vassar-fall-2021-return-plans.html"
    },

    {
        name: "Duke University",
        lat: 36.001135,
        lon: -78.937624,
        url: "WWW.DUKE.EDU",
        announcement_url: "https://www.dukechronicle.com/article/2021/04/duke-university-vaccines-required-fall"
    },

    {
        name: "Wake Forest University",
        lat: 36.133609,
        lon: -80.277446,
        url: "www.wfu.edu",
        announcement_url: "https://ourwayforward.wfu.edu/2021/04/covid-19-update-intent-to-require-vaccination-current-students/"
    },

    {
        name: "Cleveland State University",
        lat: 41.502281,
        lon: -81.674355,
        url: "www.csuohio.edu/",
        announcement_url: "https://www.csuohio.edu/news/cleveland-state-university-welcome-all-students-back-campus-for-fall-2021"
    },

    {
        name: "Kenyon College",
        lat: 40.374408,
        lon: -82.397977,
        url: "https://www.kenyon.edu/",
        announcement_url: "https://www.kenyon.edu/news/archive/covid-19-update-vaccination-required-for-students/"
    },

    {
        name: "Lewis & Clark College",
        lat: 45.450882,
        lon: -122.669137,
        url: "www.lclark.edu/",
        announcement_url: "https://www.kgw.com/article/news/local/lewis-clark-college-to-require-students-show-proof-of-covid-vaccination/283-3bc931f5-ad22-4bbb-9b51-6711e5a4b772"
    },

    {
        name: "Drexel University",
        lat: 39.955217,
        lon: -75.190051,
        url: "https://drexel.edu",
        announcement_url: "https://drexel.edu/coronavirus/health-safety/COVID-19-vaccination/"
    },

    {
        name: "Lehigh University",
        lat: 40.606822,
        lon: -75.380236,
        url: "www.lehigh.edu",
        announcement_url: "https://www2.lehigh.edu/news/42121-fall-2021-plans-and-covid-vaccines"
    },

    {
        name: "Brown University",
        lat: 41.82617,
        lon: -71.40385,
        url: "www.brown.edu",
        announcement_url: "https://www.brown.edu/news/2021-04-06/fall-2021"
    },

    {
        name: "Saint Edward's University",
        lat: 30.229618,
        lon: -97.754998,
        url: "https://www.stedwards.edu",
        announcement_url: "https://www.stedwards.edu/healthy-hilltop"
    },

    {
        name: "Bennington College",
        lat: 42.919547,
        lon: -73.237799,
        url: "www.bennington.edu",
        announcement_url: "https://www.bennington.edu/news-and-features/monday-message-president-walker%E2%80%94january-25-2021"
    },

    {
        name: "Seattle University",
        lat: 47.608859,
        lon: -122.318851,
        url: "www.seattleu.edu",
        announcement_url: "https://www.seattleu.edu/coronavirus/covid-19-vaccinations-required-for-students-attending-su-in-fall-2021.php"
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