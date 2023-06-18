import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  title = 'Top 5 Technologies';

  technologies = [
    {
      id : 1,
      name: "Mircroservices",
      likes : 10,
      dislikes : 5,
    },
    {
      id : 2,
      name: "Nachine learning",
      likes : 10,
      dislikes : 5,
    }
    ,
    {
      id : 3,
      name: "Data Scince",
      likes : 10,
      dislikes : 5,
    }
    ,
    {
      id : 4,
      name: "AI",
      likes : 19,
      dislikes : 5,
    },
    {
      id : 5,
      name: "Data Analyst",
      likes : 5,
      dislikes : 5,
    }
  ];


  increamentLikes(t:any) {

  }

  increamentDislikes(t:any) {

  }


  add() {
    this.technologies =    [{
      id : 1,
      name: "Mircroservices",
      likes : 10,
      dislikes : 5,
    },
    {
      id : 2,
      name: "Nachine learning",
      likes : 10,
      dislikes : 5,
    }
    ,
    {
      id : 3,
      name: "Data Scince",
      likes : 10,
      dislikes : 5,
    }
    ,
    {
      id : 4,
      name: "AI",
      likes : 19,
      dislikes : 5,
    },
    {
      id : 5,
      name: "Data Analyst",
      likes : 5,
      dislikes : 5,
    },
    {
      id : 6,
      name: "Frontent",
      likes : 10,
      dislikes : 5,
    }
  ];
  }

  

}
