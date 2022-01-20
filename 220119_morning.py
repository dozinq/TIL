# 1. 입력 받은 수를 세제곱하여 반환하는 함수cube 만들기.
inp = int(input())

def cube(num):
    return num**3

print(cube(inp))

# 2. 함수 cube를 활용하여 2의 세제곱, 100의 세제곱 구하기.
print('2의 세제곱은 %d 입니다.' % cube(2))
print('100의 세제곱은 %d 입니다.' % cube(100))

# 3. 너비와 높이를 입력 받아, 사각형의 넓이와 둘레를 튜플로 반환하는
#   함수 rectangle을 작성하시오.

a = int(input())
b = int(input())

def rectangle(width, height):
    return(width*height, 2*(width + height))

print(rectangle(a,b))

# 4. 함수 rectangle을 활용하여 너비가 30, 높이가 20인 사각형의
#   넓이와 둘레를 구하시오.

print(rectangle(30,20))

