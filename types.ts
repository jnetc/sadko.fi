import type { RichTextField } from "@prismicio/client";

export type TypeLanguages = 'fi' | 'ru';

export type TypeUIIcons =
  "email"
  | "phone"
  | "facebook"
  | "instagram"
  | "whatsapp"
  | "location"
  | "send"
  | "circle_add"
  | "circle_subtract"
  | "circle_cancel"
  | "circle_help"
  | "check"
  | "arrow"
  | "arrow_outward"
  | "arrow_forward"
  | "arrow_drop_down"
  | "info_i"
  | "download"
  | "add"
  | "close"
  | "close_small"
  | "menu";

export type TypeUIActivityIcons =
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

type TypeBlanks = "blank-hobby" | "blank-camp" | "blank-membership";

export type TypeUICardShapes =
  "shape01"
  | "shape02"
  | "shape03"
  | "shape04"
  | "shape05"
  | "shape06"
  | "shape07"
  | "shape08"
  | "shape09"
  | "shape10"
  | "shape11"
  | "shape12"
  | "shape13"

export type TypeUIPageShapes =
  "page_stroke_01"
  | "page_stroke_02"
  | "page_arrow_shot"
  | "page_arrow_long"

interface LangRouteName {
  ru: string;
  fi: string;
}

export interface ISubMenu {
  iconBorder: "cookie" | "list";
  icon: TypeUIActivityIcons | "pen";
  slug: TypeUIActivityIcons | TypeBlanks;
  hrefName: LangRouteName;
  hrefDesc: LangRouteName;
}


// INDEX.HTML
export type HeadingTextType = {
  heading: string;
  text: string;
}

export type HrefType = {
  url: string;
}

export interface ISlug {
  slug: HrefType
}

export type LabelType = {
  label: string;
}

export type ImageType = {
  dimensions: {
    width: number;
    height: number;
  }
  alt: string;
  url: string;
}

export type PrimaryButtonType = {
  primary_button: string;
  primary_href: HrefType;
}

export type SecondaryButtonType = {
  secondary_button: string;
  secondary_href: HrefType;
}


/* PRIMARY TYPE */
export interface PrimaryType extends HeadingTextType, ISlug {
  label?: string;
  primary_button?: string;
  primary_href?: HrefType;
  secondary_button?: string;
  secondary_href?: HrefType;
}

// export interface PrimaryType extends HeadingTextType, LabelType, PrimaryButtonType, SecondaryButtonType { }
// export interface PrimaryWithPrimaryBtnType extends HeadingTextType, PrimaryButtonType { }
// export interface PrimaryWithSecondatyBtnType extends HeadingTextType, SecondaryButtonType { }



/* FIELDS TYPE */

export interface FieldsOnlyImageType extends ISlug {
  image: ImageType;
}

export interface FieldsWithImageType extends HeadingTextType, FieldsOnlyImageType { }

export interface FieldsWithIconType extends HeadingTextType, ISlug {
  icon: TypeUIIcons;
}

export interface FieldsAmountType {
  text: string;
  amount: number
}

export interface FieldsFaqType {
  question: string;
  answer: RichTextField;
}

/* SLICES */
export type SliceType = "hero" | "activities" | "welcome" | "offer" | "gallery" | "teachers" | "faq" | "feedbacks"

export interface IBodyWithItems {
  primary: PrimaryType ;
  items: Array<HeadingTextType | FieldsWithImageType | FieldsOnlyImageType | FieldsWithIconType | FieldsAmountType| FieldsFaqType>;
  slice_type: SliceType;
}

export interface IBodyWithoutItems {
  primary: PrimaryType;
  slice_type: SliceType;
}


export interface IIndex {
  body: Array<IBodyWithItems | IBodyWithoutItems>;
  title: string;
  description: string;
}
