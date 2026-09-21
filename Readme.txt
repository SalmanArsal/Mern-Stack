- Hyper text markup language
- usage - to create the web pages(static)
- how - we use tags such as <h1>, <p>, <img>, <video> .....

- inpsect the web page: ctrl+shift+i
- meta tag 
    - It is used to store meta data about a page/website , metadata includes - description, keywords, page width, utf-8,.......
    - It helps in SEO

- units
    - px, rem, %, em, vh, vw

display: flex - 
    Aligning the elements horizontally(Justify-content), vertically(align-items)
    One dimensional
    flex converts all the block elements to inline elements within a container

display: grid - 
    Aligning the elements
    two dimensional
    grid converts all the inline elements to block elements within a container

Anchor tag -
    Navigate from one source to another source (one webpage to another webpage)
    <a href="">......</a>

Semantic & Non semantic tag:
      - semantic - nav, footer, header - meaningfull
      - non-sem - div

POsition:
    - abosolute - POsition an element from one place to another
    - relative - to move an abosolute element within a parent
    - fixed
    - sticky
    - static(default)

Pseudo selectors:
    - classes(:) - :hover
    - elements(::) - ::placeholder


----------------------------------------------------------------------------------
Js Execution -
    - Browser - use script tag in html file and provide the javascript file path
    - Local machine -using node 
        node -v (to check the node is existing in the machine ) , if it is throwing error then install node js and re eun the same command in terminal
        node filename.js (to run the js file in terminal)
Javascript:
    keywords to create variablles - var, let, const
        let and const will not allow redeclaration
        const will not allow re initilaisation
    Datatypes - 
        primitive -
            Number, String, Boolean, null, undefined
        Non-primitive - 
            Objects, Array
                Array - Its c collection of elements
                        An array can store n number of elements, there will be no fixed size
                        Js array is Heterogenous, it can store different types of elements
                        Array support indexing, to access the elements from the Array
                        Array is mutable, it can be modified, u can add, remove, update elements in the array

                Array methods -
                        push, pop, shift, unshift, slice, splice, indexof, includes, map, filter, reduce, fill, join, ...

                Object - It is collection of key value pairs, stores data about an entity
                         Object is mutable
                    
    Operators - 
        Arithmatic , Assignment, logical, Relational, ternery, unary

        == -> It checks only value of the operands, it wont check datatype 

    Control Statements -
        - used to control the flow of Execution
        - Decision making statements, looping statements
        - Decision making statements
            - if, else, else if ladder, nested if, switch
            - if syntax:
                if(condition){
                    statement
                }
        - looping statements
            - for, while, do-while, for of, for in, forEach
            - for loop
                for(initialisation; condition; updation){
                    statements
                }

    

    