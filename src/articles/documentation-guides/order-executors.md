## Order executors
The framework provides you with a `OrderExecutor` class that you can extend if you want to connect to a broker that is 
not yet supported. An order executor is used by the `AlgorithmContext` to execute orders with.

* OrderExecutor is used when your algorithm makes an order.
* You can implement your own OrderExecutor.

Creating a custom OrderExecutor requires you to implement a set of methods.  

##### .execute_order(self, order: Order, algorithm_context, **kwargs) -> bool:
Method that receives an [Order](https://investing-algorithm-framework.com/documentation/guides/models#Order) object 
and the algorithm context. You should implement the logic that will execute this order at your broker.

If done successfully, you should set the status to "PENDING" or if failed to "FAILED".

```python
BINANCE_CCXT_ID = "BINANCE"

class MyOrderExecutor(OrderExecutor):
    """
    OrderExecutor that uses the ccxt library.
    """
    
    def execute_order(self, order: Order, algorithm_context, **kwargs) -> Order:
        exchange_class = getattr(ccxt, BINANCE_CCXT_ID)
        exchange = exchange_class({'apiKey': "<MY_API_KEY>", 'secret': "<MY_SECRET>"})
        symbol = f"{order.target_symbol}/{algorithm_context.trading_symbol}"
        
        if OrderType.MARKET.equals(order_type):

            if OrderSide.BUY.equals(order_side):
                order = self.exchange.create_market_buy_order(symbol, order.amount_trading_symbol)
            else:
                order = self.exchange.create_market_sell_order(symbol, order.amount_target_symbol)
        else:
            if OrderSide.BUY.equals(order_side):
                order = self.exchange.create_limit_buy_order(
                    symbol, order.amount_trading_symbol, order.price
                )
            else:
                order = self.exchange.create_limit_sell_order(symbol, order.amount_target_symbol, price)
        
        order.set_status(OrderStatus.PENDING)
        return order
```


##### .get_order_status(self, order: Order, algorithm_context, **kwargs) -> OrderStatus:
This method is used to update the status of the [Order model](https://investing-algorithm-framework.com/documentation/guides/models#Order)
```python
BINANCE_CCXT_ID = "BINANCE"

class MyOrderExecutor(OrderExecutor):
    """
    OrderExecutor that uses the ccxt library.
    """
    
    def check_order_status(self, order: Order, algorithm_context, **kwargs) -> Order:
        exchange_class = getattr(ccxt, BINANCE_CCXT_ID)
        exchange = exchange_class({'apiKey': "<MY_API_KEY>", 'secret': "<MY_SECRET>"})
        symbol = f"{order.get_target_symbol()}/{order.get_trading_symbol()}"
        
        binance_order = self.exchange.fetchOrders(symbol)[0]
    
        if binance_order[0] is not None:

            if binance_order["info"]["status"] == "FILLED":
                order.set_status(OrderStatus.SUCCESS)

            if binance_order["info"]["status"] == "REJECTED":
                order.set_status(OrderStatus.FAILED)

            if binance_order["info"]["status"] == "PENDING_CANCEL":
                order.set_status(OrderStatus.FAILED)

            if binance_order["info"]["status"] == "EXPIRED":
                order.set_status(OrderStatus.FAILED)

        return order
```
