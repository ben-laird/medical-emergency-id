import type {
	Allergy,
	Condition,
	InsuranceProvider,
	MedicalCondition,
	MedicalEvent,
	MedicalProvider,
	Medication,
} from "./types.ts";

export function defineConfig(
	config: (env: ConfigEnv) => Potential<ConfigDefinition>,
): () => Promise<MedicalConfig> {
	return async () => {
		const initialConfig = createInitialConfig();

		const resolvedConfig = await config({ initialConfig });

		const {
			name,
			pronouns,
			birthday,
			bloodType,
			instructions,

			conditions,
			meds,
			allergies,
			surgeries,
			vaccinations,
			providers,
			insurance,

			dateTimeFormat,
		} = { ...initialConfig, ...resolvedConfig };

		return {
			name,
			pronouns,
			birthday,
			bloodType,
			instructions,
			notableConditions: resolveNotableConditions([
				conditions,
				meds,
				allergies,
				surgeries,
				vaccinations,
			]),
			conditions,
			meds,
			allergies,
			surgeries,
			vaccinations,
			providers,
			insurance,
			dateTimeFormatter: new Intl.DateTimeFormat(undefined, dateTimeFormat),
		};
	};
}

function createInitialConfig(): InitialConfigDefinition {
	return {
		name: "John Doe",
		pronouns: "None specified",
		birthday: new Date(),
		bloodType: "None specified",
		instructions: "None specified",

		conditions: [],
		meds: [],
		allergies: [],
		surgeries: [],
		vaccinations: [],
		providers: [],
		insurance: [],

		dateTimeFormat: {
			dateStyle: "short",
		},
	};
}

function resolveNotableConditions(
	conditionLists: (
		| MedicalCondition[]
		| Medication[]
		| Allergy[]
		| MedicalEvent[]
	)[],
): Condition[] {
	const allConditions = conditionLists.flatMap((el) => {
		return el.map(({ name, highPriority }): Condition => {
			return { name, highPriority };
		});
	});

	return allConditions.filter(({ highPriority }) => highPriority);
}

export interface InitialConfigDefinition {
	name: string;
	birthday: Date;
	pronouns: string;
	bloodType: string;

	instructions: string;
	conditions: MedicalCondition[];
	meds: Medication[];
	allergies: Allergy[];
	surgeries: MedicalEvent[];
	vaccinations: MedicalEvent[];
	providers: MedicalProvider[];
	insurance: InsuranceProvider[];

	dateTimeFormat: Intl.DateTimeFormatOptions;
}

export interface ConfigDefinition {
	name?: string;
	birthday?: Date;
	pronouns?: string;
	bloodType?: string;

	instructions?: string;
	conditions?: MedicalCondition[];
	meds?: Medication[];
	allergies?: Allergy[];
	surgeries?: MedicalEvent[];
	vaccinations?: MedicalEvent[];
	providers?: MedicalProvider[];
	insurance?: InsuranceProvider[];

	dateTimeFormat?: Intl.DateTimeFormatOptions;
}

export interface ConfigEnv {
	initialConfig: InitialConfigDefinition;
}

export interface MedicalConfig {
	name: string;
	birthday: Date;
	pronouns: string;
	bloodType: string;

	instructions: string;
	notableConditions: Condition[];
	conditions: MedicalCondition[];
	meds: Medication[];
	allergies: Allergy[];
	surgeries: MedicalEvent[];
	vaccinations: MedicalEvent[];
	providers: MedicalProvider[];
	insurance: InsuranceProvider[];

	dateTimeFormatter: Intl.DateTimeFormat;
}

type Potential<T> = T | Promise<T>;
