#### Import Concepts
There are some important concepts to understand in order to work effectively with the framework:

##### Strategies
This is the heart of your algorithm. A strategy will only run on the time interval that you specify. 

```python
@app.algorithm.strategy(time_unit=TimeUnit.MINUTES, interval=1)
def perform_strategy(context: AlgorithmContext, **kwargs):
    print("I run every minute")
```

You can register multiple strategies with each their own time interval.

```python
@app.algorithm.strategy(time_unit=TimeUnit.MINUTES, interval=1)
def perform_strategy_one(context: AlgorithmContext, **kwargs):
    print("I run every minute")
    
@app.algorithm.strategy(time_unit=TimeUnit.MINUTES, interval=5)
def perform_strategy_two(context: AlgorithmContext, **kwargs):
    print("I run every 5 minutes")
```

#### Data Providers
Data providers are run before execution of your strategy. You can specify the data provider that is run 
with the 'data_provider_identifier' attribute in the strategy.

```python
@app.algorithm.strategy(time_unit=TimeUnit.MINUTES, interval=1)
def perform_strategy_one(context: AlgorithmContext, **kwargs):
    print("I run every minute")
    
@app.algorithm.strategy(time_unit=TimeUnit.MINUTES, interval=5)
def perform_strategy_two(context: AlgorithmContext, **kwargs):
    print("I run every 5 minutes")
```


[Read more about our unique architecture here.](https://www.getunleash.io/blog/our-unique-architecture)

## Unleash Context

Since the SDKs perform local evaluation, some of the parameters needed for evaluation must be supplied through the Unleash Context. The unleash context allows you to pass in userIds, sessionIds or other relevant information that is needed in order to perform the evaluation. If, for example, you want to enable a feature for a set of specific userIds, you would need to provide the current userId in the unleash context in order for the evaluation to enable the feature.

[You can read more about the unleash context here.](./unleash_context)

## API architecture

The Unleash API is split into two. One API is for the clients connecting to unleash. It is located under the path /api/client. This provides access to retrieving saved feature toggle configurations, metrics and registering the application.

The second API is the admin API, which is utilised in order to control any CRUD aspect of unleash resources. The split ensures a second layer of security that ensures that in the case you should loose your client api key, attackers will only have read-only access to your feature toggle configurations.

This ensures that we can have different data responses for the client API endpoints which will include less metadata, and be cached more heavily - optimising the SDK endpoints for best performance.

[Read more about unleash API here.](../api)

## Feature toggle types

Unleash categorizes feature toggles into five distinct types. This categorization makes it easier for you to see what the purpose of a toggle is and helps Unleash with [managing technical debt](/user_guide/technical_debt). A feature toggle's type has no effect on how the toggle behaves or how you can configure it.

[Read more about feature toggle types here.](../advanced/feature-toggle-types.md)