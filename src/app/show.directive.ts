import { Directive, Input, ViewContainerRef, TemplateRef, SimpleChange } from '@angular/core';

@Directive({
  selector: '[appShow]'
})
export class ShowDirective {

  @Input("appShow") show: boolean;

  constructor(private container: ViewContainerRef,
    private template: TemplateRef<Object>) { }

  ngOnChanges(changes: { [property: string]: SimpleChange }) {    
      let change = changes["show"];
      if (!change.isFirstChange() && !change.currentValue)
        this.container.clear();
      else if (change.currentValue) {
        this.container.createEmbeddedView(this.template);
        this.container.createEmbeddedView(this.template);
      }
        
  }


}
