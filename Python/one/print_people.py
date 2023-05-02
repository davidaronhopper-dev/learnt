def print_people(persons):
    for person, info in persons.items():
        First = info['fName']
        Last = info['lName']
        print(f'Hello, {First} {Last}')
