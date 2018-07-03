# My Movie APP
## Zachary Fine

https://wdi-instructor-app.herokuapp.com/

---

# Overview

The Front End is built with React and the Back End is built with Node

## How to use:

* Enter a movie name into the search field and click search

* To get more information about the movie **click on poster**

* Click the poster again to hide the information

* To add movie to your favorites click the **Add to Favorites** button on top of the movie

* To view favorite movies click **View Favorites** in the navbar

---

## React

The number 1 questions every student should have when using a Front End framework is **Why are we using it?** (Especially when we can build the same app with just Vanilla JS or jQuery)

Why we use React:

When large applications are built with just Vanilla JavaScript or jQuery things can get very complicated. We will probably have several functions which relie on other functions to work correctly. This is a total mess. It's similar to having 100 cords all tangled up. Yes, everything still functions correctly but you can see how this can easily become an issue. React helps us keep our cords in line by breaking our application into components and managaing the state.

First lets talk about **components**:
My application consist of 4 components:

* App
* Search
* MovieList
* Movie

Think of this like a family tree. App is the eldest member of the family. He/She has 2 component children Search & MovieList. Then, MovieList has several child Movie Compnents. We can see this better by opening the **React Developer Tools**.

Tip: Before developing in react it's a good idea to break your application down into compnents!

Now let's talk about **State**:

State is what keep track of the "state" of our application. Every time we change the state of the application, our applciation **REACTS** by re-rendering!!! Let's say we have a scoreboard app. Every time Player 1 scores, their score goes up by 1 and every time Player 2 scores, their score goes up by one. State is where we would keeop track of their scores. So when a player scores, we update state using **setState** and then our application will re-render with the new scores!!


