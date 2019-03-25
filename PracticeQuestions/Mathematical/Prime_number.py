#A prime number (or a prime) is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers. A natural number greater than 1 that is not prime is called a composite number. Print all pairs (sets) of prime numbers (p,q) such that p*q <= n, where n is given number.

"""Print all pairs (sets) of prime numbers (p,q) such that p*q <= n, where n is given number.

Input:
The first line of input contains an integer T denoting the number of test cases. T testcases follow.
The first line of each test case is N.

Output:
For each testcase, in a new line, print the all pairs of prime numbers in increasing order.

Constraints:
1 ≤ T ≤ 50
4 ≤ N ≤ 400

Example:
Input:
2
4
8
Output:
2 2
2 2 2 3 3 2

Explanation:
Testcase 1: Pair (2, 2) which has both prime numbers as well as satisfying the condition 2*2 <= 4."""


#HINT:Search for prime numbers that follow this property and check if product of any two prime number is less than or equal to n. Same numbers can be multiplied with itself to form pair.

ncase=int(input())


def isprime(n):
    if n<2:
        return False
    for i in range(2,int(n**.5)+1):
        if n%i==0:
            return False
    return True
    

for case in range(ncase):
    n=int(input())
    
    prime=[-1]*n
    
    k=0
    for i in range(2,n):
        if isprime(i):
            prime[k]=i
            k+=1
            
    for i in range(k):
        for j in range(k):
            if prime[i]*prime[j]>n:
                break
            else:
                print(prime[i],prime[j],end=" ")
        
    print()
    