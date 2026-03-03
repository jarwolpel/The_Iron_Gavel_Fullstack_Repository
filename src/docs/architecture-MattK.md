# A brief overview of useBattles, useCharacterSelect, useSelectedCharacter, battleService, characterService, battleRepository, and characterRepository.

# -----------------------------------------------Hooks-----------------------------------------------------

## useBattles

    **What it does:**
    useBattles is used to control the state a Battle and updates the appearance when creating a new Battle(submitting the form) by calling the battleService.

    **Why it's separated/ what logic is included:** 
    It made sense to move the logic into it's own hook because the effect of updating the Battles list was triggered by user input in the Create Battle page form.

    **Where is the implementation used and how:** 
    useBattles is currently used in:
        
        > src/App.tsx
            > Initializes the state of the Battle lists at the app level.
        
## useCharacterSelect

    **What it does:**
    useCharacterSelect manages the selection state for favorite characters with a limit of 2 selections.

    **Why it's separated/ what logic is included:**
    It contains selection logic including toggle functionality, selection validation, and clear operations.

    **Where is the implementation used and how:** 

    > common/characterselect/Characterscreen.tsx
            > Used in the character select screen where users can pick favorites.


## useSelectedCharacter

    **What it does:**
    Extracts selected characters based on the useLocation side effect.

    **Why it's separated/ what logic is included:**
    Isolates the logic for retrieving navigation state data and validates that the data is an array.

    **Where is the implementation used and how:**
    
    > src/pages/Createbattle.tsx
            > Used on the create battle page to save the selection for battle creation. 

# ---------------------------------------------Services----------------------------------------------------

## battleService

    **What it does:**
    Contains methods for communicating with the battle repo and business logic. 

    **Why it's separated/ what logic is included:**
    It contains the CreateBattle form validation and manages battle creation.

    **Where is the implementation used and how:** 
    It is called by  the useBattles hook and calls the battleRepository.

    > src/App.tsx
            > Initializes the state of the Battle lists at the app level.

## characterService

    **What it does:**
    Contains methods for communicating with the character repo and business logic. 

    **Why it's separated/ what logic is included:**
    It contains the Character Search validation.

    **Where is the implementation used and how:**
    It is used in the character selection screen and calls the character repository.



# -------------------------------------------Repository--------------------------------------------------

## battleRepository

    **What it does:**
    Stores battles to memory, communicates with the Battles API.

    **Why it's separated/ what logic is included:**
    It contains methods to manage REST requests to the database.

    **Where is the implementation used and how:**

    It is called by the battleService.

## characterRepository
    
    **What it does:**
    Communicates with the Characters API.
    
    **Why it's separated/ what logic is included:**
    It contains methods to manage REST requests to the database

    **Where is the implementation used and how:**

    It is used in the MockBattleData and called by the characterService.