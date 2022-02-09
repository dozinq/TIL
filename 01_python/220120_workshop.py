total = list()				   #total이라는 빈 리스트를 준비해 놓는다.
ans = '' 					   #return값으로 문자열을 반환받을 상자를 준비해 놓는다.

def get_secret_word(lst):
    for i in lst:
        total.append(chr(i))   #리스트 안에서 순서대로 total이라는 리스트에 담는다.
    return ans.join(total)     #join함수를 통해 문자들을 이어붙여서 ans상자에 담는다.

lst = [83, 115, 65, 102, 89]

print(get_secret_word(lst))



# tom은 "print(116+ 111+ 109)"를 통해 336임을 알 수 있으므로 값을 모두 더해보자~!
def get_secret_number(word):
    total = 0						#total 상자를 만들어 주고, 누적시킨다.
    for i in word:
        total += ord(i)				#문자 하나하나 돌아가면서 변환하고 누적시켜준다.
    return total					#꽉 찬 total상자를 반환시켜준다!

my_word = 'Dojinuk'

print(get_secret_number(my_word))



def get_strong_word(word_a, word_b):
    total_a = 0						#첫번째 문자의 숫자값 합을 반환할 total_a 상자 생성!
    total_b = 0						#두번째 문자의 숫자값 합을 반환할 total_b 상자 생성!
    for a in word_a:				
        total_a += ord(a)			#숫자값으로 반환하고 total_a 상자에 누적시키기!
    for b in word_b:				
        total_b += ord(b)			#숫자값으로 반환하고 total_b 상자에 누적시키기!

    if total_a > total_b:			#if문을 통해 더 큰 문자열을 반환 시켜주기!
        return word_a				
    elif total_a < total_b:
        return word_b
    elif total_a == total_b:
        print('same word')

print(get_strong_word('tom', 'john'))