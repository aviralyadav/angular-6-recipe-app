import { Component } from '@angular/core';
import { Recipe } from '../recipes/recipe-list/recipe.model';
import { DataStorage } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})

export class HeaderComponent {
    constructor(private dataStorage: DataStorage, private authService: AuthService ) {};
  saveData () {
      this.dataStorage.storeRecipes().subscribe(
          (response: Response) => console.log(response.json()),
          (error) => console.log(error)
      )
  }
  getData () {
      this.dataStorage.getRecipes().subscribe(
          (response) => console.log(response)
      )
  }
  logout() {
      this.authService.logout();
  }
};