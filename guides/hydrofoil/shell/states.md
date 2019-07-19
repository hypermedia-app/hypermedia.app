# Shell states

The shell can be in one of three possible states:

* `ready`
* `loaded`
* `error`

In each of those states the shell renders a distinct piece of markup.

The current state is reflected to an HTML attribute, which can be useful for styling.

Additionally, it sets a boolean property `isLoading` when a request is being performed to the server.

## Ready state

In this state the shell renders only an unnamed `<slot>` element. This is designed to show default
content, before the first request is made.

```html
<app-shell state="ready">
  <section>
    This section will be rendered
  </section>
</app-shell>
```

## Loaded state

When a non-null resource representation is fetched from the back end, the state changes to `loaded`.

In this state the shell delegates the rendering to the `@lit-any/lit-any` package. You can
read more about it in the **Defining views** section.

## Error state

When the shell fails to load the resource representation, it goes into the `error` state. In this state
a dedicated piece of HTML is rendered by the `renderError` method.

By default it renders the error message of the caught exception. It can easily be customized by
overriding the said method in a derived element class.

::: danger Watch for nulls
The `renderError` method is always called and its returned content only gets displayed or hidden.
Thus, the method must be implemented defensively.
:::

```js
import HydrofoilShell from '@hydrofoil/hydrofil-shell'
import { html } from 'lit-html'

class MyShell extends HydrofoilShell {
    renderError () {
        if (!this.lastError) {
            return ''
        }
        
        return html`<div class="error">${this.lastError}</div>`
    }
}
```

::: warning What about `404 Not Found`?
The error state only applies to failed loading of resources. It is neither used to handle exceptions within
the views nor successful requests which return a non-successful status code. It is the responsibility of the
end application to handle those cases accordingly by other means.
:::
