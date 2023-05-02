def get_a_dic(first, middle, last):
    thedic = {'first': first, 'middle': middle, 'last': last}
    return thedic

while True:
    print('\nPlease tell me your name!')
    f_name = input("First Name: ")
    m_name = input("Middle Name: ")
    l_name = input("Last Name: ")

    person = get_a_dic(f_name, m_name, l_name)
    print(f'Hello!, {person}')



