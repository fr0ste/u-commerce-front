import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Category {
  title: string;
  image: string;
  itemCount: number;
}

@Component({
  selector: 'app-featured-categories',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './featured-categories.component.html',
  styleUrls: ['./featured-categories.component.scss']
})
export class FeaturedCategoriesComponent {
  @Output() viewAllClick = new EventEmitter<void>();
  
  categories: Category[] = [
    { title: "Men's Fashion", image: "https://img.heroui.chat/image/fashion?w=400&h=300&u=11", itemCount: 120 },
    { title: "Women's Collection", image: "https://img.heroui.chat/image/fashion?w=400&h=300&u=12", itemCount: 150 },
    { title: "Accessories", image: "https://img.heroui.chat/image/fashion?w=400&h=300&u=13", itemCount: 85 },
    { title: "Footwear", image: "https://img.heroui.chat/image/shoes?w=400&h=300&u=14", itemCount: 64 },
  ];
  
  onViewAll(): void {
    this.viewAllClick.emit();
  }
}
