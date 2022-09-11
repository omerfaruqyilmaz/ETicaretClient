import { Component, OnInit } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent  {
constructor(private spinner: NgxSpinnerService){}


  showSpinner(spinnerNameType:SpinnerType){
    this.spinner.show(spinnerNameType);

    // setTimeout(() => this.hideSpinner(spinnerNameType),1000);
      
    
  }

  hideSpinner(spinnerNameType:SpinnerType){
    this.spinner.hide(spinnerNameType);
  }

}

export enum SpinnerType{
  CubeTransition="s1",
  Pacman="s2",
  TriangleSkewSpin="s3",
  Timer="s4",
  BallAtom="s5"
  
}