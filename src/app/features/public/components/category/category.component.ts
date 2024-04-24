import {Component, Input} from '@angular/core';
import {Category} from "../../models/Category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  @Input() category!:Category;

}
