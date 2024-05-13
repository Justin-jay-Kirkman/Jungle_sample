## Jungle_sample
This is an 90 minute assessment I took in 2022 for a job interview

#Assessment Total Time: 90 minutes
After the 90 minutes is complete, please zip your solutions and return it for evaluation.

#Assessment Problem Definition – Part 1 - 1 question: (1 hour)
Create the objects that you feel would best model a jungle using JavaScript and best coding practices
based on the following requirements.
1. The jungle contains several species of animals; tigers, monkeys and snakes.
2. All animals can do three things, make a sound, eat food, and sleep.
3. Each species of animal knows how many others of its kind exist.
4. By default when an animal’s energy level changes, it changes in the following ways:
1. -3 for making a sound
2. +5 for eating food
3. +10 for sleeping
5. The jungle can perform a sound off. This involves all of the animals in the jungle each making
their sound, along with reporting their energy level.
6. Tigers get +5 energy for sleeping.
7. Monkeys get +2 energy for eating and -4 energy for making a sound.
8. Some animals have the ability to play.
9. Only monkeys can play. When they do they say "Oooo Oooo Oooo" and get -8 energy. If a
monkey doesn't have enough energy to play they say "Monkey is too tired".
10. The jungle contains several types of food; meat, fish, bugs and grain.
11. Tigers can't eat grain because they have sensitive digestive systems.
12. Bonus Item: The jungle can have each animal perform a random activity out of the ones possible
for that animal. Include Unit tests if you would like to do so.

#Assessment Problem Definition – Part 2 – 2 questions: (30 minutes)
[Part 2 - Problem 1]
In this problem we are asking for implementation in JavaScript of a function, f, that encodes a String.
The function f shall accept a String as an input and return the encoded String as a return value.
The encoding algorithm replaces every character in the string with the letter that has exactly the same
position when counting backwards from letter “z” (with alphabet sort order in mind.) Non-alphabet
characters are ignored.
Here are three examples:
a) Letter “a" is replaced by letter “z” (because “a” is the first letter of alphabet and “z” is the first
letter when counted from the end of the alphabet list.)
b) Letter “c” is replaced by letter “x” (because “c” is the third letter of alphabet and “x” is the third
letter of alphabet when counted backwards from letter “z".)
c) Letter “p” is replaced by letter “k” (because “p” is the 16th letter of alphabet and “k” is the 16th
letter when counted backwards from letter “z".)
Therefore, when string “acp” is encoded, the return value is string “zxk”.

Please write and submit this function with any unit tests that you would like to include.
What would be the result of encoding the String “Errors in strategy cannot be correct through tactical
maneuvers”?

#[Part 2 - Problem 2]
In this problem we are asking for implementation in JavaScript of a function, g, that returns the
frequency of alphabet letters in a given string ignoring upper/lower case issues.
Use whatever programming language you are most comfortable with, although we prefer to see
standard scripting languages used.
The return format is best demonstrated in an example. Suppose you are given the String “Hello
there! Apple!" The function g shall return the following structure:
{
a:1,
b:0,
c:0,
d:0,
e:4,
f:0,
g:0,
h:2,
i:0,
j:0,
k:0,
l:3,
m:0,
n:0,
o:1,
p:2,
q:0,
r:1,
s:0,
t:1,
u:0,
v:0,
w:0,
x:0,
y:0,
z:0
}
