with open('user-jmeter-dataset.csv', 'w') as outfile: 
    for i in range(1, 101):
        s = str(i) + ',message: ' + str(i)
        outfile.write('%s\n' % s)

    