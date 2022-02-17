## Introductory overview
One of the most important aspects of the framework to understand is that it is based around two components
that are run in cycles as part of your algorithm. These components are the strategy and the data provider.

The strategy is the main component of your algorithm that will be run by the algorithm on intervals 
that you specify. In turn the strategy gets its data from the data provider, that is used just before a strategy is run. 
During execution of your strategy your algorithm can make use of the order executor to create orders and 
the portfolio manager to track the portfolio of the algorithm at your broker.

### Framework Overview
The framework provides you with a component based algorithm. Each of these components can be implemented 
by the user of the framework. Also, third party implementations can be used.

**Algorithm components**
- **Data provider**: Component that provides data to the strategies. 
- **Strategy**: Component that holds your algorithm strategy.
- **Order execution**: Component to track and execute orders.
- **Portfolio management**: Component to track and manage your portfolio.

The frameworks also comes with a set of management tools. Currently, we recommend to only use 
the [management commands]("https://investing-algorithm-framework.com/documentation/tutorials/management-commands").

**Management components**
- **Algorithm API**: REST API to operate your algorithm (Implemented for future dashboard implementation).
- **Management Commands**: Management commands to operate your algorithm.
- **Stateless Runner**: Stateless (AWS lambda) runner. (Feature request by one of our sponsors)

![Trading bot architecture](/algorithm-context.png)



