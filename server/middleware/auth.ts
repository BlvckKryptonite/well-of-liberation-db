import { defineEventHandler } from "h3";

// No auth on this public marketing site — pass through every request.
export default defineEventHandler(() => null);
