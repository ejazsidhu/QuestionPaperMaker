import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaperRoutingModule } from './paper-routing.module';
import { CreatePaperComponent } from './create-paper/create-paper.component';
import { GenerateQPaperComponent } from './generate-qpaper/generate-qpaper.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  imports: [
    CommonModule,
    PaperRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  declarations: [CreatePaperComponent, GenerateQPaperComponent]
})
export class PaperModule { }
