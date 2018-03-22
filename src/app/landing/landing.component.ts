import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  image: any;
  name: string;
  species: string;
  location: string;
  status: string;
  id: number = Math.floor((Math.random()*394)+1);
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.showCharacter()
  }

  showCharacter(){
    this.http.get('https://rickandmortyapi.com/api/character/' + this.id).subscribe(character => {
    this.image = character['image'];
    this.name = character['name'];
    this.species = character['species'];
    this.location = character['location']['name'];
    this.status = character['status'];
    console.log(character);
    });
    error => {
      console.log(error);
    }
  }
  next(){
    this.id++;
    this.showCharacter();
  }
  previous(){
    this.id--;
    this.showCharacter();
  }

}
