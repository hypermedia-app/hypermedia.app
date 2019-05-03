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
