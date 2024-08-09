import {HttpClient} from "@angular/common/http";
// import {Injectable} from "@angular/core";

// @Injectable()
export class GetService {
  public data:any;
  constructor(private http: HttpClient) {}

  public fetchDetails():any {
    this.http.get('http://api.evo/zilete').subscribe(
      (resp: any) => {
        return resp.response[0].data[0];
      }
    );

  }
}
