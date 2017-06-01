===Component Name ===

Program to generate the biggest palindrome number from the given two numbers.



== Description ==

There are two input fields given in the page for the user

There the user has to enter the range i.e., minimum /starting number from where the palindrome has to be fetched

And next another input field is given for entering the maximum/ ending number upto where the palindrom has to be fetched

Once user enters the two inputs and click the submit button, then we will search the largest palindrom that can be printed among the given two numbers in the result area



== Pre requisites ==

Node JS v4.2.0




== How to run the file ==


Open Command promt in the user system by pressing"Windows+R" buttons. then type "npm install http-server -g" in the command prompt

After the command got executed.

Open the application folder using Visual studio code.

Open the Integrated terminal windows provided with VS Code.

Type the following command "http-server -g" in the terminal window. Then it will initiate an node js server in the users system

It will show the IP's where the application is hosted i.e. , "XXX.XXX.XXX.XXX:PORT" or "127.0.0.1:8080" as a result.

Copy the ip address received and paste the same in the browser and press enter.

This will initiate and web server in the user's desktop, and shows the index.html as a landing page.

In that landing page you will find the description about the program and the inputs and output.

In that page, click on the "Search palindrome" button.Then a page will open which contains two input text fields and  an "Search" button
Here user has to input the numbers in the boxes and then click "Search" button, this will generate the largest possoble palindrom in the result area provide at the bottom of the page.


== About the Program ===

Progrma will take the two integer values from the two fields shown in the search page.

Before going to perform the business logic, declare an empty variables to store the minimum and maximum number from user.

The following logic will tells the numbers that are lies between range is a palindrome or not.


	function isPalindrome(s) {
            var len = s.toString().length;;
            if (len < 2) {
                return true;
            }
            var i = 0;
            var j = len - 1;
            while (i < j) {
                if (s.toString()[i] != s.toString()[j]) {
                    return false;
                }
                i += 1;
                j -= 1;
            }
            return true;
        }




