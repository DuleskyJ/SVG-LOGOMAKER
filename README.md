SVG Logo Maker
Description
The SVG Logo Maker is a Node.js command-line application that generates a logo in SVG format based on user inputs. The application prompts the user to enter text for the logo, select a color for the text and shape, choose a shape from a list, and specify the font size and font family for the text. The generated SVG file can then be viewed in a web browser.

Walkthrough Video
Link to walkthrough video


Table of Contents
Installation
Usage
Examples
Testing
Contributing
License
Installation
Clone the repository:

Copy code below into git bash where you want to clone this repository
git clone https://github.com/your-username/https://github.com/DuleskyJ/SVG-LOGOMAKER.git
Do cd SVG-LOGOMAKER

Install dependencies:

npm install

Run the application:

node index.mjs

Follow the prompts:

Enter text for the logo (up to 3 characters).
Enter the text color (keyword, hexadecimal, rgb, rgba, hsl, hsla).
Choose a shape for the logo (Circle, Triangle, Square).
Enter the shape color (keyword, hexadecimal, rgb, rgba, hsl, hsla).
Enter the font size for the text (default is 60).
Enter the font family for the text (default is Arial).
View the generated SVG file:

The file logo.svg will be created in the project directory.
Open logo.svg in a web browser to view the logo.
Examples
Example of generated SVG files can be found in the examples directory.

Testing
Run the tests:

npm test
The tests verify that the Triangle, Circle, and Square classes generate the correct SVG strings.

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

License
This project is licensed under the MIT License.

Additional Information
File Structure:

svg-logo-maker/
├── examples/
├── lib/
│   ├── shapes.mjs
│   ├── shapes.test.js
├── .gitignore
├── index.mjs
├── package.json
└── README.md
Dependencies:

Inquirer - Used for collecting user input.
Jest - Used for unit testing.
