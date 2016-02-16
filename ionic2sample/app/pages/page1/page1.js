import {Page} from 'ionic/ionic';
import {MainService} from '../../services/service'

@Page({
  templateUrl: 'build/pages/page1/page1.html',
  providers: [MainService]
})

export class Page1 {
    constructor(data: MainService) {
        console.log("Page1");
        console.log(data.getTodos());
        this.todos = data.getTodos();
    }
}
