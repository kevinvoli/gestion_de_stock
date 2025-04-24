export const RequestData = class{
  service : string;
  module :string;
  constructor(serviceName:string,moduleName:string){
    this.module = moduleName,
    this.service=serviceName
  }
    endpoint={
      GET: (()=>`gateway?service=${this.service}&module=${this.module}`),
      POST: (()=>`gateway/create?service=${this.service}&module=${this.module}`),
      PAtCH: ((id:string)=>`gateway/${id}?service=${this.service}&module=${this.module}`),
      DELETE: ((id:string)=>`gateway/${id}?service=${this.service}&module=${this.module}`),
      GETONE: ((id:string)=>`gateway/${id}?service=${this.service}&module=${this.module}`)
    }
  
}


