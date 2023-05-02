import random
countedListEven = {}
countedListOdd = {}

randList = [random.randrange(1,100) for i in range(5000)]

for num in randList:
    if num % 2 == 0:
        if num in countedListEven:
            countedListEven[num] += 1
        else:
            countedListEven[num] = 1
    else:
        if num in countedListOdd:
            countedListOdd[num] += 1
        else:
            countedListOdd[num] = 1
print('\nOdd Numbers: ')
for num, count in sorted(countedListOdd.items()):
    print(f'{num} appears {count} times')

print('\nEven Numbers: ')
for num, count in sorted(countedListEven.items()):
    print(f'{num} appears {count} times')