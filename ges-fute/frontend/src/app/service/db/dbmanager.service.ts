import { Injectable } from '@angular/core';
import { AlimentoPlano } from '../../model/entity/atleta/AlimentoPlano';
import { AvaliacaoMedica, AvaliacaoDesempenho } from '../../model/entity/atleta/Avaliacao';
import { PlanoAlimentar } from '../../model/entity/atleta/PlanoAlimentar';
import { Atleta } from '../../model/entity/atleta/Atleta';
import { Usuario } from '../../model/entity/Usuario';
import { Partida } from '../../model/entity/ingressos/Partida';
import { IngressoPartida } from '../../model/entity/ingressos/IngressoPartida';
import { Advogado } from '../../model/entity/juridico/Advogado';
import { Contrato } from '../../model/entity/juridico/Contrato';
import { Chamado } from '../../model/entity/ouvidoria/Ouvidoria';
import { DBService } from './db.service';


import constants from '../../util/constants';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DBManagerService {

  public alimentoPlano: DBService<AlimentoPlano>;
  public avaliacaoDesempenho: DBService<AvaliacaoMedica>;
  public avaliacaoMedica: DBService<AvaliacaoDesempenho>;
  public planoAlimentar: DBService<PlanoAlimentar>;
  public atleta: DBService<Atleta>;
  
  public usuario: DBService<Usuario>;
  
  public partida: DBService<Partida>;
  public ingressoPartida: DBService<IngressoPartida>;

  public advogado: DBService<Advogado>;
  public contrato: DBService<Contrato>;

  public chamado: DBService<Chamado>;

  constructor(private http: Http) {
    this.alimentoPlano = new DBService<AlimentoPlano>(http, constants.API.ALIMENTO_PLANO);
    this.avaliacaoDesempenho = new DBService<AvaliacaoMedica>(http, constants.API.AVALIACAO_DESEMPENHO);
    this.avaliacaoMedica = new DBService<AvaliacaoDesempenho>(http, constants.API.AVALIACAO_MEDICA);
    this.planoAlimentar = new DBService<PlanoAlimentar>(http, constants.API.PLANO_ALIMENTO);
    this.atleta = new DBService<Atleta>(http, constants.API.ATLETA);
    
    this.usuario = new DBService<Usuario>(http, constants.API.USUARIO);
    
    this.partida = new DBService<Partida>(http, constants.API.PARTIDA);
    this.ingressoPartida = new DBService<IngressoPartida>(http, constants.API.INGRESSO_PARTIDA);

    this.advogado = new DBService<Advogado>(http, constants.API.ADVOGADO);
    this.contrato = new DBService<Contrato>(http, constants.API.CONTRATO);

    this.chamado = new DBService<Chamado>(http, constants.API.OUVIDORIA);
  }
}
