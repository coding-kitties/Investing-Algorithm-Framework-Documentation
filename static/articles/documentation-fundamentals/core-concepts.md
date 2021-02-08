# Core Concepts

An investing algorithm made with the Investing Algorithm Framework is based on 
a set of operations that are executed in a certain order. This set of operations 
form a cycle. A single cycle consists out of the following 3 operations:

* **Data providing**: Data is gathered that can be used by the algorithm. 
* **Strategy execution**: The obtained data is analyzed, and the orders are prepared.
* **Ordering**: The orders are executed on the chosen broker.

<br/>
<br/>
<br/>
<div style="text-align:center">
    <img src="/algorithm-cycles.png" alt="Algorithm Cycle"/>
</div>
<br/>


## Data Providing 
Each algorithm requires data for its strategies. Data providing is done by a data provider, which is 
class in the framework. You can use this class to retrieve the data from your sources, clean it and 
pass it to your strategies. 

> An algorithm can have multiple data providers. Also, a single data provider can have multiple
> strategies that will receive its data.

<br/>
<br/>
<br/>
<div style="text-align:center">
    <img src="/data-provider.png" alt="Data Provider"/>
</div>
<br/>

The framework provides you with a base class of a data provider that you can extend. This gives you
the full freedom to collect the data for your algorithm. 


## Context
Algorithms created with the framework run cycles within a context. The context keeps track 
of the different operations that make up the algorithm and provided the operations with configuration and 
utility functionality. Also, the context is responsible for the portfolio management of the algorithm. Where 
actions within the algorithm will influence your portfolio.

<br/>
<br/>
<br/>
<div style="text-align:center">
    <img src="/algorithm-context.png" alt="Algorithm Cycle"/>
</div>
<br/>




