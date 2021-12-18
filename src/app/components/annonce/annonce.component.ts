import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AnnonceService} from "../../services/annonce.service";
import {Annonce} from "../../models/Annonce";

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  annonces! : Annonce[];
  stringJson: any;
  stringObject: any;
  apiURL: string="http://localhost:3000";

  constructor(
    private router: Router,
    private annonceService:AnnonceService
  ) { }

  ngOnInit(): void {
    this.annonceService.listAnnonces().subscribe(result => {

      // Convert String obect to JSON
      this.stringJson = JSON.stringify(result);
      console.log("String json object :", this.stringJson);
      console.log("Type :", typeof this.stringJson);

      // ConvertjSON to an object
      this.stringObject = JSON.parse(this.stringJson);
      this.annonces = this.stringObject.data;
      console.log("JSON object -", this.stringObject.data);

    });
  }

}
