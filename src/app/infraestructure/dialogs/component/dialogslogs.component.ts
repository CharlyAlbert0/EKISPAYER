import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import {InputSimpleModel} from '../model/inputsimplemodel';
import {LogsModel} from '../../logs/model/logsmodel';
import {NG_TABLE_DIRECTIVES} from 'ng2-table/ng2-table';
import {NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective} from 'ng2-table/ng2-table';

export const TableData:Array<any> = [
  {
    'name': 'Victoria Cantrell',
    'position': 'Integer Corporation',
    'office': 'Croatia',
    'ext': `<strong>0839</strong>`,
    'startDate': '2015/08/19',
    'salary': 208.178
  }, {
    'name': 'Pearl Crosby',
    'position': 'In PC',
    'office': 'Cambodia',
    'ext': `<strong>8262</strong>`,
    'startDate': '2014/10/08',
    'salary': 114.367
  }, {
    'name': 'Colette Foley',
    'position': 'Lorem Inc.',
    'office': 'Korea, North',
    'ext': '8968',
    'startDate': '2015/07/19',
    'salary': 721.473
  }, {
    'name': 'Anastasia Shaffer',
    'position': 'Dolor Nulla Semper LLC',
    'office': 'Suriname',
    'ext': '7980',
    'startDate': '2015/04/20',
    'salary': 264.620
  }, {
    'name': 'Gabriel Castro',
    'position': 'Sed Limited',
    'office': 'Bahrain',
    'ext': '0757',
    'startDate': '2015/03/04',
    'salary': 651.350
  }, {
    'name': 'Cherokee Ware',
    'position': 'Tincidunt LLC',
    'office': 'United Kingdom (Great Britain)',
    'ext': '3995',
    'startDate': '2015/06/17',
    'salary': 666.259
  }, {
    'name': 'Barry Moss',
    'position': 'Sociis Industries',
    'office': 'Western Sahara',
    'ext': '6697',
    'startDate': '2015/08/13',
    'salary': 541.631
  }, {
    'name': 'Maryam Tucker',
    'position': 'Elit Pede Malesuada Inc.',
    'office': 'Brazil',
    'ext': '5203',
    'startDate': '2014/10/02',
    'salary': 182.294
  }, {
    'name': 'Constance Clayton',
    'position': 'Auctor Velit Aliquam LLP',
    'office': 'United Arab Emirates',
    'ext': '4204',
    'startDate': '2015/08/01',
    'salary': 218.597
  }, {
    'name': 'Rogan Tucker',
    'position': 'Arcu Vestibulum Ante Associates',
    'office': 'Jersey',
    'ext': '0885',
    'startDate': '2015/01/04',
    'salary': 861.632
  }, {
    'name': 'Emery Mcdowell',
    'position': 'Gravida Company',
    'office': 'New Zealand',
    'ext': '3951',
    'startDate': '2015/06/02',
    'salary': 413.568
  }, {
    'name': 'Yael Greer',
    'position': 'Orci Limited',
    'office': 'Madagascar',
    'ext': '1416',
    'startDate': '2014/12/04',
    'salary': 121.831
  }, {
    'name': 'Jared Burgess',
    'position': 'Auctor Incorporated',
    'office': 'Burundi',
    'ext': '4673',
    'startDate': '2015/01/12',
    'salary': 62.243
  }, {
    'name': 'Sharon Campbell',
    'position': 'Elit Curabitur Sed Consulting',
    'office': 'Comoros',
    'ext': '6274',
    'startDate': '2014/09/14',
    'salary': 200.854
  }, {
    'name': 'Yeo Church',
    'position': 'Donec Vitae Erat PC',
    'office': 'Saudi Arabia',
    'ext': '0269',
    'startDate': '2015/06/07',
    'salary': 581.193
  }, {
    'name': 'Kylie Barlow',
    'position': 'Fermentum Risus Corporation',
    'office': 'Papua New Guinea',
    'ext': '2010',
    'startDate': '2014/12/03',
    'salary': 418.115
  }, {
    'name': 'Nell Leonard',
    'position': 'Vestibulum Consulting',
    'office': 'Saudi Arabia',
    'ext': '4839',
    'startDate': '2015/05/29',
    'salary': 466.201
  }, {
    'name': 'Brandon Fleming',
    'position': 'Donec Egestas Associates',
    'office': 'Poland',
    'ext': '0622',
    'startDate': '2015/01/22',
    'salary': 800.011
  }, {
    'name': 'Inga Pena',
    'position': 'Et Magnis Dis Limited',
    'office': 'Belgium',
    'ext': '8140',
    'startDate': '2015/05/18',
    'salary': 564.245
  }, {
    'name': 'Arden Russo',
    'position': 'Est Tempor Bibendum Corp.',
    'office': 'Dominican Republic',
    'ext': '6774',
    'startDate': '2015/07/23',
    'salary': 357.222
  }, {
    'name': 'Liberty Gallegos',
    'position': 'Nec Diam LLC',
    'office': 'Ghana',
    'ext': '9266',
    'startDate': '2015/06/18',
    'salary': 554.375
  }, {
    'name': 'Dennis York',
    'position': 'Nullam Suscipit Foundation',
    'office': 'Namibia',
    'ext': '3133',
    'startDate': '2015/03/20',
    'salary': 90.417
  }, {
    'name': 'Petra Chandler',
    'position': 'Pede Nonummy Inc.',
    'office': 'Namibia',
    'ext': '3367',
    'startDate': '2015/03/26',
    'salary': 598.915
  }, {
    'name': 'Aurelia Marshall',
    'position': 'Donec Consulting',
    'office': 'Nicaragua',
    'ext': '2690',
    'startDate': '2015/08/18',
    'salary': 201.680
  }, {
    'name': 'Rose Carter',
    'position': 'Enim Consequat Purus Industries',
    'office': 'Morocco',
    'ext': '0619',
    'startDate': '2015/03/06',
    'salary': 220.187
  }, {
    'name': 'Denton Atkins',
    'position': 'Non Vestibulum PC',
    'office': 'Mali',
    'ext': '5806',
    'startDate': '2015/04/19',
    'salary': 324.588
  }, {
    'name': 'Germaine Osborn',
    'position': 'Tristique Aliquet PC',
    'office': 'Lesotho',
    'ext': '4469',
    'startDate': '2015/01/19',
    'salary': 351.108
  }, {
    'name': 'Nell Butler',
    'position': 'Sit Amet Dapibus Industries',
    'office': 'Cuba',
    'ext': '7860',
    'startDate': '2015/01/06',
    'salary': 230.072
  }, {
    'name': 'Brent Stein',
    'position': 'Eu Augue Porttitor LLP',
    'office': 'Cyprus',
    'ext': '4697',
    'startDate': '2014/11/02',
    'salary': 853.413
  }, {
    'name': 'Alexandra Shaw',
    'position': 'Aenean Gravida Limited',
    'office': 'Uruguay',
    'ext': '1140',
    'startDate': '2015/05/16',
    'salary': 401.970
  }, {
    'name': 'Veronica Allison',
    'position': 'Aliquet Diam Sed Institute',
    'office': 'Samoa',
    'ext': '9966',
    'startDate': '2015/05/17',
    'salary': 79.193
  }, {
    'name': 'Katelyn Gamble',
    'position': 'Sed Associates',
    'office': 'Mauritius',
    'ext': '4767',
    'startDate': '2015/03/20',
    'salary': 484.299
  }, {
    'name': 'James Greer',
    'position': 'A Dui Incorporated',
    'office': 'Norway',
    'ext': '5517',
    'startDate': '2015/02/21',
    'salary': 333.518
  }, {
    'name': 'Cain Vasquez',
    'position': 'Nulla Facilisis Suspendisse Institute',
    'office': 'China',
    'ext': '3179',
    'startDate': '2015/05/27',
    'salary': 651.761
  }, {
    'name': 'Shaeleigh Barr',
    'position': 'Eleifend Cras Institute',
    'office': 'Ghana',
    'ext': '5904',
    'startDate': '2015/04/01',
    'salary': 627.095
  }, {
    'name': 'Baker Mckay',
    'position': 'Ut Sagittis Associates',
    'office': 'Isle of Man',
    'ext': '9840',
    'startDate': '2015/01/12',
    'salary': 742.247
  }, {
    'name': 'Jayme Pace',
    'position': 'Cras Eu Tellus Associates',
    'office': 'Bouvet Island',
    'ext': '4580',
    'startDate': '2015/08/12',
    'salary': 591.588
  }, {
    'name': 'Reuben Albert',
    'position': 'Lobortis Institute',
    'office': 'Zambia',
    'ext': '8725',
    'startDate': '2015/04/04',
    'salary': 791.408
  }, {
    'name': 'Idola Burns',
    'position': 'Non Industries',
    'office': 'Myanmar',
    'ext': '3201',
    'startDate': '2015/06/24',
    'salary': 142.906
  }, {
    'name': 'Laura Macias',
    'position': 'Phasellus Inc.',
    'office': 'Mauritania',
    'ext': '2033',
    'startDate': '2014/11/21',
    'salary': 226.591
  }, {
    'name': 'Nichole Salas',
    'position': 'Duis PC',
    'office': 'Madagascar',
    'ext': '4397',
    'startDate': '2015/01/18',
    'salary': 234.196
  }, {
    'name': 'Hunter Walter',
    'position': 'Ullamcorper Duis Cursus Foundation',
    'office': 'Brazil',
    'ext': '2227',
    'startDate': '2015/02/28',
    'salary': 655.052
  }, {
    'name': 'Asher Rich',
    'position': 'Mauris Ipsum LLP',
    'office': 'Paraguay',
    'ext': '7288',
    'startDate': '2015/08/08',
    'salary': 222.946
  }, {
    'name': 'Angela Carlson',
    'position': 'Donec Tempor Institute',
    'office': 'Papua New Guinea',
    'ext': '5416',
    'startDate': '2015/02/12',
    'salary': 562.194
  }, {
    'name': 'James Dorsey',
    'position': 'Ipsum Leo Associates',
    'office': 'Congo (Brazzaville)',
    'ext': '6019',
    'startDate': '2015/01/10',
    'salary': 629.925
  }, {
    'name': 'Wesley Cobb',
    'position': 'Nunc Est Incorporated',
    'office': 'Australia',
    'ext': '6466',
    'startDate': '2015/01/30',
    'salary': 343.476
  }
];

