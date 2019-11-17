import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { IJsonGenerator } from '../../model/ijson-generator';
import constants from 'src/app/util/constants';
import { APICommunicatorService } from './apicommunicator.service';

@Injectable({
    providedIn: 'root'
  })
export class DBService<T extends IJsonGenerator> {
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
        const body = this.buildCreateBody(register);
        this.http.post(this.REQUEST_URL, body);
        this.getAllRegisters();
    }

    //TODO: Deixar em uma classe de serviço para a entidade
    private buildCreateBody(register: T) {
        //const comments = this.getPostComments(register.comments);
        // const body = {
        //     "title": post.title,
        //     "link": post.link,
        //     "date": post.date,
        //     "votes": post.votes,
        //     "description": post.description,
        //     "_author": post._author,
        //     "comments": comments
        // };

        //return body;
    }

    //Exemplo de método específico de entidade
    // private getPostComments(comments: Comment[]) {
    //     let commentsIds = [];
    //     comments.forEach((comment) => {
    //         commentsIds.push(comment._id);
    //     });

    //     return commentsIds;
    // }

    public find(title: String): T {
        let register;

        if (this.registers && this.registers.length > 0) {
            //user = this.registers.find((u) => u.title == title);
        }

        return register;
    }

    public findById(id: any): T {
        let register;

        if (this.registers && this.registers.length > 0) {
            //Definir interface para entidades, onde sempre vai ter _id
            //register = this.registers.find((u) => u._id == id);
        }

        return register;
    }
}
