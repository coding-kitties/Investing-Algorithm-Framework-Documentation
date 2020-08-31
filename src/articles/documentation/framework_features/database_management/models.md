# Models
The database resolver comes with a Model declaration that can be used as a basis for your own database models. The model declaration is based on an SQLAlchemy declarative base.

Generally, the Model behaves like a properly configured declarative base from the declarative extension from SQLAlchemy. As such we recommend reading the [SQLAlchemy] docs for a full reference. However,
the most common use cases are also documented here.
 
Things to keep in mind:
 
- The base class for all your models is called Model. It’s part of a database resolver instance you have to create. 
See the database resolver documentation for more details.
- Session management is automatically resolved in the session attribute for the Model definition. There is no need to define your own sessions. This session also automatically takes into account threading.

For the remainder of this reference work, we will use the following SQLAlchemyDatabaseResolver configuration.

```python
from pathlib import Path
from investing_algorithm_framework.extensions import SQLAlchemyDatabaseResolver


# Base directory
BASE_DIR = str(Path(__file__).parent)

# Declare instance of SQLAlchemyDataBaseResolver
db = SQLAlchemyDatabaseResolver()

# Configure instance with database configuration
db.configure(
    {
        'DATABASE_TYPE': 'sqlite3',
        'DATABASE_NAME': 'test_db',
        'DATABASE_DIRECTORY_PATH': BASE_DIR
    }
)


if __name__ == '__main__':
    db.initialize_tables()
```

## Simple Model Definition Example
The code below shows the implementation of an Order database model definition.

```python
...

from sqlalchemy import Column, DateTime, String, Float, Integer
from datetime import datetime

...

class Order(db.Model):
    """
    Order database model definition: 

    All the columns and columns types are defined as 
    SQLAlchemy column and column types. 
    """

    id = Column(Integer, primary_key=True)
    symbol = Column(String(48), unique=True, nullable=False)
    price = Column(Float, nullable=False)
    created_at = Column(DateTime, default=datetime.now(), nullable=False)

    # Specify table name to orders, otherwise it would be 
    # resolved to 'order' (classname)    
    table_name = 'orders'

    def __repr__(self):
        # Call helper function
        return self.repr(
            id=self.id,
            symbol=self.symbol,
            price=self.price,
            created_at=self.created_at
        ) 
```
You can use the SQLAlchemy Column class to define a column. The types of the column are the first argument to Column. 
You can either provide them directly or call them to further specify them (like providing a length). For a full 
reference of column types we recommend to see the documentation of [SQLAlchemy]. 


