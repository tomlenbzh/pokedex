import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor() { }

  // Checks if subscription exists
  public checkSubscriptions(subscriptions: Subscription[]): Subscription[] {
    return subscriptions.map(x => {
      if (x !== undefined) {
        return x;
      }
    });
  }

  // Unsubscribes an array of subscriptions
  public unsubscribeAll(subscriptions: Subscription[]): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const promises: Promise<any>[] = [];
      subscriptions.forEach(element => {
        const subPromise = new Promise((resolveSub, rejectSub) => {
          element.unsubscribe();
          resolveSub();
        });
        promises.push(subPromise);
      });
      Promise.all(promises)
        .then(() => {
          resolve();
        })
        .catch(error => {
          console.log('ERROR: unsubscribeAll', error);
          reject();
        });
    });
  }
}
