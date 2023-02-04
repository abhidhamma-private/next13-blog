## 1. 하는 일
> 어떤 리스트를 정렬한 새로운 리스트를 반

## 2. 용법
### 1) 
> 
```python
basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
	for i in sorted(basket):
	    print(i) #apple apple banana orange orange pear
```

### 2) set과 함께쓰면 중복도 제거가능
>
```python
basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
	for f in sorted(set(basket)):
	    print(f) #apple banana orange pear
```

### 3) 정렬 조건 바꾸기
>
```python
basket = ['105', '204', '303', '402', '501']
	sorted(basket, key=lambda x:x[1]) # 1번째 인덱스로 정렬
	# ['101', '202', '303', '404', '505'] (그대로)

	sorted(basket, key=lambda x:(x[1], x[2])) 
	# 1번째 인덱스로 정렬후 2번째 인덱스로 정렬
	# ['501', '402', '303', '204', '105'] (2번째 인덱스로 내림차순 정렬)
```


## 3.예제
>
   ex) 
```python

```