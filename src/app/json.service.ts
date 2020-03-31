import { Injectable } from '@angular/core';

export class Json {}

let data = [{"products":[{"name":"car","product":[{"name":"honda","model":[{"id":"civic","name":"civic"},{"id":"accord","name":"accord"},{"id":"crv","name":"crv"},{"id":"pilot","name":"pilot"},{"id":"odyssey","name":"odyssey"}]}]}]}]

@Injectable()
export class Service {
    getData(): Array<any> {
        return data;
    }
}
