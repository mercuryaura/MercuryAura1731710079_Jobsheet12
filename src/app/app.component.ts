import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Afif1731710120';
  loadedFeature='recipe';
  

  onNavigate(feature:string){
    this.loadedFeature=feature;
  }
}
