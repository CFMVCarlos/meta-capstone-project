# Meta Capstone Project

Meta Capstone Project is a React-based web application for **Little Lemon Restaurant**, which allows users to interact with various features such as making reservations, viewing weekly specials, and more. This project showcases a user-friendly interface and a seamless experience for restaurant visitors.

## Table of Contents

- [Meta Capstone Project](#meta-capstone-project)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
    - [Key Directories and Files:](#key-directories-and-files)
  - [Installation](#installation)
  - [License](#license)

## Project Structure

The project is organized into various directories and files for a clean and modular structure:

```
.babelrc
.gitignore
Heuristics-Template.xlsx
Heuristics.xlsx
jest.config.js
LICENSE
MetaCapstoneProject.fig
package.json
public/
  index.html
  manifest.json
  robots.txt
README.md
src/
  __mocks__/
    react-router-dom.js
  App.css
  App.jsx
  assets/
  components/
    About.jsx
    BookingForm.jsx
    BookingForm.test.js
    BookingPage.jsx
    BookingPage.test.js
    Card.jsx
    ConfirmedBooking.jsx
    Footer.jsx
    HeroSection.jsx
    Highlights.jsx
    HomePage.jsx
    Main.jsx
    Nav.jsx
    Testimonials.jsx
  index.css
  index.js
  reportWebVitals.js
  setupTests.js
```

### Key Directories and Files:
- `public/`: Contains the static files that are served, including `index.html`.
- `src/`: Contains the main application code, including components, styles, and assets.
- `src/components/`: Contains React components such as `BookingForm`, `HomePage`, `ConfirmedBooking`, etc.
- `jest.config.js`: Configuration for Jest testing.
- `MetaCapstoneProject.fig`: Figma design files for the project.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/CFMVCarlos/meta-capstone-project.git
   ```
2. **Navigate to the project directory**:
   ```sh
   cd meta-capstone-project
   ```
3. **Install dependencies**:
   ```sh
   npm install
   ```
4. **Start the development server**:
   ```sh
    npm start
    ```

## Available Scripts

Once the dependencies are installed, you can run the following scripts:

- **`npm start`**: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- **`npm run build`**: Builds the app for production in the `build` folder.
- **`npm test`**: Launches the test runner in interactive watch mode.

Additional commands are available in the `package.json` file.

## Features

### Navigation
- Features a **responsive navigation bar** with clearly labeled links to essential sections: **Home**, **About**, **Menu**, **Reservations**, **Order Online**, and **Login**.
- The navigation bar is designed for easy access, ensuring a seamless user experience across both desktop and mobile devices.

### Footer
- Replicates the **navigation bar links** for easy access to key pages, ensuring users can navigate to any section regardless of their location on the page.
- Provides **contact information**, including phone number, email, and physical address, for easy communication with the restaurant.
- Features **social media icons** (Facebook, Instagram, X) to encourage users to follow, share, and engage with the restaurant's updates and promotions.
  
### Improvements:
1. **Responsive design**: Highlighted that the navigation is designed to work well on both desktop and mobile.
2. **Visual feedback**: Emphasized hover effects and active link highlighting for a better user experience.
3. **Expanded footer description**: Added details about the contact info and social media icons, and included the newsletter signup feature to enhance engagement opportunities. 

Let me know if you'd like further adjustments!

### Home Page
- Displays a **hero section**, **highlights**, **testimonials**, and **about** information to engage users.

### Booking Page
- Allows users to **make a reservation** by selecting:
  - Date
  - Time
  - Number of guests
  - Occasion
- Includes form validation to ensure correct data entry.

### Confirmed Booking Page
- Displays a **confirmation message** after a successful reservation, providing the user with reassurance and details.

## Testing

The project uses **Jest** and **React Testing Library** for unit and integration testing. Test files are located alongside their respective components and end in `.test.js`.

To run the tests:

```sh
npm test
```

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.