import 'brace';
import 'brace/theme/eclipse';
import 'brace/mode/sql';
import { Component, h, ComponentInterface } from '@stencil/core';

import 'stace-editor';

@Component({
  tag: 'my-app',
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
          mode="sql" //string or object (thx ckiffel)
          theme="eclipse"
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
