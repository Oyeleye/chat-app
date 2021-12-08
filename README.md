# Welcome to my chat app built with React!
![Teams Build with Chat Engine](https://i.ibb.co/vDhx8Md/Whats-App-Image-2021-01-26-at-02-01-43.jpg)

This is a chat app built utilzing Sockets, hooks, api, props, js.   React Chat engine

Dependencies installed: @ant-design/icons, axios, react-chat-engine

I signed up on https://chatengine.io, copied my Project ID, once in, after  registration, and pasted in my App.js ChatEngine component already imported to your App.js file. From the site, I also created a user, and also created a chat, which I then copied their ID to my App.js. However, this is not enough to make my user creation and chat dynamic. Hence, I had to throw in some codes in App.js to allow such dynamics. Note, whilst creating a user, you can add an avatar, first and last names, etc.

After this, I ran the npm start to see if it worked.

I created an App.css that I imported in my App.js to customize my styling.

I rendered a new prop called renderChatfeed in App.js,contatining component where I parsed in props and another ChatFeed component containing another prop. To spread the prop, Iwrapped it in curly braces {...chatAppProps} />}. Then, I created a component folder with a ChatFeed component file which I then imported to App.js

Navigate to docs on the chat engine site - https://chatengine.io/docs , for more customize UI, contextAPI, event hooks, web hooks, , timezones, socets, notifications and so on.


## Introduction

This is a Microsoft Teams clone built with React JS and [Chat Engine](https://chatengine.io)!

React JS is the programming language of choice, and Chat Engine is a set of APIs and UI Kit specific to chat.
