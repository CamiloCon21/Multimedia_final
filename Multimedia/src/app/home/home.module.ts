



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { settingsComponent } from './settings/settings.component';
import { navbarModule } from '../navbar/navbar.module';
import { NavbarComponent } from '../navbar/navbar.component';


import { playModule } from './play/play.module';
import { levelsModule } from './levels/levels.module';
import { achievementsModule } from './achievements/achievements.module';
import { footerModule } from './footer/footer.module';
import { settingsModule } from './settings/settings.module';
import { juegoModule } from './Juego/juego.module';
import { SafePipe } from '../pipe';






@NgModule({
  declarations: [
    HomeComponent,
 
   
       ],
  imports: [
    CommonModule,
    navbarModule,
    footerModule,
    settingsModule,
    playModule,
    levelsModule,
    achievementsModule,
    juegoModule
   
    
  ],
  exports:[
    HomeComponent
  ]
 
})
export class HomeModule { }
