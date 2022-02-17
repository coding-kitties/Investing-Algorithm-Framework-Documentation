##  Using the portfolio model
You can use the portfolio model with the `AlgorithmContext` object. 

### Retrieving the portfolio model

```python
@app.algorithm.strategy(time_unit=TimeUnit.SECONDS, interval=5)
def perform_strategy_one(context: AlgorithmContext, **kwargs):
    portfolio = context.get_portfolio()
```

### Getting unallocated trading symbol
```python
@app.algorithm.strategy(time_unit=TimeUnit.SECONDS, interval=5)
def perform_strategy_one(context: AlgorithmContext, **kwargs):
    portfolio = context.get_portfolio()
    position = portfolio.get_unallocated()
```


### Retrieving positions
```python
@app.algorithm.strategy(time_unit=TimeUnit.SECONDS, interval=5)
def perform_strategy_one(context: AlgorithmContext, **kwargs):
    portfolio = context.get_portfolio()
    positions = context.get_positions()
    btc_position = portfolio.get_positions(symbol="BTC")[0]
```

### Retrieving orders
```python
@app.algorithm.strategy(time_unit=TimeUnit.SECONDS, interval=5)
def perform_strategy_one(context: AlgorithmContext, **kwargs):
    portfolio = context.get_portfolio()
    orders = context.get_orders()
    btc_orders = portfolio.get_orders(symbol="BTC") 
```
