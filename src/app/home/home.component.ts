import { Component, OnInit } from '@angular/core';
import { Job } from '../_models/job';
import { JobsService } from '../_services/jobs.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allJobs: Job[];
  fullTimeJobs: Job[];
  partTimeJobs: Job[];
  freelanceJobs: Job[];
  internships: Job[];
  temporaryJobs: Job[];

  constructor(public _JobsService: JobsService) { }

  ngOnInit(): void {
    this.allJobs = this._JobsService.getAll();
    this.freelanceJobs = this._JobsService.getByCategory('Freelance');
    this.partTimeJobs = this._JobsService.getByCategory('Part Time');
    this.fullTimeJobs = this._JobsService.getByCategory('Full Time');
    this.internships = this._JobsService.getByCategory('Internship');
    this.temporaryJobs = this._JobsService.getByCategory('Temporary');

  }
  switchSearchTabs(value:string) {
    var element = '#'+value;
    if(value == 'job') {
      $('#resumeBtn').css({
        "backgroundColor": 'white',
        "color": "black"
      });
      $('#jobBtn').css({
        "backgroundColor": 'black',
        "color": "white"
      });
      $('#resume').addClass('d-none');
      $(element).removeClass('d-none');
    }
    else if  (value == 'resume') {
      $('#jobBtn').css({
        "backgroundColor": 'white',
        "color": "black"
      });
      $('#resumeBtn').css({
        "backgroundColor": 'black',
        "color": "white"
      });
      $('#job').addClass('d-none');
      $(element).removeClass('d-none');
    }
  }
  changeListingTab(value: string, e) {
    e.preventDefault();
    var displayedListId = `#${value}`;
    var activeTabId = `#${value}Tab`;
    $(".listing").addClass('d-none');
    $(displayedListId).removeClass('d-none');
    $('.nav-item').removeClass('active');
    $(activeTabId).addClass('active');
  }
}
