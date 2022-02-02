```python
import os
from investing_algorithm_framework import App, TimeUnit, AlgorithmContext, Ticker, \
    TradingDataTypes, BINANCE, BINANCE_API_KEY, BINANCE_SECRET_KEY, TRADING_SYMBOL

app = App(
    resources_directory=os.path.abspath(os.path.join(os.path.realpath(__file__), os.pardir)),
    config={
        BINANCE_API_KEY: "<BINANCE_API_KEY>",
        BINANCE_SECRET_KEY: "<BINANCE_SECRET_KEY>",
        TRADING_SYMBOL: "USDT",
    }
)

@app.algorithm.strategy(
    time_unit=TimeUnit.SECONDS,
    interval=5,
    data_provider_identifier=BINANCE,
    target_symbol="BTC",
    trading_data_type=TradingDataTypes.TICKER,
)
def perform_strategy(context: AlgorithmContext, ticker: Ticker):
    portfolio = context.get_portfolio(BINANCE)
    
    if portfolio.get_unallocated() > 50000 and ticker.ask_price < 5000:
        context.create_limit_buy_order(BINANCE, "BTC", price=ticker.ask_price, amount=1, execute=True)


if __name__ == "__main__":
    app.start()
```
