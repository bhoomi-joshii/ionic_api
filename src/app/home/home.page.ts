import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Observable } from "rxjs";
import { AlertController } from "@ionic/angular";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  result: any = [];
  data: Observable<any>;
  // empList =
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    private altctr: AlertController
  ) {}

  getData() {
    // var url = 'https://randomuser.me/api/?results=10';
    // var url = 'https://jsonplaceholder.typicode.com/comments';
    var url = "https://jsonplaceholder.typicode.com/posts/1";
    this.data = this.http.get(url);
    this.data.subscribe((data) => {
      console.log(data);
      this.result = data;
      // this.result = data.results.['results'];
    });
  }

  addItem() {
    console.log("Add item");
  }

  async onDeleteClick() {
    const alert = await this.altctr.create({
      header: "Are you sure ? ",
      message: "Are you sure to delete the product ?",
      buttons: [
        {
          text: "Cancel",
          role: "cancle",
        },
        {
          text: "Delete",
          handler: () => {},
        },
      ],
    });

    await alert.present();
  }
}
