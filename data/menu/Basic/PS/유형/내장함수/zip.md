## 1. 하는 일
> 리스트 두개를 한꺼번에 같이 돌리고 싶을때
> 복수개의 iterable 객체로부터 같은 idx의 원소들을 비교할 때 쓰는 함수다

## 2. 용법
### 1)  길이가 같을때
> 
```python
questions = ['name', 'quest', 'favorite color']
answers = ['lancelot', 'the holy grail', 'blue']
	for q, a in zip(questions, answers):
	    print('What is your {0}?  It is {1}.'.format(q, a)) # 각각의 원소
```

### 2) 딕셔너리일때
>
```python

```

## 3.예제
>길이가 다를때
   ex) 완주하지못한 선수의 경우 길이가 다른데 길이를 늘려준뒤에 순회한다
```python
def solution(participant, completion):
    completion.append("~")
    for i, j in zip(sorted(participant), sorted(completion)):
        if i != j:
            return i
```