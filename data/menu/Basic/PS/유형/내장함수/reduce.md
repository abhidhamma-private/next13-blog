## 1. 하는 일
>자료구조와 함수를 받아서 
>각 요소에 함수를 적용한 값을 만든다

## 2. 용법
>from functools import reduce
>(functools.)reduce(function, iterable[, initializer])

### 1) 초기값이 숫자일 때 
> 숫자를 입력 받아서 배열로 바꾸고 짝수만 더한다
```python
int n = 5
reduce(
        lambda acc, cur: 
        acc + cur if cur % 2 == 0 else acc, 
        range(1, n + 1), 
        0
) # 6 : 1부터 n까지의 배열에서 짝수만 더한다
```

### 2) 초기값이 리스트일 때
>  딕셔너리의 리스트를 입력 받아서
>  딕셔너리의 원소를 리스트로 출력한다
```python

users = [{'mail': 'gregorythomas@gmail.com', 
		  'name': 'Brett', 'sex': 'M', 'age': 73},
		 {'mail': 'hintoncynthia@hotmail.com', 
		 'name': 'Madison', 'sex': 'F', 'age': 29},
		 {'mail': 'wwagner@gmail.com', 'name': 'Michael',
		  'sex': 'M', 'age': 51},
		 {'mail': 'daniel79@gmail.com', 'name': 'Karen',
		  'sex': 'F', 'age': 32},
		 {'mail': 'ujackson@gmail.com', 'name': 'Amber',
		  'sex': 'F', 'age': 42}
]

reduce(
	   lambda acc, 
	   cur: acc + [cur["mail"]], 
	   users, 
	   []
) # users의 mail을 list타입으로 반환한다


```

### 3) 초기값이 딕셔너리일 때
> 딕셔너리의 리스트를 입력 받아서 
> 성별을 키로 이름을 리스트로 갖는 
> 딕셔너리의 리스트를 반환한다
```python
def names_by_sex(acc, cur):
  sex = cur["sex"]
     if sex not in acc:
         acc[sex] = []
     acc[sex].append(cur["name"])
     return acc

reduce(
	   names_by_sex, 
	   users, 
	   {}
)

'''
users를 받아 성별을 키로 이름을 리스트로 갖는 
딕셔너리의 리스트를 반환한다
{
	'M': ['Brett', 'Michael'], 
	'F': ['Madison', 'Karen', 'Amber']
}
'''

```
