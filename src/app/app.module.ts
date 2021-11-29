import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule,Routes } from '@angular/router';
import { AbputComponent } from './components/abput/abput.component';
import { FooterComponent } from './components/footer/footer.component';
const appRoutes:Routes=[
  {path:'',component:TasksComponent},
  {path:'about',component:AbputComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,

    DropdownComponent,
     AbputComponent,
     FooterComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,  MatFormFieldModule,
    MatInputModule,MatSelectModule
    ,RouterModule.forRoot(appRoutes,{enableTracing:true})
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
