import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test', 'desc', 'http://vegecravings.com/wp-content/uploads/2017/04/kadai-paneer-dry-recipe-step-by-step-instructions.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
