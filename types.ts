export type TypeLanguages = 'fi' | 'ru';
export type TypeUIicons =
  "clubs"
  | "camps"
  | "masters"
  | "courses"
  | "festivals"
  | "celebrations"
  | "concerts"
  | "travels"
  | "projects"
  | "useful"
  | "parents"
  | "pen"
  | "payments";

type TypeIconsToSlug = Omit<TypeUIicons, "pen">

export type TypeSlugs =
  "blank-hobby"
  | "blank-camp"
  | "blank-membership"
  | "payments"
  | TypeIconsToSlug;

export interface ISubMenu {
  iconBorder: "cookie" | "list";
  icon: TypeUIicons;
  slug: TypeSlugs;
  hrefName: string;
  hrefDesc: string;
}
