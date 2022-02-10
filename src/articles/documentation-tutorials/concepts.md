## Import Concepts
There are some important concepts to understand in order to work effectively with the framework:

### Strategies
A strategy is the core of your algorithm. The framework provides you with a `strategy` decorator that you 
can use to register a strategy for your algorithm.

A minimal strategy only requires you to specify the `time_unit` and the `interval` attribute.

```python
@app.algorithm.strategy(time_unit=TimeUnit.MINUTES, interval=1)
def perform_strategy(context: AlgorithmContext, **kwargs):
    print("I run every minute")
```

You can define multiple strategies with each their own time interval specification.

```python
@app.algorithm.strategy(time_unit=TimeUnit.MINUTES, interval=1)
def perform_strategy_one(context: AlgorithmContext, **kwargs):
    print("I run every minute")
    
@app.algorithm.strategy(time_unit=TimeUnit.MINUTES, interval=5)
def perform_strategy_two(context: AlgorithmContext, **kwargs):
    print("I run every 5 minutes")
```
if you want to know more about strategies you can read this [article](https://investing-algorithm-framework/documentation/guides/strategies).

### Data Providers
Data providers are run before execution of your strategy. You can specify the data provider that is run 
with the 'data_provider_identifier' attribute in the strategy. Also, you can specify in your strategy which data 
you expect to receive from the data provider with either the `trading_data_type` or `trading_data_types` attributes in 
your strategy definition.

> Make sure that you implement the hooks in your data provider for the `trading_data_type` or `trading_data_types` you specify in 
> you strategy. e.g. you need to implement the `provide_ticker` method in your data provider 
> if you want ticker data in your strategies.

```python
class MyDataProvider(DataProvider):
    identifier = "my_data_provider"

    def provide_ticker(
        self, target_symbol, trading_symbol, algorithm_context, **kwargs
    ) -> Ticker:
        return Ticker.from_dict({"price": 5000, "symbol": "BTCUSDT"})


app.add_data_provider(MyDataProvider)


@app.algorithm.strategy(
    time_unit=TimeUnit.SECONDS,
    interval=1,
    data_provider_identifier="my_data_provider",
    trading_data_type=TradingDataTypes.TICKER,
    target_symbol="BTC"
)
def perform_strategy_one(context: AlgorithmContext, ticker, **kwargs):
    print(ticker)
```

#### Registering a data provider
You can register a data provider at your app with the `add_data_provider` method.

```python
# Register a data provider
app.add_data_provider(MyDataProvider)
```

### Portfolio Managers
Portfolio managers allows you to track and manage your portfolio from your broker. 
Also, the framework uses the portfolio manager to track the performance of you algorithm.

> The example portfolio manager uses the ccxt library to connect to Binance. We do not recommend writing your 
> own portfolio managers. However, if your selected broker is not yet supported by the framework you have the option 
> as shown below to implement it yourself.
```python
BINANCE_CCXT_ID = "binance"


class MyPortfolioManager(PortfolioManager):
    exchange_class = getattr(ccxt, BINANCE_CCXT_ID)
    exchange = exchange_class({
        'apiKey': "<MY_API_KEY>",
        'secret': "<MY_SECRET>",
    })

    def get_unallocated(self, algorithm_context, sync=False):
        balances = self.exchange.fetch_balance()["info"]["balances"]

        for balance in balances:
            if balance["asset"] == algorithm_context.trading_symbol:
                return Position.from_dict(
                    {
                        "amount": balance["free"],
                        "symbol": balance["asset"]
                    }
                )

        return None

    def get_positions(self, symbol: str = None, lazy=False):
        balances = self.exchange.fetch_balance()["info"]["balances"]
        positions = []

        for balance in balances:
            positions.append(
                Position.from_dict(
                    {
                        "amount": balance["free"],
                        "symbol": balance["asset"]
                    }
                )
            )

        return positions

    def get_orders(self, symbol: str = None, lazy=False):

        if symbol is not None:
            order = self.exchange.fetchOrders(symbol)

            return Order.from_dict(
                {
                    "id": order.order_reference,
                    "target_symbol": symbol.split("/")[0].upper(),
                    "trading_symbol": symbol.split("/")[1].upper(),
                    "order_reference": order.id,
                    "initial_price": order.price,
                    "side": order.side,
                    "status": order.status,
                    "closing_price": order.closing_price,
                    "type": order.type
                }
            )
        else:
            orders = []
            binance_orders = self.exchange.fetchOrders()

            for order in binance_orders:
                orders.append(Order.from_dict({
                    "id": order.order_reference,
                    "target_symbol": order.asset.split("/")[0].upper(),
                    "trading_symbol": order.asset.split("/")[1].upper(),
                    "order_reference": order.id,
                    "initial_price": order.price,
                    "side": order.side,
                    "status": order.status,
                    "closing_price": order.closing_price,
                    "type": order.type
                }))
            return orders
```

#### Registering a Portfolio Manager
You can register a portfolio manager at your app with the `add_portfolio_manager` method.

```python
# Register a portfolio manager
app.add_portfolio_manager(MyPortfolioManager)
```

### Order Executors
Order executors are used to create orders and retrieve order statuses from your broker. 

> The example order executor uses the ccxt library to connect to Binance. We do not recommend writing your
> own order executors. However, if your selected broker is not yet supported by the framework you have the option 
> as shown below to implement it yourself.

```python
BINANCE_CCXT_ID = "binance"


class MyOrderExecutor(OrderExecutor):
    identifier = "my_portfolio_manager"
    exchange_class = getattr(ccxt, BINANCE_CCXT_ID)
    exchange = exchange_class({
        'apiKey': "<MY_API_KEY>",
        'secret': "<MY_SECRET>",
    })

    def create_order(
        self, symbol, price, amount_trading_symbol, amount_target_symbol, order_type, order_side, context
    ) -> Order:

        if OrderType.LIMIT.equals(order_type):

            if OrderSide.BUY.equals(order_side):
                order = self.exchange.create_market_buy_order(
                    symbol, amount_trading_symbol
                )
            else:
                order = self.exchange.create_market_sell_order(
                    symbol, amount_target_symbol
                )
        else:
            if OrderSide.BUY.equals(order_side):
                order = self.exchange.create_limit_buy_order(
                    symbol, amount_trading_symbol, price
                )
            else:
                order = self.exchange.create_limit_sell_order(
                    symbol, amount_target_symbol, price
                )

        return Order.from_dict({
            "id": order.order_reference,
            "target_symbol": order.asset.split("/")[0].upper(),
            "trading_symbol": order.asset.split("/")[1].upper(),
            "order_reference": order.id,
            "initial_price": order.price,
            "side": order.side,
            "status": order.status,
            "closing_price": order.closing_price,
            "type": order.type
        })

    def get_order_status(self, order, algorithm_context, **kwargs) -> Order:
        symbol = f"{order.get_target_symbol()}/{order.get_trading_symbol()}"
        binance_order = self.exchange.fetchOrders(symbol)

        if binance_order is not None:

            if binance_order["info"]["status"] == "FILLED":
                order.set_status(OrderStatus.SUCCESS)

            if binance_order["info"]["status"] == "REJECTED":
                order.set_status(OrderStatus.FAILED)

            if binance_order["info"]["status"] == "PENDING_CANCEL":
                order.set_status(OrderStatus.FAILED)

            if binance_order["info"]["status"] == "EXPIRED":
                order.set_status(OrderStatus.FAILED)

        return order
    
    def cancel_order(self, order) -> Order:
        self.exchange.cancelOrder(
            order.get_order_reference(),
            f"{order.get_target_symbol()}/{order.get_trading_symbol()}"
        )
        
        order.set_status(OrderStatus.CANCELED)
        return order
```

#### Registering an order executor
You can register an order executor at your app with the `add_order_executor` method.

```python
# Register an order executor
app.add_order_executor(MyOrderExecutor)
```
