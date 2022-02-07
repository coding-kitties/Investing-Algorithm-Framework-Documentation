#### Quickstart
In this section we will attempt to guide you in order to get started with the investing algorithm framework easily. 
There are multiple options to get started.


##### Installation
You can easily install the investing algorithm framework with pypi.

> Python 3 is only supported by the framework

```shell
pip install investing-algorithm-framework
```

##### I just want to get started creating strategies without much setup
Currently, there is support for Binance broker coming with the framework. 
You can easily create a working algorithm that is connected to Binance with the following code snippet.

Before running your algorithm make sure that you configure the `BINANCE_API_KEY` and the `BINANCE_SECRET_KEY` in your
algorithm config. You can find these parameters in your Binance account. Also, make sure that you 
specify a `TRADING_SYMBOL` that is used by your algorithm for execution of its buy orders.

```python3
import os
from investing_algorithm_framework import App, TimeUnit, AlgorithmContext, \
    TradingDataTypes, constants

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
    data_provider_identifier=constants.BINANCE,
    target_symbol="BTC",
    trading_data_type=TradingDataTypes.TICKER,
)
def perform_strategy(context: AlgorithmContext, ticker, **kwargs):
    print(f"BTC/USDT ticker data from binance {ticker}")

if __name__ == "__main__":
    app.start()
```

if you want to know more about 


##### I want to connect to a broker that is not yet supported.