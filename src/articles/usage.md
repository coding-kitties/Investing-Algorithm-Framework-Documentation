```python
import os
from investing_algorithm_framework import App

app = App(resources_directory=os.path.abspath(os.path.join(os.path.realpath(__file__), os.pardir)))

@app.algorithm.strategy(
    time_unit="SECOND", 
    interval=5, 
    market="BINANCE", 
    target_symbol="BTC", 
    trading_data_type="OHCLV",
    trading_time_unit="ONE_DAY",
    limit=100
)
def perform_strategy(context, ohclv):
    print(ohclv) 

if __name__ == "__main__":
    app.start()
```