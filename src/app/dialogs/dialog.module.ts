import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { SelectProductImageDialogComponent } from './select-product-image-dialog/select-product-image-dialog.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from '../services/common/file-upload/file-upload.module';


@NgModule({
  declarations: [
    DeleteDialogComponent,    
    SelectProductImageDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,MatButtonModule,MatCardModule,
    FileUploadModule,
    FormsModule
  ]
})
export class DialogModule { }
