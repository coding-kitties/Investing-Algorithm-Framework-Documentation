# Data Providers

Data providers collect the data for your algorithm. A data providers helps you to collect 
data at specific intervals or events.

Creation of a data provider is rather simple. You only have to extend the abstract base class
of a data provider as can be seen below.

```python
from investing_algorithm_framework import DataProvider

class MyDataProvider(DataProvider):

    def get_data(self, algorithm_context: AlgorithmContext):
        print("Collecting some data")
        print("....")
        
        return {"ADAEUR": 3000}    
```
The 'get_data' method is the main function for your data provider. All strategies linked 
to your data provider will receive the returned value of this method.

Configuration and portfolio functionality can be accessed through the algorithm_context 
parameter.

```python
.... 

    def get_data(self, algorithm_context: AlgorithmContext):
        
        # You can use the context to store configuration and retrieve the 
        # config properties in your components
        api_key = algorithm_context.config["API_KEY"]
        
        print("Collecting some data")
        print("....")
        
        return {"BTC": 3000}    
```

## Hooks
A data provider has also defined different hooks for you to override. These hooks can be used 
to provide specific data to your strategies.

> Strategies that are linked to your data providers will be notified when a specific hook is
> called of the data provider they are subscribed to.
> 
> It is not required to use these hooks. Your strategies will always receive the raw
> data in the 'on_raw_data' method.

Data providers support the following hooks:

### Hook: extract_quote
```python
    def extract_quote(self, data, algorithm_context: AlgorithmContext):
```
A quote is the last price at which a security or commodity traded,
meaning the most recent price to which a buyer and seller agreed and
at which some amount of the asset was transacted. The bid or ask
quotes are the most current prices and quantities at which the shares
can be bought or sold. Quotes are displayed as: sell price – buy price.
For example, if 125.7 – 125.9 is the quote: 125.7 is the sell
price and 125.9 is the buy price.

### Hook: extract_order_book
```python
    def extract_order_book(self, data, algorithm_context: AlgorithmContext):
```
Function to extract the list of buy and sell orders for a
specific security categorized by price level.

An order book lists the number of shares being bid on or
offered at each price point, or market depth

Override this function when you want to extract order book
data for specific securities and pass it directly to your strategies.

### Example Binance Data Provider
```python
from investing_algorithm_framework import ScheduledDataProvider
from investing_algorithm_framework.core.context import AlgorithmContext
from investing_algorithm_framework.core.utils import TimeUnit


class CardanoCoinDataProvider(DataProvider, BinanceClientMixin):
    # Run every hour
    time_unit = TimeUnit.HOUR.value
    time_interval = 1
    
    def get_data(self, algorithm_context: AlgorithmContext):
        """
        Main data providing function that will collect all the
        data needed for the strategies.

        This data provider also override some data hooks for prettier data
        distribution over the strategies.

        :param algorithm_context: The algorithm context of the data provider
        :return: dict with all the data
        """
        
        # Get binance api key from the context
        binance_api_key = algorithm_context.config["BINANCE_API_KEY"]
        
        # Form the raw data dictionary
        raw_data = {
            "quote": self.binance_client.get_price(
                api_key=binance_api_key,
                symbol="ADAEUR"
            ),
            "order_book": self.binance_client.get_book_ticker(
                api_key=binance_api_key,
                symbol="ADAEUR"
            )
        }

        # Return the raw data
        return raw_data

    def extract_order_book(self, data, algorithm_context: AlgorithmContext):
        """
        This is a hook override that will extract the order book
        from the raw data and provide it to the strategies that
        are subscribed to the data provider.

        :param data: The resulting raw data from the 'get_data()' method
        :param algorithm_context: The algorithm context of the data provider
        :return: order_book extraction that will be given to the strategies
        """
        return data["order_book"]

    def extract_quote(self, data, algorithm_context: AlgorithmContext):
        """
        This is a hook override that will extract the quote
        from the raw data and provide it to the strategies that
        are subscribed to the data provider.

        :param data: The resulting raw data from the 'get_data()' method
        :param algorithm_context: The algorithm context of the data provider
        :return: quote extraction that will be given to the strategies
        """
        return data["quote"]
```
