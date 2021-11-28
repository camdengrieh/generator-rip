const Generator = require("yeoman-generator");
const packageInformation = require("../../package.json");
const chalk = require("chalk");
const prompts = require("./prompts");

module.exports = class extends Generator {
  get prompting() {
    return this._prompting();
  }

  initializing() {
    this.ripNumberAssigned = false;
    this.ripNumber = 0;
    this._printWelcomeMessage();
  }

  _prompting() {
    return {
      askForRIPNumber: prompts.askForRIPNumber,
      askForRIPType: prompts.askForRIPType,
      askForRIPAuthor: prompts.askForRIPAuthor,
      askForRIPStatus: prompts.askForRIPStatus,
      askForDateCreated: prompts.askForDateCreated,
    };
  }

  configuring() {}

  writing() {
    this.ripDestinationPath = this.ripNumberAssigned
      ? `RIPS/rip-${this.ripNumber}.md`
      : "RIPS/rip-x.md";
    this.fs.copyTpl(
      this.templatePath("rip-template.md"),
      this.destinationPath(this.ripDestinationPath),
      {
        ripType: this.ripType,
        ripCategory: this.ripCategory,
        ripAuthor: this.ripAuthor,
        ripAuthorGithubUsername: this.ripAuthorGithubUsername,
        ripDateCreated: this.ripDateCreated,
        ripStatus: this.ripStatus,
        ripNumberAssigned: this.ripNumberAssigned,
        ripNumber: this.ripNumber,
      }
    );

    this.config.save();
  }

  conflicts() {}

  install() {}

  end() {
    this._printGoodByeMessage();
  }

  _printWelcomeMessage() {
    this.log("\n");
    this.log("\n");
    this.log(`${chalk.green(" yeomanRIP ")}\n`);
    this.log(`${chalk.blue.bold("RIP Improvement Proposal")}\n`);
    this.log(
      chalk.white.bold(
        "https://github.com/iearn-finance/RIPS/blob/master/RIPS/rip-0.md1\n"
      )
    );
    this.log(
      chalk.white(
        "discourse: https://gov.rug.farm/  - go and lobby for your changes "
      ) + chalk.yellow(`v${packageInformation.version}`)
    );
    this.log(
      chalk.white(
        `Application files will be generated in folder: ${chalk.yellow(
          process.cwd()
        )}`
      )
    );
  }

  _printGoodByeMessage() {
    this.log(
      "RIP template is ready: ",
      chalk.yellow(`${process.cwd()}/${this.RIPDestinationPath}`)
    );
    this.log("Please fill all the required sections.");
    this.log(
      `Once done, you can submit a pull request to: ${chalk.blueBright(
        "https://github.com/iearn-finance/RIPS"
      )}`
    );
    this.log(chalk.magentaBright.bold(`rip or rip, lmao`));
  }
};
