#run-in

## Description

Run your command in all directories

## Why this

**CD to every directory and type `npm run watch` is really tooooooo boring**. I even have to keep many tabs of them and jump here and there to watch their logs.

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

`run-in` use `glob` to match directories, see details [here](https://github.com/isaacs/node-glob).

## Screenshot
![image](https://cloud.githubusercontent.com/assets/5436704/23579716/2e248fb0-012e-11e7-901f-44b143f461fd.png)

## License

Copyright (c) 2017 codefalling

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
