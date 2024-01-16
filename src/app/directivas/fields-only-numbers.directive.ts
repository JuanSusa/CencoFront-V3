import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[typeNumer]',
  standalone: true
})
export class FieldsOnlyNumbersDirective {

  constructor(private elem: ElementRef) {}

    @HostListener('input', ['$event']) 
    onInputChange(event: any) {
      
      const initialValue = this.elem.nativeElement.value;
      this.elem.nativeElement.value = initialValue.replace(/[^0-9]*/g, '');
      if (initialValue !== this.elem.nativeElement.value) {
        event.stopPropagation();
      }
    }
  
}
