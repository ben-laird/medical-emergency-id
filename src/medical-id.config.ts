import { defineConfig } from "./app-config/mod.ts";

export default defineConfig(() => ({
	name: "Allistar Grace Barrett",
	pronouns: "they/them/theirs",
	birthday: new Date(2003, 6, 29),
	bloodType: "A+",
	instructions:
		"Unresponsive verbally and physically during cataplectic episode. Lay on back or side to open airways. Do not use smelling salts. Trapezius Squeeze can occasionally return responsitivity.",
	meds: [
		{
			name: "Fluoxetine",
			dose: "40mg",
			frequency: "1/day",
			highPriority: true,
		},
	],
	conditions: [
		{ name: "Cataplexy", highPriority: true },
		{ name: "Generalized Anxiety", highPriority: true },
		{ name: "Depression" },
		{ name: "Attention Deficit Disorder" },
	],
	allergies: [
		{
			kind: "material",
			name: "Liquid Latex",
			effects: "skin irritation, rash",
		},
		{
			kind: "food",
			name: "Pomegranates",
			effects: "anaphylaxis",
		},
		{
			kind: "food",
			name: "Peaches",
			effects: "mouth irritation, sore throat, runny nose",
		},
		{
			kind: "material",
			name: "Pollen",
			effects: "runny nose, skin irritation, rash",
		},
	],
	surgeries: [
		{ name: "Wisdom tooth extraction", administeredOn: new Date(2019, 1, 1) },
	],
	vaccinations: [{ name: "tetanus", administeredOn: new Date(2003, 1, 1) }],
	providers: [{ name: "mike", specialty: "health", phone: "(910)000-0000" }],
	insurance: [
		{
			name: "TRICare East - Humana",
			benefitsNumber: "06282103-04",
			beneficiaryDoDId: "1362732596",
			sponserId: "1161321105",
		},
	],
}));
