import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatButtonModule } from '@angular/material/button';

@NgModule({

    imports: [MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        NgxMaterialTimepickerModule,
        NgxMatTimepickerModule,
        NgxMatDatetimePickerModule,
        NgxMatNativeDateModule,

    ],
    exports: [
        MatDialogModule,
        MatFormFieldModule,
        MatDatepickerModule,
        NgxMatNativeDateModule,
        MatIconModule,
        MatInputModule,
        NgxMaterialTimepickerModule,
        MatSelectModule,
        MatNativeDateModule,
        NgxMatTimepickerModule,
        MatButtonModule,
        NgxMatDatetimePickerModule,
    ]
})
export class CustomMaterialModule { }
