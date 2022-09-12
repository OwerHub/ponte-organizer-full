# this is an after-time practice for a test homework

If I said I was going to make a backend for the task, I had to do it
There were some issues, so now it's only written in Javascript, but I'm not done yet.

To run this code do some simple things: 

# in frontend, type npm I

# in backend / ponte-backend-js type npm I

# in backend / ponte-backend-js type node server.js

# in frontend type npm start

and thats all. 
The server runs in localhost:8000, the React project is localhost:3000

U can switch the backend and fakebackend mode. 
    - change the "isBackend" state in Main.tsx

some features in backend: 
- get projectlist  from file, and send to frontend 
- put new project to list and it can write to a file
- get a result from project based on ID
- delete project from list and the file (there some issue here)

some feat in fronted: 
- display the preojects
- create new project   
    - verify the req fields on fly
    - can't let page while the datafields not valid
    - Can add new collaborators
        - can delete collaborators
    - Can add links
        - can delete link 
        - can click the link
- Delete projects 
    (in fakebackend mode fully works, with backend , there's an issule, )
- Can search in projects on the fly
- can see all datas from a project, when U click it
- create a picture from a project's name


And thats all... for a while. 

