# Social App Test

This is an entry assignment test done with next.js with a little backend to provide with a notification feed
I used `create-next-app` to rapidly start the application, there are better approaches, but just for the shake of this demonstration I went the easy way.

It is responsive!!!!!!!

## Installation

Use the package manager npm to install the app.

```bash
npm install
```

## Run

The easiest way to run this project on a local machine is by running:

```bash
npm run dev
```

You can also run it by building first and then running it:

```bash
npm run build
npm start
```

application will run on port 3000. if you need to run it on a different port just add `-p 3001`to the start up command

## Usage

After running the commands above you should be able to easily navigate, At first there is a little landing page with some instructions, then there will be a fake login page. All you have to do is to click on Sign in to go to the notifications page.

You will notice the avatar will not show on the navbar until you login. The avatar will show a badge with all the active notifications and you should be able to click it and see the comments and likes that you have.

I used mobx for state management, something fast, reactive and minimal to serve the purpose of this test. I could argue that perhaps redux would have been a better solution.

Backend is minimal, I have better examples of a backend implementation on my repo

## To be done

This little app is far from being production ready, it was done in a couple of days for the assessment test , login is fake, better authentication and authorization should be implemented right, for example

## Repos that implement a proper BE can be found at:

[https://github.com/OscarGuerreroLopez/getfit](https://github.com/OscarGuerreroLopez/getfit)

[https://github.com/OscarGuerreroLopez/account-test](https://github.com/OscarGuerreroLopez/account-test)

a little website that I did for a business:
[https://github.com/OscarGuerreroLopez/torrevieja_cerrajeros](https://github.com/OscarGuerreroLopez/torrevieja_cerrajeros)
