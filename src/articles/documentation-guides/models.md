## Models
The framework comes with a set of models that can be used in your components.

### Portfolio
The framework provides you with a portfolio model.

The model can be used by calling the `algorithm_context.get_portfolio()` method. This allows you to get easily 
access to your portfolio model in your strategy.

```python
portfolio = algorithm_context.get_portfolio()
```

In the case you have multiple portfolios for your algorithm (multiple brokers) you can provide a specifier for the 
specific portfolio you want to retrieve.


```python
portfolio = algorithm_context.get_portfolio("BINANCE")
```


##### .get_identifier()
Unique identifier for portfolio, this identifier could be the same identifier used in your 
other components (PortfolioManager, OrderExecutor and MarketService)

##### .get_trading_symbol()
Returns the trading symbol the algorithm uses.

##### .get_unallocated()
Returns a Position model that specifies that amount of trading symbol the algorithm has not allocated.

##### .get_allocated()
Returns the sum (quoted in trading symbol) of all open positions your portfolio has.

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

##### .from_dict()
Method to create a portfolio instance from a dictionary.

You can create a portfolio with the following attributes:

* `identifier` unique identifier for the portfolio
* `trading_symbol` the trading symbol or quoted asset that your algorithm trades in.
* `unallocated` the position of the trading symbol the algorithm has.
* `market` the market/exchange/broker the portfolio is registered on.
* `positions` (optional) list of symbols and corresponding amounts that define the positions of the portfolio
* `orders` (optional) list of orders that define the orders of the portfolio

###### Minimal data creation
Example portfolio creation with minimal required data.

```python
from investing-algorithm-framework import Portfolio
portfolio = Portfolio.from_dict(
    {
        "identifier": "BINANCE",
        "trading_symbol": "USDT",
        "unallocated": 10000,
        "market": "BINANCE"
    }    
)
```

###### With positions data
Example portfolio creation with positions data.

```python
from investing-algorithm-framework import Portfolio
portfolio = Portfolio.from_dict(
    {
        "identifier": "BINANCE",
        "trading_symbol": "USDT",
        "unallocated": 10000,
        "market": "BINANCE",
        "positions": [
            {"symbol": "DOT", "amount": 40},
            {"symbol": "BTC", "amount": 0.04},
        ]
    }    
)
```

###### With orders data
Example portfolio creation with orders and positions data.

```python
from investing-algorithm-framework import Portfolio
portfolio = Portfolio.from_dict(
    {
        "identifier": "BINANCE",
        "trading_symbol": "USDT",
        "unallocated": 10000,
        "market": "BINANCE",
        "positions": [
            {"symbol": "DOT", "amount": 40},
            {"symbol": "BTC", "amount": 0.04},
        ],
        "orders": [
            {
                "target_symbol": "DOT",
                "trading_symbol": "USDT",
                "amount_target_symbol": 40,
                "status": "PENDING",
                "price": 10,
                "side": "BUY",
                "type": "LIMIT"
            }
        ]
    }    
)
```

##### .to_dict()
Method to convert a portfolio instance to a dictionary.
```python
portfolio = algorithm_context.get_portfolio()
data = portfolio.to_dict()
```

### Order
The framework provides you with a universal Order model. You can get all orders of your portfolio by calling
the `algorithm_context.get_orders()` or when you have a portfolio model `portfolio.get_orders()`.

```python
# From your algorithm context
orders = algorithm_context.get_orders()
orders = algorithm_context.get_orders(target_symbol="BTC")
orders = algorithm_context.get_orders(trading_symbol="USDT")
orders = algorithm_context.get_orders(status="PENDING")
orders = algorithm_context.get_orders(identifier="BINANCE")

# Or from you portfolio
portfolio = algorithm_context.get_portfolio()
orders = portfolio.get_orders()
```
##### .get_order_reference()
Returns the shared identifier set by your market the orders is created on (ID of your broker/exchange given to the order).

##### .get_trading_symbol()
Returns the trading symbol the order was executed in (e.g. pair BTC/USDT, trading symbol is USDT (quoted asset)).

##### .get_target_symbol()
Returns the target symbol of the order (e.g. pair BTC/USDT, target symbol is BTC).

##### .get_initial_price()
Returns the price of the order when it was executed (execution price for buy orders).

