# Serenity/JS Cucumber Playwright Template


### Installation

Once you have the code on your computer, use your computer terminal to run the following command in the directory where you've cloned the project:
```
npm ci
```

Running [`npm ci`](https://docs.npmjs.com/cli/v6/commands/npm-ci) downloads the [Node modules](https://docs.npmjs.com/about-packages-and-modules) this project depends on,
as well the [Serenity BDD CLI](https://github.com/serenity-bdd/serenity-cli) reporter jar. 



### Execution

The project provides several [NPM scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts) defined in [`package.json`](package.json):

```
npm run lint            # runs code linter
npm run lint:fix        # attempts to automatically fix linting issues
npm run clean           # removes reports from any previous test run
npm test                # executes the example test suite
                        # and generates the report under ./target/site/serenity
npm start               # starts a mini HTTP server and serves the test reports
                        # at http://localhost:8080
```

## Configuring Browser and Environment

You can control which browser and environment are used for your tests by setting environment variables when running your tests:

```
BROWSER=firefox ENVIRONMENT=qa npm test
```

- `BROWSER` can be `chromium`, `firefox`, or `webkit` (defaults to `chromium` if not set).
- `ENVIRONMENT` can be `dev`, `qa`, or `prod` (defaults to `dev` if not set).
- The environment controls the base URL used in tests.

## Running Specific Scripts with Cucumber Tags

You can use Cucumber tags to control which scenarios or features are executed. For example, to run only scenarios tagged with `@smoke`:

```
npx cucumber-js --tags "@smoke"
```

You can combine this with browser and environment configuration:

```
BROWSER=webkit ENVIRONMENT=prod npx cucumber-js --tags "@regression"
```


npm install
npx playwright install

Shell	Command
cmd.exe	-> set BROWSER=firefox && set ENVIRONMENT=dev && npx cucumber-js --profile default --tags "@MyTest"
PowerShell ->	$env:BROWSER="firefox"; $env:ENVIRONMENT="dev"; npx cucumber-js --profile default --tags "@MyTest"

set BROWSER=firefox && set ENVIRONMENT=dev && npx cucumber-js --profile default --tags "@MyTest" && npx serenity-bdd run --features ./features

$env:BROWSER="firefox"; $env:ENVIRONMENT="dev"; npx cucumber-js --profile default --tags "@MyTest"; npx serenity-bdd run --features ./features
```

## Running Tests and Generating Serenity/JS Report

Below are commands to clean, run your tests, and generate the Serenity/JS report for different environments:

### Mac/Linux (bash, zsh, etc.)
```sh
npm run clean; BROWSER=firefox ENVIRONMENT=prod npx cucumber-js --profile default --tags "@HappiestHealthHome"; npx serenity-bdd run --features ./features
```

### Windows Command Prompt (cmd.exe)
```cmd
npm run clean & set BROWSER=firefox & set ENVIRONMENT=prod & npx cucumber-js --profile default --tags "@HappiestHealthHome" & npx serenity-bdd run --features ./features
```

### Windows PowerShell
```powershell
npm run clean; $env:BROWSER="firefox"; $env:ENVIRONMENT="prod"; npx cucumber-js --profile default --tags "@HappiestHealthHome"; npx serenity-bdd run --features ./features
```

After running, open `target/site/serenity/index.html` in your browser to view the Serenity/JS report.