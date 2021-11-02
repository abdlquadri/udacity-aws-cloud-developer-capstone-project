# udacity-aws-cloud-developer-capstone-project
Capstone Project for the Udacity Cloud Developer Nanodegree


## Project Features
- Restful API
- Lambda Functions
- API Gateway
- DynamoDb
- Client (React JS)

## How to run the application
### Deploy Backend using the serverless framework
To deploy an application run the following commands:

```bash
cd backend
npm install
~/.serverless/bin/serverless deploy --verbose --aws-profile serverless
```

### How to run client
```bash
cd client
npm install
npm run start
```

## API Endpoints

```
  GET - https://i8ziqw82kb.execute-api.us-east-1.amazonaws.com/dev/todos
  POST - https://i8ziqw82kb.execute-api.us-east-1.amazonaws.com/dev/todos
  PATCH - https://i8ziqw82kb.execute-api.us-east-1.amazonaws.com/dev/todos/{todoId}
  DELETE - https://i8ziqw82kb.execute-api.us-east-1.amazonaws.com/dev/todos/{todoId}
  POST - https://i8ziqw82kb.execute-api.us-east-1.amazonaws.com/dev/todos/{todoId}/attachment
```