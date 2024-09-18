export interface Field {
    id: number;
    formName: string;
    title: string;
    type: string;
    placeholder: string;
    value: string;
    multipleFields?: Field[]; 
  }
  
  export interface Card {
    title: string;
    colQty: string;
    fields: Field[];
    title2?: string;
    fields2?: Field[];
  }
  
  export interface Section {
    sectionName: string;
    fields?: Field[];
    cards?: Card[];
  }
  
  export interface Tab {
    id: number;
    tabName: string;
    value: string;
    section: Section[];
  }
  
  export interface Button {
    id: number;
    title: string;
    type: string;
  }
  
  export interface FormData {
    formTitle: string;
    description: string;
    tabs: Tab[];
    buttons: Button[];
  }

  export interface FormList {
    name: any;
    type: any;
  }