## Strategies 
The framework comes with a `.strategy()` decorator to define your strategies.
In the decorator you can provide the following parameters:

* `time_unit` **required**: the time unit the strategy uses (SECONDS, MINUTES, HOURS)
* `time_interval` **required**: the interval of the strategy. The combination of time unit and interval specify at which time your strategy runs.
* `data_provider_identifier`: the data provider the strategy uses.
* `trading_data_type`: the trading type the strategy expects
* `trading_data_types`: the trading types the strategy expects
* `target_symbol`: the target symbol that is used by the data provider to obtain the trading data type.
* `target_symbols`: the target symbols that is used by the data provider to obtain the trading data type.

The framework will run your strategy at the specified time interval with the data you want to receive. 
For example:

```python
@app.algorithm.strategy(time_unit=TimeUnit.SECONDS, interval=5)
def perform_strategy_one(context: AlgorithmContext, **kwargs):
    """
    Strategy that runs every 5 seconds. 

    * Runs with the algorithm context for easy access to the portfolio 
    and order creation.
    """
    context.create_limit_buy_order(symbol="BTC", price=10000, amount=1)
```

> Note: It is required to specify a time unit and interval attribute when creating a strategy. 

If you want to receive trading data in your strategy, you can specify the `trading_data_type` or `trading_data_types` 
attribute. 

> Note: it is required to specify the `target_symbol` or `target_symbols` attribute you must also specify 
> the `trading_data_type` or `trading_data_types` attribute in your strategy.

Example strategy with `trading_data_type` attribute.

```python
@app.algorithm.strategy(
    time_unit=TimeUnit.SECONDS,
    interval=5,
    data_provider_identifier="BINANCE",
    trading_data_type="TICKER",
    target_symbol="BTC"
)
def perform_strategy_one(context: AlgorithmContext, ticker, **kwargs):
    """
    Strategy that runs every 5 seconds and gets ticker data from the binance 
    data provider (BUILT-IN).
    
    * Strategy receives ticker data from the binance data provider
    * Runs with the algorithm context for easy access to the portfolio 
    and order creation.
    """
    print(ticker)
    context.create_limit_buy_order(symbol="BTC", price=10000, amount=1)
```

Example strategy with `trading_data_types` attribute.

```python
@app.algorithm.strategy(
    time_unit=TimeUnit.SECONDS,
    interval=5,
    data_provider_identifier="BINANCE",
    trading_data_types=["TICKER", "ORDER_BOOK", "RAW"],
    target_symbol="BTC"
)
def perform_strategy_one(context: AlgorithmContext, ticker, order_book, raw_data, **kwargs):
    """
    Strategy that runs every 5 seconds and gets ticker, order book and raw data from the binance 
    data provider (BUILT-IN).
    RAW data is not supported by the binance data provider, therefore none is returned.
    
    * Strategy receives ticker data from the binance data provider
    * Runs with the algorithm context for easy access to the portfolio 
    and order creation.
    """
    print(ticker)
    print(order_book)
    print(raw_data)
    context.create_limit_buy_order(symbol="BTC", price=10000, amount=1)
```

Example strategy with `trading_data_types` attribute and multiple target_symbols.


```python
@app.algorithm.strategy(
    time_unit=TimeUnit.SECONDS,
    interval=5,
    data_provider_identifier="BINANCE",
    trading_data_types=["TICKER", "ORDER_BOOK", "RAW"],
    target_symbols=["BTC", "DOT"]
)
def perform_strategy_one(context: AlgorithmContext, tickers, order_books, raw_data, **kwargs):
    """
    Strategy that runs every 5 seconds and gets ticker, order book and raw data from the binance 
    data provider (BUILT-IN).
    RAW data is not supported by the binance data provider, therefore none is returned.
    
    * Strategy receives ticker data from the binance data provider
    * Runs with the algorithm context for easy access to the portfolio 
    and order creation.
    """
    print(tickers)
    print(order_books)
    print(raw_data)
    context.create_limit_buy_order(symbol="BTC", price=10000, amount=1)
```