import { Injectable } from '@angular/core';
import { DBService } from './db/db.service';
import * as mongoose from 'mongoose';

export let setAppDBServiceRoute = (app: any, dbService: DBService, apiUrl: string) => {
  app.get(apiUrl+"/:id", dbService.get);
  app.post(apiUrl, dbService.add);
  app.put(apiUrl+"/:id", dbService.update);
  app.delete(apiUrl+"/:id", dbService.delete);
}
