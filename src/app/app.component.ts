import { Component } from '@angular/core';
import { MenuService } from './services/menu.service';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/componente-interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes:Observable<Componente[]>;

  constructor(private dataService:MenuService) {}

  ngOnInit() {
    this.componentes=this.dataService.getMenuOpts();
  }
}
