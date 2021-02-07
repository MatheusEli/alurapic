import { Component, Input } from '@angular/core';
import { Alert, AlertType } from './alert';
import { AlertService } from './alert.service';

@Component({
  selector: 'ap-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent {
  @Input() timeout = 3000;
  alerts: Alert[] = [];

  constructor(private alertService: AlertService) {
    this.alertService.getAlert().subscribe(alert => {
      if (!alert) {
        this.alerts = [];
        return;
      }
      this.alerts.push(alert);
      setTimeout(() => this.removeAlert(alert), this.timeout);
    });
  }

  removeAlert(alertARemover: Alert): void {
    this.alerts = this.alerts.filter((alert) => alert != alertARemover);
  }

  getAlertClass(alert: Alert): string {
    if (!alert) return '';
    switch (alert.alertType) {
      case AlertType.SUCCESS:
        return 'alert alert-success';
        break;

      case AlertType.WARNING:
        return 'alert alert-warning';
        break;

      case AlertType.DANGER:
        return 'alert alert-danger';
        break;

      case AlertType.INFO:
        return 'alert alert-info';
        break;
    }
  }
}
