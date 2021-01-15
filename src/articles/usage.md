```python
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
