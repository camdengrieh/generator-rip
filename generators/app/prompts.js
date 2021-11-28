const chalk = require("chalk");
const util = require("./util");

module.exports = {
  askForRIPNumber,
  askForRIPType,
  askForRIPAuthor,
  askForRIPStatus,
  askForDateCreated,
};

async function askForRIPNumber() {
  const ripNumberAssignedAnswer = await this.prompt([
    {
      type: "confirm",
      name: "ripNumberAssigned",
      message: "Is the number of the RIP assigned ?",
      default: false,
    },
  ]);
  this.ripNumberAssigned = ripNumberAssignedAnswer.ripNumberAssigned;
  if (this.ripNumberAssigned) {
    const answers = await this.prompt([
      {
        type: "String",
        name: "ripNumber",
        message: "What is the number assigned to the RIP ?",
      },
    ]);
    this.ripNumber = answers.ripNumber;
  }
}

async function askForRIPType() {
  const typeChoices = [
    {
      value: "Strategy",
    },
    {
      value: "Protocol",
    },
    {
      value: "Informational",
    },
  ];

  const categoryChoices = [
    {
      value: "Core",
    },
    {
      value: "Networking",
    },
    {
      value: "Interface",
    },
    {
      value: "ERC",
    },
  ];

  const answers = await this.prompt([
    {
      type: "list",
      name: "ripType",
      message: `Which ${chalk.yellow(
        "*type*"
      )} of RIP would you like to create?`,
      choices: typeChoices,
      default: "Strategy",
    },
    {
      when: (answers) => ["Strategy"].includes(answers.ripType),
      type: "list",
      name: "ripCategory",
      message: `Which ${chalk.yellow(
        "*category*"
      )} of Strategy RIP would you like to create?`,
      choices: categoryChoices,
      default: "Core",
    },
  ]);
  this.ripType = answers.ripType;
  this.ripCategory = answers.ripCategory;
}

async function askForRIPAuthor() {
  const answers = await this.prompt([
    {
      type: "String",
      name: "ripAuthor",
      message: `Who is the ${chalk.yellow(
        "*author*"
      )} of the RIP would you like to create?`,
      default: this.ripAuthor,
      store: true,
    },
    {
      type: "String",
      name: "ripAuthorGithubUsername",
      message: `What is the ${chalk.yellow(
        "*github username*"
      )} of the author?`,
      default: this.ripAuthorGithubUsername,
      store: true,
    },
  ]);
  this.ripAuthor = answers.ripAuthor;
  this.ripAuthorGithubUsername = answers.ripAuthorGithubUsername;
}

async function askForRIPStatus() {
  const statusChoices = [
    {
      value: "WIP",
    },
    {
      value: "Withdrawn",
    },
    {
      value: "Implemented",
    },
    {
      value: "Proposed",
    },
    {
      value: "Approved",
    },
    {
      value: "Deferred",
    },
    {
      value: "Rejected",
    },
    {
      value: "Moribund",
    },
  ];

  const answers = await this.prompt([
    {
      type: "list",
      choices: statusChoices,
      message: `What is the ${chalk.yellow("*status*")} of the RIP?`,
      name: "ripStatus",
      default: "WIP",
    },
  ]);

  this.ripStatus = answers.ripStatus;
}

async function askForDateCreated() {
  const answers = await this.prompt([
    {
      type: "String",
      message: `What is the ${chalk.yellow("*creation date*")} of the RIP?`,
      name: "ripDateCreated",
      default: util.getTodayISO8601(),
    },
  ]);

  this.ripDateCreated = answers.ripDateCreated;
}
