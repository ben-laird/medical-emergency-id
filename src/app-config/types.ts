export interface Condition {
	name: string;
	highPriority?: boolean;
}

export interface MedicalCondition extends Condition {
	notes?: string;
}

export interface Medication extends Condition {
	dose: string;
	frequency: string;
}

export interface Allergy extends Condition {
	kind: AllergyType;
	effects?: string;
}

export type AllergyType = "food" | "medication" | "material";

export interface MedicalEvent extends Condition {
	administeredOn: Date;
}

export interface MedicalProvider {
	name: string;
	specialty: string;
	phone?: string;
}
export interface InsuranceProvider {
	name: string;
	benefitsNumber: string;
	beneficiaryDoDId: string;
	sponserId: string;
}
