import {Component, OnInit} from '@angular/core';
import {SingleTable} from '../../services/graphql/API.service';
import {LocationsService} from '../../services/jobs/locations.service';
import {Logger} from 'aws-amplify';
import {Router} from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {

  public locations: SingleTable[];
  private logger = new Logger('LocationsPage');

  constructor(private router: Router, private locationsService: LocationsService) {
  }

  async ngOnInit() {
    this.logger.debug('ngOnInit - START');
    this.locations = await this.locationsService.getAllLocations();
    this.logger.debug('ngOnInit - END');
  }

  public async loadCompanies(locationId: string) {
    await this.router.navigate(['/app/pages/companies/'.concat(locationId)]);
  }

}
