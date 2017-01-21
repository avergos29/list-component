import { Component, OnInit } from '@angular/core';
import { CardService } from '../shared/service/card.service';

@Component({
  selector: 'todos-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent  {

  constructor(private _service : CardService){}

  onSubmit(content){
    this._service.create(JSON.stringify(
      { "label" : "todo", "status":
        { "identifier": "todo", "label": "TODO" } })
    ).subscribe(
      (added : any) => "postit created " + JSON.stringify(content));
  }

  onBackClicked(){
    console.log("back clicked " );
  }

}
