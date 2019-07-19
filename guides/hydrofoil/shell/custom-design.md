# Custom design

As stated on previous pages, `hydrofoil-shell` on itself does not render any design-specific UI and
serves a bases for extensions. It can be customized to build a reusable application skeleton which
implements a company-specific or public design system, such as [Material Design](./material-design.md).

This way such a shell can be used to quickly bootstrap multiple applications which follow the exact same
look and feel.

## Creating a custom shell 

To extend the shell, override the `render` method to add additional components to the produced HTML.

Bladerunner's  fictitious company Tyrell Corp. may want to create a reusable shell component for
their corporate pages. With such a component teams will be able to quickly replicate their common
application structure. See what I did there? :wink:

```js
import HydrofoilShell from '@hydrofoil/hydrofoil-shell'
import { html } from 'lit-html'

class TyrellShell extends HydrofoilShell {
    render () {
        return html`
<ty-toolbar>
  <img src="${this.logoUrl}" slot="logo" />
</ty-toolbar>

${super.render()}

<ty-footer>
  Copyright © 2019 Tyrell Corporation
</ty-footer>`
    }
} 

customElements.define('ty-shell', TyrellShell)
```

::: tip
Don't forget to call `super.render()`
:::

## Styling

To style the shell, override the static getter as shown below.

```js
import { css } from 'lit-element'

class TyrellShell extends HydrofoilShell {
    static get styles() {
        return [
            super.styles,
            css`
                ty-toolbar {
                    color: white;
                }
                
                ty-footer, ty-toolbar {
                    background-color: var(--ty-shell-bg-color, var(--ty-color-orange-100))
                }`
        ]
    }
}
```

[Custom CSS properties][css], such as the example `--ty-shell-bg-color` can be used as extension points
for further customization by end applications. At the time of writing they are the only officially
supported way of styling across Shadow DOM boundaries.

::: tip
Also here, make sure to return an array with the base class' `styles`. Otherwise they will be lost.
:::

[css]: https://developer.mozilla.org/en-US/docs/Web/CSS/--*

## DOM extension points

Finally, a customized shell will need to provide location for injecting additional elements, such
as app-specific menus, navigation items, logo images, etc. There are two ways to do that: HTML `<slot>` element
and overridable methods.

The following snippets show both methods being applied to `TyrellShell` and how they are used.

```diff
class TyrellShell extends HydrofoilShell {
+    renderNav () {
+        return '<nav></nav>'
+    }

    render () {
        return html`
<ty-toolbar>
  <img src="${this.logoUrl}" slot="logo" />
+  ${this.renderNav()}
</ty-toolbar>

${super.render()}

<ty-footer>
  Copyright © 2019 Tyrell Corporation
+  <slot name="footer"></slot>
</ty-footer>`
    }
} 
```

The method override can be used to create a more specialized shell.

:::warning
The method `renderNav` must be created in the base element, even if it returns an empty string.
Otherwise a JavaScript error will be throw.
:::

```js
class ReplicantFactoryCrmShell extends TyrellShell {
    renderNav() {
        return html`<ty-nav .links=${this.links}></ty-nav>`
    }
}
```

Slot on the other hand is used from the "outside". It will be ignore if unused.

```html
<replicant-factory-crm>
    <div slot=footer">
        <q>“Gosh, you’ve really got some nice toys here.” – Roy Batty</q>
    </div>
</replicant-factory-crm>
```
