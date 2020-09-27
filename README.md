# codecept-typescript-example

This is a fork of https://github.com/elukoyanov/codecept-typescript-example
demonstrating CodeceptJS with page objects and helpers written in TypeScript.
elukoyanov did the majority of work. I integrated it; got it running on
contemporary versions; and expanded it with more exotic examples.

## Usage

To get started, run

```sh
$ yarn install
$ yarn start
```

`yarn start` starts a local Web server that the Puppeteer-driven tests rely on.
The `yarn stop` command stops server when you're finished with it. The REST
helper uses the publicly available <https://reqres.in/> service.

Afterwards you can run tests in several different ways:

The least you can do is

```sh
$ yarn test:e2e
```

which will execute all tests; however, you will notice that several of them
fail with errors like

```
  1) Callback parameter list @puppeteer
       accepts zero page objects:
     I.amOnPage is not a function
```

The Puppeteer helper is not loaded by default; because it is slow and doesn't
matter for the REST helper at all. That's a trick you may not want to copy; it
is more instructive, I think, than prescriptive. At any rate, you can
forcefully load the Puppeteer helper by setting the `HAS_PUPPETEER` environment
variable to any value:

```sh
$ HAS_PUPPETEER=1 yarn test:e2e
```

You can also load Puppeteer implicitly, by running only the `@puppeteer` tests:

```sh
$ yarn test:e2e --grep @puppeteer
```

You can also run Puppeteer in headless mode with the `HEADLESS` environment
variable:

```sh
$ HEADLESS=1 yarn test:e2e --grep @puppeteer
```

Finally, you can run just the REST helper tests with the `@rest` tag:

```sh
$ yarn test:e2e --grep @rest
```

## Contributing

I don't know how any of the CodeceptJS specifics work so don't ask me for help.
However, I'll gladly accept contributions that improve the demonstration; for
instance

- update dependency versions;
- show off more features of CodeceptJS in relation to TypeScript;
- reduce obtuse boilerplate.
