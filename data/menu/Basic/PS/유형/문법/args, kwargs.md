## 1. 하는 일
> 갯수가 동적인 인자를 전달할때 쓴다
> \*x형식은 튜플타입으로 순서대로 전달하고
> \*\*x형식은 딕셔너리타입으로 이름과함께 전달한다
> 

## 2. 용법
### 1)  \*args
> 튜플을 순서대로 전달받는다
```python
def print_args(*args):
    print("Positional:", args)
    print("Type:", type(args))

print_args(1, 2)

>>>
Positional: 1, 2
Type: <class 'tuple'>
```

### 2) \*\*kwargs
> 딕셔너리를 순서가 달라도 이름에 맞게 전달받는다
```python
def print_kwargs(**kwargs):
    print("Keyword:", kwargs)
    print("Type:", type(kwargs))

print_kwargs(foo=1, bar=2)

>>>
Keyword: {'bar': 2, 'foo': 1}
Type: <class 'dict'>
```
