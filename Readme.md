#run-in

## Description

Run your command in all directory

## Why this

** CD to every directory and type `npm run watch` is really tooooooo boring **. I even have to keep many tabs of them and jump here and there to watch their logs.

`pm2 start` maybe another good idea in this case. But why not make a script to do this?

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
