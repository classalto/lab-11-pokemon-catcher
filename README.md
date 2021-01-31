Pokecatcher-Lab
Pokecatcher Prep
    # Data Structure

    ## For Each Pokemon:

        - id
        - how many times user has seen this pokemon
        - how many times user has caught this pokemon
    # HTML Setup
    ## Main Page:

        - Three unique pokemon images that act as buttons
            unique per set, but can be repeated in each new set
    # Results page:

        - generate caughts + encountered for each pokemon
    # Plan
        ## Load 3 pokemon:
            - three new pokemon now up on the page
            - increment the seen property for all 3 new pokemon; for each...
            - if they've seen this pokemon before, increment the seen property
            - if they haven't seen this pokemon before, initialize a new item in the 'cart' with seen: 1 and caught: 0 (and the pokemon's id)
                
                example 'cart':
                [{id: 1, seen: 1, caught: 0}, {id: 2, seen: 1, caught: 0}, {id: 3, seen: 1, caught: 0}]
        ## on click:
            - increment the clicked pokemon's caught property
            - clear out the current pokemon
            - display a new set of three pokemon and restart process from the beginning
        ## Main Page on Load:
            - Three wild pokemon appear!
            - look at database, randomly pick 3, check to make sure they're all different, throw em on the screen
                - all should be clickable
        ## Results Page on Load:
            - Results page triggers after the user has been presented with and chosen from 10 sets of pokemon on the main page.
            - look at local storage, where stats have been stored as the user was viewing and catching pokemon
            - display data about what pokemon the user caught and what pokemon they saw
