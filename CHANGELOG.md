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