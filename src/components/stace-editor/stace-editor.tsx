import { Component, Prop, h, Event, EventEmitter, ComponentInterface, Watch } from '@stencil/core';
import { createRef } from '../../utils/createRef';
import 'brace';
import 'brace/theme/monokai';
import 'brace/mode/html';
import { Editor, edit } from 'brace';

@Component({
  tag: 'stace-editor',
  shadow: true
})
export class StaceEditor implements ComponentInterface {
  @Prop() style: any = {};

  @Event() textChange: EventEmitter;

  _options: any = {};
  _readOnly: boolean = false;
  _theme: string = "monokai";
  _mode: any = "html";
  _text: string = "";
  _editor: Editor;
  _durationBeforeCallback: number = 0;
  _autoUpdateContent: boolean = true;
  timeoutSaving: any;

  oldText: any;
  elm = createRef();

  constructor() {
    this.makeEditor();
  }

  componentDidLoad() {
    this.init();
    this.initEvents();
  }

  makeEditor() {
    if (!this.elm.current || this._editor) return;
    this._editor = edit(this.elm.current);
    this._editor.$blockScrolling = Infinity;
  }

  init() {
    this.makeEditor();
    this.setOptions(this._options || {});
    this.setTheme(this._theme);
    this.setMode(this._mode);
    this.setReadOnly(this._readOnly);
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
    if (!this._durationBeforeCallback) {
      this._text = newVal;
      this.textChange.emit(newVal);
    } else {
      if (this.timeoutSaving) {
        clearTimeout(this.timeoutSaving);
      }

      this.timeoutSaving = setTimeout(() => {
        this._text = newVal;
        this.textChange.emit(newVal);
        this.timeoutSaving = null;
      }, this._durationBeforeCallback);
    }
    this.oldText = newVal;
  }

  @Watch('options')
  watchOptions(options: any) {
    this.setOptions(options);
  }

  setOptions(options: any) {
      this._options = options;
      this._editor.setOptions(options || {});
  }

  @Watch('readOnly')
  watchReadOnly(readOnly: any) {
      this.setReadOnly(readOnly);
  }

  setReadOnly(readOnly: any) {
      this._readOnly = readOnly;
      this._editor.setReadOnly(readOnly);
  }

  @Watch('theme')
  watchTheme(theme: string) {
      this.setTheme(theme);
  }

  setTheme(theme: string) {
      this._theme = theme;
      this._editor.setTheme(`ace/theme/${theme}`);
  }

  @Watch('mode')
  watchMode(mode: string) {
      this.setMode(mode);
  }

  setMode(mode: any) {
      this._mode = mode;
      if (typeof this._mode === 'object') {
          this._editor.getSession().setMode(this._mode);
      } else {
          this._editor.getSession().setMode(`ace/mode/${this._mode}`);
      }
  }

  @Watch('text')
  watchText(text: string) {
      this.setText(text);
  }

  setText(text: any) {
      if (text === null || text === undefined) {
          text = "";
      }
      if (this._text !== text && this._autoUpdateContent === true) {
          this._text = text;
          this._editor.setValue(text);
          this._editor.clearSelection();
      }
  }

  @Watch('autoUpdateContent')
  watchAutoUpdateContent(status: boolean) {
    this.setAutoUpdateContent(status);
  }

  setAutoUpdateContent(status: boolean) {
    this._autoUpdateContent = status;
  }

  @Watch('durationBeforeCallback')
  watchdurationBeforeCallback(num: number) {
      this.setDurationBeforeCallback(num);
  }

  setDurationBeforeCallback(num: number) {
      this._durationBeforeCallback = num;
  }

  getEditor() {
    return this._editor;
  }

  render() {
    return (
      <div ref={this.elm}></div>
    );
  }
}
