export class Category{
    id:number;
    category:string;
    parentId:number;
    category_media:string;

    constructor(id,category,parentId,category_media){
        this.id = id;
        this.category = category;
        this.parentId = parentId;
        this.category_media =category_media;
    }
}