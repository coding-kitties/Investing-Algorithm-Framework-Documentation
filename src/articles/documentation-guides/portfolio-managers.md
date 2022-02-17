## Portfolio managers
The framework provides you with a `PortfolioManager` class that you can extend if you want to connect to a broker that is
not yet supported. A portfolio manager is used by the `AlgorithmContext` to track your portfolio at your broker.

* Portfolio managers are used when your algorithm want to see its portfolio.
* You can implement your own PortfolioManager.

Creating a custom PortfolioManager requires you to implement a set of methods.  


##### .get_unallocated(self, order: Order, algorithm_context, **kwargs) -> Position:
Method that receives an [Position](/documentation/guides/models#Position) object
and the algorithm context. You should implement the logic that will return an Position with the amount unnalocated 
of the `trading symbol` your algorithm uses. For example, your algorithm uses 'USDT' for execution of new buy orders.
This method should return the amount of 'USDT' that you have at your broker.

```python
BINANCE_CCXT_ID = "binance"


class MyPortfolioManager(PortfolioManager):
    exchange_class = getattr(ccxt, BINANCE_CCXT_ID)
    exchange = exchange_class({'apiKey': "<MY_API_KEY>", 'secret': "<MY_SECRET>"})

    def get_unallocated(self, algorithm_context, sync=False) -> Position:
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
```

##### .get_positions(self, symbol: str = None):
Method that returns all positions of an algorithm. You should implement the logic that will return all positions 
converted to [Position models](/documentation/guides/models#Position).

The method can optionally receive a symbol param that is used to retrieve a specific position.

```python
BINANCE_CCXT_ID = "binance"


class MyPortfolioManager(PortfolioManager):
    exchange_class = getattr(ccxt, BINANCE_CCXT_ID)
    exchange = exchange_class({'apiKey': "<MY_API_KEY>", 'secret': "<MY_SECRET>"})
    
    def get_positions(self, symbol: str = None, lazy=False) -> list[Position]:
        balances = self.exchange.fetch_balance()["info"]["balances"]
        positions = []
        
        if symbol is not None:
            for balance in balances:
                if balance["asset"] == symbol:
                    return [
                        Position.from_dict(
                            {
                                "amount": balance["free"],
                                "symbol": balance["asset"]
                            }
                        )
                    ]
            
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

The method can optionally receive a symbol param that is used to retrieve a specific set of orders.
```python
BINANCE_CCXT_ID = "binance"


class MyPortfolioManager(PortfolioManager):
    exchange_class = getattr(ccxt, BINANCE_CCXT_ID)
    exchange = exchange_class({'apiKey': "<MY_API_KEY>", 'secret': "<MY_SECRET>"})
    
    def get_orders(self, symbol: str = None) -> list[Order]:
        orders = []

        if symbol is not None:
            binance_orders = self.exchange.fetchOrders(symbol)

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
        else:
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