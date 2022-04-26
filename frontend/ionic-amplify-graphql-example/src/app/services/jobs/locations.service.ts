import {Injectable} from '@angular/core';
import {APIService, SingleTable} from '../graphql/API.service';
import {Logger} from 'aws-amplify';
import {ItemTypeEnum} from '../../utils/enums/item.type.enum';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private logger = new Logger('LocationsService');
  constructor(private api: APIService) {
  }

  public async getAllLocations(): Promise<Array<SingleTable>> {
    this.logger.debug('getAllLocations() - START');
    const result: Array<SingleTable> = [];
    await this.api.GetItemByGSI(ItemTypeEnum.location).then(async data => {
      for (const item of data.items) {
        result.push(item);
      }
    });
    this.logger.debug('getAllLocations() - END');
    return result;
  }
}
