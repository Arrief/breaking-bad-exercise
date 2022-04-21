# Breaking Bad API exercise

1. Use the breaking bad API: https://breakingbadapi.com/documentation to store in your state all characters. You'll use this endpoint: https://www.breakingbadapi.com/api/characters You need to do the API call when the user loads the page for the first time. Do the API call, store it in your state and check that works with React Dev Tools.

2. Create a logic on your html that will show some loading text if the API is not ready and some text saying "API ready" if it's loaded.

3. Instead of showing a text saying "API is loaded" change it to display all characters. You could display the character name, the nickname, the picture and the status.

4. At this point, if somebody in the groups feels like, push the current code to github and clone it so they can work on the styles. If not feel free to use something like:

```css
/* main container of all elements */
.list-of-characters {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
/* each character card */
.char-wrapper {
  width: 300px;
  height: 450px;
  border-radius: 10px;
  border: 1px solid green;
  padding: 10px;
  margin: 10px;
}
/* image inside of the character card */
.char-wrapper img {
  width: 200px;
  height: 220px;
  object-fit: cover;
}
```

5. Create a logic that will check if a character is alive. If he/she is alive, you will show a button to kill him/her on the character card.

6. If the user clicks that button, you will change that character status from 'Alive' to 'Deceased'. Spoiler: You will need to know on which character you are clicking, find that character on your array of characters, get inside that characters properties and then change the value to be 'Deceased'

7. Enjoy yourself killing some characters you hate.

8. Add a button on the application that will be in charge of showing only people alive. If clicked, you will only render people that their status is 'Alive'.

9. Add an extra logic on that button. If you click it again, it will show again everybody in the list



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
