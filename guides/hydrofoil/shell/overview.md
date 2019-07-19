# Overview

As shown on the [Getting started](./getting-started) page, the shell element itself doesn't do much
but it can be customized to become the basis for an application.

The shell is responsible for:
 
 * handling browser navigation (history back/forward)
 * running server requests
 * keeping application state and rendering it
 * when extended, rendering static parts of the UI, such as headers and footers
 
The recommended usage is to keep the shell mostly agnostic of application-specific logic and contents, 
which should be handled by it's parent element.

```html
<my-application>
  <my-shell>
    <header slot="header">
      <h1>My Hypermedia app</h1>
      <nav-element></nav-element>
    </header>
  
    <footer slot="footer">
      Copyright © 2019 building.hypermedia.app
    </footer>
  </my-shell>
</my-application>
```

In other words, the shell should define the application's look and feel.

### Quick look at the internals

Below is a listing of the element's interface. Read more about the individual members on subsequent pages.

<<< @/building-example/node_modules/@hydrofoil/hydrofoil-shell/hydrofoil-shell.d.ts

