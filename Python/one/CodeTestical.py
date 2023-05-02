import random

countedList = {}

randList = [random.randrange(1, 100) for i in range(5000)]

for num in randList:
    if num in countedList:
        countedList[num] += 1
    else:
        countedList[num] = 1

for num, val in sorted(countedList.items()):
    print(f'Number: {num} - {val}')
