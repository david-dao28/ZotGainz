# ZotGainz
Inspiration

The ARC at UCI is a popular place to be at. It’s a place to get a lift in or to hang with friends while doing an activity. However, it gets quite crowded and almost too crowded with it comes many problems. Our app aims to fix some of these problems and to overall create a better experience.

What it does

Zotgainz is a mobile application where users can check the busyness of the ARC as well as its expected busyness in the future for that current day. In addition, users can use the app to make reservations for various facilities similar to booking a study room like the Antcave in the ALP. While in the ARC, the app also offers a way to log workouts.

How we built it

The first part of the creation process was to design the app. One of our team members created the user-flow and low-fidelity mockups to help start the project off. He then created the hi-fidelity screens and passed it along to the rest of the developer team. For the frontend, we used React Native to develop the screens and leveraged Expo, a framework, that provided us a plethora of tools to help with the development process; for example, with Expo Go, we were able to have a live development server on our mobile devices that allowed us to get live updates as we make changes to our codebase. For the backend, we implemented a local server with ExpressJS where we were able to listen for requests from the client-side. This was especially vital for using the Twilio API, since its request was in NodeJS, rather than conventional Javascript.

Challenges we ran into

One of the main challenges we ran into was that we did not have enough time to fully implement the workout functionality, where a user could log and keep track of their workouts, as well as the profile tab with the settings option which would allow users to make changes to their account or log out of the app. Another challenge was that for the majority of us, it was the first time being exposed to mobile app development, and specifically React Native. As a result, a majority of the hacking period was spent reviewing documentation and understanding how state management and passing data worked in React Native.

Accomplishments that we're proud of

A huge part of the process that we’re proud of was being able to follow design and development practices in the industry. Instead of having the developers do all the design, having a UI/UX designer paved the way to learn a new way to create. We also were especially proud of being able to implement the Twilio API to send users messages regarding their booked reservations as well as the BestTime API to obtain foot traffic surrounding the ARC.

What we learned

Something we learned was the pace of working in a time constraint. Being under a time crunch meant screens had to be produced in the matter of hours and minutes; anything that could help the design and development process was needed. Another valuable lesson learned was effective communication between the designers and developers. In this case, the designer had to really help the developer understand what should be built as well as the functionality.

What's next for ZotGainz

The main thing that is next is to complete the log workout functionality and profile tab to see the app in its entirety. For the design process, a crucial next step is to gather user feedback in the form of interviews and app-testing to understand their thoughts on the app. Another part would be to talk to the ARC and UCI Campus Rec to have access to their existing database and possibly integrate the way they scan students into the center to provide more accurate foot traffic data.
