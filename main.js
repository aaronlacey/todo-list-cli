const prompt = require('prompt-sync')({ sigint: true });

console.log("Welcome to Aaron's To-Do List Application!\n");

console.log("~ Select An Action ~");

console.log("[1] Create A To-Do Item");

console.log("[2] Complete A To-Do Item");

console.log("[3] Exit To-Do List Application");

let option = Number(prompt('> '));
let toDoList = [];
let statusArray = [];

while (option !== 3) {

    if (option === 1) {
        console.log('\n~ Creating a new to-do item ~');
        console.log('What is this to-do item called? ');

        let addItem = prompt('> ');

        while (addItem.length === 0) {
            console.log("Invalid Input");
            addItem = prompt(' > ');
        }
        toDoList.push(addItem)

        statusArray.push(false);

        displayList();

        selectOption();


    } else if (option === 2) {

        if (toDoList.length !== 0) {



            console.log('~ Completing a to-do item ~');
            console.log('Which to-do item would you like to complete? ');

            displayList();

            let newStatus = Number(prompt('> '))

            while (isNaN(newStatus) || newStatus > statusArray.length || newStatus < 1) {
                console.log('Please input a number from the given options');
                newStatus = Number(prompt('> '))
            }

            statusArray[newStatus - 1] = true;
        } else {
            console.log("please add something to your to-do list before trying to comeplete an item. ");
        }
        displayList();
        selectOption();


    } else {
        console.log("\nInvalid operation");
        selectOption()
    }

}
// Exiting Application 

console.log("~ Exiting the Application ~ ");




function selectOption() {

    console.log("\n~ Select An Action ~");

    console.log("[1] Create A To-Do Item");

    console.log("[2] Complete A To-Do Item");

    console.log("[3] Exit To-Do List Application");

    option = Number(prompt(' > '))
}

function displayList() {

    if (toDoList.length === 0) {
        console.log("Your List Is Empty");
    } else {
        console.log(`you have ${toDoList.length} to-do item(s)`);
    }

    let status = " ";
    for (let i = 0; i < toDoList.length; i++) {

        if (statusArray[i] === false) {
            status = "[Incomplete]";
        } else if (statusArray[i] === true) {
            status = '[Completed]';
        }


        console.log(`${i + 1}. ${status} ${toDoList[i]} `);
    }

}


/* 
    1. figure out the UI

        -console.log()
        -Welcome message 
        -different options (add task, complete task, exit program)
        -error messages for invalid options
        -spacing/seperators to make it look nice  
        -prompts 
            -adding a task/create item 
            -mark task as complete 
            -numbers to decide which option 
            -exit
        
        -while loop 
            program has no known edning, so we want to be able to prompt them indefinitely/until they decide to exit 
        

        - display the to-do list to the user 
            -completion status (complete or incomplete)
            -the name of the item 
            - the number associated with the item 
            - loop to display each item in the to-do list



    2. Add To-Do Items 








    3. Complete To-Do Items 







*/
