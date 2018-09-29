import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Http } from '@angular/http';
import { ResponseFacebook } from '../model/ResponseFacebook';
import { User } from '../model/User';
import { Menssagem } from '../model/Menssagens';
import { Curso } from '../model/Curso';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public responsePageFans: ResponseFacebook = new ResponseFacebook("", 0, new Date);
  public responsePageFansRemove: ResponseFacebook = new ResponseFacebook("", 0, new Date);
  public responsePageEngagedUsers: ResponseFacebook = new ResponseFacebook("", 0, new Date);
  public responsePageImpressions: ResponseFacebook = new ResponseFacebook("", 0, new Date);
  public users: User[];
  public menssagens: Menssagem[];
  public cursos: Curso[];
  tokem: string = "EAAeMxmIdRA4BABlzLtkXZBoCsqFEHg308JsKqC8dZCEjaJZBdcxYSiEZA7ChkqtahUGzlLO9TfVMnHwDJlHog3KvyH7Wwu0D7XaWIpEHSEpAJm4FKlJKaog8OCbV4RQfZBqsYBt2zU6gBWWMUHezd1gaYXr93P2wscvvMZAfEXSw";
  constructor(private http: Http) { }




  teste() {
    let promise = new Promise((resolve, reject) => {
      this.http.get("https://graph.facebook.com/v3.1/dsantospapelaria/insights?metric=page_fans&access_token=" + this.tokem)
        .toPromise()
        .then(
          res => {
            //console.log(res.json().data[0].name)
            this.responsePageFans = new ResponseFacebook(res.json().data[0].name, res.json().data[0].values[1].value, res.json().data[0].values[1].end_time);
            console.log(this.responsePageFans);
          }
        )
    });

    let promise2 = new Promise((resolve, reject) => {
      this.http.get("https://graph.facebook.com/v3.1/dsantospapelaria/insights?metric=page_fan_removes&access_token=" + this.tokem)
        .toPromise()
        .then(
          res => {

            this.responsePageFansRemove = new ResponseFacebook(res.json().data[0].name, res.json().data[0].values[1].value, res.json().data[0].values[1].end_time);
            console.log(this.responsePageFansRemove);
          }
        )
    });

    let promise3 = new Promise((resolve, reject) => {
      this.http.get("https://graph.facebook.com/v3.1/dsantospapelaria/insights?metric=page_engaged_users&access_token=" + this.tokem)
        .toPromise()
        .then(
          res => {

            this.responsePageEngagedUsers = new ResponseFacebook(res.json().data[1].name, res.json().data[1].values[1].value, res.json().data[1].values[1].end_time);
            console.log(this.responsePageEngagedUsers);
          }
        )
    });

    let promise4 = new Promise((resolve, reject) => {
      this.http.get("https://graph.facebook.com/v3.1/dsantospapelaria/insights?metric=page_impressions&access_token=" + this.tokem)
        .toPromise()
        .then(
          res => {

            this.responsePageImpressions = new ResponseFacebook(res.json().data[1].name, res.json().data[1].values[1].value, res.json().data[1].values[1].end_time);
            console.log(this.responsePageImpressions);
          }
        )
    });


  }

  getAllUsers() {
    return this.http.get('https://hacka-sankhya.herokuapp.com/api/InstitutoProjetoVida').toPromise().then((resposta: any) => resposta.json())
  }

  getAllMenssagens() {
    return this.http.get('https://hacka-sankhya.herokuapp.com/api/InstitutoProjetoVida/Action').toPromise().then((resposta: any) => resposta.json())
  }


  


  startAnimationForLineChart(chart) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq = 0;
  };
  startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function (data) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq2 = 0;
  };
  ngOnInit() {
    this.teste();

    this.getAllUsers().then((users: User[]) => {
      this.users = users
      console.log(this.users)

    })
      .catch((param: any) => {
        console.log("erro idiotaa")
      })

      
      this.getAllMenssagens().then((menssagens: Menssagem[]) => {
        this.menssagens = menssagens
        console.log(this.menssagens)
  
      })
        .catch((param: any) => {
          console.log("erro idiotaa")
        })


        
  



const dataDailySalesChart: any = {
  labels: ['Tecn.', 'Call C.', 'Sup.', 'Gestão', 'Adm.', 'Soft.', 'Op.'],
  series: [
    [12, 17, 7, 17, 23, 18, 38]
  ]
};

const optionsDailySalesChart: any = {
  lineSmooth: Chartist.Interpolation.cardinal({
    tension: 0
  }),
  axisX: {
    showGrid: false
  },
  low: 0,
  high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
  chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
}

var dailySalesChart = new Chartist.Bar('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

this.startAnimationForLineChart(dailySalesChart);


/* ----------==========     Completed Tasks Chart initialization    ==========---------- */


/* ----------==========     Emails Subscription Chart initialization    ==========---------- */

var datawebsiteViewsChart = {
  labels: ['Seg.', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sáb.', 'Dom.'],
  series: [
    [10, 7, 3, 5, 11, 2, 3]
  ]
};
var optionswebsiteViewsChart = {
  axisX: {
    showGrid: true
  },
  low: 0,
  high: 20,
  chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
};
var responsiveOptions: any[] = [
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];
var websiteViewsChart = new Chartist.Line('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

//start animation for the Emails Subscription Chart
this.startAnimationForBarChart(websiteViewsChart);
  }

}
