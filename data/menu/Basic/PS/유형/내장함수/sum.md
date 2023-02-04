## 1. 하는 일
> list, tuple의 값을 합한다

## 2. 용법
### 1) 리스트
> 원소를 더한다
```python
list = [1, 2, 3, 4, 5]
sum(list) # 15
```

### 2) 튜플
>원소를 더한다
```python
tuple  = (1, 2, 3, 4, 5)
sum(tuple) # 15
```

## 3.예제
>딕셔너리를 원소로 가지는 리스트에서 각 딕셔너리를 리스트로 만들어서 더한다
   ex) myList의 gold들을 합한 값을 출력
```python
myList = [
		  {'points':100, 'gold':100},
		  {'points':300, 'gold':300}
		  ]

    print(sum(item['gold'] for item in myList)) # 400
```