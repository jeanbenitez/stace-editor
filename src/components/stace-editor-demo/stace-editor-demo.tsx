import { Component, h, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'stace-editor-demo',
  shadow: false
})
export class MyApp implements ComponentInterface {
  code = '// Write here...';

  render() {
    return (
      <div>
        <h1>Stace Editor</h1>
        <stace-editor
          text={this.code}
          mode="javascript" //string or object (thx ckiffel)
          theme="monokai"
          // options="options"
          readOnly={false}
          autoUpdateContent={true} //change content when text change
          durationBeforeCallback={1000} //wait 1s before callback 'textChanged' sends new value
          // onTextChange={}
          style={{width: '500px', height: '500px'}}
        />
      </div>
    );
  }
}
