import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HEXToHSL} from '../../../lib/coloring';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-circulaires',
  templateUrl: './circulaires.component.html',
  styleUrls: ['./circulaires.component.css']
})
export class CirculairesComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // tslint:disable-next-line:variable-name
  _data: MatTableDataSource<any>;

  constructor(private http: HttpClient) { }


  public getJSON(): Observable<any> {
    return this.http.get('assets/data/circulaires.json');
  }

  async ngOnInit(): Promise<void> {
    this._data = new MatTableDataSource(
      (await this.getJSON().toPromise()).filter(x => x.hex1 !== null && x.hex2 !== null).map(x => {
        x.col1_l = HEXToHSL(x.hex1).l;
        x.col2_l = HEXToHSL(x.hex2).l;
        const cols = x.couleur.split(' & ');
        console.log(cols);
        x.col1 = cols[0].toLowerCase().replace('satin', '').replace('velours', '').trim();
        x.font_color1 = x.col1_l > 50 ? 'dark' : 'light';
        if (cols.length > 1){
          x.col2 = cols[1].toLowerCase().replace('satin', '').replace('velours', '').trim();
          x.font_color2 = x.col1_2 > 50 ? 'dark' : 'light';
        }
        x.font_color = (x.col1_l + x.col1_l) / 2 > 50 ? 'dark' : 'light';
        return x;
      })
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this._data.filter = filterValue.trim().toLowerCase();
    this._data.filterPredicate = (data, filter: string): boolean => {
      return data.libelle.toLowerCase().includes(filter);
    };
  }

}
