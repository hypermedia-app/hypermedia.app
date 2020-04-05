# Multiple SPARQL queries

A request can be implemented by more than one SPARQL query.

## Update + query

A common scenario could be that a `POST` request updates data in the store and 
the returns the changes values using a SPARQL query. This is easily done by chaining
[multiple `hydra-box:SparqlView` middlewares](./operation-middleware.md)

``` {8}
api:UpdateThenQuery a hydra:Class ;
  hydra:title "Update first, then query" ;
  hydra:supportedOperation [
    a hydra-box:View ;
    hydra:method "PATCH" ;
    hydra:title "Updates a resource and queries the result" ;
    code:implementedBy [
      a hydra-box:middlewareChain ;
      code:arguments (
        [
          a hydra-box:SparqlUpdate ;
          hydra-box:source <file:hydra/resource/patch.ru>
        ]
        [
          a hydra-box:SparqlQuery ;
          hydra-box:source <file:hydra/resource/get.ru>
        ]
      )
    ]
  ] .
```

## Combining multiple graphs

Second scenario could be to run multiple queries to build up a response from
more than one `CONSTRUCT` query. This way one can overcome the limitations of
complex queries which can quickly become difficult to write as a single graph
pattern. 

The solution is slightly different, owing to the fact that the results have to be 
combined in a single stream.

``` {9}
api:MultipleQueries a hydra:Class ;
  hydra:title "Resource combined from 3 queries" ;
  hydra:supportedOperation [
    a hydra-box:View ;
    hydra:method "GET" ;
    hydra:title "Gets the representation" ;
    code:implementedBy [
      a hydra-box:SparqlQuery ;
      hydra-box:source
        <file:hydra/resource/query1.ru> , 
        <file:hydra/resource/query2.ru> , 
        <file:hydra/resource/query3.ru> 
  ] .
```

:::warning
The queries are a set and not an `rdf:List`. Thus, the order of execution
cannot be guaranteed.
:::
