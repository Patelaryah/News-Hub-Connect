import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';

interface Blog {
  title: string;
  imageUrl: string;
  alt: string;
  targetUrl: string;
  description: string;
}

interface BlogCategory {
  [category: string]: Blog[];
}

interface BlogData {
  [channel: string]: BlogCategory;
}

@Component({
  selector: 'app-user-channel',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RouterOutlet],
  templateUrl: './user-channel.component.html',
  styleUrl: './user-channel.component.css'
})
export class UserChannelComponent implements OnInit {
  
  constructor(private route: ActivatedRoute) { }

  cardName!: string;  // Use definite assignment assertion
  //blogs: any[] = [];   // Array to hold news articles
  //categories: string[] = [];
  categorizedBlogs: { category: string, blogs: Blog[] }[] = [];

  private BLOG_DATA: BlogData = {
    'Aaj Tak': {
      'BUSINESS': [
        {
          title: 'Business News Title 1',
          description: 'Description for business news 1',
          imageUrl: 'assets/images/coc.jpg',
          alt: 'Business News 1',
          targetUrl: '/business-news-1'
        },
        {
          title: 'Business News Title 1',
          description: 'Description for business news 1',
          imageUrl: 'assets/images/coc.jpg',
          alt: 'Business News 1',
          targetUrl: '/business-news-1'
        },
        {
          title: 'Business News Title 1',
          description: 'Description for business news 1',
          imageUrl: 'assets/images/coc.jpg',
          alt: 'Business News 1',
          targetUrl: '/business-news-1'
        },
        {
          title: 'Business News Title 1',
          description: 'Description for business news 1',
          imageUrl: 'assets/images/coc.jpg',
          alt: 'Business News 1',
          targetUrl: '/business-news-1'
        },
        {
          title: 'Business News Title 1',
          description: 'Description for business news 1',
          imageUrl: 'assets/images/coc.jpg',
          alt: 'Business News 1',
          targetUrl: '/business-news-1'
        },
        {
          title: 'Business News Title 1',
          description: 'Description for business news 1',
          imageUrl: 'assets/images/coc.jpg',
          alt: 'Business News 1',
          targetUrl: '/business-news-1'
        },
      ],
      'POLITICAL': [
        {
          title: 'Political News Title 1',
          description: 'Description for political news 1',
          imageUrl: 'assets/images/coc.jpg',
          alt: 'Political News 1',
          targetUrl: '/political-news-1'
        }
      ],
      'TECHNOLOGY': [
        {
          title: 'Business News Title 1',
          description: 'Description for business news 1',
          imageUrl: 'assets/images/coc.jpg',
          alt: 'Business News 1',
          targetUrl: '/business-news-1'
        }
      ],
      'LIFESTYLE': [
        {
          title: 'Political News Title 1',
          description: 'Description for political news 1',
          imageUrl: 'assets/images/coc.jpg',
          alt: 'Political News 1',
          targetUrl: '/political-news-1'
        }
      ],
      'SPORTS': [
        {
          title: 'Business News Title 1',
          description: 'Description for business news 1',
          imageUrl: 'assets/images/coc.jpg',
          alt: 'Business News 1',
          targetUrl: '/business-news-1'
        }
      ],
      'CRIME': [
        {
          title: 'Political News Title 1',
          description: 'Description for political news 1',
          imageUrl: 'assets/images/coc.jpg',
          alt: 'Political News 1',
          targetUrl: '/political-news-1'
        }
      ],
      'INTERNATIONAL': [
        {
          title: 'Political News Title 1',
          description: 'Description for political news 1',
          imageUrl: 'assets/images/coc.jpg',
          alt: 'Political News 1',
          targetUrl: '/political-news-1'
        }
      ],
      'LOCAL': [
        {
          title: 'Political News Title 1',
          description: 'Description for political news 1',
          imageUrl: 'assets/images/coc.jpg',
          alt: 'Political News 1',
          targetUrl: '/political-news-1'
        }
      ],
    },
    'ABP_News': {
      'Business': [
        {
          title: 'Business News Title 2',
          description: 'Description for business news 2',
          imageUrl: 'assets/images/coc.jpg',
          alt: 'Business News 2',
          targetUrl: '/business-news-2'
        }
      ],
      'Political': [
        {
          title: 'Political News Title 2',
          description: 'Description for political news 2',
          imageUrl: 'assets/images/coc.jpg',
          alt: 'Political News 2',
          targetUrl: '/political-news-2'
        }
      ],
      'TECHNOLOGY': [
        {
          title: 'Business News Title 1',
          description: 'Description for business news 1',
          imageUrl: 'assets/images/coc.jpg',
          alt: 'Business News 1',
          targetUrl: '/business-news-1'
        }
      ],
      'LIFESTYLE': [
        {
          title: 'Political News Title 1',
          description: 'Description for political news 1',
          imageUrl: 'assets/images/coc.jpg',
          alt: 'Political News 1',
          targetUrl: '/political-news-1'
        }
      ],
      'SPORTS': [
        {
          title: 'Business News Title 1',
          description: 'Description for business news 1',
          imageUrl: 'assets/images/coc.jpg',
          alt: 'Business News 1',
          targetUrl: '/business-news-1'
        }
      ],
      'CRIME': [
        {
          title: 'Political News Title 1',
          description: 'Description for political news 1',
          imageUrl: 'assets/images/coc.jpg',
          alt: 'Political News 1',
          targetUrl: '/political-news-1'
        }
      ],
      'INTERNATIONAL': [
        {
          title: 'Political News Title 1',
          description: 'Description for political news 1',
          imageUrl: 'assets/images/coc.jpg',
          alt: 'Political News 1',
          targetUrl: '/political-news-1'
        }
      ],
      'LOCAL': [
        {
          title: 'Political News Title 1',
          description: 'Description for political news 1',
          imageUrl: 'assets/images/coc.jpg',
          alt: 'Political News 1',
          targetUrl: '/political-news-1'
        }
      ],
    }
    // Add more channels and their news articles here
  };

  ngOnInit(): void {
    // Retrieve the cardName parameter from the route
    this.cardName = this.route.snapshot.paramMap.get('cardName') ?? '';
    console.log('Card Name in UserChannelComponent:', this.cardName);

    // Fetch news categories based on cardName
    const channelData = this.BLOG_DATA[this.cardName];
    if (channelData) {
      this.categorizedBlogs = Object.keys(channelData).map(category => ({
        category,
        blogs: channelData[category]
      }));
    }
    console.log('Categorized Blogs:', this.categorizedBlogs);
  }

  // blogs = [
  //   { imageUrl: 'assets/images/coc.jpg', alt: 'COC', title: 'Title 1', description: 'Short description 1', targetUrl: '' },
  //   { imageUrl: 'assets/images/asphalt 9 legends.png', alt: 'Asphalt 9 Legends', title: 'Title 2', description: 'Short description 2', targetUrl: '' },
  //   { imageUrl: 'assets/images/8 ball pool.jpg', alt: '8 Ball Pull', title: 'Title 3', description: 'Short description 3', targetUrl: '' },
  //   { imageUrl: 'assets/images/8 ball pool.jpg', alt: '8 Ball Pull', title: 'Title 3', description: 'Short description 3', targetUrl: '' },
  // ];
}
