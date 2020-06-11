import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit {

  faSend = faPaperPlane
  constructor() { }

  ngOnInit(): void {
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.changeChatHeight()
  }

  ngAfterViewInit() {
    this.changeChatHeight()
  }

  private changeChatHeight(){
    let size = document.documentElement.clientHeight;
    (document.querySelector("#content") as HTMLElement).style.minHeight = size-135+"px";
    (document.querySelector('.chat') as HTMLElement).style.height = size-220+"px"
  }
}
