import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ttd-tomatodo',
  templateUrl: './tomatodo.component.html',
  styleUrls: ['./tomatodo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TomatodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
