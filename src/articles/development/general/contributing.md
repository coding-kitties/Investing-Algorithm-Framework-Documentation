# Contributing
Feel like the framework is missing a feature or can be fixed? We welcome your pull requests! 

Few pointers for contributions:

- Create your branch against the `develop` branch, not `master`.
- New features need to contain unit tests and must be PEP8 conformant (max-line-length = 79). 
- Creating a feature must be done on a branch with prefix `feature_`.
- Making a hotfix must be done on a branch with prefix `hotfix_`.

If you are unsure, discuss the feature or hotfix on our [Slack](https://inv-algo-framework.slack.com)
or in a [issue](https://github.com/coding-kitties/investing-algorithm-framework/issues) before a pull request.

## Rules

### 1. Run unit tests

All unit tests must pass. If a unit test is broken, change your code to make it pass. It means you have introduced a regression.

#### Test the whole project

```bash
pytest
```

#### Test only one file

```bash
pytest tests/test_<file_name>.py
```

#### Test only one method from one file

```bash
pytest tests/test_<file_name>.py::test_<method_name>
```

### 2. Test if your code is PEP8 compliant

#### Run Flake8

```bash
flake8 investing_algorithm_framework
```

### 3. Let your code be reviewed

All code changes, regardless of who does them, need to be reviewed and merged by someone else.
This rule applies to all the committers.

For more info about the process of code reviews see the code review page.

#### Responsibilities

- Ensure cross-platform compatibility for every change that's accepted. Windows, Mac & Linux.
- Ensure no malicious code is introduced into the code.
- Create issues for any major changes and enhancements that you wish to make. 
Discuss things transparently and get community feedback.
- Keep feature versions as small as possible, preferably one new feature per version.
- Be welcoming to newcomers and encourage diverse new contributors from all backgrounds. 
See the Python Community Code of Conduct (https://www.python.org/psf/codeofconduct/). Also, read our code of conduct page.

## Becoming a Committer
For development, we have two roles for committers.

Keep in mind, being a committer does not grant write permission on `develop` or `master` for security reasons. Code will only be merged after it went through a code review by one of the privileged contributes.
(Users trust the investing algorithm framework with their financial secrets).

## Non privileged
You must fork the project to implement your features. You can then request a pull request to integrate your changes into the Investing Algorithm Framework.

## Privileged
Contributors may be given a privileged role when:

1. Past contributions to Investing Algorithm Framework and other related open-source projects. 
Contributions include both code (both accepted and pending) and friendly participation in the issue tracker and Pull request reviews. 
Quantity and quality are considered.
1. A coding style that the other core committers find simple, minimal, and clean.
1. Time to devote to the project regularly.

The privileged role allows you to become a core contributor, so you can directly add changes to the repository.

## Help

If you want help, or not sure on how to become a committer for the project, feel free to send an email to: 
codingkitties@gmail.com