# 🕵️KeyEvent Inspector

KeyEvent Inspector is a simple web application that provides real-time insights into keyboard events. Whenever a key is pressed, this app captures and displays detailed information about the event, including the key itself, keycode, code, and various modifier states (e.g., Alt, Ctrl, Shift, Meta).

## Features

- **Live Key Event Display**: Instantly shows the key pressed along with detailed information.
- **Detailed Table View**: Displays key event properties in a neatly formatted table.
- **Dark Theme**: Designed with a modern dark theme to reduce eye strain.
- **Modifier Keys Detection**: Identifies if Alt, Ctrl, Shift, or Meta keys were pressed.
- **Cross-Browser Compatibility**: Works across modern web browsers.

## Event Properties Displayed

- **KEY**: The actual key that was pressed (e.g., "a", "Enter", "Shift").
- **KEYCODE**: The numeric code representing the key.
- **CODE**: The physical key on the keyboard (e.g., "KeyA", "Enter").
- **ALT KEY**: Whether the "Alt" key was pressed.
- **CTRL KEY**: Whether the "Ctrl" key was pressed.
- **SHIFT KEY**: Whether the "Shift" key was pressed.
- **META KEY**: Whether the "Meta" key (e.g., Command on Mac) was pressed.
- **REPEAT**: Indicates if the key is being held down and repeating.
- **TIMESTAMP**: The time when the event occurred (in milliseconds since the page loaded).
- **LOCATION**: The location of the key on the keyboard (e.g., standard, left, right, numpad).

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)

### Running the App

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/keyevent-inspector.git
    ```

2. Open `index.html` in your preferred web browser.

3. Press any key on your keyboard to see the event details in the table.

## Technologies Used

- **HTML5**: Markup language used for structuring the web page.
- **CSS3**: Styling for the table and dark theme.
- **JavaScript**: Handles the keydown event and dynamically updates the table with event details.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Acknowledgments

- Inspiration from various JavaScript key event projects.
- Thanks to the open-source community for continuous learning and development resources.
