export abstract class Entity {
    private _id: any;

    setId(id: any){
        this._id = id;
    }

    getId(): any{
        return this._id   
    }

    toJson():any{
        return JSON.stringify(this);
    }
}