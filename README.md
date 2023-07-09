# SportSee

Openclassrooms P12

## Back-end

https://github.com/aplainea/P9-front-end-dashboard

This project includes four endpoints that you will be able to use:

-   `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
-   `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
-   `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
-   `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).

**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

```
yarn dev
```

## Front-end

```
yarn start
```
