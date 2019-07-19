# Introduction

Hydrofoil is a set of web components which make it simpler to build single page
applications driven by a (RESTful) API.

It has been created with Hydra in mind but can be used to bootstrap an application
with any kind of back end, albeit with additional effort.

## Building blocks

### `<hydrofoil-shell>`

The main building block of a hydrofoil is an app shell. It is an abstract web component,
which maintains the state of the application and is facilitates transitions between
resources.

Itself the `hydrofoil-shell` element is just a bare minimum and does not render any UI
not does it communicate with the back end. The recommended strategy is to inherit the class
to build a UI host for application views and import a reusable mixin which   

----

Pages in the **Shell** section contain instructions on implementing custom integration
from scratch and show ready-made elements to quickly bootstrap a [Material Design][md] application
with Hydra backend.

[md]: https://material.io

### `ld-navigation`

Project site: [https://routing.hypermedia.app/](https://routing.hypermedia.app/demo/)

It is a small library and custom elements which replaces traditional MV* routing.
The entire routing is simplified to a simple base URL replacement so that the browser
location has a 1-1 relation to the API resource URI. 

That way the application avoids brittle paths and complicated logic for selecting the
views.

---

The shell let's authors customize the routing behaviour. More details are presented in the 
**Routing** section.

### `lit-any` views

Project storybook: [https://lit-any.hypermedia.app](https://lit-any.hypermedia.app)

The shell delegates rendering to a `lit-view` element which let's app authors decompose the UI
into smaller views which are then assembled dynamically. Each view is essentially a 
function returning a HTML partial. The choice of particular partial to render is defined the
the application based on resource representation.

---

Read more in the **Views** section.

### `lit-any` forms

The same library is also used to generate input forms using `lit-form` element. 
It follows a concept similar to `lit-view`, where HTML for individual fields is plugged in as a
pure function. The form definition is similar to other tools like [Angular formly][formly] 

---

Learn more in the **Forms** section.

[formly]: http://angular-formly.com
