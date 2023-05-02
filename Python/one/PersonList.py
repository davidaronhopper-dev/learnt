running = True
personsArray = {}
personNum = 1


import build_person
import print_people

while running:
    nextStep = input('What would you like to do?\n>>> ')
    if nextStep == "New Name":
        firstName = input('\tFirst Name')
        lastName = input('\tLast Name')
        build_person(personsArray, firstName, lastName)

    elif nextStep == "Print":
        print_people(personsArray)
    elif nextStep == 'Quit':
        running = False

print('Thank you')
