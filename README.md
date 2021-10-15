# Web Component Project Skeleton

This repository contains a skeleton for an individual web component project. I
created it for personal use but it's free to be used by anyone else. The
following are aspects of what is supported...

 - A single web component though that may involve multiple files.

 - ES6 code base.

 - Generation of a single file of output that is 'minified' and obfuscated (to
   an acceptable level).

 - Make use of NodeJS/NPM.

## How To Use This Repository

These are the set of steps I would recommend to get going...

 1. Clone or fork the repository.

 2. Edit the ``rollup.config.js`` file which can be found in the repository root
    folder and make the following changes...

     - Change the name of the input file to match the name of your components
       main source file.
     - Make a similar change to the output file name.

 3. Update the ``build/index.html`` file to import your component from the
    appropriately named file. Update the page body content to contain an element
    that will insert your component.

 4. Create your component source files in the ``src/js`` folder. Make use of ES6
    as your code target (i.e. making use of export/import etc.).

 5. Ensure that you have NodeJS/NPM installed and run the command ``npm install``
    to install the project dependencies.

 6. Build your sources into the output folder (i.e. ``build``) using the command 
    ``rollup -c``.

