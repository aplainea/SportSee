# SportSee

SportSee is a fitness tracking application that allows users to track their physical activity and nutrition. This project is part of the Openclassrooms Front-end Developer program.

## Installation

1. Clone the GitHub repository: `git clone https://github.com/aplainea/SportSee`
2. Install dependencies: `yarn install`
3. Launch the application: `yarn start`

Note: You will need to install the back-end of the application as well. Please refer to the [Back-end](#back-end) section for more information.

## Back-end

The back-end of the application is available on GitHub: https://github.com/aplainea/P9-front-end-dashboard. It includes four endpoints that you can use:

-   `http://localhost:3000/user/${userId}` - retrieves information about a user. This endpoint includes the user's ID, user information (first name, last name, and age), today's score (todayScore), and key data (calories, macronutrients, etc.).
-   `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
-   `http://localhost:3000/user/${userId}/average-sessions` - retrieves a user's average sessions per day. The week starts on Monday.
-   `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).

**Please note that only two users have been simulated for now. They have the IDs 12 and 18 respectively.**

To used the back-end, you will need to install the dependencies and launch the server:

1. Clone the GitHub repository: `git clone https://github.com/aplainea/P9-front-end-dashboard`
2. Install dependencies: `yarn install`
3. Launch the server: `yarn dev`

## Front-end

The front-end of the application is developed in React. It includes the following features:

-   Physical activity tracking: the user can track their physical activity day by day and see their progress over time.
-   Nutrition tracking: the user can track their calorie and macronutrient intake and see their progress over time.
-   Dashboard: the user can see an overview of their performance and progress over a given period.

The application is responsive for 1024 x 780 screens.

### Technologies

The application is developed in React. It uses the following technologies:

-   React
-   React Router (for routing)
-   React ReChart.js (for the graphs)
-   Styled Components (SCSS)
-   Prop Types (for type checking)

## Tests

There are currently no unit tests included in the project.
But you can run the application in development mode and check the console for errors.
For that, use the following command: `yarn test`
