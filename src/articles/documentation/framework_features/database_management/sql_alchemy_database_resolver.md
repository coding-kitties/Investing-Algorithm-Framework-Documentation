# SQL alchemy database resolver
The SQL alchemy database resolver is a class that initializes and manages 
the object-relational mapping (ORM) framework of SQLAlchemy. It aims to simplify using the ORM with your 
investing algorithm by providing useful defaults and extra helpers that make it easier to accomplish common tasks. 
The database resolver is not a direct implementation of SQLAlchemy nor does it provide similar functionality. 

For an in-depth understanding of SQLAlchemy, see the [documentation](https://www.sqlalchemy.org/) to learn how 
to work with the ORM. The following documentation is a brief overview of the most common tasks, as well as the features 
specific to the Investing Algorithm Framework.

### SQLite3
The SQLAlchemyDataBaseResolver supports SQLite3. SQLite3 is an embedded database great for single concurrent database usage. 
Therefore, it is great when you run a single investing algorithm instance that is only allowed to 
use the database. 

If you have multiple investing algorithms running, that all use the same database. Using SQLite3 is not a great pick. 
It is then recommended to look at PostgreSQL.

#### Configuration
An SQLAlchemyDataBaseResolver can be configured to use SQLite3 with the following instructions.

```python
from pathlib import Path
from investing_algorithm_framework.extensions import SQLAlchemyDatabaseResolver

# Base directory
BASE_DIR = str(Path(__file__).parent.parent)

# Declare instance of SQLAlchemyDatabaseResolver
db = SQLAlchemyDatabaseResolver()

# Configure instance with database configuration
db.configure(
    {
        'DATABASE_TYPE': 'sqlite3',
        'DATABASE_NAME': 'test_db',
        'DATABASE_DIRECTORY_PATH': BASE_DIR
    }
)
```
if you want to set the configuration explicitly, you can configure the SQLAlchemyDataBaseResolver 
in the following way:

```python
from pathlib import Path
from investing_algorithm_framework.extensions import SQLAlchemyDatabaseResolver

# Base directory
BASE_DIR = str(Path(__file__).parent.parent)

# Declare an instance of SQLAlchemyDatabaseResolver
db = SQLAlchemyDatabaseResolver()

# Set the SQLite3 configuration 
db.set_sqlite_config(
    {
        'DATABASE_NAME': 'test_db',
        'DATABASE_DIRECTORY_PATH': BASE_DIR
    }
)

# Configure the database resolver
db.configure()
```

### PostgreSQL
The SQLAlchemyDataBaseResolver supports also PostgreSQL databases. PostgreSQL is a database great for multiple concurrent database usage. Therefore, it is great when you run multiple investing algorithm instances that use the same database.

#### Configuration
The PostgreSQL database engine that is maintained by the SQLAlchemyDatabaseResolver uses the psycopg2 library. Therefore, the database resolver can be configured to use PostgreSQL with the following instructions.

 ```python
 from investing_algorithm_framework.extensions import SQLAlchemyDatabaseResolver
 
 # Declare instance of SQLAlchemyDataBaseResolver
 db = SQLAlchemyDatabaseResolver()
 
 # Configure instance with database configuration
 db.configure(
     {
         'DATABASE_TYPE': 'postgresql',
         'DATABASE_URL': ''postgresql://scott:tiger@localhost/mydatabase'',
     }
 )
 ```
 if you want to set the configuration explicitly, you can configure the SQLAlchemyDataBaseResolver 
 in the following way:
 
 ```python
 from investing_algorithm_framework.extensions import SQLAlchemyDatabaseResolver
 
 # Declare an instance of SQLAlchemyDatabaseResolver
 db = SQLAlchemyDatabaseResolver()
 
 # Set the PostgreSQL configuration 
 db.set_postgresql_config(
     {
         'DATABASE_URL': ''postgresql://scott:tiger@localhost/mydatabase'',
     }
 )
 
 # Configure the database resolver
 db.configure()
 ```

### Initialization
Initialization of a database can be somewhat tricky. You only want to do the initialization at the start 
of your algorithm life-cycle. 

When your algorithm is started you want to make sure that all the database tables 
are created.

You can do this by calling the following method:

```python
...

# Initialize the tables
db.initialize_tables()
```

However, initialization of the database can best be orchestrated in a AlgorithmContextInitializer that 
you algorithm will run every time it is started.


```python
from pathlib import Path
from investing_algorithm_framework.core.context import AlgorithmContextInitializer
from investing_algorithm_framework.extensions import SQLAlchemyDatabaseResolver

# Declare an instance of SQLAlchemyDataBaseResolver
db = SQLAlchemyDatabaseResolver()

# Configure instance with database configuration
db.configure(
    {
        'DATABASE_TYPE': 'postgresql',
        'DATABASE_URL': ''postgresql://scott:tiger@localhost/mydatabase'',
    }
)

# Base directory
BASE_DIR = str(Path(__file__).parent.parent)

class MyDatabaseInitializer(AlgorithmContextInitializer):

    def initialize(self, algorithm_context: AlgorithmContext) -> None:
        db.initialize_tables()
```

### Session management
The SQLAlchemyDatabaseResolver handles your sessions with the database instance. 
It also makes sure that different sessions are created when using multiple threads, which prevents conflict when 
sessions are used in different threads.


[SQLAlchemy]: https://www.sqlalchemy.org/