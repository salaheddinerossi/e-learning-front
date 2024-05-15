export interface CategoryWithParent{
    id:number|null;
    title:string;
    containsCategories:boolean;
    parentCategoryId:number|null;
    description?:string;
    subCategories?: CategoryWithParent[];
}
