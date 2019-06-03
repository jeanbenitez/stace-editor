# Stace Editor

A web component wrapper for Ace Editor, using StencilJS (and brace).

## WHY?

I needed to make an Ace editor web component to a stencil-based app, so I did this ... and wait, why not? I love Stencil.

## Why Wrapper?

I had some limitations with Ace, ex. I didn't found the way to load the ace editor addons (theme/mode/snippets) dynamically, so, yes, you will need to have brace as your dependency too, and load the addons that you will use. Feel free to do a PR with some solution to this :D

## Installation

Learn how to use this web component in your technology here. https://stenciljs.com/docs/overview


## Usage

You need to import brace and the used mode(s) and theme(s):

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
/></stace-editor>
```
For more detailed documentation with all the supported config options see the Ace documentation.
