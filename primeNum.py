number=1
while number <=100:
    counter =1
    x=0
    while counter <= number:
        if number % counter == 0:
            x=x+1
        counter = counter +1
    if x==2:
        print(number)

    number=number + 1        