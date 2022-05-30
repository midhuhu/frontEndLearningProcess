

class User {
    id:number;
    name:string;
    constructor(id:number,name:string) {
        this.id=id;
        this.name=name;
        console.log("构造函数")
    }
    posArticle(title:string,content:string){
        console.log(`零零落落${title}`)
    }
}



let user1 = new User(1,"bob");

user1.posArticle("sdfs","dfsd")
