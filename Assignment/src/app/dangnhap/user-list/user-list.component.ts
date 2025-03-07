import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/user.service';
import { Employee } from 'src/app/shared/user.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  list: Employee[];
  constructor(private service: EmployeeService,
    private firestore:AngularFirestore,
    // private toastr:ToastrService
    ) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Employee;
      })
    });
  }
  onEdit(emp: Employee) {
    this.service.formData = Object.assign({}, emp);
  }
  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('employees/' + id).delete();
     
    }
  }
}
