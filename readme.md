### Express
Express is a framework built on NodeJs and provides higher level of abstraction.
Contains features like complex routing, easier handling of req and res, middlewares, server side rendering etc.

require('express') returns an express function which can be stored in an app variable.

### REST API & ARCHITECTURE
Application programming interface is a piece of software that can be used by another software, in order to allow applications to talk to each other.

File module system - fs - you use to read or wite files. So, you are using 'fs' API.

REST- Representational State Transfer.

### RULES FOR REST ARCHITECTURE
-Resources can never be a verb. Example: users, reviews, tours etc. only NOUNS are allowed. Any object that can be named or has any data associated to it is called a RESOURCE.

-endpoint, URLS must always contains resources(nouns) and not the verbs that is the action performed on them like '/getTours', 'addNewTour'.

- endpoint name must be plurals as the convention follows.

WRONG           HTTP        CORRECT
/addNewTour     POST        /tours
/getTour        GET         /tours - for all the tours, /tours/5 for a specifice tour
/updateTour     PUT         /tours/7
                PATCH       /tours/7
/deleteTour     DELETE      /tours/7

/getToursByUser      GET       /users/3/tours
/deleteTourByUser     DELETE    /users/3/tours

- STATELESS - State is transfered from server to client. Any request sent by the client will contain all the data necessary to process the request in the server. Such as which action method to perform, the body, the resource/endpoint name, authentication, what content client is requesting etc. All the data required to process the request in the server is sent by client already.

### Middleware
express.json() is a middleware that is used to get access to the request body on the request object.

Middleware is a function that can modify an incoming request data and is in middle of a request and response.

### Express request-response cycle

Request comes (req, res obj created) -> middleware 1-> middleware 2->....-> final route handler sends response->Response.

Middleware functions are executed in the order they are written in code. A middleware function will execute before the one that comes after it.
All middleware in the middle grouped together are called middleware stack.

Everything in an express application is mostly a middleware, eg: express.json() called body-parser, setting http headers, every route handler for a sepcific URLs, logging functionality etc..

At the end of each middleware function a next() function is called.
next() is a function that is available in each middleware just like req, res object.
When called the next middleware function in line gets executed and same req, res object is passed to that middleware and it continues till the final response is sent.

### Custom Middleware 

Do not forget to add next()(3rd arg. in your middleware function) function at the end of your middleware or else the request-response cycle will get stuck.

The order where you place your middleware in the code matters.

You can also wtite middlewares that will execute for all the incoming requests by defining no routes in it.


### Environment Variables

By default env. is set to DEV.

Environment variables are global variables that are used to define what environment your application is running in. Set by NodeJS.

These variables comes from process core module and are set when the process started. No need to include process module.

Many packages in express depends on a environment variable called NODE_ENV. We need to do it manually - terminal, Configuration file.
