## Management Commands

When you start your algorithm the framework creates a manage.py file in your `resources_directory` location.
You can specify your resource directory when creating your app.

> The example set the resource directory at the project root.

```python
import os

app = App(resources_directory=os.path.abspath(os.path.join(os.path.realpath(__file__), os.pardir)))

# Or after the app is created.

app = App()
app.resources_directory = os.path.abspath(os.path.join(os.path.realpath(__file__), os.pardir))
```

### Starting your algorithm

You can start your algorithm with the following command.

```shell
python manage.py start
```

### Stopping your algorithm
You can start your algorithm with the following command.

```shell
python manage.py stop
```

### Listing all your orders

You can start your algorithm with the following command.

```shell
python manage.py orders
```

### Listing all your positions

You can start your algorithm with the following command.

```shell
python manage.py positions
```

### Retrieving your portfolio

You can start your algorithm with the following command.

```shell
python manage.py portfolio
```
