import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("a test recipe", "this is a test", "https://www.google.com/search?q=recipe&sxsrf=ACYBGNRDqPy4bbsHfjejdZqOOox6TzGELQ:1577202188245&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjujq2B0M7mAhWuxoUKHd8wDwAQ_AUoAnoECA8QBA&biw=1777&bih=841#imgrc=JiQfKKpComMwLM:")
  ];

  constructor() { }

  ngOnInit() {
  }

}
