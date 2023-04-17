Hi there 👋, my name is Bedirhan
I am React Native Developer

Project name :  textEncryption 


<br>
Used technologies:
<br>
<br>

[![My Skills](https://skills.thijs.gg/icons?i=git,css,js,react)]()

PROJECT INFORMATION

This application encrypts the entered text according to various rules. The text entered in the input page
encrypts it and displays it on the output page.
 
 This is how the application processes the text:
-The first word of each sentence is written straight and the next is reversed. This cycle continues until the sentence is finished.
In each sentence, the loop starts from the beginning.

Code functioning summary: <br>
1- By separating the entered text from the dot marks in the text with the split(".") method, each sentence is an array.
I converted it into an array as an element. <br>
 We can't separate the text from carriage returns because the split("\n") method can be used in line-separated string structures.<br>
It works. Although TextInput looks like it splits the text into lines, it actually gives us a string in a single line.
rotary. The split("\n") method does not work because there is no "\n" in it.
2-I made a string by combining the resulting array element with the join("") method.<br>
3-I converted this string into an array with the split(" ") method.<br>
4- As a result, each sentence became an array and each word became an element of the sentence it was in.<br>
5-Using the latest forEach loop, words with odd index numbers are reversed, even words are reversed.
We wrote the words straight.

Note:
- Test was written in the project. You can run the test with npm test

