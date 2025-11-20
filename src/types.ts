export interface ICompany {
  name: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
}

export interface IJobInput {
  title: string;
  type: "Full-Time" | "Part-Time" | "Contract" | "Internship" | "Remote";
  description: string;
  location: string;
  salary: string;
  company: ICompany;
}

export interface IJob extends IJobInput {
  id: number;
}
