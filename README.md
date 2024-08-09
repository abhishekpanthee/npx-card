
# NPX Card

This is the professional npx card for Abhishek Panthee

Reach out to me by command line ::



```
npx abhi-dev
```

## Want to deploy your own card
Follow these steps to set up and deploy your own card 



 ### Clone the repo 
```
git clone https://github.com/abhishekpanthee/npx-card
```
 ### Goto  your directory 
```
cd npx-card
```
### Install the Dependicies
```
npm i 
```
### Edit your Details in the data.json
```
{
 "user_name": "Abhishek Panthee",
    "user_email": "info@abhishekpanthee.com.np",
    "job_title": "Cyber-Security Analyst and Web Developer",
    "npx_card_handle": "abhi-dev",
    "twitter_username": "abhishekpanthee",
    "linkedin_username": "abhishekpanthee",
    "dev_username": "abhishekpanthee",
    "insta_username": "abhishekpanthee",
    "github_username": "abhishekpanthee",
    "personal_site": "https://abhishekpanthee.com.np",
    "resume_url": "https://abhishekpanthee.com.np/cv"
} 
```
### Add the other required urls according to your need

#### Example  (facebook)
```
//data.json
  "job_title": "Cyber-Security Analyst and Web Developer",
    .
    .
    .
    .
    "personal_site": "https://abhishekpanthee.com.np",
    "resume_url": "https://abhishekpanthee.com.np/cv",
    "fb_username": "https://facebook.com/abhishek.panthee.7"

```
#### Now also modify the card 

```
//card.js
const {
    .
    .
    .
    .

    facebook_username,
    resume_url,
} = user_data;
.
.
.

 const data = {
    .
    .
    .
    facebook: halk.gray("https://facebook.com/") + chalk.blue(`${fb_username}`)
    npx: chalk.red("npx") + " " + chalk.white(`${npx_card_handle}`),

    .
    .
    .
    labelfacebook: chalk.white.bold("  facebook:"),
    labelPortfolio: chalk.white.bold("  Portfolio:"),
    labelCard: chalk.white.bold("       Card:"),


    const me = boxen(
    [
        .
        .
        .
        `${data.labelfacebook}  ${data.facebook}`,
        `${data.labelPortfolio}  ${data.Portfolio}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic("I am currently studying Computer Engineering and ")}`,
}

```

## Configure the pakage.json to your Details
```
{
    "name": "abhi-dev",
    "version": "2.2.2",
    "author": "Abhishek Panthee <info@abhishekpanthee.com.np> (https://abhishekpanthee.com.np)",
    "description": "A personal card for Abhishek Panthee",
    "main": "card.js",
    "bin": "./card.js",
    "repository": {
        "type": "git",
        "url": "https://github.com/abhishekpanthee/npxcard.git"
    },
```

## Login to npm
```
npm login
```

## Publish your package

```
npm publish
```
## Support

For support, email info@abhishekpanthee.com.np 

