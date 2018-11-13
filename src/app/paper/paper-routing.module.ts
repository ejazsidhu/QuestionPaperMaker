import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateQPaperComponent } from './generate-qpaper/generate-qpaper.component';
import { CreatePaperComponent } from './create-paper/create-paper.component';

const routes: Routes = [
  {path:'',component:GenerateQPaperComponent},
  {path:'generate',component:GenerateQPaperComponent},
  {path:'create',component:CreatePaperComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaperRoutingModule { }
