class Child:
    def __init__(self, name, age, school):
        self.name = name
        self.age = age
        self.school = School(school)

    def myname(self):
        print(f'My name is {self.name}')

    def myage(self):
        print(f'My age is {self.age}')

    def updateAge(self, newage):
        self.age = newage

    def fullInfo(self):
        allInfo = f"{self.name} {self.age}"
        return allInfo





class School:
    def __init__(self, school):
        self.school = school

    def printSchool(self):
        print(f'My Grade Is {self.school}')


EzraHopper = Child('Ezra', 15, 'MCAA')

EzraHopper.school.printSchool()
