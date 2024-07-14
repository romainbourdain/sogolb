// "https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
// model User {
//     id            String          @id @default(cuid())
//     name          String?
//     email         String          @unique
//     emailVerified DateTime?
//     image         String?
//     accounts      Account[]
//     sessions      Session[]
//     // Optional for WebAuthn support
//     Authenticator Authenticator[]
//     articles      Article[]
//     comments      Comment[]
//     roles         Role[]
//     badges        Badge[]
//     bookmarks     Bookmark[]
//     reactions     Reaction[]

//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
//   }

export const fake_profile = {
  name: "John Doe 🐣",
  userName: "john.doe",
  email: "john.doe@test.com",
  image: "https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John",
  banner:
    "https://images.unsplash.com/photo-1718103377026-df9e40c78141?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  accounts: [],
  sessions: [],
  Authenticator: [],
  articles: [],
  comments: [],
  roles: [],
  badges: [],
  bookmarks: [],
  reactions: [],
  createdAt: "2021-09-09T15:13:03.000Z",
  updatedAt: "2021-09-09T15:13:03.000Z",
};
