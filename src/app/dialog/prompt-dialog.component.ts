import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prompt-dialog',
  templateUrl: './prompt-dialog.component.html',
})
export class PromptDialogComponent {
  public name = '';
  public promptForm: FormGroup = this.fb.group({name: ['', [Validators.required]]});

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<PromptDialogComponent>,
    private fb: FormBuilder
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  submit() {
    this.dialogRef.close(this.promptForm.get('name').value);
  }
}
