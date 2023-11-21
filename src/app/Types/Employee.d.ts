export type Employee = Array<{
  id: string;
  ssid: string;
  firstname: string;
  mname: string;
  lname: string;
  email: string;
  birthday: string;
  mobile: string;
  country: string;
  region: string;
  branch: string;
  position: Array<{
    name: string;
    comment: string | null;
  }>;
  role: string;
  recruited_at: string;
  salary: string;
  created_at: Date;
  updated_at: Date;
}>;
