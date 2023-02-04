## 1. 하는 일
> 문자열 객체에 문자열을 편리하게 가공할 수 있는 
> 내장함수들이 있다 익혀두자

## 2. 용법
### 1) lower
> 문자열을 모두 소문자로 바꾼다(원본은 바꾸지않는다)
```python
s = "HELLO World"
print( s.lower() ) # hello world
print( s )         # HELLO World
```

### 2) count
> 문자열에 포함된 숫자를 센다
```python
'ooyyy'.count('y') # 3
```

### 3) interpoation 보간법
> 문자열과 변수를 섞어쓸 수 있도록 해준다
```python
name = "hanji"
f"hello {name}" # hello hanji
```

### 4) join
> 리스트를 입력받는 기준에따라 문자열로 합친다
```python
arr = ['1', '2', '3']
''.join(arr) # 123
'.'.join(arr) # 1.2.3
'aa'.join(arr) # 1aa2aa3
