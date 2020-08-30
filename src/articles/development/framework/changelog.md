# Changelog

All notable changes to the Investing Algorithm Framework will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased
### 1.0
- Registration multiple algorithms
- Stopping individual algorithms
- Starting individual algorithms
- Command line interface
- Command line interface documentation
- Registration of multiple algorithms documentation

### 0.6
- Algorithm Orchestrator implementation, running multiple algorithm contexts parallel.
- Listing of Algorithms
- Algorithm running in seperate processes
- Algorithm Orchestrator documentation

### 0.5  
- Management command for basic model templates 
- Basic template entry in templates package
- Order ORM model 
- Order serializer
- Basic Model Templates documentation

### 0.4  
- Management command for basic Algo template project initialization
- Strategies: a set of classes and functions that define states and workers for strategies.
- Data providers: a set of classes and functions that define states and workers for data providing.
- Ordering: a set of classes and functions that define states and workers for ordering.
- Basic Algorithm Template Documentation
- Basic Algorithm Template Guide

### 0.3 
- State validators
- State validators documentation
- State documentation
- Context documentation

### 0.2
- Command line interface (Docopt), running algorithm context and stopping algorithm context
- Add support for PostgreSQL database engine
- Database Resolver Documentation
- Database Models Documentation
- Database Session Documentation
- Database Query Documentation

## [0.1.2] - 2020-07-19
### Changed
- Bumped version to 0.1.2.

### Fixed
- PEP8 style format.
- Fixed imports for various files.

### Removed
- StoppableThread, because it was not used anymore.

## [0.1.1] - 2020-07-1

### Added 
- Configuration constants.
- DatabaseResolver.
- SQLAlchemy base model definition.
- SQLAlchemyDatabaseResolver.
- SQLAlchemy Session Property.

### Fixed
- PEP8 style format.
- Command error handling output.
- Worker error handling (threaded error handling).

### Changed
- Bumped version to 0.1.1.

### Removed
- Unused imports.
- ExecutionScheduler, because it was not used anymore.

[0.1.2]: https://github.com/coding-kitties/investing-algorithm-framework/compare/v0.1...v0.1.2
[0.1.1]: https://github.com/coding-kitties/investing-algorithm-framework/compare/v0.1...v0.1.1