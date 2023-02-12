Animated Accordion

1. Add buttons and paragraphs beneath each buttons
2. Add CSS rules to button
    a. set width
    b. set bgcolor
    c. set color
    d. set text-align
    e. set padding
    f. set cursor
    g. set border
    h. set outline
    i. set font-size
    j. set transition
3. Add CSS rules to active/hover
    add bgcolor
4. Add CSS rules to the paragraphs
    a. set max-height to 0
    b. set bgcolor
    c. set padding
    d. set transtion to max-height 1s ease-out
    e. set hidden overflow
5. add script
    a. get button element by class name
    b. initiate for loop and loop over buttons
        a. add event listener on button when clicked
            a. add/remove active class to/from button with toggle func
            b. get paragraph element from nextElementSibling func
            c. check style of paragraph's maxHeight
                a. if it's not 0 set it to null
                b. else set it to paragrpah's scrollHeight
                