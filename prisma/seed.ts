import { PrismaClient } from "@prisma/client";
import {
  addDays,
  eachDayOfInterval,
  isSunday,
  nextSunday,
  startOfMonth,
  subMonths,
} from "date-fns";

const defaultBanner =
  "https://images.unsplash.com/photo-1552265129-2ac1a82da59e?q=80&w=3873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const bio = "Cocorico, je suis un albatros. ".repeat(10);
const prisma = new PrismaClient();

const createFakeUser = async () => {
  await prisma.user.create({
    data: {
      id: "1",
      name: "Lois Gallaud",
      email: "loisgallaud@test.com",
      image: "https://api.dicebear.com/8.x/lorelei-neutral/png?seed=John",
      banner: defaultBanner,
      bio: bio,
      badges: {
        connect: [
          {
            id: "6",
          },
          {
            id: "1",
          },
        ],
      },
    },
  });
};

const createFakeActivity = async () => {
  const getFirstSunday = (date: Date) => {
    const start = startOfMonth(date);
    if (isSunday(start)) return start;
    return nextSunday(start);
  };

  const start = getFirstSunday(startOfMonth(subMonths(new Date(), 4)));
  const end = new Date(); // end = now

  const days = eachDayOfInterval({
    start: addDays(start, 1),
    end,
  });

  // Génère les données d'activité
  const userActivity = days.map((day, i) => ({
    id: i.toString(),
    date: day,
    count: Math.floor(Math.random() * 10),
    userId: "1",
  }));

  // Insertion dans la base de données
  await prisma.activity.createMany({
    data: userActivity,
  });
};

const createFakeBadges = async () => {
  await prisma.badge.createMany({
    data: [
      {
        id: "1",
        name: "Rejoint depuis mars 2024",
        image: "/images/kiwi.svg",
      },
      {
        id: "2",
        name: "Rédacteur",
        image: "/images/writer.svg",
      },
      {
        id: "3",
        name: "Python",
        image: "/images/python.svg",
      },
      {
        id: "4",
        name: "Admin",
        image: "/images/admin.svg",
      },
      {
        id: "5",
        name: "Développeur web",
        image: "/images/web.svg",
      },
      {
        id: "6",
        name: "Docker",
        image: "/images/docker.svg",
      },
      {
        id: "7",
        name: "Rust",
        image: "/images/rs.svg",
      },
    ],
  });
};

const createFakeEvents = async () => {
  await prisma.event.createMany({
    data: [
      {
        id: "1",
        action: "a écrit un article",
        description:
          "L'utilisateur a publié un nouvel article sur le développement web moderne.",
        type: "major",
        userId: "1",
      },
      {
        id: "2",
        action: "a commenté",
        description:
          "L'utilisateur a commenté sur l'article 'Les meilleures pratiques de JavaScript'.",
        type: "minor",
        userId: "1",
      },
      {
        id: "3",
        action: "a fini une leçon",
        description:
          "L'utilisateur a complété la leçon 'Introduction à React'.",
        type: "major",
        userId: "1",
      },
      {
        id: "4",
        action: "a aimé un article",
        description:
          "L'utilisateur a aimé l'article 'CSS avancé : Flexbox et Grid'.",
        type: "minor",
        userId: "1",
      },
      {
        id: "5",
        action: "a répondu à un commentaire",
        description:
          "L'utilisateur a répondu à un commentaire sur l'article 'Node.js pour les débutants'.",
        type: "minor",
        userId: "1",
      },
    ],
  });
};

async function main() {
  // Delete all data
  await prisma.user.deleteMany();
  await prisma.event.deleteMany();
  await prisma.activity.deleteMany();
  await prisma.badge.deleteMany();

  // Populate with fake data
  await createFakeBadges();
  await createFakeUser();
  await createFakeEvents();
  await createFakeActivity();
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
