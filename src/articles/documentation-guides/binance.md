## Connecting to Binance
You can connect your algorithm to binance by specifying the `BINANCE_API_KEY` and the `BINANCE_SECRET_KEY` attributes 
in your algorithm config.

```python
import os
from investing_algorithm_framework import App, AlgorithmContext

app = App(
    resources_directory=os.path.abspath(os.path.join(os.path.realpath(__file__), os.pardir)),
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
def perform_strategy(context: AlgorithmContext, ticker, **kwargs):
    print(f"BTC/USDT ticker data from binance {ticker}")

if __name__ == "__main__":
    app.start()
```