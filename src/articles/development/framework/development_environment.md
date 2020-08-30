# Development Environment
This guide steps you through configuring a local development environment for the Investing Algorithm Framework on Ubuntu. 
If you're using another operating system the instructions are still roughly the same, but we don't maintain any 
official documentation for anything else for now.

## Clone the Repository

To get started, clone the repo at [https://github.com/coding-kitties/investing-algorithm-framework](https://github.com/coding-kitties/investing-algorithm-framework) - or, your fork.

```bash
git clone https://github.com/coding-kitties/investing-algorithm-framework.git
cd investing-algorithm-framework
```

You're going to be working out of this repository for the remainder of the setup.

## System Dependencies
One thing that requires your attention is `docker`. If you want to test deployment functionality, make sure 
that you install docker. 
 
Docker will automatically run on system restarts, so this should be the only time you do this.

You can verify that Docker is running by running `docker ps` in your terminal. 
If it doesn't error with something like `Error response from daemon: dial unix docker.raw.sock: connect: connection refused`, you're good to continue.

## Python

We utilize Python 3.6. Lower versions may also work, but for development puposed you need to use this 
version.
 
## Virtual Environment

You're now ready to create a python virtual environment. Run:

```bash
python -m pip install virtualenv
python -m virtualenv --python=python3 venv
```

And activate the virtual environment:

```bash
source venv/bin/activate
```

If everything worked, running `which python` should now result in something like `/users/you/investing-algorithm-framework/venv/bin/python`.


## Continuous Integration
Investing Algorithm Framework uses a variety of continuous integration services to help 
ensure we don't accidentally break the application.

### Travis CI
Travis CI is our primary CI system and runs our tests on every pull request and on merges to master. 
It is required that tests pass before changes can be merged.

## Python Dependencies
The Investing Algorithm Framework as you might know runs on python(3.6). Any dependency we use need to be evaluated.
Additionally, all these dependencies run on the algorithms and are thus much riskier as they have direct access to strategies and user data if they turn out to be malicious.

So here are the rules we worked with so far:

## Rules on Dependencies

1. Any new dependency needs to be thoroughly reviewed and whitelisted
2. Dependencies must be range pinned semver conforming in the requirements file of sentry

There is currently no system in place to verify pins so be super careful when working with dependencies or reviewing dependency changes of others.

## Rules on Licenses

The Investing Algorithm Framework uses BSD/MIT/ISC and Apache 2 licenses. Whatever we used needs to be compatible with this. This means an absolute hard no on GPL/AGPL.

## Testing
We use pytest as our testing framework. You can run tests with:

```bash
#!/bin/sh

pytest ../.
```

Or running the 'test.sh' script in the ci directory.