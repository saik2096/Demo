import { LightningElement, track} from 'lwc';
import FormCr from '@salesforce/apex/FormCr.FormCr1';
import Name_field from '@salesforce/schema/crick__c.Name';
import Number_field from '@salesforce/schema/crick__c.Number__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class CreateRecordWithFieldIntigrity extends LightningElement {

    @track crick__cId;
    @track error;

    @track crickRecord = {};
    //from 15 - 23 added
    fieldNames = {
        Name: Name_field.fieldApiName,
        Number: Number_field.fieldApiName,
      };
      crickRecord = {
        [Name_field.fieldApiName]: "",
        [Number_field.fieldApiName]: "",
      };

      handleNameChange(event) {
        console.log("=======",event)
        this.crickRecord.Name = event.target.value;
        // this.crickRecord[event.target.Name] = event.target.value;
    }
    
    handleNumberChange(event) {
        console.log("=======",event)
        this.crickRecord.Number__c = event.target.value;
        // this.crickRecord[event.target.Number__c] = event.target.value;
    }
    /* similarly other fields can be mentioned as above or you can use single handleChange method */
  handleClick(){
    FormCr({cri:this.crickRecord})
    .then(result =>{
        console.log("result",result)
        this.crickRecord = {};
        
        this.crickId = result.Id;
        const toastEvent =new ShowToastEvent({
            title:'Success!',
            message:'cri record is created Successfully!',
            variant:'success'    
        });
        this.dispatchEvent(toastEvent);
    })
    .catch(error =>{
        this.error = error.message;
    });
  }
  
   
}