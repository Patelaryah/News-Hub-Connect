import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, LineController, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [MatCardModule, BaseChartDirective],
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {

  journalist_img: string = 'assets/images/coc.jpg';
  mostviewedjournalist= 'Maitry Upadhyay';
  channel_img: string = 'assets/images/zee-news.png';
  mostviewednews = 'Zee News';
  mostviewedcategory = 'Sports';
  mostsearchedkeyword = 'BJP';
  

  totalRegisteredUsers = 459;
  totalNewVisitors = 576;
  totalBlogViews = 357;
  totalJournalists = 10;
  totalCategories = 11;
  totalChannels = 6;
  totalAdmins = 3;
  totalTags = 10;

  public ChartType: ChartType = 'line';
  public registeredUsersLabels: string[] = ['week 11', 'week 12', 'week 13', 'week 14', 'week 15', 'week 16'];
  public registeredUsersData: ChartDataset<'line'>[] = [
    { data: [10, 25, 20, 40, 35, 50], label: 'Registered Users' }
  ];

  public newVisitorsLabels: string[] = ['week 11', 'week 12', 'week 13', 'week 14', 'week 15', 'week 16'];
  public newVisitorsData: ChartDataset<'line'>[] = [
    { data: [75, 100, 90, 120, 130, 150], label: 'New Visitors' }
  ];

  public chartOptions: ChartOptions = {
    responsive: true,
  };

  constructor() { }

  ngOnInit(): void {
  }
}
