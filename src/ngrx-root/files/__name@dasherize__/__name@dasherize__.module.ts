import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './<%=dasherize(name)%>-logger'


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  declarations: []
})
export class <%= classify(name) %>Module { }
