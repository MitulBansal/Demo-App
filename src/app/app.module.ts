import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { HttpModule } from '@angular/http';
import { GrowlModule } from 'primeng/growl';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { FileUploadModule } from 'primeng/fileupload';
import { PasswordModule } from 'primeng/password';
import { KeyFilterModule } from 'primeng/keyfilter';
import { EmployeeService } from './services/EmployeeService';
import { CountryService } from './services/CountryService';
import { TabViewModule } from 'primeng/tabview';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AppComponent } from './app.component';
import { ButtonDemoComponentComponent } from './button-demo-component/button-demo-component.component';
import { InputgroupDemoComponentComponent } from './inputgroup-demo-component/inputgroup-demo-component.component';
import { DatagridDemoComponentComponent } from './datagrid-demo-component/datagrid-demo-component.component';
import { MenuBarDemoComponent } from './menu-bar-demo/menu-bar-demo.component';
import { UploadDemoComponent } from './upload-demo/upload-demo.component';
import { AutoCompleteDemoComponent } from './auto-complete-demo/auto-complete-demo.component';
import { PasswordDemoComponent } from './password-demo/password-demo.component';
import { KeyFilterDemoComponent } from './key-filter-demo/key-filter-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonDemoComponentComponent,
    InputgroupDemoComponentComponent,
    DatagridDemoComponentComponent,
    MenuBarDemoComponent,
    UploadDemoComponent,
    AutoCompleteDemoComponent,
    PasswordDemoComponent,
    KeyFilterDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    SplitButtonModule,
    TableModule,
    TabViewModule,
    GrowlModule,
    InputTextModule,
    DialogModule,
    MenubarModule,
    FileUploadModule,
    AutoCompleteModule,
    PasswordModule,
    KeyFilterModule
  ],
  providers: [EmployeeService, CountryService],
  bootstrap: [AppComponent],

})
export class AppModule { }
