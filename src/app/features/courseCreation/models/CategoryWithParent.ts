export interface CategoryWithParent{
    id:number;
    title:string;
    containsCategories:boolean;
    parentCategoryId:number;
    subCategories?: CategoryWithParent[];
}
