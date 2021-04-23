import os
import csv
import jinja2

from pathlib import Path

from collections import namedtuple

class College:
    def __init__(self, name, url, lat, lon):
        self.name = name
        self.url = url
        self.lat = lat
        self.lon = lon
        self.announcement_url = None

if __name__ == '__main__':
    this_file = Path(os.path.abspath(__file__))
    colleges_csv = os.path.join(this_file.parent, 'output', 'colleges.csv')
    if not os.path.exists(colleges_csv):
        raise ValueError('Cannot find colleges.csv - run download_all_data.py first')

    colleges_by_id = {}
    with open(colleges_csv, 'r') as colleges_file:
        reader = csv.DictReader(colleges_file)
        for row in reader:
            if not row['Lat'] or not row['Lon']:
                continue
            colleges_by_id[int(row['Id'])] = College(name=row['Name'], url=row['Url'], lat=float(row['Lat']), lon=float(row['Lon']))

    announcements_csv = os.path.join(this_file.parent, 'announcements.csv')
    if not os.path.exists(colleges_csv):
        raise ValueError('Cannot find announcements.csv')

    js_jinja_file = os.path.join(this_file.parent.parent, 'js', 'campus-vacc-main.js.jinja')
    if not os.path.exists(js_jinja_file):
        raise ValueError('Cannot find campus-vacc-main.js.jinja')

    js_file_template = jinja2.Template(open(js_jinja_file, 'r').read())

    colleges = []
    with open(announcements_csv, 'r') as announcements_file:
        reader = csv.DictReader(announcements_file)
        for row in reader:
            college = colleges_by_id.get(int(row['Id']))
            if not college:
                print('Cannot find college with id {}'.format(row['Id']))

            college.announcement_url = row['Url']
            colleges.append(college)

    js_file_path = os.path.join(this_file.parent.parent, 'js', 'campus-vacc-main.js')
    with open(js_file_path, 'w') as js_file:
        js_file.write(js_file_template.render(colleges=colleges))
