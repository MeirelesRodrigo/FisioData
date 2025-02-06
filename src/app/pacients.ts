export interface Pacients {
  id: string
  name: string,
  age: number,
  gender: string,
  department: string,
  insurance: string,
  admissionDate: Date
  dischargeDate?: Date
  dischargeStatus: string
  specialist: string
  diagnoses: string
  comorbidities: string
  mrc: string
  procedures?: string
  motorPhysiotherapy?: boolean
  respiratoryPhysiotherapy?: boolean
  oxygenTherapy?: boolean
  nonInvasiveVentilation?: boolean
  therapeuticPlan?: boolean
}
