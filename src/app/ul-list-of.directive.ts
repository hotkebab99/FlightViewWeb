import { Directive, ViewContainerRef, TemplateRef, SimpleChange, Input } from '@angular/core';

@Directive({
  selector: '[appUlListOf]'
})
export class UlListOfDirective {

  @Input("appUlListOf") datas: any;
  @Input("appUlListField") field: string;

  constructor(private container: ViewContainerRef,
    private template: TemplateRef<Object>) { }

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes["datas"];
    if (!change.isFirstChange() && !change.currentValue) {
      this.container.clear();
    } else if (change.currentValue) {
      this.container.clear();
      for (let i = 0; i < this.datas.length; i++) {
        this.container.createEmbeddedView(this.template, 
              new UlListOfContext(this.datas[i], this.datas[i][this.field]));
      }
    }
  }
}

class UlListOfContext {
  constructor(public $implicit: any, public highlight: boolean) { }
}
