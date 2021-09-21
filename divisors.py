def divisors(integer):
    divisors_list = []
    
    for i in range(1, integer+1):
        if integer % i == 0:
            divisors_list.append(i)
    
    if divisors_list[0] == 1 and divisors_list[1] == integer:
        return f"{integer} is prime"
    else:
        divisors_list.pop(0)
        divisors_list.pop(len(divisors_list)-1)
        return divisors_list