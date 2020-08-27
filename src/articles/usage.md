```python

class MyStrategy(Strategy):

    def on_quote(self, data, algorithm_context: AlgorithmContext):
        
        if data[] > 500:
            order = Order()
            order.save()

class MyDataProvider(DataProvider):
    registered_strategies = [MyStrategy()]
    
    def get_data(self, algorithm_context: AlgorithmContext):
        return binance.get_quote('BTCEUR')
    
    def extract_quote(self, data, algorithm_context: AlgorithmContext):
        return {buy: data['quote'], sell: data['quote']}

if __name__ == '__main__':
    my_algorithm = AlgorithmContext('my_algorithm', MyDataProvider())
    orchestrator = Orchestrator()
    orchestrator.register_algorithm(my_algorithm)
    orchestrator.start()
```
