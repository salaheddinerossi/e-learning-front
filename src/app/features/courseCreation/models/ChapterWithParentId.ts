export interface ChapterWithParentId{
  id:number | null;
  title:string;
  parentId:number|null;
  containsChapters:boolean;
}
