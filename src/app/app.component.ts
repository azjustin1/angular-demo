import { Component } from '@angular/core';
import { SeriesLabels } from '@progress/kendo-angular-charts';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { categories } from './data.categories';
import { ProductService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService],
})
export class AppComponent {
  title = 'Kendo UI Example';

  public dropDownItems = categories;
  public defaultItem = { text: 'Default', value: '' };

  public gridItems: GridDataResult | any;
  public pageSize: number = 10;
  public skip: number = 0;
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm!: number;

  public chartSeries: any[] = [{ data: [1, 2, 3, 4] }];
  public seriesLabels: SeriesLabels = {
    visible: true,
    padding: 3,
    font: 'bold 16pt Arial, san-serif',
  };
  public chartTitle: any = { text: 'Sample Chart' };

  constructor(private service: ProductService) {
    this.loadGridItems();
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadGridItems();
  }

  private loadGridItems(): void {
    this.service
      .getProducts(
        this.skip,
        this.pageSize,
        this.sortDescriptor,
        this.filterTerm
      )
      .subscribe((items) => {
        this.gridItems = items;
      });
  }

  public handleSortChange(descriptor: SortDescriptor[]): void {
    this.sortDescriptor = descriptor;
    this.loadGridItems();
  }

  public handleFilterChange(item: {
    text: string;
    value: number | null;
  }): void {
    this.filterTerm = item.value!;
    this.skip = 0;
    this.loadGridItems();
  }
}
