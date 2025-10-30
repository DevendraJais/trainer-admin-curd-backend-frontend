Run the project

-> run backed -> TASK1 ->  node Server.js
-> run frontend -> TASK1 -> fontend/frontend  ->  npm run dev

===================================================================
This project is a Node.js + Express + MongoDB REST API with a React frontend for managing Admins and Trainers.
===================================================================

folder Structure

project/
├── backend/
│   ├── server.js
│   ├── server_logs.txt
│   ├── package.json
│   └── node_modules/
│
└── frontend/
    ├── src/
    │   ├── App.js
    │   ├── components/
    │   │   ├── AdminForm.js
    │   │   ├── TrainerForm.js
    │   │   ├── AdminList.js
    │   │   └── TrainerList.js
    ├── package.json
    └── node_modules/

========================================================================
//Backend Dependencies

npm install express mongoose cors

express → creates server and routes

mongoose → connects and interacts with MongoDB

cors → allows frontend to access backend (Cross-Origin Resource Sharing)

// Front-end Dependencies

npm install axios


