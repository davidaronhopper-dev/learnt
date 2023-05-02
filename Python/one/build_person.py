def build_person(persons, fname, lname):
    global personNum
    person = {'fName': fname, 'lName': lname}
    persons[f'person {personNum}'] = person
    personNum += 1
    print(f'{fname} {lname} Added')
    return persons
