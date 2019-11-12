import { Injectable } from '@angular/core';

@Injectable()
export class Score {
    total: number;
    hit: number;
    fail: number;
}