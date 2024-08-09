#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require("fs");
const request = require("request");
const path = require("path");
const ora = require("ora");
const cliSpinners = require("cli-spinners");

clear();

//! Importing User Data from data.json
const res = fs.readFileSync(path.resolve(__dirname, "data.json"));
const user_data = JSON.parse(res);
const {
    user_name,
    user_email,
    twitter_username,
    linkedin_username,
    dev_username,
    insta_username,
    github_username,
    personal_site,
    npx_card_handle,
    job_title,
    resume_url,
} = user_data;

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
            {
                name: `Reserve an ${chalk.green.bold("Appointment")}?`,
                value: () => {
                    const contactUrl = "https://calendly.com/abhishekpanthee5/meeting-with-me";
                    const loader = ora({
                        text: "Opening Appointment Page in your browser...",
                        spinner: cliSpinners.material,
                    }).start();

                    open(contactUrl)
                        .then(() => {
                            loader.stop();
                            console.log(`\nAppointment page opened in your default web browser.\n`);
                        })
                        .catch((err) => {
                            loader.stop();
                            console.error(`\nFailed to open Appointment page: ${err.message}\n`);
                        });
                },
            },
            {
                name: `View my ${chalk.magentaBright.bold("Resume")} online?`,
                value: () => {
                    const loader = ora({
                        text: "Opening Resume in your browser...",
                        spinner: cliSpinners.material,
                    }).start();

                    open(resume_url)
                        .then(() => {
                            loader.stop();
                            console.log(`\nResume opened in your default web browser.\n`);
                        })
                        .catch((err) => {
                            loader.stop();
                            console.error(`\nFailed to open resume: ${err.message}\n`);
                        });
                },
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Bye bye \n");
                    process.exit(); // Explicitly exit the process
                },
            },
        ],
    },
];

const data = {
    name: chalk.bold.green(`                  ${user_name}`),
    work: `${chalk.white(`${job_title}`)}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan(`${twitter_username}`),
    github: chalk.gray("https://github.com/") + chalk.green(`${github_username}`),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue(`${linkedin_username}`),
    dev: chalk.gray("https://dev.to/") + chalk.blue(`${dev_username}`),
    insta: chalk.gray("https://instagram.com/") + chalk.blue(`${insta_username}`),
    Portfolio: chalk.cyan(`${personal_site}`),
    npx: chalk.red("npx") + " " + chalk.white(`${npx_card_handle}`),

    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labeldev: chalk.white.bold("        Dev:"),
    labelinsta: chalk.white.bold("  Instagram:"),
    labelPortfolio: chalk.white.bold("  Portfolio:"),
    labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labeldev}  ${data.dev}`,
        `${data.labelinsta}  ${data.insta}`,
        `${data.labelPortfolio}  ${data.Portfolio}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic("I am currently studying Computer Engineering and ")}`,
        `${chalk.italic("exploring new opportunities,")}`,
        `${chalk.italic("Contact me to discuss any projects")}`,
    ].join("\n"),
    {
        margin: 1,
        float: "center",
        padding: 1,
        borderStyle: "single",
        borderColor: "green",
    }
);

console.log(me);

function mainMenu() {
    prompt(questions).then(answer => {
        answer.action();
        mainMenu();  // Re-prompt the user after an action is taken
    });
}

mainMenu();  // Start the prompt loop
