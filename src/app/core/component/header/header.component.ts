import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-ui',
  templateUrl: './header.component.html',

})
export class HeaderComponent {
@Input() public userDetails:any;

  @Output() public toggleSidebarmenu: EventEmitter<boolean>; 

  public isShowSidebar = false;
  public employeeName: string = "";
  

  constructor(private _route: ActivatedRoute) {
    /** initialize the varriables */
    this.toggleSidebarmenu = new EventEmitter();
  }

  /* toggle sidebar */
  toggleSidebar() {
    this.isShowSidebar = !this.isShowSidebar;
    this.toggleSidebarmenu.emit(this.isShowSidebar);
  }

  /*display employee name */
  ngOnInit(): void {
    this.employeeName = this._route.snapshot.queryParams?.['employeeId'];
    console.log("employeename",this.employeeName)
  }
}