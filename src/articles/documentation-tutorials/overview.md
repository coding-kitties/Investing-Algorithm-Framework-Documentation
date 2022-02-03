#### Introductory overview
One of the most important aspects of the framework to understand is that it is based around four components
that are run in cycles as part of your algorithm. These components are the strategy, the data provider, order executor 
and the portfolio manager.

The strategy is the main component of your algorithm that will be run by the algorithm context on a specific interval 
that you specify. In turn the strategy gets its data from the data provider. During execution of your strategy your 
algorithm can make use of the order executor to connect to your broker and the portfolio manager to track the portfolio 
of the algorithm at your broker.


##### Framework components

1 **Data provider**: 
    Data is gathered that can be used by the algorithm. 
2 **Strategy execution**: The obtained data is analyzed, and the orders are prepared.
* **Ordering**: The orders are executed on the chosen broker.

![Trading bot architecture](/algorithm-context.png)

## Data Providing 
Each algorithm requires data for its strategies. Data providing is done by a data provider, which is 
class in the framework. You can use this class to retrieve the data from your sources, clean it and 
pass it to your strategies. 

> An algorithm can have multiple data providers. Also, a single data provider can have multiple
> strategies that will receive its data.

The framework provides you with a base class of a data provider that you can extend. This gives you
the full freedom to collect the data for your algorithm. 


## Context
Algorithms created with the framework run cycles within a context. The context keeps track 
of the different operations that make up the algorithm and provided the operations with configuration and 
utility functionality. Also, the context is responsible for the portfolio management of the algorithm. Where 
actions within the algorithm will influence your portfolio.



