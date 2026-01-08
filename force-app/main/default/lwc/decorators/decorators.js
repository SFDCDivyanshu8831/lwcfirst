import { LightningElement } from 'lwc';

export default class Decorators extends LightningElement {

   greeting = "Hello!";
   handleClick(){
    this.greeting = "GoodBye!";
   } 
}