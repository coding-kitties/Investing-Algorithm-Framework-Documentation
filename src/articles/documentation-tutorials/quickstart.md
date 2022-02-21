## Quickstart
In this section we will attempt to guide you in order to get started with the investing algorithm framework easily. 
There are multiple options to get started.

### I just want to get started creating strategies without much setup
Currently, there is support for Binance coming with the framework. 
You can easily create a working algorithm that is connected to Binance with the following code snippet.

Before running your algorithm make sure that you configure the `BINANCE_API_KEY` and the `BINANCE_SECRET_KEY` in your
algorithm config. You can find these parameters in your Binance account. Also, make sure that you 
specify a `TRADING_SYMBOL` that is used by your algorithm for execution of its buy orders.

```python
import os
from investing_algorithm_framework import App, AlgorithmContext

app = App(
    resources_directory=os.path.abspath(os.path.join(os.path.realpath(__file__), os.pardir)),
    config={
        "BINANCE_API_KEY": "<BINANCE_API_KEY>",
        "BINANCE_SECRET_KEY": "<BINANCE_SECRET_KEY>",
        "TRADING_SYMBOL": "USDT",
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

if you want to know more about binance configuration you can read this [article](https://investing-algorithm-framework.com/documentation/guides/binance)

### I want to connect to a broker that is not yet supported
You can connect to a broker that is not yet supported with custom components. This can be done by implementing your own 
portfolio manager and order executor.

The portfolio manager allows your algorithm to track and manage the portfolio at your broker and the order executor 
allows your algorithm to execute and track orders at your broker.

#### Custom Portfolio Manager
For a custom portfolio manager you need to extend the `PortfolioManager` class. This portfolio manager must be 
able to convert the positions and orders that your selected broker returns to the Order and Position models that the 
framework uses. 

For a guide about position and order models we recommend you to read this [article](https://investing-algorithm-framework/documentation/guides/models)

A reference implementation of a portfolio manager can be seen below.

```python
from investing_algorithm_framework import PortfolioManager

class CustomPortfolioManager(PortfolioManager):
    identifier = "<BROKER_X>"
    market = "<BROKER_X>"

    def get_unallocated(self, algorithm_context, sync=False) -> Position:
        # Example get_unallocated implementation
        # .... retrieve trading symbol position from your broker
        data = {}
        return Position.from_dict({"amount": data["amount"], "symbol": data["symbol"]})

    def get_positions(self, symbol: str = None, lazy=False) -> List[Position]:
        # Example get_positions implementation
        # .... retrieve all positions from your broker
        data = []
        positions = []
        
        for position_data in data:
            positions.append(
                Position.from_dict({"amount": position_data["amount"], "symbol": position_data["symbol"]})
            )

        return positions

    def get_orders(self) -> List[Order]:
        # Example get_orders implementation
        # .... retrieve all orders from your broker
        data = []
        orders = []

        for order_data in data:
            orders.append(Order.from_dict({
                "id": order_data["id"],
                "target_symbol": order_data["asset"].split("/")[0].upper(),
                "trading_symbol": order_data["asset"].split("/")[1].upper(),
                "order_reference": order_data["id"],
                "initial_price": order_data["price"],
                "side": order_data["side"],
                "status": order_data["status"],
                "closing_price": none,
                "type": order_data["type"]
            }))
        return orders
```

#### Custom Order Executor
For a custom order executor you need to extend the `OrderExecutor` class. The order executor that you define must be
able to convert the orders that your selected broker returns to the Order model that the framework uses.

For a guide about position and order models we recommend you to read this [article](https://investing-algorithm-framework/documentation/guides/models)

A reference implementation of a order executor can be seen below.

```python
from investing_algorithm_framework import OrderExecutor

class CustomOrderExecutor(OrderExecutor):
    identifier = "<BROKER_X>"

    def create_order(self,
        symbol,
        price,
        amount_trading_symbol,
        amount_target_symbol,
        order_type=OrderType.LIMIT.value,
        order_side=OrderSide.BUY.value,
        context=None,
    ) -> Order:
        # .... Create order at broker
        data = {}
        return Order.from_dict({
            "id": order_data["id"],
            "target_symbol": order_data["asset"].split("/")[0].upper(),
            "trading_symbol": order_data["asset"].split("/")[1].upper(),
            "order_reference": order_data["id"],
            "initial_price": order_data["price"],
            "side": order_data["side"],
            "status": order_data["status"],
            "closing_price": none,
            "type": order_data["type"]
        })

    def get_order_status(self, order: Order, algorithm_context, **kwargs) -> Order:
        # .... Retrieve order from broker
        data = {}
        order.set_status(OrderStatus.from_string(data["status"]))
        return order
```

You can then register your portfolio manager and order executor at your app with:

```python
app.add_order_executor(CustomOrderExecutor)
app.add_portfolio_manager(CustomPortfolioManager)
```

