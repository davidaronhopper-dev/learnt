from random import randint, choice

selectNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
selectAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

class Lottery:
    """Simulates a lottery ticket based off lists"""
    def __init__(self, ticketlength):
        self.length = ticketlength

    def get_results(ticketlength):
        yourTicket = []
        for _ in range(ticketlength):
            cointoss = randint(1,2)
            if cointoss % 2 == 0:
                yourTicket.append(choice(selectNum))
            else:
                yourTicket.append(choice(selectAlpha))

        return yourTicket


MyNumbers = [8, 1, 2, 6, 'E', 9, 0]
loop = 0
while True:
    NewTicket = Lottery.get_results(7)
    loop += 1
    print(loop)
    if NewTicket == MyNumbers:

        break

