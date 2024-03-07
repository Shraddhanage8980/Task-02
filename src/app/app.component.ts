import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Task-2';

  showPhoneNUmber = false;
  showEmailId = false;
  name : any = ["Phone","Email"]
  @ViewChild('inputEle') inputEle : ElementRef | undefined;
  Onclick(){
    let selectValue = this.inputEle?.nativeElement.value;
    this.showPhoneNUmber = selectValue === "Phone";
    this.showEmailId = selectValue === "Email";
  }
}
