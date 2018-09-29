import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Http } from '@angular/http';
import { ResponseFacebook } from '../model/ResponseFacebook';
import { User } from '../model/User';


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
  tokem: string = "EAAeMxmIdRA4BAFJMHNQOw00Dk6rs8ZB2lddZAuq4zYjOarcpBcXcB8CmjQgSO6fK17TaqhHzBUSydUNn6VIbvNJYtLIT2BmiXFQKIZATbk4eqZAtT0Wdwi4Baa0w4USr8iYdZADM7kp53hhgoQ53spxiTKLfL8nsM8dM07UWc3ZBpjA8fH05afZCZBuBJ0SvLjenaUIMXjbZB01eoO9tEgTBt";
  constructor(private http: Http) { }




  teste() {
    let promise = new Promise((resolve, reject) => {
      this.http.get("https://graph.facebook.com/v3.1/dsantospapelaria/insights?metric=page_fans&access_token=" + this.tokem)
        .toPromise()
        .then(
          res => {
            //console.log(res.json())
            this.responsePageFans = new ResponseFacebook(res.json().data[0].name, res.json().data[0].values[1].value, res.json().data[0].values[1].end_time);
            //console.log(this.responsePageFans);
          }
        )
    });

    let promise2 = new Promise((resolve, reject) => {
      this.http.get("https://graph.facebook.com/v3.1/dsantospapelaria/insights?metric=page_fan_removes&access_token=" + this.tokem)
        .toPromise()
        .then(
          res => {
            //console.log(res.json())
            this.responsePageFansRemove = new ResponseFacebook(res.json().data[0].name, res.json().data[0].values[1].value, res.json().data[0].values[1].end_time);
            //console.log(this.responsePageFansRemove);
          }
        )
    });

    let promise3 = new Promise((resolve, reject) => {
      this.http.get("https://graph.facebook.com/v3.1/dsantospapelaria/insights?metric=page_engaged_users&access_token=" + this.tokem)
        .toPromise()
        .then(
          res => {
            //console.log(res.json())
            this.responsePageEngagedUsers = new ResponseFacebook(res.json().data[1].name, res.json().data[1].values[1].value, res.json().data[1].values[1].end_time);
            //console.log(this.responsePageEngagedUsers);
          }
        )
    });

    let promise4 = new Promise((resolve, reject) => {
      this.http.get("https://graph.facebook.com/v3.1/dsantospapelaria/insights?metric=page_impressions&access_token=" + this.tokem)
        .toPromise()
        .then(
          res => {
            //console.log(res.json())
            this.responsePageImpressions = new ResponseFacebook(res.json().data[1].name, res.json().data[1].values[1].value, res.json().data[1].values[1].end_time);
            //console.log(this.responsePageImpressions);
          }
        )
    });


  }

  getAllUsers() {
    let promise4 = new Promise((resolve, reject) => {
      this.http.get("https://hacka-sankhya.herokuapp.com/api/InstitutoProjetoVida")
        .toPromise()
        .then(
          res => {
            console.log(res.json());
          }
        )
    });


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
    /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
    this.teste();
    const dataWeeklyRegisters: any = {
      labels: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
      series: [
        [12, 17, 7, 17, 23, 18, 38]
      ]
    };

    const optionsWeeklyRegisters: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
    }

    var WeeklyRegisters = new Chartist.Line('#WeeklyRegisters', dataWeeklyRegisters, optionsWeeklyRegisters);

    this.startAnimationForLineChart(WeeklyRegisters);


    /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

    const dataCompletedTasksChart: any = {
      labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
      series: [
        [230, 750, 450, 300, 280, 240, 200, 190]
      ]
    };

    const optionsCompletedTasksChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
    }

    var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

    // start animation for the Completed Tasks Chart - Line Chart
    this.startAnimationForLineChart(completedTasksChart);



    /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

    var dataRegistersxQualifications = {
      labels: ['Tecn.', 'Call C.', 'Suporte', 'Soft.', 'Gestão', 'Opera.', 'Admin.'],
      series: [
        [542, 443, 320, 780, 553, 453, 326]

      ]
    };
    var optionsRegistersxQualifications = {
      axisX: {
        showGrid: false
      },
      low: 0,
      high: 1000,
      chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
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
    var RegistersxQualifications = new Chartist.Bar('#RegistersxQualifications', dataRegistersxQualifications, optionsRegistersxQualifications, responsiveOptions);

    //start animation for the Emails Subscription Chart
    this.startAnimationForBarChart(RegistersxQualifications);
  }

}
