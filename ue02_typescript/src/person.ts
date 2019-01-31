export class Person {
    private _vorname: string;
    private _nachname: string;
    private _geburtsjahr: number;

    // tslint:disable typedef-whitespace
    public constructor(vorname: string, nachname : string, geburtsjahr: number) {
        this._vorname = vorname;
        this._nachname = nachname;
        this._geburtsjahr = geburtsjahr;
    // tslint:enable typedef-whitespace
    }

    public get vorname(): string {
        return this._vorname;
    }
    public get nachname(): string {
        return this._nachname;
    }
    public get geburtsjahr(): number {
        return this._geburtsjahr;
    }

    public set vorname (v: string) {
        if (v === undefined || v === null || v === '') {
            throw Error ('invalid value');
        }
        this._vorname = v;
    }

    public toString(): string {
        return this._nachname + this._vorname;
    }
}
