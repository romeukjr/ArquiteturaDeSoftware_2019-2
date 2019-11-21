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
import { Duvida, Problema, Denuncia } from '../../model/entity/ouvidoria/Ouvidoria';
import { DBService } from './db.service';



import constants from '../../util/constants';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DBManagerService {

  public AlimentoPlano: DBService<AlimentoPlano>;
  public AvaliacaoDesempenho: DBService<AvaliacaoMedica>;
  public AvaliacaoMedica: DBService<AvaliacaoDesempenho>;
  public PlanoAlimentar: DBService<PlanoAlimentar>;
  public Atleta: DBService<Atleta>;
  
  public Usuario: DBService<Usuario>;
  
  public Partida: DBService<Partida>;
  public IngressoPartida: DBService<IngressoPartida>;

  public Advogado: DBService<Advogado>;
  public Contrato: DBService<Contrato>;

  public Duvida: DBService<Duvida>;
  public Problema: DBService<Problema>;
  public Denuncia: DBService<Denuncia>;

  constructor(private http: Http) {
  }
}
