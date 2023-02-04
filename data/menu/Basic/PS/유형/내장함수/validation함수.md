## 1. 하는 일
> validation을 한다

## 2. 용법
### 1)  isalpha
> 알파벳으로만 이루어져있는지 확인(한글포함)
```python
# Appia Example for isalpha

# It is to explain how to check whether the string consist of alphabet or not.

Ex1 = 'A'

Ex2 = 'ABC'

Ex3 = "앱피아"

Ex4 = "Hello Appia"

Ex5 = "100Appia"

#print the is the result for isalpha()

print(Ex1.isalpha()) # True

print(Ex2.isalpha()) # True

print(Ex3.isalpha()) # True

print(Ex4.isalpha()) # False

print(Ex5.isalpha()) # False
```

### 2) isdigit
>숫자로만 이루어져 있는지 확인
```python
# Appia Example for isalpha

# It is to explain how to check whether the string consist of digit or not.

Ex1 = '010-1234-5678'

Ex2 = '123456'

Ex3 = "R4R3"

print(Ex1.isdigit()) # Fasle

print(Ex2.isdigit()) # True

print(Ex3.isdigit()) # False

```

### 3)isalnum
>알파벳(한글포함) 또는 숫자로 이루어져 있는지 확인
```python
# Appia Example for isalpha

# It is to explain how to check whether the string consist of digit/alphabet or not.

Ex1 = '안녕'

Ex2 = 'Hello3'

Ex3 = "1.Where"

Ex4 = "1 Where"

print(Ex1.isalnum()) # True

print(Ex2.isalnum()) # True

print(Ex3.isalnum()) # False

print(Ex4.isalnum()) # False

```