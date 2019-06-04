import 'brace';

import { Editor } from 'brace';

import { Component, Prop, Element, Event, EventEmitter, ComponentInterface, Watch, Method } from '@stencil/core';

declare var ace;

@Component({
  tag: 'stace-editor',
  styleUrl: 'stace-editor.css',
  shadow: false
})
export class StaceEditor implements ComponentInterface {
  _editor: Editor;
  oldText: string;

  @Element() elm: HTMLElement;

  @Event() textChange: EventEmitter;

  @Prop() autoUpdateContent: boolean = true;
  @Prop() durationBeforeCallback: number = 0;
  @Prop() timeoutSaving: number = 0;

  @Prop() options: any = {};

  @Watch('options')
  setOptions(options: any) {
    this._editor.setOptions(options || {});
  }

  @Prop() readOnly: boolean = false;

  @Watch('readOnly')
  setReadOnly(readOnly: boolean) {
    this._editor.setReadOnly(readOnly);
  }

  @Prop({ reflect: true }) theme: string = "monokai";

  @Watch('theme')
  async setTheme(theme: string, dynamicImport = true) {
    if (dynamicImport) {
      await import(`https://unpkg.com/brace/theme/${theme}.js`);
    }
    this._editor.setTheme(`ace/theme/${theme}`);
  }

  @Prop({ reflect: true }) mode: string = "javascript";

  @Watch('mode')
  async setMode(mode: string, dynamicImport = true) {
    if (dynamicImport) {
      await import(`https://unpkg.com/brace/mode/${mode}.js`);
    }
    this._editor.getSession().setMode(`ace/mode/${mode}`);
  }

  @Prop() text: string = "";

  @Watch('text')
  watchText(text: string) {
    if (text === null || text === undefined) {
      text = "";
    }
    if (this.text !== text && this.autoUpdateContent === true) {
      this.text = text;
      this._editor.setValue(text);
      this._editor.clearSelection();
    }
  }

  componentDidLoad() {
    this.init();
    this.initEvents();
  }

  @Method()
  async getEditor() {
    return this._editor;
  }

  init() {
    if (this.elm && !this._editor) {
      this._editor = ace.edit(this.elm);
      this._editor.$blockScrolling = Infinity;
    }

    if (this._editor) {
      this.setOptions(this.options || {});
      this.setTheme(this.theme);
      this.setMode(this.mode);
      this.setReadOnly(this.readOnly);
    }
  }

  initEvents() {
    this._editor.on('change', () => this.updateText());
    this._editor.on('paste', () => this.updateText());
  }

  updateText() {
    let newVal = this._editor.getValue();
    if (newVal === this.oldText) {
      return;
    }
    if (!this.durationBeforeCallback) {
      this.text = newVal;
      this.textChange.emit(newVal);
    } else {
      if (this.timeoutSaving) {
        clearTimeout(this.timeoutSaving);
      }

      this.timeoutSaving = setTimeout(() => {
        this.text = newVal;
        this.textChange.emit(newVal);
        this.timeoutSaving = null;
      }, this.durationBeforeCallback);
    }
    this.oldText = newVal;
  }
}
