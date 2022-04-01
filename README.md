# Pre-work - *Memory Game*

"Color Memory Game" is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Nicholas Janney

Time spent: 6 hours spent in total

Link to project: https://glitch.com/edit/#!/humane-light-ogre or https://humane-light-ogre.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Startup and shutdown animation

## Video Walkthrough (GIF)

https://recordit.co/OYWW9RIyAY

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I used w3schools.com just from some syntax checks with javascript

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
The biggest speedbump I had was when I was implementing the CSS class for buttons to light up when giving their clue. I had originally wrote Button#:active, Button#:lit but I couldn't get the code to work like that. I tried splitting the two statements into separate selectors just to locate the problem and noticed it was only the Button#:lit statement. After re-reading the instructions for a while it turns out, as you may have noticed in the previous sentences, that the correct syntax is Button#.lit. Thankfully this was an easy fix. 
I also had trouble implementing the logic for the guess function. Although the given example would work, I really wanted to find a way to reduce the number of lines, and more importantly, get rid of the nested if statements. I remember one of my previous computer science professors telling me that nested if statements are bad form and should be avoided if possible. Whether or not this is true, I try to avoid them because of this. For my solution my logic ended up having to be the inverse of all the statements, and I had planned on doing just 3 if statements, no if else, and the end game function call afterwards. This would cause the game to end every single time you clicked a button after the game had started, and after reexamining my logic, I realized that the final end game function call would have to be in an else statement if I wanted it to avoid being called on accident. I think this confusion came from differences between javascript and the languages I've been using the most recently, java and c sharp. Not a big fix but important to know the rules of the language.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[YOUR ANSWER HERE]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
I definitely would have added more of the optional features. The reason I didn't add more was not because I was intimidated by how difficult they might be but that I had no idea what the optional features were. I really just didn't know where to look, I guess checking this template would have been a good idea but I didn't think to check here. The ones I implemented were just features I thought would be interesting in their own way. I would have added a little startup and shutdown sound effect to go with the animation that I implemented, but I couldn't figure out how to code it without it having issues so I just left it out.



## Interview Recording URL Link

https://youtu.be/lrJRj7zIJtM


## License

    Copyright Nicholas Janney

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
