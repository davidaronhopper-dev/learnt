s = 'Pythonisanprogramminglanguage'
arr = ['lkjhgf', 'zx', 'qw', 'ertyuiopakk', 'foacdhlc']
new_s = iter(s)
result = [''.join(next(new_s) for _ in i) for i in arr]
print(result)