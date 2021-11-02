// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'i8ziqw82kb'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`
                          //https://i8ziqw82kb.execute-api.us-east-1.amazonaws.com/dev/todos

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-8zpuxtk9.us.auth0.com',            // Auth0 domain
  clientId: 'ikiQRSo90W3mFZkfhc28hmxaR4PJpBvu',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