##### .get_price()
Returns the current price of the order, or the closing price if the order is closed.

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

##### .from_dict()
Method to create an order instance from a dictionary.

You can create an order with the following attributes:
* `reference_id` the unique id provider by the market where the order was executed on.
* `target_symbol` the target symbol that the order has (BTC/USDT -> target symbol is BTC).
* `trading_symbol` the trading symbol that the order has (BTC/USDT -> trading symbol is USDT).
* `amount_target_symbol`(optional, either amount_target_symbol or amount_trading_symbol needs to be defined) the amount of target symbol the order has.
* `amount_trading_symbol`(optional, either amount_target_symbol or amount_trading_symbol needs to be defined) the amount of the trading symbol the order has.
* `status` the status of the order (SUCCESS, PENDING, TO_BE_SENT, FAILED, CANCELED, CLOSED).
* `type` (optional) the order type of the order(MARKET, LIMIT), will be mapped to LIMIT by default.  
* `price` (optional) price of the order
* `initial_price` (optional) price of the order, when it was first executed
* `closing_price` (optional) price of the order, when it was closed

###### Pending limit buy order
For a limit order it is required to have either `amount_target_symbol` or `amount_trading_symbol` defined.
Also, because the order is not yet executed only `price` needs to be defined
```python
from investing_algorithm_framework import Order
order = Order.from_dict(
    {
        "reference_id": 10493,
        "target_symbol": "DOT", 
        "trading_symbol": "USDT", 
        "amount_target_symbol": 40, 
        "status": "PENDING", 
        "price": 10,
        "type": "LIMIT",
        "side": "BUY"
    }
)
```

###### Successful limit buy order
For a limit order it is required to have either `amount_target_symbol` or `amount_trading_symbol` defined.
Also, because the order is executed you need to define the current `price` and the `initial_price` when the 
order was executed.

```python
from investing_algorithm_framework import Order
order = Order.from_dict(
    {
        "reference_id": 10493,
        "target_symbol": "DOT", 
        "trading_symbol": "USDT", 
        "amount_target_symbol": 40, 
        "status": "SUCCESS", 
        "price": 10,
        "initial_price": 8,
        "type": "LIMIT",
        "side": "BUY"
    }
)
```

###### Closed limit buy order
For a limit order it is required to have either `amount_target_symbol` or `amount_trading_symbol` defined.
Also, because the order is closed you need to define the `closing_price` (when the order was closed) and the `initial_price` (when the
order was executed).

```python
from investing_algorithm_framework import Order
order = Order.from_dict(
    {
        "reference_id": 10493,
        "target_symbol": "DOT", 
        "trading_symbol": "USDT", 
        "amount_target_symbol": 40, 
        "status": "CLOSED", 
        "closing_price": 11,
        "initial_price": 8,
        "type": "LIMIT",
        "side": "BUY"
    }
)
```

###### Pending limit sell order
For a limit order it is required to have either `amount_target_symbol` or `amount_trading_symbol` defined.
Also, because the order is not yet executed only `price` needs to be defined
```python
from investing_algorithm_framework import Order
order = Order.from_dict(
    {
        "reference_id": 10493,
        "target_symbol": "DOT", 
        "trading_symbol": "USDT", 
        "amount_target_symbol": 40, 
        "status": "PENDING", 
        "price": 10,
        "type": "LIMIT",
        "side": "SELL"
    }
)
```

###### Successful limit sell order
For a limit order it is required to have either `amount_target_symbol` or `amount_trading_symbol` defined.
Also, because the order is executed you need to define the current `price` and the `initial_price` when the 
order was executed.

```python
from investing_algorithm_framework import Order
order = Order.from_dict(
    {
        "reference_id": 10493,
        "target_symbol": "DOT", 
        "trading_symbol": "USDT", 
        "amount_target_symbol": 40, 
        "status": "SUCCESS", 
        "price": 10,
        "initial_price": 8,
        "type": "LIMIT",
        "side": "SELL"
    }
)
```

###### Closed limit sell order
For a limit order it is required to have either `amount_target_symbol` or `amount_trading_symbol` defined.
Also, because the order is closed you need to define the `closing_price` (when the order was closed) and the `initial_price` (when the
order was executed).

