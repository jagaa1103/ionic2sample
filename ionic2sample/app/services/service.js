import {Injectable} from "angular2/core";
@Injectable()
export class MainService{

    constructor(){
        this.todos = [
            {
                "text": "Hello",
                "status": false
            },
            {
                "text": "World",
                "status": false
            },
            {
                "text": "from Jagaa",
                "status": true
            },
            {
                "text": "Ionic2",
                "status": true
            },
            {
                "text": "TodoSample",
                "status": false
            },
            {
                "text": "Sample",
                "status": false
            }
        ];
        console.log(this.todos);
    }

    getTodos(){
        return this.todos;
    }
}
