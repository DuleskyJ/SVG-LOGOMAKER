## SVG Logo Maker

The SVG Logo Maker is a Node.js command-line application that generates a logo in SVG format based on user inputs. The application prompts the user to enter text for the logo, select a color for the text and shape, choose a shape from a list, and specify the font size and font family for the text. The generated SVG file can then be viewed in a web browser.

## Walkthrough Video
https://www.loom.com/share/f02b22e6d4ce4621b9267ff28bbc0082?sid=ddd5e18c-67ac-4191-88ca-adbf35d23af8 

## Table of Contents:
Installation
Usage
Testing
Screenshot
License

## Installation
To install and set up the SVG Logo Maker on your local machine, follow these steps:

## Clone the repository:

Copy the code below into your terminal to clone this repository:

git clone https://github.com/DuleskyJ/SVG-LOGOMAKER.git
cd SVG-LOGOMAKER or what you have that directory named as!

## Install dependencies:

npm install

To use the SVG Logo Maker, follow these steps:

node index.mjs

## Follow the prompts:

Enter text for the logo (up to 3 characters).
Enter the text color (keyword, hexadecimal, rgb, rgba, hsl, hsla).
Choose a shape for the logo (Circle, Triangle, Square).
Enter the shape color (keyword, hexadecimal, rgb, rgba, hsl, hsla).
Enter the font size for the text (default is 60).
Enter the font family for the text (default is Arial).
View the generated SVG file:

The file logo.svg will be created in the project directory.
Open logo.svg in a web browser to view the logo.

## Testing
To ensure the correctness of the shape classes and the application, run the following command:

npm test
The tests verify that the Triangle, Circle, and Square classes generate the correct SVG strings.

## Fork the repository:

Click the "Fork" button at the top right of the repository page.

Clone the forked repository:

git clone https://github.com/DuleskyJ/svg-logomaker.git
cd svg-logomaker

Create a new branch:

git checkout -b feature-branch

Make your changes and commit them:

git commit -m "Description of your changes"

Push to the branch:

git push origin feature-branch

Create a pull request:

Go to the original repository on GitHub and create a pull request from your fork.

## Screenshot
![Screenshot (48)](https://github.com/DuleskyJ/SOCIAL-SERVIN/assets/153566037/8a2e9969-5f19-4f74-a508-9e8528e976af)

## License
This project is licensed under the MIT License. 

## Dependencies:
Inquirer: Used for collecting user input.
Jest: Used for unit testing.
