import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ttd-tomatodo-task',
  templateUrl: './tomatodo-task.component.html',
  styleUrls: ['./tomatodo-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TomatodoTaskComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
