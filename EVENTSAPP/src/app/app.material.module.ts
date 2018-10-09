import { NgModule } from  '@angular/core';
import { MatNativeDateModule,MatSnackBarModule,MatIconModule,MatDialogModule, MatButtonModule, MatTableModule, MatGridListModule, MatPaginatorModule , MatSortModule,MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCard, MatCardModule, MatFormField, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule } from  '@angular/material';
import { MatDatepickerModule} from  '@angular/material/datepicker';
import { MatRadioModule } from  '@angular/material/radio';
import { MatSelectModule } from  '@angular/material/select';
import { MatSliderModule } from  '@angular/material/slider';
import { MatDividerModule } from  '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';

@NgModule({
imports: [
  MatTabsModule,
  MatDividerModule,
  MatSliderModule,
  MatSelectModule,
  MatRadioModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatIconModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule, 
  MatCheckboxModule, 
  MatToolbarModule, 
  MatCardModule,
  MatFormFieldModule,
  MatInputModule, 
  MatPaginatorModule,
  MatAutocompleteModule,
  MatGridListModule,
  MatTreeModule,
  MatListModule
],
exports: [
  MatTabsModule,
  MatDividerModule,
  MatSliderModule,
  MatSelectModule,
  MatRadioModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatIconModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatSortModule, 
  MatCheckboxModule, 
  MatToolbarModule, 
  MatCardModule,
  MatTableModule,
  MatTabsModule, 
  MatFormFieldModule,
  MatProgressSpinnerModule, 
  MatInputModule, 
  MatPaginatorModule,
  MatAutocompleteModule,
  MatGridListModule,
  MatTreeModule,
  MatListModule
],

})
export class EventsAppMaterialModule { }
