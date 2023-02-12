Default Accordion

1. add 3 buttons and some paragraphs after each buttons
2. add CSS rules:
3. rule for buttons
    a. set width
    b. set bgcolor
    c. set color
    d. set text-align
    e. set padding
    f. set transition
    g. set border
    h. set outline
    i. set cursor
4. rule for buttons when clicked and when hovered over it
    a. set bgcolor
5. rule for paragraph content which will be shown when button is clicked
    a. set display to none
    b. set overflow to hidden
    c. set bgcolor and padding
6. add script
    a. get button element by class name
    b. initialize a for loop and loop over buttons
        a. add eventlistener of current button and add a function when it is clicked
            a. add/remove the class with toggle function
            b. get the paragrpah for the respective button with nextElementSibling function
            c. check the display style of paragraph if it;s block or none
                a. if its block then set it to none
                b. else set it to block
                
