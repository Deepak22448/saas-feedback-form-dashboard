import { relations } from "drizzle-orm";
import {
  pgTable,
  text,
  serial,
  varchar,
  integer,
  boolean,
} from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  URL: text("URL").notNull(),
  description: text("description"),
  user_id: varchar("user_id", { length: 255 }).notNull(),
});
export const projectsRelation = relations(projects, ({ many }) => ({
  feedbacks: many(feedbacks),
}));

export const feedbacks = pgTable("feedbacks", {
  id: serial("id").primaryKey(),
  projectId: integer("project_id").notNull(),
  message: text("message").notNull(),
  rating: integer("rating").notNull(),
  userName: varchar("user_name").notNull(),
  userEmail: text("user_email").notNull(),
});
export const feedbacksRelation = relations(feedbacks, ({ one }) => ({
  project: one(projects, {
    fields: [feedbacks.projectId],
    references: [projects.id],
  }),
}));

export const subscriptions = pgTable("subscriptions", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  stripeCustomerId: varchar("stripe_customer_id", { length: 255 }).notNull(),
  subscribed: boolean("subscribed").notNull().default(false),
});
