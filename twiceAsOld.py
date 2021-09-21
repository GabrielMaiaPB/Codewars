def twice_as_old(dad_years_old, son_years_old):
    if dad_years_old == son_years_old * 2:
        return 0
    elif dad_years_old > son_years_old * 2:
        return dad_years_old - son_years_old * 2
    else:
        return son_years_old * 2 - dad_years_old