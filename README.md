# ES6 Sandbox
Sandbox for ES6 using jasmine, babel and grunt. This repo is a personal playground used to gain experience and exposure to ES6 features using the Babel transpiler.

# Get Started
## Clone the Repository
Open a terminal and enter the *git clone* command to a directory of your choice.

    git clone https://github.com/mpolizzotti/es6sandbox.git

## Install Node & NPM
This sandbox leverages [node.js](http://nodejs.org/) for its development server. This sandbox also makes use of npm, a package manager for installing node modules. The latest releases of node ships with npm so only a node installation is required. Node offers platform installers for both Windows and Mac OSX. They also offer binaries for Windows, Mac OSX and Linux systems. Visit the [download](https://nodejs.org/en/download/) page for more information.

To verify your node installation, open a terminal and enter the node -v command.

    node -v

To verify your npm installation, open a terminal and enter the npm -v command.

    npm -v

## Install Node Modules
Once node and npm are installed you will need to install all of the node modules leveraged by this sandbox. You can view all of the module dependencies by examining the package.json file located under the *es6sandbox/* root directory.

Open a terminal window and navigate to the root *es6sandbox* directory.

    cd path/to/es6sandbox

This sandbox relies on Grunt.js for development tasks and compilation. You may encounter a warning about installing grunt with the -g parameter. The -g installs grunt globally so it is accessible across all projects.

    npm install -g grunt

Run the npm install command. (You must run the npm install command in the same directory that contains the package.json file).

    npm install

Depending upon your system permissions, you may need to run the npm install as root.

    sudo npm install

Once complete, the *node_modules* directory, containing all of your project's node modules, will be added to your project.

#### Build & Compile Front-end
Once everything is installed you will need to build the front-end to compile example code from ES6 to ES5.

Open a terminal window and navigate to your application's root *es6sandbox* directory.

    cd path/to/es6sandbox

Run the default grunt command.

    grunt

#### Launch Application
To preview the sandbox, open a terminal window and navigate to the root of your project.

    cd path/to/es6sandbox

Run the below command.

    npm start
    
Open a browser window and navigate to *localhost:3500* and open the browser. Code examples are rendered to the browser using the Jasmine testing framework.
