import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faPlus} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dragzone',
  templateUrl: './dragzone.component.html',
  styleUrls: ['./dragzone.component.scss']
})
export class DragzoneComponent {
  @Input('title') title: String = ""
  @Output('onReadData') readData = new EventEmitter()

  faPlus = faPlus;
  imagePath;
  isHovering: boolean;
  blank = true;
  
  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    var myReader:FileReader = new FileReader();
    myReader.readAsDataURL(files[0])
    myReader.onload =  (event) => {
      this.imagePath = event.target.result;
      this.readData.emit(this.imagePath)
    }
  }

}
