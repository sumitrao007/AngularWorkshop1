import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';
import { CourseComponent } from './course/course.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { MystyleComponent } from './mystyle/mystyle.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { FormsModule } from '@angular/forms';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { SwitchdirectiveComponent } from './switchdirective/switchdirective.component';
import { Course1Component } from './course1/course1.component';
import { CourseService } from './course.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CourseComponent,
    StylebindingComponent,
    PropertybindingComponent,
    MystyleComponent,
    ClassbindingComponent,
    EventbindingComponent,
    IfdirectiveComponent,
    FordirectiveComponent,
    SwitchdirectiveComponent,
    Course1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
