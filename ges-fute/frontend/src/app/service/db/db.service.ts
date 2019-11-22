import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { APICommunicatorService } from './apicommunicator.service';
import { Entity } from 'src/app/model/entity';

@Injectable({
    providedIn: 'root'
  })
export class DBService<T extends Entity> {
    private apiCommunicatorService: APICommunicatorService<T>;
    public registers: T[];

    constructor(private http: Http, private REQUEST_URL: string) {
        this.assemble();
    }

    private assemble(): void {
        this.apiCommunicatorService = new APICommunicatorService<T>(this.http);
        this.getAllRegisters();
    }

    public async getAllRegisters() {
        let observer = await this.apiCommunicatorService.getDataCollection(this.REQUEST_URL);
        await observer.subscribe((data: T[]) => {
            this.registers =  data;
        });
        return observer;
    }

    public async getRegister(id: string): Promise<T> {
        let register: T;
        let observer = await this.apiCommunicatorService.getData(this.REQUEST_URL + "/" + id);
        await observer.subscribe((data: T) => {
            register = data
        });
        return register;
    }

    public createRegister(register: T) {
        this.apiCommunicatorService.create(register, this.REQUEST_URL);
        this.getAllRegisters();
    }

    public findById(id: any): T {
        let register;
        if (this.registers && this.registers.length > 0) {
            register = this.registers.find((u) => u.getId() == id);
        }
        return register;
    }
}
