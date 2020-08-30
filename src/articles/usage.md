```python
class MyStrategy(Strategy):
    id = 'my_strategy'

    def on_quote(self, data, algorithm_context: AlgorithmContext):
        if data['ask_price'] < 5000:
            print('Buying!!!')
        elif data['bid_price'] > 6000:
            print('Selling!!!')


class MyDataProvider(DataProvider, BinanceDataProviderMixin):
    id = 'my_data_provider'
    registered_strategies = [MyStrategy()]

    def extract_quote(self, data, algorithm_context: AlgorithmContext):
        return {
            'ask_price': float(data['askPrice']),
            'bid_price': float(data['bidPrice'])
        }

    def get_data(self, algorithm_context: AlgorithmContext):
        return self.get_book_ticker('BTC_EUR')


if __name__ == '__main__':
    algorithm = AlgorithmContext('my_algorithm', MyDataProvider())
    orchestrator = Orchestrator()
    orchestrator.register_algorithm(algorithm)
    orchestrator.start()
```
