import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Chart } from 'chart.js';
import { BarController, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';
import { MatButtonModule } from '@angular/material/button';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip);

@Component({
  selector: 'app-j-dashboard',
  standalone: true,
  imports: [MatIconModule, BaseChartDirective, MatButtonModule],
  templateUrl: './j-dashboard.component.html',
  styleUrl: './j-dashboard.component.css'
})
export class JDashboardComponent {

  draft_blogs = 3;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: string[] = ['Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartFollowersData: ChartDataset<'bar'>[] = [
    { data: [6, 8, 7, 4, 5, 9], label: 'Followers' }
  ];

  public barChartBlogsData: ChartDataset<'bar'>[] = [
    { data: [6, 8, 10, 4, 15, 9], label: 'Blogs' }
  ];

}
