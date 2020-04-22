import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OrderComponent } from './order.component';

export class LeaveGuard implements CanDeactivate<OrderComponent> {

  canDeactivate(orderComponent: OrderComponent, activatedRout: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): boolean {
    if (!orderComponent.isOrderCompleted()) {
      return window.confirm('Deseja desistir da compra?')
    } else {
      return true;
    }

                }

}
