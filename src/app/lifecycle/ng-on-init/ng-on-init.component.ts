import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { confirm } from "devextreme/ui/dialog"


@Component({
  selector: 'app-ng-on-init',
  templateUrl: './ng-on-init.component.html',
  styleUrls: ['./ng-on-init.component.scss']
})
export class NgOnInitComponent implements OnInit{
  ngOnInit(): void {
    let mess = `<pre>
    - Gọi duy nhất 1 lần đầu khi componet được khởi tạo.
    - Gọi sau ngOnchanges, khi ngOnchange ko được gọi thì ngOnint vẫn được gọi.
    </pre>`
    let result = confirm(mess,'ngOnint được gọi khi');
  }
}
