import { Type } from '@angular/core';

export interface Allroutes {
  path: string;
  title: string;
  component: Type<any>;
}
