import {Component, OnInit} from '@angular/core';
import {SingleTable} from '../../services/graphql/API.service';
import {Logger} from 'aws-amplify';
import {ActivatedRoute, Router} from '@angular/router';
import {CompaniesService} from '../../services/jobs/companies.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.page.html',
  styleUrls: ['./companies.page.scss'],
})
export class CompaniesPage implements OnInit {

  public locationId: string;
  public companies: SingleTable[];
  public searchText: string;
  private logger = new Logger('CompaniesPage');

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private alertController: AlertController,
              private companiesService: CompaniesService) {
  }

  async ngOnInit() {
    this.locationId = this.activatedRoute.snapshot.paramMap.get('locationId');
    this.logger.debug('Location ID: ', this.locationId);
    if (this.locationId) {
      this.companies = await this.companiesService.getCompaniesByLocationId(this.locationId);
    } else {
      this.companies = await this.companiesService.getCompanies();
    }
  }

  public async loadOpenPositions(item: SingleTable) {
    let navURL;
    if (this.locationId) {
      navURL = '/app/pages/openPositions/'.concat(this.locationId).concat('#').concat(item.sk);
    } else {
      navURL = '/app/pages/openPositions/'.concat(item.pk).concat('#').concat(item.sk);
    }
    await this.router.navigate([navURL]);
  }

  public onChange(event: any) {
    this.searchText = event.detail.value;
  }

  public async showDetails(item: SingleTable) {
    const alert = await this.alertController.create({
      header: 'Company Info',
      mode: 'ios',
      backdropDismiss: false,
      message: `This company is dedicated to ${item.company.industry}.
      It official website is: ${item.company.url}`,
      buttons: ['OK']
    });
    await alert.present();
  }

  public async loadMoreData(event: any) {
    // Determine if all data is loaded and disable the infinite scroll.
    if (this.companiesService.isMoreDataToRetrieve()) {
      this.logger.debug('Adding more items...');
      const newData: Array<SingleTable> = await this.companiesService.getCompanies();
      this.companies.push(...newData);
      event.target.complete();
    } else {
      event.target.disabled = true;
    }
  }
}
