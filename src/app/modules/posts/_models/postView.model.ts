import { PostInterface } from "./postInterface.model";

export class PostVM {
    myChoiceId!: number;
    id!:     number;
    title!:  string;
    body!:   string;
    isActive!: boolean;
    constructor() {}
    init(data: PostInterface) {
        this.myChoiceId = data.userId;
        this.id = data.id;
        this.title = data.title;
        this.body = data.body; 
        if (this.id % 2) {
            this.isActive = true;
        } else {
            this.isActive = false;
        }
    }
}


// **USE FOR OBJECT TYPE
// export class PostVM {
//     userId: number;
//     id:     number;
//     title:  string;
//     body:   string;
//     constructor(data: PostInterface) {
//         this.userId = data.userId;
//         this.id = data.id;
//         this.title = data.title;
//         this.body = data.body;
//     }
// }