```python
from investing_algorithm_framework import Order
order = Order.from_dict(
    {
        "reference_id": 10493,
        "target_symbol": "DOT", 
        "trading_symbol": "USDT", 
        "amount_target_symbol": 40, 
        "status": "CLOSED", 
        "closing_price": 11,
        "initial_price": 8,
        "type": "LIMIT",
        "side": "SELL"
    }
)
```

###### Pending market sell order
> MARKET BUY orders are not supported (We do not recommend the use of MARKET BUY orders).

For a market sell order it is required to have `amount_target_symbol` defined.
Because, the market is not yet executed, closing price does not have to be defined.
```python
from investing_algorithm_framework import Order
order = Order.from_dict(
    {
        "reference_id": 10493,
        "target_symbol": "DOT", 
        "trading_symbol": "USDT", 
        "amount_target_symbol": 40, 
        "status": "PENDING", 
        "type": "MARKET",
        "side": "SELL"
    }
)
```
 
###### Successful market sell order 
> MARKET BUY orders are not supported (We do not recommend the use of MARKET BUY orders).

For a market sell order it is required to have `amount_target_symbol` defined.
Because, the market is executed, closing price needs to be defined.

```python
from investing_algorithm_framework import Order
order = Order.from_dict(
    {
        "reference_id": 10493,
        "target_symbol": "DOT", 
        "trading_symbol": "USDT", 
        "amount_target_symbol": 40, 
        "status": "SUCCESS", 
        "type": "MARKET",
        "closing_price": 20,
        "side": "SELL"
    }
)
```

###### Closed market sell order 
> MARKET BUY orders are not supported (We do not recommend the use of MARKET BUY orders).

For a market sell order it is required to have `amount_target_symbol` defined.
Because, the market is closed, closing price needs to be defined (Same as a successful sell order).

```python
from investing_algorithm_framework import Order
order = Order.from_dict(
    {
        "reference_id": 10493,
        "target_symbol": "DOT", 
        "trading_symbol": "USDT", 
        "amount_target_symbol": 40, 
        "status": "SUCCESS", 
        "type": "MARKET",
        "closing_price": 20,
        "side": "SELL"
    }
)
```

##### .to_dict()
Method to convert an order instance to a dictionary.
```python
orders = algorithm_context.get_orders() 

if len(orders) > 0:
    # Convert first order to a dictionary
    data = orders[0].to_dict()
```

### Position
The framework provides you with a universal Position model. You can get all positions of your portfolio by calling
the `algorithm_context.get_positions()` or when you have a portfolio model `portfolio.get_positions()`.

```python
# From algorithm context
positions = algorithm_context.get_positions()
positions = algorithm_context.get_positions(symbol="BTC")
positions = algorithm_context.get_positions(identifier="BINANCE")

# From portfolio
portfolio = algorithm_context.get_portfolio()
positions = portfolio.get_positions()
```

##### .get_orders()
Returns all orders belonging to a position.

##### .get_amount()
Returns the amount of the position (quoted in target symbol).

##### .get_symbol()
Returns the symbol of the position (BTC). Orders with a specific target symbol will be automatically mapped to 
a position with corresponding symbol

##### .from_dict()
Method to create a position instance from a dictionary.

You can create a position with the following attributes:

* `symbol` unique identifier for the portfolio
* `amount` the trading symbol or quoted asset that your algorithm trades in.
* `orders` (optional) list of orders that define the orders of the portfolio

###### With minimal data creation
```python
from investing_algorithm_framework import Position
position = Position.from_dict(
    {
        "symbol": "DOT", 
        "amount": "USDT", 
    }
)
```

###### With orders data
```python
from investing_algorithm_framework import Position
position = Position.from_dict(
    {
        "symbol": "DOT", 
        "amount": "USDT", 
        "orders": [
            {
                "target_symbol": "DOT",
                "trading_symbol": "USDT",
                "amount_target_symbol": 40,
                "status": "PENDING",
                "price": 10,
                "side": "BUY",
                "type": "LIMIT"
            }
        ]
    }
)
```

##### .to_dict()
Method to convert an position instance to a dictionary.
```python
positions = algorithm_context.get_positions() 

if len(positions) > 0:
    # Convert first position to a dictionary
    data = positions[0].to_dict()
```