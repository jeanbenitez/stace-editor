![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)


<p align="center">
	<img src="https://raw.githubusercontent.com/jeanbenitez/stace-editor/master/.github/assets/logo.png" width="135" height="119">
</p>
<h1 align="center">Stace Editor</h1>
<p align="center">A web component wrapper for Ace Editor, using <a href="https://stenciljs.com">Stencil</a> + <a href="https://github.com/thlorenz/brace">brace</a></p>

<br />

## Why?

I needed to make an Ace editor web component to a stencil-based app, so I did this ... and wait, why not? I love <a href="https://stenciljs.com">Stencil</a>.

## Why Wrapper?

I had some limitations with Ace, ex. I didn't found the way to load the ace editor addons (theme/mode/snippets) dynamically, so, yes, you will need to have brace as your dependency too, and load the addons that you will use. Feel free to do a PR with some solution to this :D

## Run Demo

```sh
npm install
npm start
```

## Usage

Learn how to install this web component in your technology <a href="https://stenciljs.com/docs/overview">here</a>. Check the demo package too.

You also need to import brace and the used mode(s) and theme(s):

```ts
import 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
```

```tsx
<stace-editor
  text={this.code}
  mode="javascript"
  theme="monokai"
  options={options}
  readOnly={false}
  autoUpdateContent={true}
  durationBeforeCallback={1000}
  onTextChange={this.doChange}
  style={{width: '500px', height: '500px'}}
/>
```

For more detailed documentation with all the supported config options see the Ace documentation.

Feel free to write me :)

Thanks!
