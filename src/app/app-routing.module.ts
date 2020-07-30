import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourcesComponent } from './resources/resources.component';
import { LinksComponent } from './links/links.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'resources',component:ResourcesComponent},
  {path:'skills',component:SkillsComponent},
  {path:'links',component:LinksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
