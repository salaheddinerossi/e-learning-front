import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import {SharedModule} from "../../shared/shared.module";
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { CategoryComponent } from './components/category/category.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsPageComponent } from './pages/course-details-page/course-details-page.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { TagComponent } from './components/tag/tag.component';
import { LargeCourseButtonComponent } from './components/large-course-button/large-course-button.component';
import { ReviewComponent } from './components/review/review.component';


@NgModule({
  declarations: [
    HeroSectionComponent,
    AboutUsComponent,
    CategoriesPageComponent,
    CategoryComponent,
    CoursesPageComponent,
    CourseComponent,
    CourseDetailsPageComponent,
    CourseInfoComponent,
    TagComponent,
    LargeCourseButtonComponent,
    ReviewComponent
  ],
  exports: [
    HeroSectionComponent,
    AboutUsComponent
  ],
    imports: [
        CommonModule,
        PublicRoutingModule,
        SharedModule,
        NgOptimizedImage
    ]
})
export class PublicModule { }
