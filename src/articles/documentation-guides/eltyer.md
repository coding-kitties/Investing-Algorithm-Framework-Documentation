## Connecting with ELTYER
ELTYER is one of our sponsors for the framework and has created their own plugin that can be used to connect 
your algorithm to their platform.

### Installation
You can install their plugin with the following command

```python
pip install eltyer-investing-algorithm-framework
```

### Example usage
An example registering their components (Portfolio Manager, initializer and Order Executor) with your app.

```python
import os
from investing_algorithm_framework import App
from eltyer_investing_algorithm_framework import constants, PortfolioManager, Initializer, OrderExecutor

# Current working dir as resource directory
dir_path = os.path.abspath(os.path.join(os.path.realpath(__file__), os.pardir))

# Create the app (Make sure that you put your trading bot api key in the config)
app = App(
    resources_directory=dir_path,
    config={constants.ELTYER_API_KEY: "<YOUR_ELTYER_TRADING_BOT_API_KEY>"}
)

# Add the eltyer components (Initializer, OrderExecutor, and PortfolioManager)
app.add_initializer(Initializer)
app.add_order_executor(OrderExecutor)
app.add_portfolio_manager(PortfolioManager)

if __name__ == "__main__":
    app.start()
```

### Documentation
You can read more about the plugin of ELTYER on their [documentation website](https://docs.eltyer.com/investing-algorithm-framework-plugin/introduction).