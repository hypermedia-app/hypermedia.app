# Argolis

Argolis is a set libraries built around [NancyFx](https://github.com/NancyFx/Nancy) library.

They allow building Hydra APIs with relative ease, where the development is not much
different from any standard .NET web application. Instead of forcing RDF model on the
developers, standard .NET practices can be used with POCO classes, layered architecture
and endpoint-based API definitions.

Argolis then simply integrates with the response/request so that consumers can take advantage
of Hydra API descriptions.  

## Why Nancy?

When Argolis was starting a few years back, Nancy was probably the best API library
for the .NET Framework. Recently the ecosystem changed a little bit with the refreshed `aspnetcore`
stack and inspired solutions like [Carter](https://github.com/CarterCommunity/Carter). 
Still, Nancy is definitely relevant, with its simple and extensible programming model.
