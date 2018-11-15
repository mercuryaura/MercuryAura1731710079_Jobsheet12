import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { DropdownDirective } from './shared/dropdown.directive';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import {RecipeListComponent} from "./recipe/recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe/recipe-detail/recipe-detail.component";

import { RecipeItemComponent } from "./recipe/recipe-list/recipe-item/recipe-item.component";

import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { from } from 'rxjs';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      RecipeComponent,
      ShoppingListComponent,
      RecipeListComponent,
      RecipeDetailComponent,
      RecipeItemComponent,
      ShoppingEditComponent,
      DropdownDirective,
      RecipeStartComponent,
      RecipeEditComponent,
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule
   ],
   providers: [
      ShoppingListService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
