import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  // getPostComments(payload: { postId: any; }) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) { }

  getData() {
    let data = [
      {
        id: 1,
        name: 'John'
      }
    ]
    return data;
  }

  getposts() {
    //return this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
    return this.httpClient.get('http://localhost/Full%20Stack%20Class/Apis/data.php')
  }

  register(payload: any) {
    return this.httpClient.post('http://localhost/Full%20Stack%20Class/php-core-rest-main/api/register.php', payload);
  }

  login(payload: any) {
    return this.httpClient.post('http://localhost/Full%20Stack%20Class/php-core-rest-main/api/login.php', payload);
  }

  getProfile() {
    const header = {
      headers: new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken())
    };

    const body ={
      id : this.authService.getLoggedInUserId()
    };
   
  return this.httpClient.post('http://localhost/Full%20Stack%20Class/php-core-rest-main/api/user-profile.php',body, header);
  }


  getPostDetails(payload : any) {

    const header = {
      headers: new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken())
    };

    return this.httpClient.post('http://localhost/Full%20Stack%20Class/php-core-rest-main/api/get-post-details.php', payload, header);
  }

  getAllPosts() {
    const header = {
      headers: new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken())
    };

    return this.httpClient.get('http://localhost/Full%20Stack%20Class/php-core-rest-main/api/get-all-posts.php', header);
  }

  createPost(payload: any) {

    const header = {
      headers: new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken())
    };

    return this.httpClient.post('http://localhost/Full%20Stack%20Class/php-core-rest-main/api/create-posts.php', payload, header);
  }

  getPostComments(payload : any) {

    const header = {
      headers: new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken())
    };

    return this.httpClient.post('http://localhost/Full%20Stack%20Class/php-core-rest-main/api/get-post-comments.php', payload, header);
  }

  createComment(payload : any) {

    const header = {
      headers: new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authService.getToken())
    };

    return this.httpClient.post('http://localhost/Full%20Stack%20Class/php-core-rest-main/api/create-comment.php', payload, header);
  }

  
}



