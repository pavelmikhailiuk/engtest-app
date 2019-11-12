import Record from './Record';
import { Injectable } from '@angular/core';

@Injectable()
export class RecordsHolder {
    records: Record[];
}