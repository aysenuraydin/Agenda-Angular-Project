export class Note {
  constructor(
    public id:number,
    public date: any,
    public day: string,
    public text: string,
    public isActive: boolean,
    public symbol: string,
    public noteTop:WindowNote,
    public noteBottom:WindowNote){}
}
export class WindowNote {
  constructor(
   public id:number,
   public imgUrl: string,
   public text: string,
   public color: string){ }
}
