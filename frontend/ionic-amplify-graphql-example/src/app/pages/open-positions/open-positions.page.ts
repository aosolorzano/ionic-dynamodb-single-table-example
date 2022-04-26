import {Component, OnInit} from '@angular/core';
import {SingleTable} from '../../services/graphql/API.service';
import {Logger} from 'aws-amplify';
import {ActivatedRoute} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {OpenPositionsService} from '../../services/jobs/open-positions.service';

@Component({
  selector: 'app-open-positions',
  templateUrl: './open-positions.page.html',
  styleUrls: ['./open-positions.page.scss'],
})
export class OpenPositionsPage implements OnInit {

  public indexSortKey: string;
  public openPositions: SingleTable[];
  private logger = new Logger('OpenPositionsPage');

  constructor(private activatedRoute: ActivatedRoute, private alertController: AlertController,
              private openPositionsService: OpenPositionsService) {
  }

  public async ngOnInit() {
    this.indexSortKey = this.activatedRoute.snapshot.paramMap.get('gsiSK');
    this.logger.debug('GSI sort key: ', this.indexSortKey);
    if (this.indexSortKey) {
      this.openPositions = await this.openPositionsService.getOpenPositionsByGsiSk(this.indexSortKey);
    } else {
      this.openPositions = [];
    }
  }

  public async showDetails(item: SingleTable) {
    const alert = await this.alertController.create({
      header: 'Open Position Info',
      mode: 'ios',
      backdropDismiss: false,
      message: `The field for this vacancy is: ${item.openPosition.field}.
      The required skill is: ${item.openPosition.skills}.`,
      buttons: ['OK']
    });
    await alert.present();
  }

}
