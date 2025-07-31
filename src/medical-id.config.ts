import { defineConfig } from "./app-config/mod.ts";

export default defineConfig(() => ({
	name: "Allistar Grace Barrett",
	pronouns: "they/them/theirs",
	birthday: new Date(2003, 6, 29),
	bloodType: "A+",
	instructions:
		"Has non-epileptic seizures, becoming unresponsive verbally and physically. This is NOT a medical emergency. Only contact emergency services if the seizure has lasted more than 45 minutes or if other injuries were sustained. Do not use smelling salts. Trapezius Squeeze can occasionally return responsitivity.",
	meds: [
		{
			name: "Fluoxetine",
			dose: "40mg",
			frequency: "1/day",
			highPriority: true,
		},
	],
	conditions: [
		{ name: "Functional Neurological Disorder", highPriority: true },
		{ name: "Non-Epileptic Seizures (PNES)", highPriority: true },
		{ name: "Generalized Anxiety", highPriority: true },
		{ name: "Persistent Depressive Disorder" },
		{ name: "Avoidant Restrictive Food Intake Disorder (ARFID)" },
	],
	allergies: [
		{
			kind: "food",
			name: "Pomegranates",
			effects: "anaphylaxis",
		},
	
	],
	surgeries: [
		{ name: "Wisdom tooth extraction", administeredOn: new Date(2019, 10, 11) },
	],
	vaccinations: [{ name: "tetanus", administeredOn: new Date(2003, 1, 1) }],
	providers: [{ name: "N/A", specialty: "N/A", phone: "(000)000-0000" }],
	insurance: [
		{
			name: "TRICare East - Humana",
			benefitsNumber: "06282103-04",
			beneficiaryDoDId: "1362732596",
			sponserId: "1161321105",
		},
	],
}));
