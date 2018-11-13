import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaperRoutingModule } from './paper-routing.module';
import { CreatePaperComponent } from './create-paper/create-paper.component';
import { GenerateQPaperComponent } from './generate-qpaper/generate-qpaper.component';

@NgModule({
  imports: [
    CommonModule,
    PaperRoutingModule
  ],
  declarations: [CreatePaperComponent, GenerateQPaperComponent]
})
export class PaperModule { }