> ⚠ **Note**: Keep in mind that the type of database you chose has a direct influence on which 
> column type you can and can't use. Before you make any definitive choice on the type of 
> database you are going to use, make sure that you look at the documentation of [SQLAlchemy](https://www.sqlalchemy.org/).
 
## Model Operations
The Model base class comes with a set of methods that you can use.

### Creating
With the previously defined model, we can simply create a model by calling its constructor.

```python

...

if __name__ == '__main__':
    db.initialize_tables()
    
    # Create an Order instance
    order = Order(symbol='AAPL', price=10.0)
```

### Saving 
Saving a model is very similar to creating a model. However, creating a model does not mean that the instance is saved to the database. For saving an instance, you can call the 'save()' method.


```python

...

if __name__ == '__main__':
    db.initialize_tables()
    
    # Create an Order instance
    order = Order(symbol='AAPL', price=10.0)

    # Save the model
    order.save()
    
    # Commit to database instance and close connection
    db.session.commit()
    db.session.close()
```

> ⚠ **Note**: Operations that involve the database require you to commit the changes with the session. 
> This can be done by the 'commit()' method from the session object. If you are done using the database, we recommend 
> you to close the database connection. For a further explanation we recommend you to look at the documentation of [SQLAlchemy].

### Updating
Updating is done, by passing the attributes that you want to update with their corresponding (updated) values to the 
'update()' method. 

```python

...

if __name__ == '__main__':
    db.initialize_tables()

    # Create an Order instance
    order = Order(symbol='AAPL', price=10.0)

    # Save the model
    order.save()

    # Commit to database instance
    db.session.commit()

    # Update order
    order = Order.query.filter_by(symbol='AAPL').first()
    order.update(symbol='MSFT')
    order.save()

    # Commit to database instance
    db.session.commit()
    
    # Close connection
    db.session.close()
```

### Deleting
You can delete an instance of a model by calling the 'delete()' method. 

```python

...

if __name__ == '__main__':
    db.initialize_tables()

    # Create an Order instance
    order = Order(symbol='AAPL', price=10.0)

    # Save the model
    order.save()

    # Commit to database instance
    db.session.commit()

    # Delete order
    order = Order.query.filter_by(symbol='AAPL').first()
    order.delete()

    # Commit to database instance
    db.session.commit()
    
    # Close connection
    db.session.close()
```

## Session Handling
Most of the session handling is done for you by the database resolver. However, you still need to commit your
changes explicitly by calling the 'commit()' method of a Session object. Calling this method ensures that all your changes are committed to the database instance you are connected to.

```python
# Commit to database instance
db.session.commit()
```

If you are done with using the database session, it is recommended to close the session object. You can do this by 
calling the 'close()' method of the Session object.

```python
# Close the session to the database instance
db.session.close()
```

## Relationships
Relationships can be defined with SQLAlchemy relationship attribute. Because relationships are declared before they are established you can use strings to refer to classes that are not created yet (for instance if Asset defines a relationship to Order which is declared later in the file).

Relationships are expressed with the SQLAlchemy relationship() function. However, the foreign key has to be separately 
declared with the ForeignKey class:

### One-to-One Relationships
An example of a one-to-one relationship:

```python
...

from sqlalchemy import Column, DateTime, String, Float, Integer, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime

...

class Asset(db.Model):
    id = Column(Integer, primary_key=True)
    symbol = Column(String(48), unique=True, nullable=False)

    # Define relationship with order
    # uselist=false, means there is only relationship possible 
    # between an unique Order and an Asset instance.
    order = relationship('Order', uselist=False, back_populates="asset")

    table_name = 'assets'

    def __repr__(self):
        # Call helper function
        return self.repr(
            id=self.id,
            symbol=self.symbol,
        )


class Order(db.Model):
    id = Column(Integer, primary_key=True)
    price = Column(Float, nullable=False)
    created_at = Column(DateTime, default=datetime.now(), nullable=False)
    
    # Reference to Asset 
    asset_id = Column(Integer, ForeignKey('assets.id'))
    asset = relationship("Asset", back_populates="order")

    table_name = 'orders'

    def __repr__(self):
        # Call helper function
        return self.repr(
            id=self.id,
            price=self.price,
            created_at=self.created_at
        )


# Example usage
if __name__ == '__main__':
    db.initialize_tables()
    
    # Create asset
    asset = Asset(symbol='AAPL')
    asset.save()
    
    # Create order
    order = Order(price=0.5, asset=asset)
    order.save()

    db.session.commit()

    order = Order.query.filter(Order.asset.has(symbol='AAPL')).first()
    print(order)

    db.session.close()
```

### One-to-Many Relationships
A one-to-many relationship is very similar to a one-to-one relationship. You only have to remove the 'uselist' flag.

```python
...

from sqlalchemy import Column, DateTime, String, Float, Integer, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime

...


class Asset(db.Model):
    id = Column(Integer, primary_key=True)
    symbol = Column(String(48), unique=True, nullable=False)

    # Define relationship with order
    # uselist=false, means there is only relationship possible 
    # between an unique Order and an Asset instance.
    order = relationship('Order', back_populates="asset")

    table_name = 'assets'

    def __repr__(self):
        # Call helper function
        return self.repr(
            id=self.id,
            symbol=self.symbol,
        )


class Order(db.Model):
    id = Column(Integer, primary_key=True)
    price = Column(Float, nullable=False)
    created_at = Column(DateTime, default=datetime.now(), nullable=False)
    
    # Reference to Asset 
    asset_id = Column(Integer, ForeignKey('assets.id'))
    asset = relationship("Asset", back_populates="order")

    table_name = 'orders'

    def __repr__(self):
        # Call helper function
        return self.repr(
            id=self.id,
            price=self.price,
            created_at=self.created_at
        )


# Example usage
if __name__ == '__main__':
    db.initialize_tables()
    
    # Create asset
    asset = Asset(symbol='AAPL')
    asset.save()
    
    # Create orders
    order = Order(price=0.5, asset=asset)
    order.save()

    # Create orders
    order = Order(price=0.7, asset=asset)
    order.save()

    db.session.commit()

    orders = Order.query.filter(Order.asset.has(symbol='AAPL')).all()
    print(orders)

    db.session.close()
```

### Many-to-Many Relationships
A many-to-many relation can be defined by adding an association table between two classes. 
The association table is indicated by the relationship.secondary argument to relationship(). 
Usually, the Table uses the MetaData object associated with the declarative base class, 
so that the ForeignKey directives can locate the remote tables with which to link:


```python
...

from sqlalchemy import Column, DateTime, String, Float, Integer, ForeignKey, \
    Table
from sqlalchemy.orm import relationship

...


order_assets_relations = Table('orders_assets', db.metadata,
    Column('order_id', Integer, ForeignKey('orders.id'), primary_key=True),
    Column('asset_id', Integer, ForeignKey('assets.id'), primary_key=True)
)


class Asset(db.Model):
    id = Column(Integer, primary_key=True)
    symbol = Column(String(48), unique=True, nullable=False)

    # Add many-to-many relationship
    orders = relationship(
        "Order",
        secondary=order_assets_relations,
        back_populates="assets"
    )

    table_name = 'assets'

    def __repr__(self):
        # Call helper function
        return self.repr(
            id=self.id,
            symbol=self.symbol,
        )


class Order(db.Model):
    id = Column(Integer, primary_key=True)
    price = Column(Float, nullable=False)
    created_at = Column(DateTime, default=datetime.now(), nullable=False)

    # Add many-to-many relationship
    assets = relationship(
        "Asset",
        secondary=order_assets_relations,
        back_populates="orders"
    )

    table_name = 'orders'

    def __repr__(self):
        # Call helper function
        return self.repr(
            id=self.id,
            price=self.price,
            created_at=self.created_at
        )


# Example usage
if __name__ == '__main__':
    db.initialize_tables()

    # Create orders
    order_one = Order(price=0.5)
    order_one.save()

    order_two = Order(price=0.7)
    order_two.save()

    # Create assets
    aapl_asset = Asset(symbol='AAPL')
    aapl_asset.save()

    msft_asset = Asset(symbol='MSFT')
    msft_asset.save()

    order_one.assets.append(aapl_asset)
    order_one.assets.append(msft_asset)

    order_two.assets.append(aapl_asset)
    order_two.assets.append(msft_asset)

    db.session.commit()

    print(aapl_asset.orders)
    print(order_one.assets)

    db.session.close()
```



