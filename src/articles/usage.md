```python
import os
from investing_algorithm_framework import App

app = App(
    resources_directory=os.path.abspath(os.path.join(os.path.realpath(__file__), os.pardir))
    config={
        BINANCE_API_KEY: "<BINANCE_API_KEY>",
        BINANCE_SECRET_KEY: "<BINANCE_SECRET_KEY>",
        TRADING_SYMBOL: "USDT",
    }
)


@app.algorithm.strategy(
    time_unit="SECONDS",
    interval=5,
    data_provider_identifier="BINANCE",
    target_symbol="BTC",
    trading_data_type="TICKER",
)
def perform_strategy(context, ticker):
    position = context.get_unallocated_size(BINANCE)
    
    if position.get_amount() > 50000 and ticker.get_price() < 50000:
        context.create_limit_buy_order(BINANCE, "BTC", price=50000, amount=1, execute=True)


if __name__ == "__main__":
    app.start()
```