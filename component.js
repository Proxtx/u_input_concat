export class Component {
  constructor(options) {
    this.document = options.shadowDom;
    this.arg1 = this.document.getElementById("arg1");
    this.arg2 = this.document.getElementById("arg2");
    this.initPromise = this.init();
  }

  async init() {
    await uiBuilder.ready(this.arg1);
    await uiBuilder.ready(this.arg2);
    await this.arg1.component.inputDefinition({
      type: "text",
      name: "Text 1",
      placeholder: "Text",
    });

    await this.arg2.component.inputDefinition({
      type: "text",
      name: "Text 2",
      placeholder: "Text",
    });
  }

  setConfig(config) {
    this.config = config;
  }

  async setValue(value) {
    await this.initPromise;
    await this.arg1.component.setValue(value.text1);
    await this.arg2.component.setValue(value.text2);
  }

  async getValue() {
    return {
      evaluate: true,
      text1: await this.arg1.component.getValue(),
      text2: await this.arg2.component.getValue(),
      type: "concat",
    };
  }
}
