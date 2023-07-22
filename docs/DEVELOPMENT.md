# Folder Structure

## Components

> All components that could be potentially used throughout the app

This folder is split into 6 subfolders. The addition of any new subfolders must be acccompanied by additional documentation

### Container

> All components that wrap others to provide functionality.

- A container is useless without the subcomponents it wraps

##### Modal

> Generic modal component that supports any custom modal content

- To add a modal, make the content and follow the example in [ModalRegistry.tsx](../src/components/modal/modalRegistry.tsx)

- Note that all modal content are provided with the `onRequestClose` prop to close the modal. 

- You can also pass a prop called `onAfterClose` to `openModal` that will run after the modal closes.
- Note that functions passed to `onAfterClose` will suffer from stale variables - if a state change occurs after the function is passed, it will not register that change
- You can also pass a prop `noX` to `openModal` that will remove the X on the modal

### Display

> Components for purely displaying particular things

### Input

> Components that provide input to the frontend


### Position

> Components that affect the layout of the page / other components

### Styling

> This is our library of styles for text and page layout

### Widget

> Standalone useful components

## Graphql

> All Graphql related code

See [conventions](#Graphql-Layer) for conventions
See [apollo process](#Automatically-Handled-Things) for details on how we handle requests

## Images

> Images as pngs and svgs

- We prefer to use svgs whenever possible
- Note that we wrap our svgs in a component so we can easily customize colors. See images folder for examples

## Mixins

> Useful styles to include in styled components

- Font.tsx provides all font mixins
- Position.tsx provides mixins for automatically adjusting the width and height of page content

## Pages

> Our site's pages

## Typescript

> Typescript declarations

## Utils

> Utility functions

# Conventions

## File Naming

- Usually UI files come in pairs, one file for the actual component and one in ./styles for styling. These files should be named the same.

- Capitalize files related to actual UI components, and start everything else with a lowercase

## Variable Naming

### Typing

- For component prop types, we name these `<componentName>PropsType`

### Styled Components

- Generally for components we have some styled component "wrapper" that wraps the entire component. Name these `<componentName>Wrapper`. 

### Forms & Screens

- We call any subsection of a page a `screen`
- Forms are a subset of screens that contains fields that the user fills out

### Graphql Layer

**Files and variables in the graphql layer follow an extremely specific naming convention**

- We define a `<Client Query Name>` for each query. 
  - This name should summarize the intent of the query
  - This name doesn't need to be the same as the query name defined by the backend api
    - We like to be very descriptive with our naming, and this may be different from the query names the backend is using
  - Capitalize/lowercase this `<Client Query Name>` when necessary in the rest of this guide

##### Naming

Each query should have:
- A file dedicated to it, named `<Client Query Name>.ts`
- An interface for its input type, named `<Client Query Name>Input`
- A variable holding the gql query itself, named `<Client Query Name>Mutation`
- A function for actually sending the query, name `send<Client Query Name>Mutation`
- An interface for its response type, the response returned by the query sending function, named `<Client Query Name>Response`
- If necessary, an interface for the type of data returned from the api, named
`<Client Query Name>Data`

See any file under src/graphql/mutations for an example

# Processes

> Chains of logic that occur that may not be clear at first

### General Notes

- Remember to lowercase emails if sending them to backend

### Commonly Encountered Dev Things

##### Page Height, Scrolling, And IOS Edge Cases
- See [Frontend Background](./FRONTEND_BACKGROUND#Node-Heights-(And-Widths),-Overflow,-Scrolling,-And-IOS-Edge-Cases)
- We set the page height in App.tsx, so any subcomponent can use `HeightWithNavbar` in `Mixins/Position` to make a page take up the whole height of the screen

### Apollo

##### Automatically Handled Things

1. Toast on Error

- On any sort network or graphql error, Apollo will automatically emit a "Something has gone wrong" toast

##### Note on Errors

- All network responses returned by the api server have code 200
- Even errors have a network response code of 200, but the error code in the data will 
reflect the actual error
- The events that result in network responses having a code other than 200 are things on the level of CORS preflight blocks and invalid graphql syntax errors, which don't result in a response from the api server

### Auth

##### Hooks

- Use useAuthState for logged in status
- Use useAuthProcedures for login and logOut actions
- NOTE do NOT use useAuthActions for login and logOut actions in normal components, these are basic login and logout functions that we've built on top of with application specific logic
- When developing, all login/logOut and redirect specific logic should go into `authProcedures.tsx`

##### Logins and Logouts

- Components that use logged in/logged out state don't need to worry about anything
- The `isLoggedIn` prop provided by the `useAuthState` hook will automatically update when users log in or log out
- Components should simply handle each case when applicable

##### Current Processes

- We have a bunch of automatic processes in place in `authProcedures.tsx`
- Merchants are redirected to login page when logging out
- Merchants are redirected to merchant dashboard when logging in
- Normal customers are redirected to application page when logging out

##### Session Timeouts

- These occur when a user's token times out or is deleted
- We don't proactively detect these so they won't trigger a state change
- When a user hits an authenticated backend endpoint with an expired/nonexistent token, our `CustomApolloProvider` component handles everything
  1. We will recieve a 403 Unauthenticated error from the backend
  2. A toast saying "session expired" will be shown
  3. **No state change will be done yet**
  4. A login modal will be opened
  5. The [error] will be passed on to the component making the query/mutation, which should handle the query/mutation failing

  - If the user logs in in the login modal, the application will continue to be in a logged in state (no flipping between logged out and logged in), but the user will have to resend their query
  - **If the user closes the login modal, the application will then transition to a logged out state**

### General Page Heuristics

##### Auth State
- If a page should only be shown due to x criteria (x usually being auth state), this should be done at the App.tsx level
- We like to be able to assume that, if we are at a page, then x criteria is satisfied

##### Rendering Screens
- Be extremely careful when optionally rendering a page screen with something like "condition && screen"
  - This causes the screen to remount every time the condition changes
  - If the screen runs effects on mount, these effects will rerun
- Use the OptionalDisplay component instead as it keeps the screen mounted while optionally displaying it

### Making New Svgs

- After acquring a new svg, run it through [svgomg](https://jakearchibald.github.io/svgomg/)
  - Go to `Paste markup`, paste in svg code, then click on the copy button (lower right) to copy compressed markup
- Wrap markup in a component, see a current svg for examples

> Remember to set the viewbox or else the svg won't resize properly
