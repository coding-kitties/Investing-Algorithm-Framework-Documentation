# Getting Started

The investing algorithm framework is a framework for creation of investing 
algorithms. The framework helps you write algorithms that behave consistently, 
run in different environments, and are ease to control and integrate with 
other applications.

The algorithms created with the framework consist out of different components.
These components are in-line with the cycles that make up the framework. 

To read more about the cycles of an investing algorithm read the following [article](https://investing-algorithm-framework.com/documentation/introduction/core-concepts) 

For a basic algorithm the following components are needed: DataProvider, Strategy, PortfolioManager, OrderExecutor and a 
AlgorithmContext.

The framework makes sure that each of the components are called in the right order.
## Basic Example

```python
from investing_algorithm_framework import AlgorithmContext, DataProvider, Strategy, PortfolioTracker, OrderExecutor
from investing_algorithm_framework.extensions import BinanceClientMixin

config = {
    binance_api_key = "<your api key>"
}

class BinancePortfolioManager(PortfolioManager, BinanceClientMixin):
    
    def get_portfolio_size(algorithm_context: AlgorithmContext):
        pass
        
    def get_free_space(algorithm_context: AlgorithmContext):
        pass
        
    def get_asset_size(assetType: AssetType, algorithm_context: AlgorithmContext):
        pass  
        

class BinanceOrderExecutor(OrderExecutor, BinanceClientMixin):
    broker_id = BrokerType.BINANCE
    
    def execute_order(order_information, algorithm_context: AlgorithmContext):
        pass
    
class MyStrategy(Strategy):

    def on_quote(self, data, algorithm_context: AlgorithmContext):
        
        if data['ask_price'] < 5000:
            self.perform_buy_order(BrokerType.BINANCE, {})
        
        elif data['bid_price'] > 6000:
            self.perform_sell_order(BrokerType.BINANCE, {})


class MyDataProvider(DataProvider, BinanceClientMixin):
    registered_strategies = [MyStrategy()]

    def extract_quote(self, data, algorithm_context: AlgorithmContext):
        return {
            'ask_price': float(data['askPrice']),
            'bid_price': float(data['bidPrice'])
        }

    def get_data(self, algorithm_context: AlgorithmContext):
        return self.get_book_ticker('BTC_EUR')


if __name__ == '__main__':
    algorithm = AlgorithmContext(
        config=config, 
        data_providers=[MyDataProvider()]
        portfolio_managers=[BinancePortfolioManager()]
        order_executors=[BinanceOrderExecutor()]
    )
    orchestrator = Orchestrator()
    orchestrator.register_algorithm(algorithm)
    orchestrator.start()
```

In the basic example you can see that you can override all the hooks
that are called by the algorithm context. Also, you can provide your own 
implementations of the different components to make the algorithm completely 
configurable.

For example, you can create your own [data providers](https://investing-algorithm-framework.com/documentation/tutorials/fundamentals/data-providers), 
[strategies](https://investing-algorithm-framework.com/documentation/tutorials/fundamentals/strategies), [order executors](https://investing-algorithm-framework.com/documentation/tutorials/fundamentals/order-executors) and
[portfolio managers](https://investing-algorithm-framework.com/documentation/tutorials/fundamentals/portfolio-managers).