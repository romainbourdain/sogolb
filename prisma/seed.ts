import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const userEmail = "loisgallaud@hotmail.com";

  // Créez le badge séparément
  const badge1 = await prisma.badge.create({
    data: {
      name: "badge1",
      image: "https://api.dicebear.com/8.x/lorelei-neutral/png?seed=John",
    },
  });

  const badge2 = await prisma.badge.create({
    data: {
      name: "badge2",
      image: "https://api.dicebear.com/8.x/lorelei-neutral/png?seed=Jane",
    },
  });

  console.log("Badges créés:", badge1, badge2);

  // Vérifiez si l'utilisateur existe déjà
  const existingUser = await prisma.user.findUnique({
    where: { email: userEmail },
    include: { badges: true },
  });

  console.log("L'utilisateur existe déjà:", existingUser);

  // Ajoutez les badges à l'utilisateur existant
  const updatedUser = await prisma.user.update({
    where: { email: userEmail },
    data: {
      badges: {
        connect: [{ id: badge1.id }, { id: badge2.id }],
      },
    },
    include: { badges: true },
  });
  console.log("Utilisateur mis à jour avec le badge:", updatedUser);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Erreur lors du seeding:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
