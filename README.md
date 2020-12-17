# Typescript form coding exercise

## The concept

The idea is to fill the form on the right. Get a greeting message stating when your brithday will be. And keep a permanent record of all the people who have registered on that form.

### The design / arch

This design is based off of an initial prototype. On the very first step we laid out the base structure using raw HTML in the main component.
The next step was to break down each component into various ones, adding styles and some more crude formatting.
The features were added one after another, adding complexity to each element. This allows to be aware on where in the component tree we are using state.
Ideally we want to keep state as low as possible, always lifting or passing it as props whenever needed.

#### The components

- Side form - the form containing all inputs, calendar selector and etc...
- Side table - the table displaying user records
- Greeting msg - the custom greeting message that calculates age
- Footer - a small component to display the user name

### Libraries used

- Emotion styled - for CSS in JS
- react-datepicker
- react-select

### API's endpoints used

For simplicity sake this code uses mock API's (except for the request that populates country data).
