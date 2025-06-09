import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryDetailComponent } from '../category-detail/category-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

interface Category {
  id: number;
  title: string;
  image: string;
  itemCount: number;
  description: string;
  subcategories: string[];
}

interface FilterOption {
  key: string;
  label: string;
}

interface SortOption {
  key: string;
  label: string;
}

@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    CategoryDetailComponent,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent {
  selectedFilter: string = 'all';
  sortOrder: string = 'popular';
  selectedCategory: number | null = null;

  categories: Category[] = [
    { 
      id: 1,
      title: "Men's Fashion", 
      image: "https://img.heroui.chat/image/fashion?w=600&h=400&u=101", 
      itemCount: 120,
      description: "Discover the latest trends in men's clothing, from casual wear to formal attire.",
      subcategories: ["Shirts", "Pants", "Suits", "Activewear", "Accessories"]
    },
    { 
      id: 2,
      title: "Women's Collection", 
      image: "https://img.heroui.chat/image/fashion?w=600&h=400&u=102", 
      itemCount: 150,
      description: "Explore our wide range of women's apparel for every occasion and season.",
      subcategories: ["Dresses", "Tops", "Skirts", "Activewear", "Accessories"]
    },
    { 
      id: 3,
      title: "Accessories", 
      image: "https://img.heroui.chat/image/fashion?w=600&h=400&u=103", 
      itemCount: 85,
      description: "Complete your look with our selection of stylish accessories for all occasions.",
      subcategories: ["Jewelry", "Watches", "Bags", "Belts", "Sunglasses"]
    },
    { 
      id: 4,
      title: "Footwear", 
      image: "https://img.heroui.chat/image/shoes?w=600&h=400&u=104", 
      itemCount: 64,
      description: "Step out in style with our collection of shoes for men, women, and children.",
      subcategories: ["Sneakers", "Formal", "Boots", "Sandals", "Athletic"]
    },
    { 
      id: 5,
      title: "Kids & Baby", 
      image: "https://img.heroui.chat/image/fashion?w=600&h=400&u=105", 
      itemCount: 92,
      description: "Adorable and comfortable clothing for children of all ages, from infants to teens.",
      subcategories: ["Baby Clothes", "Boys", "Girls", "School Uniforms", "Shoes"]
    },
    { 
      id: 6,
      title: "Sports & Outdoor", 
      image: "https://img.heroui.chat/image/sports?w=600&h=400&u=106", 
      itemCount: 78,
      description: "Gear up for your active lifestyle with our sports and outdoor equipment collection.",
      subcategories: ["Fitness", "Camping", "Team Sports", "Water Sports", "Winter Sports"]
    },
    { 
      id: 7,
      title: "Home & Living", 
      image: "https://img.heroui.chat/image/furniture?w=600&h=400&u=107", 
      itemCount: 110,
      description: "Transform your living space with our stylish and functional home decor items.",
      subcategories: ["Furniture", "Decor", "Bedding", "Kitchen", "Bath"]
    },
    { 
      id: 8,
      title: "Electronics", 
      image: "https://img.heroui.chat/image/ai?w=600&h=400&u=108", 
      itemCount: 95,
      description: "Explore the latest gadgets and electronics for work, entertainment, and everyday life.",
      subcategories: ["Smartphones", "Laptops", "Audio", "Gaming", "Accessories"]
    }
  ];

  filters: FilterOption[] = [
    { key: "all", label: "All Categories" },
    { key: "fashion", label: "Fashion" },
    { key: "accessories", label: "Accessories" },
    { key: "home", label: "Home & Living" },
    { key: "electronics", label: "Electronics" },
  ];

  sortOptions: SortOption[] = [
    { key: "popular", label: "Most Popular" },
    { key: "newest", label: "Newest First" },
    { key: "itemCount", label: "Item Count: High to Low" },
    { key: "alphabetical", label: "Alphabetical (A-Z)" }
  ];

  get filteredCategories(): Category[] {
    if (this.selectedFilter === 'all') {
      return this.sortCategories([...this.categories]);
    } else {
      const filtered = this.categories.filter(category => {
        if (this.selectedFilter === "fashion") {
          return category.title.toLowerCase().includes("fashion") || 
                 category.title.toLowerCase().includes("collection") ||
                 category.title.toLowerCase().includes("kids");
        }
        return category.title.toLowerCase().includes(this.selectedFilter);
      });
      return this.sortCategories(filtered);
    }
  }

  private sortCategories(categories: Category[]): Category[] {
    return [...categories].sort((a, b) => {
      switch (this.sortOrder) {
        case "itemCount":
          return b.itemCount - a.itemCount;
        case "alphabetical":
          return a.title.localeCompare(b.title);
        case "newest":
          return b.id - a.id;
        default:
          return 0;
      }
    });
  }

  selectCategory(id: number): void {
    this.selectedCategory = id;
  }

  resetCategory(): void {
    this.selectedCategory = null;
  }
}
