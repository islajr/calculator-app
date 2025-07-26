const display = document.getElementById("screen-container");
const buttons = document.querySelectorAll(".button");
const background = document.querySelector(".body-container");
const themeOne = document.getElementById("1");
const themeTwo = document.getElementById("2");
const themeThree = document.getElementById("3");
const buttonSection = document.getElementById("buttons");
const deleteBtn = document.getElementById("delete-button");
const equalsBtn = document.getElementById("equals-button");
const resetBtn = document.getElementById("reset-button");
const rockerButton = document.querySelectorAll(".rocker-button");
const rocker = document.querySelector(".rocker");
const displayScreen = document.getElementById("display");
const header = document.querySelector(".header-container");
const buttonBg = document.querySelector("#buttons");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");

document.addEventListener("DOMContentLoaded", () => {
    themeTwo.style.backgroundColor = "inherit";
    themeThree.style.backgroundColor = "inherit";
})

/* Class for the basic functionality */
class Display {
    static clear () {

        displayScreen.innerText = null;

    }

    static backspace () {
        let temp = displayScreen.innerText;
        let tempArray = [];
        let tempString = "";

        if (temp === "" || temp == null) {
            alert("Nothing to delete!");
        }

        for (let i=0; i <= temp.length-1; ++i)
            tempArray.push(temp[i]);

        // remove the last element from the array
        tempArray.pop();

        // return the array to the UI
        for (let i=0; i <= tempArray.length; ++i){
            if (tempArray[i] !== undefined){
                tempString = tempString + tempArray[i];
            }
        }
            
        displayScreen.innerText = tempString;
    }

    static equals() {
        let temp = displayScreen.innerText;
        let answer;
        
        try {
            answer = eval(temp);    
        } catch (error) {
            alert("There was a problem!");
            console.log("There was a problem!");
        }

        if (answer != null) {
            displayScreen.innerText = answer;
        }
    }
}

// Class for theme switching
class Theme {

    static activate(active, inactive1, inactive2) {
        switch (active) {
            case themeOne:
                active.style.backgroundColor = "hsl(6, 63%, 50%)";
                break;

            case themeTwo:
                active.style.backgroundColor = "hsl(25, 98%, 40%)";
                break;

            case themeThree:
                active.style.backgroundColor = "hsl(176, 100%, 44%)";
                break;
        }

        inactive1.style.backgroundColor = "inherit";
        inactive2.style.backgroundColor = "inherit";
        
    }

    static switch(active) {
        
        switch (active) {
            // styling for theme one
            case themeOne:
                display.style.backgroundColor = "hsl(224, 36%, 15%)";
                background.style.backgroundColor = "revert";
                buttonBg.style.backgroundColor = "hsl(223, 31%, 20%)";
                header.style.color = "unset";
                rocker.style.backgroundColor = "hsl(223, 31%, 20%)";
                deleteBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
                resetBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
                deleteBtn.style.borderColor = "hsl(224, 28%, 35%)";
                resetBtn.style.borderColor = "hsl(224, 28%, 35%)";
                equalsBtn.style.backgroundColor = "hsl(6, 63%, 50%)";
                equalsBtn.style.borderColor = "hsl(6, 70%, 34%)";
                buttons.forEach((button) => {
                    button.style.backgroundColor = "hsl(30, 25%, 89%)";
                    button.style.borderColor = "hsl(28, 16%, 65%)";
                    button.style.color = "";
                });
                display.style.color = "hsl(0, 0%, 100%)";
                displayScreen.style.color = "hsl(0, 0%, 100%)";
                break;

            // styling for theme two
            case themeTwo:
                display.style.backgroundColor = "hsl(0, 0%, 93%)";
                background.style.backgroundColor = "hsl(0, 0%, 90%)";
                buttonBg.style.backgroundColor = "hsl(0, 5%, 81%)";
                header.style.color = "hsl(60, 10%, 19%)";
                rocker.style.backgroundColor = "hsl(0, 5%, 81%)";
                deleteBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
                deleteBtn.style.borderColor = "hsl(185, 58%, 25%)";
                resetBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
                resetBtn.style.borderColor = "hsl(185, 58%, 25%)";
                equalsBtn.style.backgroundColor = "hsl(25, 98%, 40%)";
                equalsBtn.style.borderColor = "hsl(25, 99%, 27%)";                      
                equalsBtn.style.color = "hsl(0, 0%, 90%)";
                buttons.forEach((button) => {
                    button.style.backgroundColor = "hsl(45, 7%, 89%)";
                    button.style.borderColor = "hsl(35, 11%, 61%)";
                    button.style.color = "hsl(60, 10%, 19%)"
                });
                display.style.color = "hsl(60, 10%, 19%)";
                displayScreen.style.color = "hsl(60, 10%, 19%)";
                break;
            
            // styling for theme three
            case themeThree:
                display.style.backgroundColor = "hsl(268, 71%, 12%)";
                background.style.backgroundColor = "hsl(268, 75%, 9%)";
                buttonBg.style.backgroundColor = "hsl(268, 71%, 12%)";
                header.style.color = "hsl(52, 100%, 62%)";  // header font change
                // rockerButton.forEach((rocker) => rocker.style.backgroundColor = "hsl(176, 100%, 44%)");
                rocker.style.backgroundColor = "hsl(268, 71%, 12%)";
                deleteBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
                deleteBtn.style.borderColor = "hsl(285, 91%, 52%)";
                resetBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
                resetBtn.style.borderColor = "hsl(285, 91%, 52%)";
                equalsBtn.style.backgroundColor = "hsl(176, 100%, 44%)";
                equalsBtn.style.borderColor = "hsl(177, 92%, 70%)";
                equalsBtn.style.color = "hsl(198, 20%, 13%)";
                buttons.forEach((button) => {
                    button.style.backgroundColor = "hsl(268, 47%, 21%)";
                    button.style.borderColor = "hsl(290, 70%, 36%)";
                    button.style.color = "hsl(52, 100%, 62%)";
                });
                display.style.color = "hsl(52, 100%, 62%)";
                displayScreen.style.color = "hsl(52, 100%, 62%)";
                break;
        
        }
        
    }
}



// Theme Switching
themeOne.addEventListener("click", () => {
    // rocker setting
    // themeOne.style.background = "hsl(6, 63%, 50%)";
    Theme.activate(themeOne, themeTwo, themeThree);
    Theme.switch(themeOne);
    
})

themeTwo.addEventListener("click", () => {
    Theme.activate(themeTwo, themeOne, themeThree);
    Theme.switch(themeTwo);

})

themeThree.addEventListener("click", () => {
    Theme.activate(themeThree, themeOne, themeTwo);
    Theme.switch(themeThree);
})


/* Main Functionality */
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        
        displayScreen.innerText = displayScreen.innerText + event.target.innerText;
    })
});

deleteBtn.addEventListener("click", (event) => {
    event.preventDefault();
    Display.backspace();
})

resetBtn.addEventListener("click", (event) => {
    event.preventDefault();

    Display.clear();
})

equalsBtn.addEventListener("click", (event) => {
    event.preventDefault();

    Display.equals();

    
})

