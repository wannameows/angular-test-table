import { Component, Input, OnChanges } from '@angular/core';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnChanges {

  @Input() rows: any[];
  cols: string[];
  sort: { type: string, column: string } = {
    type: '',
    column: ''
  };
  searchValue: string = '';

  constructor(
    private user: UserService
  ) { }

  ngOnChanges() {
    if (this.rows) {
      this.cols = Object.keys(this.rows[0]);
    };
  }
  sortBy(column): void {
    let type = this.sort.type === 'ASC' && this.sort.column === column ? 'DESC' : 'ASC';
    this.user.sortBy(column, type).toPromise().then(data => {
      this.rows = data;
      this.sort = {
        type,
        column
      }
    });
  }
  searchBy(): void {
    this.user.searchBy(this.searchValue).toPromise().then(data => {
      this.rows = data;
      this.sort = {
        type: '',
        column: ''
      }
    });
  }
}
