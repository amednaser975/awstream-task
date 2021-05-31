import { Injectable } from '@angular/core';
import { Job } from '../_models/job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  jobs: Job[];
  constructor() { 
    this.jobs = [
      {id: 1, category: 'Full Time', address: 'Moscow', company: 'Pepsi', time: 8, companyImg: './assets/images/pepsi.png', title: 'Project Manager'},
      {id: 2, category: 'Part Time', address: 'Cairo', company: 'IBM', time: 2, companyImg: './assets/images/ibm.png', title: 'Graphic Designer'},
      {id: 3, category: 'Freelance', address: 'Madrid', company: 'IBM', time: 10, companyImg: './assets/images/ibm.png ', title: 'Digital PR Manager'},
      {id: 4, category: 'Internship', address: 'Giza', company: 'Pepsi', time: 22, companyImg: './assets/images/pepsi.png', title: 'Resturant Dishwasher'}
    
    ]
  }
  getAll(): Job[] {
    return this.jobs.slice();
  }
  getByCategory(category: string): Job[] {
    return this.jobs.filter(job => job.category == category);
  }
}
