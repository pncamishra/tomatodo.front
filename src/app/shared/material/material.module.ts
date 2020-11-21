import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

const materialModules = [DragDropModule];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules],
  providers: [{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }],
})
export class MaterialModule {}