@Component({
  selector: 'input-dialog',
  templateUrl: '../view/dialogslogs.component.html',
  styleUrls: ['../view/dialogslogs.component.css']
})
export class DialogLogs {

  public title: string;
  public message: string;
  public type:number;
  public size:number;
  public isQuestion:boolean;
  public icon:number;
  public TextInput:string;
  public result:InputSimpleModel = new InputSimpleModel();
  ListLogs: LogsModel[]= new Array<LogsModel>();

  public rows:Array<any> = [];
  public columns:Array<any> = [
    {title: 'Message', name: 'Message', filtering: {filterString: '', placeholder: 'Filter by Message'}},
    {
      title: 'Proyect',
      name: 'Proyect',
      sort: false,
      filtering: {filterString: '', placeholder: 'Filter by Priority'}
    },
    // {title: 'Proyect', className: ['office-header', 'text-success'], name: 'Proyect', sort: 'asc'},

  ];

  public page:number = 1;
  public itemsPerPage:number = 5;
  public maxSize:number = 5;
  public numPages:number = 1;
  public length:number = 0;

  public config:any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-responsive', 'table-bordered']
  };

  private data:Array<any> = this.ListLogs;






  constructor(public dialogRef: MdDialogRef<DialogLogs>,
              ) {
    debugger
    this.GetListError();
    this.length = this.data.length;
  }

  public ngOnInit():void {
    this.onChangeTable(this.config);
  }

  GetListError()
  {
    if (localStorage.getItem('LogStorage'))
    {

      this.ListLogs= JSON.parse(localStorage.getItem('LogStorage'));
      this.data = this.ListLogs;

    }
  }

  public changePage(page:any, data:Array<any> = this.data):Array<any> {
      let start = (page.page - 1) * page.itemsPerPage;
      let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
      return data.slice(start, end);
    }

    public changeSort(data:any, config:any):any {
      if (!config.sorting) {
        return data;
      }

      let columns = this.config.sorting.columns || [];
      let columnName:string = void 0;
      let sort:string = void 0;

      for (let i = 0; i < columns.length; i++) {
        if (columns[i].sort !== '' && columns[i].sort !== false) {
          columnName = columns[i].name;
          sort = columns[i].sort;
        }
      }

      if (!columnName) {
        return data;
      }

      // simple sorting
      return data.sort((previous:any, current:any) => {
        if (previous[columnName] > current[columnName]) {
          return sort === 'desc' ? -1 : 1;
        } else if (previous[columnName] < current[columnName]) {
          return sort === 'asc' ? -1 : 1;
        }
        return 0;
      });
    }

    public changeFilter(data:any, config:any):any {
      let filteredData:Array<any> = data;
      this.columns.forEach((column:any) => {
        if (column.filtering) {
          filteredData = filteredData.filter((item:any) => {
            return item[column.name].match(column.filtering.filterString);
          });
        }
      });

      if (!config.filtering) {
        return filteredData;
      }

      if (config.filtering.columnName) {
        return filteredData.filter((item:any) =>
          item[config.filtering.columnName].match(this.config.filtering.filterString));
      }

      let tempArray:Array<any> = [];
      filteredData.forEach((item:any) => {
        let flag = false;
        this.columns.forEach((column:any) => {
          if (item[column.name].toString().match(this.config.filtering.filterString)) {
            flag = true;
          }
        });
        if (flag) {
          tempArray.push(item);
        }
      });
      filteredData = tempArray;

      return filteredData;
    }

    public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
      if (config.filtering) {
        Object.assign(this.config.filtering, config.filtering);
      }

      if (config.sorting) {
        Object.assign(this.config.sorting, config.sorting);
      }

      let filteredData = this.changeFilter(this.data, this.config);
      let sortedData = this.changeSort(filteredData, this.config);
      this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
      this.length = sortedData.length;
    }

    public onCellClick(data: any): any {
      console.log(data);
    }


  Ok()
  {
    debugger;
    this.dialogRef.close(this.result);
  }

  Cancel(){
    this.dialogRef.close();
  }

}
