export interface ICompany {
  name: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
}

export interface IJob {
  id: number;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  company: ICompany;
}
