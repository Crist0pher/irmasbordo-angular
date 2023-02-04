import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'irmasbordo';

  render:string = 'login'

  renderSelect(select:string){
    this.render = select
  }
}
