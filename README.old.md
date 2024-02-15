# Display Props Exercise

## Exercise Description
Create a functional component named 'UserProfile' that accepts 'username' and 'age' as props and displays them.

## Initial Setup
1. Fork this repository to your own GitHub account.
2. Clone your forked repository to your local machine:
   ```
   git clone <your-forked-repo-url>
   ```
3. Navigate to the project directory:
   ```
   cd 03-04-display-props
   ```
4. Create a new React app inside the repository:
   ```
   npx create-react-app .
   ```

## Exercise Tasks
1. **Create UserProfile Component:**
   - In the src folder, create a new file called UserProfile.js.
   - Define a functional component called UserProfile that takes props as an argument.
   - Inside the UserProfile component, return a JSX element displaying the username and age of the user with keys from the props.

2. **Render UserProfile in App:**
   - In App.js, import UserProfile.
   - Render the UserProfile component within the App component.

3. **Run the Application:**
   - Start the application to see the results:
     ```
     npm start
     ```

## Submission Process
1. Commit your changes to your fork:
   ```
   git add .
   git commit -m "Complete the display props exercise"
   git push
   ```
2. Create a pull request from your forked repository to the original repository.

## Expected Outcome
You should see a greeting on the screen displaying the username and age passed as props to the UserProfile component.
