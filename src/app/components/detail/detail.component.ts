import { Component, OnInit } from '@angular/core';
import {AnnonceService} from "../../services/annonce.service";
import {Annonce} from "../../models/Annonce";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  annonce! : Annonce;
  stringJson: any;
  stringObject: any;
  apiURL: string="http://localhost:3000";

  constructor(private annonceService:AnnonceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const annonceIdFromRoute = Number(routeParams.get('annonceId'));

    this.annonceService.detailAnnonce(annonceIdFromRoute).subscribe(result => {

      // Convert String obect to JSON
      this.stringJson = JSON.stringify(result);
      console.log("String json object :", this.stringJson);
      console.log("Type :", typeof this.stringJson);

      // ConvertjSON to an object
      this.stringObject = JSON.parse(this.stringJson);
      console.log("JSON object -", this.stringObject.data);
      this.annonce = this.stringObject.data;
    });
  }

}
