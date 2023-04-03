import {CollaboratorItemType} from './type'

export const filterData = (query: any, data: CollaboratorItemType[]) => {
    if (!query) {
      return data;
    } else {
      return data.filter((d: any) => d.name.toLowerCase().includes(query));
    }
  };