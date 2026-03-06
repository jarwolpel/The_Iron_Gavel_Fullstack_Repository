# Login, Create Account, And Mock UserDatabase hooks and services overview

# -----------------------------------------------Hooks-----------------------------------------------------

## useUserDatabase

    useUserDatabase is used to interact with the mock userDatabase in runtime and actively store and modify a state that can then be used for validating logged in users, and creating new accounts. 
    
    This was created as I needed to store a user database state across multiple components, but really didnt want to work with prop drilling as it made the program hard to work with. This way, only the components that need the userDatabase import it.

    As this uses a state it will not remember between page resets/refreshes but that is not the main goal at the moment.

    useUserDatabase is currently used in:
        
        > common/LoginPage/LoginForm.tsx
            > Only the current state of the userDatabase is used. LoginForm compares the input 
              credentials to the credentials in the database to find a match. If true, it logs the user in.
        
        > common/createAccount/createAccountForm.tsx
            > This uses the createNewUser(); methode to add a new user to the mock userDatabase. As well as
              the error state to read and display any potential errors the createNewUser(); methode could
              raise.
        
        LoginForm only reads the state store by useUserDatabase, whereas createAccountForm updates it.

## useSessionUser.ts

    This service stores/retrieves the username of the currently logged in user to/from localStorage. This allows the currently logged in user to stored between resets.

    The purpose of this hook is similar to the purpose of useUseDatabase. Prop drilling is difficult as
    the components that use this hook are far apart, meaning propdrilling would be difficult to work around.

    useSessionUser is currently used in:

        > common/layout/nav/Nav.tsx
            > nav only uses the getSessionUse(); method, which retrieves and parses the localStorage
              returning a string type. nav then reads this and displays it.

        > common/LoginPage/LoginForm.tsx
            > LoginForm only uses the setSessionUser() methode as it does not need to read the current
              user. Once login attempt it verified, it passes the username of the logged in user to 
              getSessionUser(), which then store the username in localStorage.
        
        Nav only reads values, whereas LoginForm sets them.

# ---------------------------------------------Services----------------------------------------------------

## credentialsService.ts

    This service is the middle man between the credentialsAPI and the rest of the program. Currently
    it only fetches data and adds data. 
    
    In the future once the program is hooked up to a proper database, it will verify data integrity and throw errors if necessary.

    credentialsService's two methods are used in useUserDatabase to read data from the database as well as update it with
    new users.

# -------------------------------------------Repository--------------------------------------------------

## characterData.ts

    This is the mock repository with some mock user data that is used to verify and log in users during
    run time.

    This is a place holder and will be replaced by a proper database later on. As such it is only accessed
    by credentialsAPI.ts

## credentialsAPI.ts
    
    This is the direct interface between the API and the rest of the program. Currently this only reads
    from a local mock database, but in the future will contain logic to connect to a remote database.

    credentialsAPI contains the basic CRUD operations to modify the database. Currently only fetch and add
    are being used by credentialsService.ts.