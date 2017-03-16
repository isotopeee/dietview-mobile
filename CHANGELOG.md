# Version 0.6
    - Implemented textToSpeech in Chat Bot
    - Added an option to toggle on/off textToSpeech
    - Replaced Dietics with Subscription
    - Food Buddy can now view and subscribe meal plans

# Version 0.5
    - Implemented Chat Bot
    - Implemented Meal Planner Utility
    - Customized loadingService not blocking in Chat Bot
    - Fixed Vital Tracker calculating via server
    - Added ActionSheet service
    - Added animate.css bower 


## Version 0.4
    - Added Vital Tracker but calculated locally. Cannot get request on the server
    - Centralized exercise levels thru .json
    - Added modal service
    - Added popup service
    - Added http service

## Version 0.3
    - Added success/error notify using loadingService in every action
    - Login thru facebook is now up
    - Added validation and designs in sign up page
    - Encapsulated login to a service
    - Error handling 
    - Added ngMessages support

## Version 0.2
    - Profile management
        - Can now update profile
        - Implemented getCurrent instead of conditioning with getCachedCurrent to avoid cache problem
    - Encapsulated sign up function to re-use during sign up in the creating of account and during social log in
    - Added facebook login plugin (not yet finish though)
    - Changed bmiService - computeBMI to return with 2 decimal places
    - Added status item in vitals page
    - Replaced address no & street to address line for user experience
    - Added cordova plugins to be able to request for api

## Version 0.1

    - Login
    - Sign-up
    - Profile management
        - Load/update profile 
        - Vitals (not yet done)
        - Password (not yet done)
    - Replaced angular-resource version with angular version to avoid issues using ngResource