

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { settingsComponent } from './settings/settings.component';
import { playComponent } from './play/play.component';
import { levelsComponent } from './levels/levels.component';
import { achievementsComponent } from './achievements/achievements.component';
import { juegoComponent } from './Juego/juego.component';





const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'inicio', component: HomeComponent },
            { path: 'settings', component: settingsComponent },    
            { path: 'play', component: playComponent },
            { path: 'levels', component: levelsComponent },
            { path: 'achievements', component: achievementsComponent },
            { path: 'juego', component: juegoComponent },
        
                           
            { path: '**', redirectTo: 'inicio' },
           
            
        ],

     
        
    },
   
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
