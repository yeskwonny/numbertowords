# README.md

## Project Title

Number to Words Converter

## Description

This project is a simple, interactive tool to convert numeric values into their English word equivalents.
It’s designed to provide quick feedback and is ideal for testing with various numeric inputs.

## Setup Instructions

1. Ensure you have a compatible web browser.
2. Clone or download this repository.
3. Open `index.html` in your browser to start the application.

### Optionally, Use Live Server

For a more dynamic development experience, you can use a live server to run this project. This setup auto-reloads the page upon changes and is especially useful during development. Here’s how:

1. **Install Live Server**:
   - If using **Visual Studio Code (VSCode)**, install the **Live Server** extension by Ritwick Dey.
2. **Start Live Server**:
   - Open the project folder in VSCode.
   - Right-click on `index.html` and select "Open with Live Server".

This will launch the project in a new browser tab and automatically reload the page when you make changes to the code.

## Usage Instructions

1. Enter a numeric value in the input field.
2. Click the "Convert" button to see the number displayed in words.
3. Use the "Clear" button to reset the fields.
   - **Note:** This tool currently supports numbers up to 66 digits.

## Testing Instructions

- **Manual Testing:** Enter numbers directly in the input field and verify the output.


## Development Notes

- The conversion logic is in `script.js`.
- CSS for styling the interface is in `style.css`.

## Known Issues / Future Improvements

- **Known Issues:** Currently, numbers above 66 digits show as "Extremely Large Number."
- **Future Improvements:** Add support for additional languages and handle very large numbers in a different way.
