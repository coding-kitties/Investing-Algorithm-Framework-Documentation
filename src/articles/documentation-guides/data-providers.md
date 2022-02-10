## Data providers
The framework provides you with a `DataProvider` class that you can extend for your own data providers.
DataProvider objects are used by strategies for retrieval of trading data such as tickers, order books etc.

* DataProviders are run before a strategy is run.
* Strategies specify which data providers are run with the `data_provider_identifier` attribute.
* You can implement your own data providers.

Using the DataProvider class and extending it should be straight forward. You are required to override 
the methods that your strategy uses. Methods that are not used by  your strategy does are allowed to leave blank:

##### .provide_ticker(self, target_symbol, trading_symbol, algorithm_context, **kwargs)
Override this method if you use "TICKER" in the `trading_data_type` or `trading_data_types` attributes.

```python
class MyDataProvider(DataProvider):
    identifier = "MY_DATA_PROVIDER"

    def provide_ticker(self, target_symbol, trading_symbol, algorithm_context, **kwargs) -> Ticker:
        """
        Override the 'provide_ticker' hook, because our strategy that uses 
        this data provider expects ticker data.
        """
        return Ticker.from_dict(
            {"price": 5000, "symbol": "BTCUSDT", "creation_date": datetime.utcnow()}
        )
    

@app.algorithm.strategy(
    time_unit=TimeUnit.SECONDS,
    interval=5,
    data_provider_identifier="MY_DATA_PROVIDER",
    trading_data_type=TradingDataTypes.TICKER,
    target_symbol="BTC"
)
def perform_strategy_one(context: AlgorithmContext, ticker, **kwargs):
    print(ticker)
```

##### .provide_order_book(self, target_symbol, trading_symbol, algorithm_context, **kwargs)
Override this method if you use "TICKER" in the `trading_data_type` or `trading_data_types` attributes.

```python
class MyDataProvider(DataProvider):
    identifier = "MY_DATA_PROVIDER"

    def provide_order_book(self, target_symbol, trading_symbol, algorithm_context, **kwargs) -> OrderBook: 
        """
        Override the 'provide_ticker' hook, because our strategy that uses 
        this data provider expects ticker data.
        """
        return OrderBook.from_dict(
            {"bids": [], "asks": [], "symbol": "BTCUSDT", "creation_date": datetime.utcnow()}
        )
    

@app.algorithm.strategy(
    time_unit=TimeUnit.SECONDS,
    interval=5,
    data_provider_identifier="MY_DATA_PROVIDER",
    trading_data_type=TradingDataTypes.ORDER_BOOK,
    target_symbol="BTC"
)
def perform_strategy_one(context: AlgorithmContext, order_book, **kwargs):
    print(order_book)
```
##### .provide_raw_data(self, algorithm_context, **kwargs) -> dict:
Override this method if you want to provide custom data to your strategy. This hook will be called when the strategy 
specifies "RAW" with the `trading_data_type` or `trading_data_types` attributes.

```python
class MyDataProvider(DataProvider):
    identifier = "MY_DATA_PROVIDER"

    def provide_raw_data(self, algorithm_context, **kwargs) -> dict:
        """
        Override the 'provide_ticker' hook, because our strategy that uses
        this data provider expects ticker data.
        """
        return {"message": "Kussama to the moon"}


@app.algorithm.strategy(
    time_unit=TimeUnit.SECONDS,
    interval=5,
    data_provider_identifier="MY_DATA_PROVIDER",
    trading_data_type=TradingDataTypes.RAW,
    target_symbol="BTC"
)
def perform_strategy_one(context: AlgorithmContext, raw_data, **kwargs):
    print(raw_data)
```
