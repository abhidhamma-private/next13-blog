## 1.문제
![[문자열 내 p와 y의 개수.png]]
## 2.소스
```python

def solution(s):
    pCount = 0
    yCount = 0
    for i in range(0, len(s)):
        if (s[i] == "p") | (s[i] == "P") :
            pCount += 1
        elif (s[i] == "y") | (s[i] == "Y") :
            yCount += 1
            
    if pCount == yCount:
        return True
    elif pCount != yCount:
        return False
    elif pCount == 0 & yCount == 0:
        return True

```

다른사람 소스
```python
def numPY(s):
    return s.lower().count('p') 
	    == s.lower().count('y')


```

## 3.설명
>

## 4.사용된 유형
1) [[str]] (lower, count)