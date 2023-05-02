def dictionaryContains(word):
    dictionary = {"a", "at", "an", "and", "attack", "black", "cream", "fantasy", "final", "for", "go", "i", "ice",
                  "icecream", "like", "man", "mango", "one", "problem", "problemsolving", "solving", "tack", "this",
                  "time", "two"}
    return word in dictionary


def wordBreak(string):
    wordBreakUtil(string, len(string), "")


def wordBreakUtil(string, n, result):
    for i in range(1, n + 1):
        prefix = string[:i]
        if dictionaryContains(prefix):
            result += prefix
            print(result)
        wordBreakUtil(string[i:], n - i, f'{result} ')


if __name__ == "__main__":
    print("String Test:")
    wordBreak("ilikeicecreamandattackinfinalfantasytwoatatimeforproblemsolvingo")