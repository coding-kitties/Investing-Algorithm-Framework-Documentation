## Creating orders
You can create orders with the `AlgorithmContext` object. 

### Creating an order

```python
@app.algorithm.strategy(time_unit=TimeUnit.SECONDS, interval=5)
def perform_strategy_one(context: AlgorithmContext, **kwargs):
    order = context.create_order(target_symbol="BTC", amount_trading_symbol=2000, side="BUY", type="LIMIT", price=10000)
```

### Creating a limit order
```python
@app.algorithm.strategy(time_unit=TimeUnit.SECONDS, interval=5)
def perform_strategy_one(context: AlgorithmContext, **kwargs):
    order = context.create_limit_buy_order(
        target_symbol="BTC", 
        amount_trading_symbol=2000, 
        price=10000
    )
    order = context.create_limit_sell_order(
        target_symbol="BTC", 
        amount_target_symbol=20, 
        price=10000
    )
```

### Creating a market order
```python
@app.algorithm.strategy(time_unit=TimeUnit.SECONDS, interval=5)
def perform_strategy_one(context: AlgorithmContext, **kwargs):
    order = context.create_market_buy_order(
        target_symbol="BTC", 
        amount_trading_symbol=2000, 
        price=10000
    )
    order = context.create_market_sell_order(
        target_symbol="BTC", 
        amount_target_symbol=20, price=10000
    )
```
