# Getting started

This page presents the necessary steps required to start building a web app
using Hydrofoil. 

This is not a definitive guide as there are many ways to set up the different
build steps using a variety of tools.

The recommended way is to set up a project using [Open Web Components][owc]
packages.

[owc]: //open-wc.orgcd 

## Project preparations (optional, recommended)

::: tip
Be sure to read the [open-wc quickstart](https://open-wc.org/guide/) to
easily follow the instructions below and to discover alternative options
:::

`@open-wc` NPM templates are the quickest mean to bootstraping a development environment 
fit for web components.

In any directory, run `npm init @open-wc`. Answer the subsequent questions:
 
1. `Scaffold a new project`
1. Choose `Application`
1. Select `Building` 
1. Type in the name
1. `Yes` <- confirm file structure
1. Install with Yarn or npm

::: warning
Be careful to properly select with `space` where instructed 
:::

This will create a new sub directory with the bare minimum, empty app.

::: warning
At the time of writing the `index.html` file is placed inside the source dir, which
results in weird address when served locally.
:::

To "improve" the project structure, move the index to the root and adjust the path
in its `<script>` tag, `webpack.config.js` and the `start` script in `package.json`.

## Create a shell element

You need to add the [shell package](https://www.npmjs.com/package/@hydrofoil/hydrofoil-shell). 

```shell
npm i @hydrofoil/hydrofoil-shell
```

It contains the base element which we will extend to create the application
centerpiece.

Here's a simplest possible implementation. As the element is itself abstract,
the implementor must override the `loadResourceInternal` method which returns the
resource representation for the given URL.

<<< @/building-example/src/plain-shell.js 

## Add the shell element to the app

Replace the default contents of the app element generated in by `@open-wc` with the shell: 

<<< @/building-example/src/building-example.js{7} 

::: tip Why two elements?
Curious developer will think:

> why not use the shell directly as the application root?

While nothing is actually stopping anyone from doing that, there are a few reasons
to keeps the dual structure:

1. The shell has properties and attributes which can be dynamically controlled by the app
1. The shell may offer [styling points][css] which can be awkward to set up in an `index.html`
1. The shell may expose [`slot`][slot] extension points. Again, building a rich DOM structure will be easier in the app element
1. The app element can do [dynamic imports][di] as necessary to build up the shell UI
:::

[di]: https://webpack.js.org/guides/code-splitting/
[slot]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot
[css]: https://medium.com/stencil-tricks/a-practical-introduction-to-styling-a-shadow-dom-and-slots-879565a2f423

## Define rendering of your resources

Rendering of resource representations is done with a library called [`lit-any`][la]. It divides the 
entire process of rendering into smaller chunks it calls views. Each view is a effectively a function
which takes an object as input and returns a `HTML` template string.

Here's the simplest possible renderer which will dump the text contents loaded by the shell
above, wrapped in a `<pre>` tag.

<<< @/building-example/src/views.js

To learn more about `lit-html` and its syntax and features go to [its guide][lh]

[la]: https://github.com/wikibus/lit-any
[lh]: https://lit-html.polymer-project.org/guide

## Trying it out

Check out this [repo][repo], go to the `building-example` directory and run

```shell
npm install
npm run start:dev
```

Now go to 

> [http://localhost:8080/#/https://cors-anywhere.herokuapp.com/https://example.com/dummy](http://localhost:8080/#/https://cors-anywhere.herokuapp.com/https://example.com/dummy)

You should see the HTML contents of `https://example.com`. A glorified "view source" if you will.

[repo]: https://github.com/hypermedia-app/building.hypermedia.app

## A note on addresses

See that the entire URL of the "back end" is visible in the link and your browser. In a real
application this will not be desirable. Instead the URL should be more like 
`http://localhost:8080/#/dummy` in this case. Hydrofoil and its component can be configured to
make that happen.

Also, the shell is configured with an `use-hash-urls` attribute. To have your local environment
use HTML5 History API you will need to set up [webpack dev server][wds] accordingly and remove that
attribute from the shell element.

More details can be found in the **Routing** section.

[wds]: https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
