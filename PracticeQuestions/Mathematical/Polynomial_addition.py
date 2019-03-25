"""Given two polynomial numbers represented by a linked list. The task is to complete the  function addPolynomial that adds these lists meaning adds the coefficients who have same variable powers.

Input:
The first line of input contains an integer T denoting the number of test cases. Then in the next line is an integer N denoting the number of terms of first polynomial. In the next line are N space separated pairs x and y where x denotes the coefficient and y denotes the power. Similarly In the next line is an integer M denoting the no of terms of the second polynomial and in the line following it are N space separated pairs for second polynomial.

Output:
For each test case in a new line print the required polynomial in decreasing order of the power.

Constraints:
1 <= T <= 100
1 <= N, M <= 105
1 <= x, y <= 106

Example:
Input:
2
1
1 2
1
1 3
2
1 3 2 2
2
3 3 4 2
Output:
1x^3 + 1x^2
4x^3 + 6x^2

Note:The Input/Ouput format and Example given are used for system's internal purpose, and should be used by a user for Expected Output only. As it is a function problem, hence a user should not read any input from stdin/console. The task is to complete the function specified, and not to write the full code."""

import collections
def addPolynomial(poly1, poly2):
    dic={}
    temp=poly1
    while temp!=None:
        dic[temp.power]=temp.coef
        temp=temp.next
    temp=poly2    
    while temp!=None:
        if temp.power in dic:
            dic[temp.power]+=temp.coef
        else:
            dic[temp.power]=temp.coef
        temp=temp.next
    
    od = collections.OrderedDict(sorted(dic.items(),reverse=True))
    lis=[]
    for k, v in od.items(): 
        lis.append("{}x^{}".format(v,k))
        lis.append(" + ")
        
    print("".join(lis[:-1]))    