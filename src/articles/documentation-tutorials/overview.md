#### Introductory overview
One of the most important aspects of the framework to understand is that it is based around two components
that are run in cycles as part of your algorithm. These components are the strategy and the data provider.

The strategy is the main component of your algorithm that will be run by the algorithm on specific intervals 
that you specify. In turn the strategy gets its data from the data provider. During execution of your strategy your 
algorithm can make use of the order executor to connect to your broker and the portfolio manager to track the portfolio 
of the algorithm at your broker.


##### Framework components

- **Data provider**: Data is gathered that can be used by your strategies. 
- **Strategy**: Strategy is run with the provided data.
- **Order execution**: Orders are executed
- **Portfolio management**: Portfolio is synced and tracked

**Framework components overview**

![Trading bot architecture](/algorithm-context.png)

Each of these components can be implemented by the user of the framework. Also, third party implementations can be used 
with the framework.



