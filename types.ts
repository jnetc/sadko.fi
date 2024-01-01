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
  | "payments"
  | "about"
  | "teachers"
  | "membership"
  | "galleria"
  | "info";

type TypeBlanks = "blank-hobby"  | "blank-camp"  | "blank-membership";

interface LangRouteName {
  ru: string;
  fi: string;
}

export interface ISubMenu {
  iconBorder: "cookie" | "list";
  icon: TypeUIicons | "pen";
  slug: TypeUIicons | TypeBlanks;
  hrefName: LangRouteName;
  hrefDesc: LangRouteName;
}
