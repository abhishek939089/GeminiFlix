# GeminiFlix

This project is a Netflix clone enhanced with Gemini-powered movie suggestions.

## Table of Contents

1. [Steps Completed](#steps-completed)
2. [Features](#features)

## Steps Completed

1. **Create React App**: Initialized the project using Create React App.
2. **Configured Tailwind CSS**: Tailwind CSS is set up for styling the app.
3. **Routing of App**: Implemented routing to manage navigation within the app.
4. **Header**: Created a header component for navigation and branding.
5. **Sign In Form**: Developed a sign-in form using React and Formik.
6. **Sign Up Form**: Developed a sign-up form with input validation.
7. **Formik for Form Handling**: Utilized Formik for handling forms.
8. **Form Validation**: Implemented validation for the sign-in and sign-up forms.
9. **useRef Hook**: Used `useRef` for managing focus and accessing DOM elements.
10. **Firebase Setup**: Configured Firebase for user authentication and database management.
11. **Deployment**: Deployed the app to a production environment.
12. **Create Sign-Up User Account**: Implemented user registration with Firebase.
13. **Implement Sign-In User API**: Integrated Firebase sign-in functionality.
14. **Created Redux Store with userSlice**: Set up Redux for state management, focusing on user authentication.
15. **Implemented Sign Out**: Added the sign-out feature with Redux.
16. **Update Profile**: Implemented the functionality to update user profiles.
17. **Bugfix: Sign-Up User Display Name and Profile Picture Update**: Fixed issues related to updating the user's display name and profile picture during sign-up.
18. **Bugfix: Redirect to Browse if Not Logged In and Vice-Versa**: Ensured proper redirection based on authentication status.
19. **Constants File for Hardcoded Values**: Moved all hardcoded values to a constants file for better maintainability.
20. **TMDB API Registration and Access Token**: Registered on TMDB, created an app, and obtained an access token.
21. **Fetch Data from TMDB Now Playing Movies API**: Integrated TMDB API to fetch currently playing movies.
22. **Custom Hook for Now Playing Movies**: Created a custom React hook to manage now playing movies.
23. **Create movieSlice**: Added a movie slice in Redux to manage movie-related data.
24. **Update Store with Movies Data**: Updated the Redux store with data fetched from TMDB.
25. **Main and Secondary Containers**: Designed the main container for featured movies and secondary containers for movie lists.
26. **Fetch Data for Trailer Video**: Retrieved trailer video data for movies.
27. **Update Store with Trailer Video**: Stored trailer video data in Redux.
28. **Embed YouTube Video with Autoplay and Mute**: Embedded YouTube video trailers with autoplay and mute features.
29. **Styled Main Container**: Added CSS to make the main container visually appealing.
30. **Secondary Container with Movie Lists**: Designed a secondary container to display lists like popular, now playing, top-rated, and upcoming movies.
31. **Created a Separate GPT Search Page**: Built a page dedicated to GPT-powered movie suggestions.
32. **Built a Search Bar**: Developed a search bar for finding movies.
33. **Multilingual Feature**: Implemented support for multiple languages.
34. **Integrated Gemini API for Movie Suggestions**: Integrated Gemini API for enhanced movie recommendations.
35. **Responsiveness**: Ensured the app is responsive and works across different screen sizes.

## Features

- **Login, Sign In, and Sign Up**: Secure user authentication with Firebase.
- **Redirect to Browse Page**: Automatic redirection to the browse page after successful login.
- **Browse Page**: Explore movies after authentication.
- **Header**: Navigation bar with options for different sections.
- **Main Movie Display**: Showcase a featured movie on the main page.
- **Movie List**: Lists of movies categorized by popular, now playing, top-rated, and upcoming.
- **Trailer Embedding**: Play movie trailers directly within the app.
- **Title and Description**: Display movie titles and descriptions.
- **Search Bar**: Find movies using the search bar.
- **Movie Suggestions**: Get movie recommendations powered by GPT.
- **Multilingual Feature**: Switch between different languages.
- **Gemini API Integration**: Enhanced movie suggestions using the Gemini API.
- **Responsiveness**: The app is responsive and works well on medium and small devices.