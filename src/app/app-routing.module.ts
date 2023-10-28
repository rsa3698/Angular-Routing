import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { PopularComponent } from './home/popular/popular.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes =[
  { path: '', component: HomeComponent},
  // { path: '', redirectTo: 'Home', pathMatch:'full'},
  { path: 'Home', component: HomeComponent},
  { path: 'About', component: AboutComponent},
  { path: 'Contact', component: ContactComponent},
  { path: 'Courses', component: CoursesComponent},
  // { path: 'Courses/Course/:id', component: CourseDetailComponent},

  {
    path: 'Courses' , children :[
     { path: 'Course/:id' , component : CoursesComponent},
     { path: 'Popular' , component : PopularComponent}
    ]
  },
  { path: '**', component:NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
