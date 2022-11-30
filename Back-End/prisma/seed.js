const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

const createPassHash = (password) => {
	const result = bcrypt.hashSync(password, 10);
	return result;
};

async function seed() {
	const admin = await prisma.user_Type.create({
		data: {
			user_type_name: "Admin",
		},
	});
	const candidate = await prisma.user_Type.create({
		data: {
			user_type_name: "Candidate",
		},
	});
	const recruiter = await prisma.user_Type.create({
		data: {
			user_type_name: "Recruiter",
		},
	});
	await prisma.user_Account.create({
		data: {
			username: "admin",
			password: createPassHash("admin"),
			is_active: true,
			is_delete: false,
			// user_type_id : user_type.user_type_id,
			user_type: {
				connect: {
					id: Number(admin.id),
				},
			},
			// user_type:
			// user_type_id: Number(admin.id),
		},
	});

	await prisma.user_Account.create({
		data: {
			username: "candidate",
			password: createPassHash("candidate"),
			is_active: true,
			is_delete: false,
			// user_type_id : user_type.user_type_id,
			user_type: {
				connect: {
					id: Number(candidate.id),
				},
			},
			// user_type:
			// user_type_id: Number(candidate.id),
		},
	});

	await prisma.user_Account.create({
		data: {
			username: "recruiter",
			password: createPassHash("recruiter"),
			is_active: true,
			is_delete: false,
			// user_type_id : user_type.user_type_id,
			user_type: {
				connect: {
					id: Number(recruiter.id),
				},
			},
		},
	});
}
seed()
	.then(async () => {
		console.log("Seeding done!");
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
