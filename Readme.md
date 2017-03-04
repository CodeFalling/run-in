#run-in

## Description

Run your command in all directory

## Install

To install run-in from npm, run:

```
$ npm install -g run-in
```

## Usage

To run `npm install` in all your `prefix-xxx` directory, just run

```
$ run-in -g "prefix-*" -c "npm install"
```

to watching all your projects in this directory (`npm run watch`)

```
$ run-in -g "*" -c "npm run watch"
```


## License

Copyright (c) 2017 codefalling

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
