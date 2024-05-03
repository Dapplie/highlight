import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlighterPipe } from './highlighter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HighlighterPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  constructor(private el: ElementRef) {}

  title = 'highlightproj';
  searchText='';
  text=`loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  count =0;
  highlightedElements!: any;

  updateCount() {
    this.highlightedElements = this.el.nativeElement.querySelectorAll('.highlighted-text');
    this.count = this.highlightedElements.length;
    console.log('lol'+this.highlightedElements.length);
  }
}



