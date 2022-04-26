import {Injectable} from '@angular/core';
import {Logger} from 'aws-amplify';
import {APIService, ModelStringKeyConditionInput, SingleTable} from '../graphql/API.service';
import {ItemTypeEnum} from '../../utils/enums/item.type.enum';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private nextToken: string = null;
  private logger = new Logger('CompaniesService');

  constructor(private api: APIService) {
  }

  public async getCompaniesByLocationId(locationId: string): Promise<Array<SingleTable>> {
    this.logger.debug('getCompaniesByLocationId() - START: ', locationId);
    const result: Array<SingleTable> = [];
    const gsi1sk: ModelStringKeyConditionInput = {eq: locationId};
    await this.api.GetItemByGSI(ItemTypeEnum.company, gsi1sk).then(async response => {
      for (const item of response.items) {
        result.push(item);
      }
    });
    this.logger.debug('getCompaniesByLocationId() - END');
    return result;
  }

  public async getCompanies(): Promise<Array<SingleTable>> {
    this.logger.debug('getCompanies() - START');
    const result: Array<SingleTable> = [];
    await this.api.GetItemByGSI(ItemTypeEnum.company, null, null, null, null, this.nextToken)
      .then(async response => {
        for (const item of response.items) {
          result.push(item);
        }
        this.nextToken = response.nextToken ? response.nextToken : null;
      });
    this.logger.debug('getCompanies() - END');
    return result;
  }

  public isMoreDataToRetrieve(): boolean {
    return !!this.nextToken;
  }
}
