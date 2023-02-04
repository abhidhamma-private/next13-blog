## 1. 하는 일
> 객체의 길이를 구한다 (해당 자료형의 길이라고 대표할 수 있는것)

## 2. 용법
### 1) list, tuple의 길이
> 원소의 개수
```python
list = [1, 2, 3]
tuple = (1, 2, 3, 4)
print("{0}, {1}".format(len(list), len(tuple))) # 3, 4
```

### 2) 문자열의 길이
> 문자열의 길이
```python
s = "str"
print(len(s)) # 3
```

### 3)딕셔너리의 길이
> 페어의 개수
   ex) 딕셔너리의 길이 구해보기 
```python
dict = {"a":"사과", "b":"바나나"}
print(len(dict)) # 2(pair의 개수)
```

![[len함수의 numpy와 pandas에서의 쓰임.png]]