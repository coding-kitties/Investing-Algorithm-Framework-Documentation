# Core Concepts

An investing algorithm made with the Investing Algorithm Framework is based on 
a set of operations that are executed in a certain order. This set of operations 
form a cycle. A single cycle consists out of the following 3 operations: data providing, strategy execution and 
ordering.

<br/>
<br/>
<br/>
<div style="text-align:center">
    <img src="/algorithm-cycles.png" alt="Algorithm Cycle"/>
</div>
<br/>


## Data Providing 
Each algorithm requires data for its strategies. Data providing is done by a data provider.
You can use object to retrieve the data from your sources, clean it and 
pass it to your strategies. A single data provider can have a multitude of strategies that get date from
the data provider.

<br/>
<br/>
<br/>
<div style="text-align:center">
    <img src="/data-provider.png" alt="Data Provider"/>
</div>
<br/>


## Context
Algorithms created with the framework run cycles within a context. The context keeps track 
of the different operations that make up the algorithm and provided the operations with configuration and 
utility functionality. Also, the context is responsible for the portfolio management of the algorithm. 

<br/>
<br/>
<br/>
<div style="text-align:center">
    <img src="/algorithm-context.png" alt="Algorithm Cycle"/>
</div>
<br/>




