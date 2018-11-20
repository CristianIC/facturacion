import { bypassSanitizationTrustResourceUrl } from "@angular/core/src/sanitization/bypass";

export interface IPerson {
  id: number,
  name: string,
  email: string,
  password: string
  city: string,
  statusUser: number
}