# Setting Up

Front-end react app for Fincentify. 


### Development

**Running Locally**

To boot up a local instance of your app there are 2 run modes

1. Via docker container (preferred)
*Pre-req: Docker*

`$ make up`

This mode spins up a docker container or builds one if none exists with all
the required depencies and is then mapped to your local directory.
You should be able to see your changes on `http://0.0.0.0:8080`

2. Raw on local machine
*Pre-req: Yarn, Node V12*

`$ yarn install`

`$ make local` 

This will simply run the webpack dev server on bare metal locally.
You should see your changes on `http://localhost:8080`

**Adding new libraries**

This only applies if you are running the docker container locally
for development.
Since the `/node_modules` folder is ignored during directory mounting, you will 
have to "go inside" the local container to add a new modules.
To do so simply run 
`$ make exec`
Which will enter the running container and then
`# yarn add ...`

**Downloading node_modules locally**

If you don't have node_modules locally vscode will complain. Thus we will want to have node_modules downloaded locally.

1. Make sure you are using **node v12**. If you don't have it, [install nvm](https://jamesauble.medium.com/install-nvm-on-mac-with-brew-adb921fb92cc)

2. Run `yarn install` locally

**Hot Reloading**

If you have worked with webpack dev server before, then you are aware of the
hot reloading feature. If you are running locally in container mode, you will 
also have this feature thanks to directory mounting.

### Building
To build the production container run
`TAG=local make build`

This will compile the react app into a production ready raw js, css, html
files and serve them inside a container. 
This step will be for manual testing and sanity check, actual production 
containers will be built and pushed on the CI/CD pipeline.

`docker run -p 8080:8080 registry.gitlab.com/fincentify/registry/web:local`
You should be able to see your build on `http://0.0.0.0:8080`

**Setting up Prettier**

If you're using VSCode, download the Prettier Code Formatter extension

### Housekeeping

* To contribute open a new branch and give it a descriptive name (e.g. task name)
* Open a merge request and gain at least 2 approvals in code review before merging
