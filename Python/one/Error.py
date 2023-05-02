firstNumer = input('Enter first Number')
#secondNumber = input('Enter second number')

def checkInput(numInput):
    while True:
        try:
            int(numInput)
        except ValueError:
            print(f'You didn\'t enter a numerical value, you entered {numInput}')
            numInput = input('ReEnter Number')
        else:
            return numInput
            break




firstNumer = checkInput(firstNumer)
#checkInput(secondNumber)
print(f'Here are your numbers: {firstNumer}')