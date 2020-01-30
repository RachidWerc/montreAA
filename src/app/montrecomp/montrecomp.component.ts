import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {interval, Observable} from 'rxjs';
//import {MovieService} from 'src/app/services/movie/movie.service';
import { error } from 'protractor';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-montrecomp',
  templateUrl: './montrecomp.component.html',
  styleUrls: ['./montrecomp.component.scss']
})
export class MontrecompComponent implements OnInit {

  @ViewChild('sa3a', {static : false} )
  sa3a : ElementRef;

  
  @ViewChild('t9i9a', {static : false} )
  t9i9a : ElementRef;

  
  @ViewChild('thania', {static : false} )
  thania : ElementRef;


obs : Observable <number>;
  constructor() { }

  
  ngOnInit() {
    this.obs = interval(1000);
    this.obs.subscribe(
      s => { this.MajMontre(Date);
      }
    )
    
    
    setInterval(() => {
      const date = new Date();
      this.MajMontre(date);
    }, 1000)

  }
    
    
    
  
  
  MajMontre(date) {
    this.thania.nativeElement.style.transform = 'rotate('+
    date.getSeconds() *6+ 'deg)';

    this.t9i9a.nativeElement.style.transform = 'rotate(' +
    date.getMinutes() *6+'deg)';

    this.sa3a.nativeElement.style.transform = 'rotate('+
    (date.getHours()* 30 + date.getMinutes()* 0.5)+ 'deg)';
  }


  


}
