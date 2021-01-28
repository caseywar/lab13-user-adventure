# adventure quest lab
## pages
1. Home Page
- form for user data
    - on submit
        - store data to local storatge
        - bring user to map/list
2. Map/List Page
 - HTML
    * ul to render quests into
- JS
    - grab quest data from data array
        - if all quests are complet redirect to resutls page
    - loop through quest data
    - gerate a title for each quest to display on map 
        - while looping, if quest has been completed cross it out
        - if not completed yet, it should be a link to said quest
3. quest
- quest html's should include hader, image,paragraph, radio buttons, submit button
- JS
    - grab the id of the quest from the URL of the quest page to use in a formula
    - use the id from the url (search params) to findbyid that quest in the data.js
    - use the quest data to populate/render the elelements of the html
- html
    - on submit
        - calculate users new stats
        - put new stats in localstorage
        - if user hp = 0 redirect to resutls page
4. results page
- html
    - place to display custom ending based on user stats
    -button to play again
        - clears local storage
        - redirect to homepage