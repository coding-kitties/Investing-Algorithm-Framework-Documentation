# Querying
SQLAlchemy comes with a large set of query options for model retrieval. On this page
we will highlight some commonly used query operations.

For querying, the database resolver provides a query attribute on your Model class. When you access it you will get
back a new query object over all records. You can then use methods like 'filter()' to filter the records before
you fire the select with 'all()' or 'first()'. If you want to go by a primary key you can also use 'get()'.

The following operations give you an indication of how the querying works.

## Retrieve a Order by symbol:

```shell
>>> order = Order.query.filter_by(symbol='AAPL').first()
>>> order.id
1
>>> order.symbol
'AAPL'
```

Same as above but for a non existing oder gives None:

```shell
>>> missing = Order.query.filter_by(symbol='MSFT').first()
>>> missing is None
True
```

## Retrieve multiple instances of Model
Retrieving a set of Order instances based on a symbol:

```shell
>>> Order.query.filter_by(symbol='AAPL').all()
[<Order(id=1,symbol='AAPL',price=10.0,created_at=datetime.datetime(2020, 8, 3, 11, 44, 3, 677174))>]
```

## Limiting Queries
Retrieving at most 1 Order instance based on a symbol:

```shell
>>> Order.query.limit(1).all()
[<Order(id=1,symbol='AAPL',price=10.0,created_at=datetime.datetime(2020, 8, 3, 11, 44, 3, 677174))>]
```

## Getting Model instance by primary key
Retrieving Order instance based on a primary key:

```shell
>>> Order.query.get(1)
<Order(id=1,symbol='AAPL',price=10.0,created_at=datetime.datetime(2020, 8, 3, 11, 44, 3, 677174))>
```
