import { Component ,EventEmitter,Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cb.component.html',
  styleUrl: './cb.component.scss'
})
export class CbComponent {
  @Input() LastName!: string;
}
