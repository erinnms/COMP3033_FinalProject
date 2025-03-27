INSTALLATION INSTRUCTIONS
Prerequisites:
- nodejs
- MySql
- typescript
- Javascript
- A Spotify Account


1. create an account for the spotify developer API here: https://developer.spotify.com/
2. Go to dashboard and click "Create App"
3. Copy your Client ID (will be used later)
4. Add any value you want (other than blank) for "App name" and "App description"
5. Change redirect URIs to whichever port you'd like to run this project, im my case it was http://localhost:5173/callback/ (DO NOT OMIT THE /callback/)
6. Save your project
7. Navigate to 'script.ts' which is located in the src folder as the second document
8. change the variable on line 4 labeled 'clientId' to your client ID
9. Save all changes
10. Be in the COMP3033_FinalProject Directory and run 'npm install' in the terminal
11. Run 'npm run dev' in the terminal
12. Navigate to your localhost port to access project

DATABASE INSTALLATION INSTRUCTIONS
1. Enter into your favourite database management system, this project used XAMPP and MySQL
2. Download 'spotifyunwrapped3033.sql'
3. Create a database called 'spotifyunwrapped3033' (or whatever you want, make sure you change the database name in the 'databaseInsertion.php' file if you do)
4. Set up your environment with your username and password
5. Navigate to 'databaseInsertion.php' and alter the values for $user and $pass on lines 4, 5, 23, and 24
6. Save your changes

DATABASE USE INSTRUCTIONS
1. Download your data after recieving it in 'index.html'
2. Put the downloaded data into the same directory as 'databaseInsertion.php' 
3. Run 'databaseInsertion.php' 
