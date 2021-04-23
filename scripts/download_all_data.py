from csv import writer

import os
import requests

def get_api_key():
    key = os.environ.get('DATA_GOV_API_KEY')
    if not key:
        raise ValueError('DATA_GOV_API_KEY environment variable not set.\n'
                         + 'Go to https://collegescorecard.ed.gov/data/documentation/ to get a key, and set variable to run script')
    return key

def get_output_file():
    output_folder = os.path.join(os.path.dirname(__file__), 'output')
    if not os.path.exists(output_folder):
        os.mkdir(output_folder)
    return os.path.join(output_folder, 'colleges.csv')

if __name__ == '__main__':
    page = 0
    per_page = None
    total = None
    output_file = get_output_file()

    with open(output_file, 'w') as output_csv:
        csv_writer = writer(output_csv)
        csv_writer.writerow(['Id', 'Name', 'Url', 'City', 'State', 'Lat', 'Lon'])
        while total is None or page * per_page < total:
            results = requests.get('https://api.data.gov/ed/collegescorecard/v1/schools?api_key={}'.format(get_api_key())
                                    + '&fields=id,school.name,school.school_url,school.city,school.state,location.lat,location.lon&page={}'.format(page)).json()
            error = results.get('error')
            if error:
                raise ValueError(error)
            if not total:
                total = results['metadata']['total']
                per_page = results['metadata']['per_page']
            for result in results['results']:
                csv_writer.writerow([result['id'], result['school.name'], result['school.school_url'], result['school.city'], result['school.state'], result['location.lat'], result['location.lon']])
            page += 1
