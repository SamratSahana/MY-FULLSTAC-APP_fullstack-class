import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../services/backend.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  posts:any=[];
  
  data1:any = null;

  users:any =[];

  constructor(
    private route: ActivatedRoute,
    private backendService: BackendService 
    ) { } 

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      //console.log(params.id);
    });
     //this.getBackendData();
     this.getAllposts();
   }
  
   getBackendData() {
    console.log(this.backendService.getData());
   }

   getAllposts() {
    this.backendService.getposts().subscribe((res: any) => {
      // this.data1=res;
      // console.log(this.data1.status);
      this.users = res.users;
      console.log(this.users);
      //console.log(res);
      // this.posts = res;
      // console.log (this.posts);
    }, err => {
      console.log(err);
      //alert('please try again later');
    });
   }
  }