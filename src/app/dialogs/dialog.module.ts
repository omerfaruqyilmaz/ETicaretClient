import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { SelectProductImageDialogComponent } from './select-product-image-dialog/select-product-image-dialog.component';
import { FileuploadModule } from '../services/common/fileupload/fileupload.module';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    DeleteDialogComponent,    
    SelectProductImageDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,MatButtonModule,MatCardModule,
    FileuploadModule
  ]
})
export class DialogModule { }
