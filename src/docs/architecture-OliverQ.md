# useSearch hook and services overview

# ---------------------------------Hooks--------------------------------

## useSearch 

    The useSearch hook is responsible for filtering a list of Character objects based on the search value provided by the user. It accepts two parameters: a list of characters and a searchValue. It returns a filtered list of characters where the name of each character matches the search value.

    The "useSearch" is currently used in:
            common/pages/FavoriteCharacter.tsx
            
            The "CharacterFavorite" page uses the "useSearch" to filter characters when a user types a search query. The hook is used to get a list of characters that match the search value, which is then passed to "CharacterListDisplay" to render.

            The hook is invoked on the page, which manages both the "characters" state and the "searchValue" state. The "useSearch" is used to provide the filtered list based on the search value.

# ----------------------------Services---------------------------

## searchServices.ts

    The "searchService" provides search logic for filtering characters.  It interacts with the 
    "characterRepository" to fetch the full list of characters, then filters them based on the `searchValue` provided.

    The reason to create the "searchService" was based on the need to seperate the search logic from the component. This allows the focal point of the component to focus on just rendering the data without having to worry about filtering logic. This also ensures the logic can be reused across different parts of the application.

    The "searchService" is currently used in:
        common/pages/FavoriteCharacter.tsx

            The page uses the "searchService" to fetch characters and apply a search query. By separating this logic into the service, this makes the component easier to manage and test.
    
# --------------------Repository---------------------------------

## characterData.ts

    This is our current local data which mocks a repository and contains the set character data, such as  historical figures and video game characters. This data is used during runtime for the application and is utilized to display character information in different parts of the application, such as the "FavoriteCharacters" as well as the "CharacterSelect" section. 

    The data is stored in an array of objects containing set fields. This will later be moved onto a cloud based database at point.