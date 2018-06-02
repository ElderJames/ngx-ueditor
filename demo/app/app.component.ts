import { Component, ViewChild } from '@angular/core';
import { UEditorComponent } from '../../src'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @ViewChild(UEditorComponent) editor: UEditorComponent;

  model_text: string = '<span style="color: red;">测试文本！</span>';

  option = {
    initialFrameHeight: '400',
    autoHeightEnabled: false,
    UEDITOR_HOME_URL: '/assets/neditor/',
    initialFrameWidth: '100%'
  };

  constructor() {

  }

  contentChange($event) {
    console.log('contentChange：', $event);
  }

  editorReady($event) {
    console.log('ready：', $event);
  }

  setHeight(height: number): void {
    this.editor.setHeight(height);
  }

  setContent(): void {
    this.model_text = '<p style="font-weight: bold;"><a href="http://ueditor.baidu.com/website/index.html" target="_blank" title="去UEditor官网">UEditor Component for Angular2 (已修改)</a></p>';
  }
}