# Frontend Take-Home Coding Challenge 🧑‍💻


Welcome to the frontend take-home coding challenge part of your journey. We are excited about your interest to join us on our mission to help Canadians build credit.
For fairness, we ask that **all** of our candidates go through a take-home coding challenge. 

_**Disclaimer:** This is a fictitious assignment designed to mimic problems encountered at Nyble, but is greatly simplified and the code implemented here will **never** be used in any context other than this exercise. That being said, we encourage candidates to write production-style code and design._


## Your Task 🔨

We want to implement a figma design into a responsive web app. 

## General Instructions

* From the moment you receive this challenge, you will have exactly __1 week__ to complete it. The challenge is designed to take a few hours to complete, so plan your time as you see fit.
* You are allowed to use whatever references online __but__ your work must be yours alone, collaboration is not permitted.
* Create a private repository using **this template** and add `han@nyble.com` (`hanburger97`) as a collaborator. 
* Create a new branch using the naming format `thf-<YOUR LAST NAME>` in all lowercase, and write your implementation code on that branch.

**Submission instructions**
_Only when ready to submit your work_

* Invite `hanburger97` as a contributor
* Open a new **Pull Request** from your working branch into `master` and title it `Take-Home Challenge Submission`
* In the PR clearly write the following
  * Your name and email
  * Briefly write in a section about your solution and design
* Add `han@nyble.com` (`hanburger97`) as a reviewer.
* Open the pull request.
* Send an email to `han@nyble.com` notifying that you are ready for review.

_Follow these instructions carefully, wrong or incomplete submissions will be ignored_


## 🚧 Task Specifications & Instructions 🚧


At Fedd 🐶💸, the next unicorn startup democratizing banking for dogs, we are trying to launch our first web application. 
The backend is already implemented and your task will be to implement the figma designs and connect with the backend via GraphQL.

Please use this template as a code skeleton, it has all the hooks for GraphQL queries & mutations connected to our sandbox server.

#### Figma designs

[Click Here](https://www.figma.com/file/K2ot0VyCHPzNIeDYB4jrYH/Nyble-FED-Take-Home-Designs?type=design&node-id=12%3A517&mode=design&t=8wqLhyJnQFEDzSzs-1)

1. Open the Figma link
2. Sign up or log in to your personal figma account
3. Go to the page named `✅ 07/23 Design: FED Take-home` 

### Main Deliverable: HomePage

Using the skeleton codebase, the existing backend endpoints and the figma designs, implement the designs of the `HomePage` into a production-quality web application.

#### 1._Account Tab

Fetch (using `getAccountQuery`) the user account balance, currency and status, then display such according to the Figma designs on that tab.

#### 2. Rewards Tab

Fetch (using `getRewardsQuery`) the user's reward bones and display such according to the Figma design.

#### 3. Woof Tab

Send a graphQL mutation (`sendWoof`) on button click.

#### 4. Switching Tabs
Implement all relevant logic to switch to appropriate tabs as per the Figma design.

## Getting started with the codebase 🚀

We have created a basic scaffold for you. Since you have decided to attempt the backend challenge, this directory will be the "root" of all of your work.

**Pre-req**
1. Make sure that you are using `Node` version 14. To help you with that you can try to use `nvm` or Node Version Manager
2. Make sure you have `git` and `make` installed
3. Make sure you have `yarn` package manager installed

**Steps**
1. Run `make dev` to install all dependencies 
2. Run `make up` to start and 🎉 TADA! It should work! 🎉 The app should be running on `http://0.0.0.0:8080` locally

_Note:_ If you are using Windows and have trouble with Node.js, you can try to use [Window Subsystem in Linux - WSL](https://learn.microsoft.com/en-us/windows/wsl/), use a VM with Linux or a containerized application such as Docker.

*Note:* There might be slight variation depending on your computer's OS and chip. Solving & debugging your setup is also a crucial part of your ability to be resourceful and independent.

**Relevant structure & files**

```
  / Root directory for the challenge
  | - src/ where all the source code lies
  |      | - (...)
  |      | - pages/homePage
  |      |        |
  |      |        | - tabs/ where all the page tabs 
  |      |        | - styles/ 
  |      |        | - HomePage.tsx where the home page definition is
  |      |        | - homePageState.tsx where the home page state definition is
  | (...)
``` 

## How we review 🧐

**READ CAREFULLY**
Evaluation criteria in order of priority

1. Correctness in styling & attention to details: whether the submitted frontend correspond to the specifications & Figma designs

2. Completeness: whether the required tabs and features completed as per the specifications and Figma designs

3. Resourcefulness. We know that this codebase and some of the stack may be new to you. Your ability to unblock yourself by being resourceful (Google, Stack Overflow, etc.) and your ability to learn/adapt to a new code environment with new informations are strong signals we look for.

4. Code structure. We will also take into account your ability to design and write production-ready code that can be scaled. Make sure that you will be able to justify your design and implementation choices during the review call.


## Addtional resources

Some links to the tech stack we use
* [GraphQL](https://graphql.org/)
* [ApolloClient](https://www.apollographql.com/docs/react/development-testing/static-typing/)
* [React Hooks](https://react.dev/reference/react)
* [Figma](https://www.figma.com/resource-library/design-basics/)

## Questions and bugs

If you have any non-challenge related  questions such as a bug in the code or setup problems you can reach out to han@nyble.com
