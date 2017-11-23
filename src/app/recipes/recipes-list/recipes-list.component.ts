import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test', 'desc', 'http://vegecravings.com/wp-content/uploads/2017/04/kadai-paneer-dry-recipe-step-by-step-instructions.jpg'),
    new Recipe('test 2', 'desc 2', 'http://vegecravings.com/wp-content/uploads/2017/04/kadai-paneer-dry-recipe-step-by-step-instructions.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
