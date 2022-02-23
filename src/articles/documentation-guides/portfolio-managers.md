## Portfolio managers
The framework provides you with a `PortfolioManager` class that you can extend if you want to connect to a broker that is
not yet supported. A portfolio manager is used by the `AlgorithmContext` to track your portfolio at your broker or exchange.

For a custom portfolio manager you must implement two methods:

* `.get_positions(self, **kwargs)`: method that retrieves all positions from your external portfolio
* `.get_orders(self, **kwargs)`: method that retrieves all orders from your external portfolio

Creating a custom PortfolioManager requires you to implement a set of methods.  

##### .get_positions(self, symbol: str = None):
Method that returns all positions of an algorithm. You should implement the logic that will return all positions 
converted to [Position models](/documentation/guides/models#Position). This method should always return the position 
of your trading symbol (quoted asset). There will be an exception thrown if this is not done by your PortfolioManager.

> The method can receive additional params in the **kwargs param. You can make use of this param if you wish

```python
BINANCE_CCXT_ID = "binance"


class MyPortfolioManager(PortfolioManager):
    identifier = "binance"
    market = "binance"
    exchange_class = getattr(ccxt, BINANCE_CCXT_ID)
    exchange = exchange_class({'apiKey': "<MY_API_KEY>", 'secret': "<MY_SECRET>"})
    
    def get_positions(self, **kwargs) -> list[Position]:
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
```

##### .get_orders(self, symbol: str = None):
Method that returns all orders of an algorithm. You should implement the logic that will return all order
converted to [Order models](/documentation/guides/models#Order).

> The method can receive additional params in the **kwargs param. You can make use of this param if you wish

```python
BINANCE_CCXT_ID = "binance"


class MyPortfolioManager(PortfolioManager):
    identifier = "binance"
    market = "binance"
    exchange_class = getattr(ccxt, BINANCE_CCXT_ID)
    exchange = exchange_class({'apiKey': "<MY_API_KEY>", 'secret': "<MY_SECRET>"})
    
    def get_orders(self, symbol: str = None) -> list[Order]:
        orders = []

        binance_orders = self.exchange.fetchOrders()

        for order in binance_orders:
            orders.append(Order.from_dict({
                "id": order["id"],
                "target_symbol": order["symbol"].split("/")[0].upper(),
                "trading_symbol": order["symbol"].split("/")[1].upper(),
                "order_reference": order["id"],
                "initial_price": order["price"],
                "side": order["side"],
                "status": order["status"],
                "closing_price": order["closing_price"],
                "type": order["type"]
            }))
        return orders
```