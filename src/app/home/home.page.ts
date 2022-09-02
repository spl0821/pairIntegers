import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Forms
  pairFinderForm = new FormGroup({
    newNumber: new FormControl(null, [Validators.required]),
    valueFind: new FormControl(null, [Validators.required])
  });

  //Array of numbers
  numbersArray: number[] = [];

  // Numbers that sum to the given value
  sumNumbers: string[] = [];

  constructor() {}

  onSubmit(){
    if(this.numbersArray.length >= 2){
      this.numbersArray.forEach(num=>{
        this.numbersArray.some(value=>{
          if(value !== num){
            if(num + value == this.pairFinderForm.value.valueFind){
              console.log(`${num} + ${value}`)
              this.sumNumbers.push(`${num} + ${value}`);
              this.numbersArray = this.numbersArray.filter(x => x !== value && x !== num);
              return true;
            }
          }
        })
      })
    }
  }

  addNew(){
    if(!this.numbersArray.includes(this.pairFinderForm.value.newNumber)){
      this.numbersArray.push(this.pairFinderForm.value.newNumber);
      this.pairFinderForm.controls.newNumber.setValue(null);
    }
  }

  removeNumber(number: number){
    this.numbersArray = this.numbersArray.filter((num)=> num !== number);
  }

}
