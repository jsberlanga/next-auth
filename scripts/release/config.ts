export const config = {
  releaseBranches: ["main"],
  // TODO: Generate dynamically
  packages: {
    "next-auth": "packages/next-auth",
    "@next-auth/dgraph-adapter": "packages/adapter-dgraph",
    "@next-auth/fauna-adapter": "packages/adapter-fauna",
    "@next-auth/mikro-orm-adapter": "packages/adapter-mikro-orm",
    "@next-auth/neo4j-adapter": "packages/adapter-neo4j",
    "@next-auth/prisma-adapter": "packages/adapter-prisma",
    "@next-auth/upstash-redis-adapter": "packages/adapter-upstash-redis",
    "@next-auth/dynamodb-adapter": "packages/adapter-dynamodb",
    "@next-auth/firebase-adapter": "packages/adapter-firebase",
    "@next-auth/mongodb-adapter": "packages/adapter-mongodb",
    "@next-auth/pouchdb-adapter": "packages/adapter-pouchdb",
    "@next-auth/sequelize-adapter": "packages/adapter-sequelize",
    "@next-auth/typeorm-legacy-adapter": "packages/adapter-typeorm-legacy",
  },
  rootDir: process.cwd(),
  BREAKING_COMMIT_MSG: "BREAKING CHANGE:",
  RELEASE_COMMIT_MSG: "chore(release): bump package version(s) [skip ci]",
  RELEASE_COMMIT_TYPES: ["feat", "fix"],
  dryRun:
    !process.env.CI ||
    !!process.env.DRY_RUN ||
    process.argv.includes("--dry-run"),
  verbose: !!process.env.VERBOSE || process.argv.includes("--verbose"),
}
