import moralsRaw from "@/data/morals.json";
import systemsRaw from "@/data/systems.json";
export type Moral = (typeof moralsRaw)[number];
export type System = (typeof systemsRaw)[number];
export const morals = moralsRaw as Moral[];
export const systems = systemsRaw as System[];
export const religious = systems.filter(s=>s.class==="Religious");
export const nonreligious = systems.filter(s=>s.class!=="Religious");
export function moralBySlug(slug:string){ return morals.find(m=>m.slug===slug); }
export function systemBySlug(slug:string){ return systems.find(s=>s.slug===slug); }
export const categories = [...new Set(morals.map(m=>m.category))].sort();