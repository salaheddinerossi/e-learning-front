import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {CategoriesPageComponent} from "./pages/categories-page/categories-page.component";
import {CoursesPageComponent} from "./pages/courses-page/courses-page.component";
import {CourseDetailsPageComponent} from "./pages/course-details-page/course-details-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'categories',
    component: CategoriesPageComponent,
  },
  {
    path: 'categories/:id',
    component: CategoriesPageComponent,
  },
  {
    path: 'courses/:id',
    component: CoursesPageComponent,
  },
  {
    path: 'course/:id',
    component: CourseDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
