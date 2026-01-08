import { LightningElement } from 'lwc';

export default class RenderList extends LightningElement {
    Superstars = ["Superman" , "Batman" , "Ironman" , "Spiderman" , "Hulk"];
    Users = [{
        id : 1,
        name : "Divyanshuu",
        age : 26
    },
    {
        id : 2,
        name : "DIV", 
        age : 26
    },
    {
        id : 3,
        name : "DIV2",                 
        age : 26
    },
    {
        id : 4,
        name : "DIV3", 
        age : 26
    },
    {
        id : 5,
        name : "Div4", 
        age : 26
    }]
}