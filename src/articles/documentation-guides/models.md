## Models
The framework comes with a set of models that can be used in your components.

### Portfolio
The framework provides you with a portfolio model that can be used by calling 
the `algorithm_context.get_portfolio()` method.

```python
portfolio = algorithm_context.get_portfolio()
```
The portfolio gives you the ability to:
* Track your portfolio positions and orders.  
* Get the performance of your portfolio.

##### .get_trading_symbol()
Returns the trading symbol the algorithm uses.

##### .get_unallocated()
Returns a Position model that specifies that amount of trading symbol the algorithm has not allocated.

##### .get_allocated()
Returns the sum (quoted in trading symbol) of all open positions your portfolio has.

##### .get_id()
Returns the id of your portfolio

##### .get_orders()
Returns a list of Order models of your portfolio representing all orders made by the algorithm.

##### .get_positions()
Returns a list of Positions models of your portfolio representing all positions of your algorithm.

##### .get_realized()
Returns the realized amount (quoted in trading symbol) of the total history of your algorithm.

##### .get_total_revenue()
Returns the revenue (quoted in trading symbol) of the closed orders by the algorithm.

##### .get_market() 
Returns the market (broker) your portfolio is connected to.


### Order
The framework provides you with a universal Order model. You can get all orders of your portfolio by calling
the `algorithm_context.get_orders()` or when you have a portfolio model `portfolio.get_orders()`.

```python
orders = context.get_orders()
orders = context.get_orders(symbol="BTC/USDT")
orders = portfolio.get_orders()
```
##### .get_id()

##### .get_order_reference()

##### .get_trading_symbol()
Returns the trading symbol the order was executed in (e.g. pair BTC/USDT, trading symbol is USDT).

##### .get_target_symbol()
Returns the target symbol of the order (e.g. pair BTC/USDT, target symbol is BTC).

##### .get_initial_price()
Returns the price of the order when it was executed.

##### .get_price()
Returns the current price of the order.

##### .get_closing_price()
Returns the price of the order was closed at.

##### .get_amount_target_symbol()
Returns the amount of target symbol the order has.

##### .get_amount_trading_symbol()
Returns the amount of trading symbol the order has.

##### .get_side()
Returns the side of the order (BUY, SELL).

##### .get_type()
Returns the type of the order (MARKET, LIMIT).

##### .get_status()
Returns the status of the order (SUCCESS, PENDING, TO_BE_SENT, FAILED, CANCELED, CLOSED).

### Position
The framework provides you with a universal Position model. You can get all positions of your portfolio by calling
the `algorithm_context.get_positions()` or when you have a portfolio model `portfolio.get_positions()`.

```python
positions = context.get_positions()
positions = context.get_positions(symbol="BTC/USDT")
positions = portfolio.get_positions()
```

##### .get_orders()
Returns all orders belonging to the position.

##### .get_amount()
Returns the amount of the position (quoted in target symbol).

##### .get_symbol()
Returns the symbol of the position (BTC/USDT).

