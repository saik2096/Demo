import { LightningElement, track} from 'lwc';
import VipCl from '@salesforce/apex/VipCl.VipCl1';
import Name_field from '@salesforce/schema/Deployment_frequency__c.Name';
import applicationame_field from '@salesforce/schema/Deployment_frequency__c.applicationame__c';
import image_id_field from '@salesforce/schema/Deployment_frequency__c.image_id__c';
import Note_field from '@salesforce/schema/Deployment_frequency__c.Note__c';
import Repository_field from '@salesforce/schema/Deployment_frequency__c.Repository__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class CreateRecordWithFieldIntigrity extends LightningElement {
    value = 'inProgress';

    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }

    @track Deployment_frequency__cId;
    @track error;

    @track Deployment_frequencyRecord = {};
    //from 15 - 23 added
    fieldNames = {
        Name: Name_field.fieldApiName,
        // applicationame: applicationame_field.fieldApiName,
        // image_id: image_id_field.fieldApiName,
        Note: Note_field.fieldApiName,
        // Repository: Repository_field.fieldApiName,
      };
      Deployment_frequencyRecord = {
        [Name_field.fieldApiName]: "",
        // [applicationame_field.fieldApiName]: "",
        // [image_id_field.fieldApiName]: "",
        [Note_field.fieldApiName]: "",
        // [Repository_field.fieldApiName]: "",
      };

      handleNameChange(event) {
        console.log("=======",event)
        this.Deployment_frequencyRecord.Name = event.target.value;
        // this.crickRecord[event.target.Name] = event.target.value;
    }
    handleapplicationameChange(event) {
        console.log("=======",event)
        // this.Deployment_frequencyRecord.applicationame__c = event.target.value;
        // this.crickRecord[event.target.Name] = event.target.value;
        this.value = event.detail.value;
    }
    handleimage_idChange(event) {
        console.log("=======",event)
        // this.Deployment_frequencyRecord.image_id__c = event.target.value;
        // this.crickRecord[event.target.Name] = event.target.value;
        this.value = event.detail.value;
    }
    handleNoteChange(event) {
        console.log("=======",event)
        this.Deployment_frequencyRecord.Note__c = event.target.value;
        // this.crickRecord[event.target.Name] = event.target.value;
    }
    handleRepositoryChange(event) {
        console.log("=======",event)
        // this.Deployment_frequencyRecord.Repository__c = event.target.value;
        // this.crickRecord[event.target.Number__c] = event.target.value;
        this.value = event.detail.value;
    }
    /* similarly other fields can be mentioned as above or you can use single handleChange method */
  handleClick(){
    VipCl({Dep:this.Deployment_frequencyRecord})
    .then(result =>{
        console.log("result",result)
        this.Deployment_frequencyRecord = {};
        
        this.Deployment_frequency__cId = result.Id;
        const toastEvent =new ShowToastEvent({
            title:'Success!',
            message:'Dep record is created Successfully!',
            variant:'success'    
        });
        this.dispatchEvent(toastEvent);
    })
    .catch(error =>{
        this.error = error.message;
    });
  }
  
   
}