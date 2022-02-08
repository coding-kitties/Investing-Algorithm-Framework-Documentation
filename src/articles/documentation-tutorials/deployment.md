### Deployment
You can deploy your algorithm with docker. 

#### Docker deployment
You can use the following instruction to run your algorithm with docker.

##### Requirements
You will need:
* Python 3 
* Docker

> You can find all the source files in the [examples folder on github](https://github.com/coding-kitties/investing-algorithm-framework)

##### Project structure
Make sure that your project has the following structure:

├── <your_files>            # Root project files (venv, requirements.txt, etc...)
├── app                     # Directory with main.py file [example](https://github.com/coding-kitties/investing-algorithm-framework)
│   ├── main.py             # main.py file with 'app.start()' entry
│   ├── <your_files>        # Your source files and directories
└── entrypoint.sh           # Entrypoint form docker file [example](https://github.com/coding-kitties/investing-algorithm-framework)
└── manage.py               # Your manage commands file

##### Build your docker image
The first step is to build your docker image. You can use the following example docker image.

```yaml
FROM python:3.7

RUN apt-get -qq update
RUN mkdir app

WORKDIR /app
COPY . .

RUN pip install --upgrade pip && pip install pip-tools
RUN pip install -r requirements.txt
RUN chmod +x entrypoint.sh

EXPOSE 7000
ENTRYPOINT ["./entrypoint.sh"]
```

You can build the docker image with the following command:
```shell
docker build . -t <my_algorithm_name>:latest
```

You can then run the docker image with   

```shell
docker run <my_algorithm_name>:latest -p 7000:7000
```




