import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ttd-tomatodo',
  templateUrl: './tomatodo.component.html',
  styleUrls: ['./tomatodo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TomatodoComponent implements OnInit {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  constructor() {}

  ngOnInit(): void {}
}
