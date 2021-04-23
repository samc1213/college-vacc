# college-vacc
Documenting And Mapping All U.S. Colleges and Universities Requiring a COVID Vaccine for Fall 2021

# Background
With so many schools requiring a COVID vaccine for students for Fall 2021, it seems useful to have a central store of this information. This repository
contains CSVs with data, as well as a [leaflet](https://leafletjs.com/) [map](js/campus-vacc-main.js) that shows all of the colleges.

# Data Sources
* The list of colleges and their urls and location are from the [U.S. Department of Education's College Scorecard API](https://collegescorecard.ed.gov/data/documentation/)
* The base map is from [Open Street Map](https://www.openstreetmap.org/)
* The college logos are provided by [Clearbit](https://clearbit.com/logo)
* The list of colleges requiring a vaccine is manually maintained and *not* guaranteed to be correct at all. However, [Best Colleges](https://www.bestcolleges.com/blog/list-of-colleges-that-require-covid-19-vaccine/) was very helpful in populating it

# Contributing
If a new school announces they will be requiring a vaccine, first find it in the list of [colleges](scripts/output/colleges.csv).
Then, add a link to the announcement (preferably from the University) that students will be required (with exceptions)
to have a COVID vaccine for the fall of 2021 to the `CovidAnnouncement` column.

# Map of Data
[here](https://samc1213.github.io/2020/04/22/vaccine-college-requirement/)
