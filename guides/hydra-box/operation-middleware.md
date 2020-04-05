# Adding middleware to operations

Each Hydra operation is an express route, served by one or more [middleware functions][mware].

The [getting started](./getting-started.md) page shows a single operation implemented
by a single SPARQL query. It is also possible to add as many middleware functions as
necessary.

## API Documentation

Here's an example of the triples which set up an operation to run authorization check
before the SPARQL.

``` {8}
api:ProtectedResource a hydra:Class ;
  hydra:title "This resource is only available to authorised clients" ;
  hydra:supportedOperation [
    a hydra-box:View ;
    hydra:method "GET" ;
    hydra:title "Gets the protected resource" ;
    code:implementedBy [
      a hydra-box:middlewareChain ;
      code:arguments (
        [
          a code:EcmaScript ;
          code:link <file:lib/auth/passwordCheck.js>
        ]
        [
          a hydra-box:SparqlQuery ;
          hydra-box:source <file:hydra/protected-resource/get.rq>
        ]
      )
    ]
  ] .
```

By wrapping the `hydra-box:SparqlQuery` in a `hydra-box:middlewareChain` it is possible
to inject additional middleware function before and after a query inside the `code:arguments`
list.

## Middleware implementation

Each imported script, such as the `lib/auth/passwordCheck.js` above must export a function
which conforms to the [expressjs documentation][mware].

This example could be implemented using [`express-basic-auth`](https://www.npmjs.com/package/express-basic-auth)

```js
const basicAuth = require('express-basic-auth')

module.exports = basicAuth({
  users: { 'admin': 'test' },
})
```

[mware]: https://expressjs.com/en/guide/using-middleware.html
