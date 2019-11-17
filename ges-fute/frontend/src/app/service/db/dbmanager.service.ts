import { Injectable } from '@angular/core';
import { AlimentoPlanoModel, AlimentoPlano } from '../../model/entity/atleta/AlimentoPlano';
import { AvaliacaoDesempenhoModel, AvaliacaoMedicaModel } from '../../model/entity/atleta/Avaliacao';
import { PlanoAlimentarModel } from '../../model/entity/atleta/PlanoAlimentar';
import { AtletaModel } from '../../model/entity/atleta/Atleta';
import { DBService } from './db.service';
import * as RouteService from '../route.service';
import constants from '../../util/constants';

@Injectable({
  providedIn: 'root'
})
export class DBManagerService {

  public AlimentoPlano: any;
  public AvaliacaoDesempenho: any;
  public AvaliacaoMedica: any;
  public PlanoAlimentar: any;
  public Atleta: any;

  constructor() {
  }
}
