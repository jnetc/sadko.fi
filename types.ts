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
  | "rules_and_payments"
  | "blanks"
  | "about"
  | "teachers"
  | "membership"
  | "gallery"
  | "info"
  | "feedbacks";

// type TypeBlanks = "blank-hobby" | "blank-camp" | "blank-membership";
// type TypeBlanks = "blank-hobby" | "blank-camp" | "blank-membership";

export type TypePage = "page_masters" | "page_camps" | "page_festivals" | "page_concerts" | "page_projects" | "page_parents" | "page_clubs" | "page_courses" | "page_travels" | "page_celebrations" | "page_concerts" | "page_usefuls" | "page_articles";


export type Pages = "home" |  TypeUIActivityIcons | TypePage | "articles" | "schedule" | "blanks" | "page_feedbacks" | "page_teachers" | "teacher" | "article" | "camp" | "club" | "master"
  | "course"
  | "festival"
  | "celebration"
  | "concert"
  | "travel"
  | "project"
  | "useful"
  | "parent";
export type Relationship = "home" | TypeUIActivityIcons | "articles" | "teacher" | "feedbacks" | "feedback";

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
  slug: TypeUIActivityIcons;
  hrefName: LangRouteName;
  hrefDesc: LangRouteName;
}


// COMMON TYPES
export type SEOType = {
  seo_title: string;
  seo_description: string;
}
export type HeadingTextType = {
  heading: string;
  text: string;
}

export type TitleDescriptionType = {
  title: string;
  description: string;
}

export type HrefType = {
  url: string;
  target: "" | "_blank"
}

export type SlugType = {
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
// export interface PrimaryType extends HeadingTextType, SlugType, PrimaryButtonType, SecondaryButtonType {
//   label?: string;
//   // primary_button?: string;
//   // primary_href?: HrefType;
//   // secondary_button?: string;
//   // secondary_href?: HrefType;
// }

// export interface PrimaryGalleryType extends HeadingTextType, SecondaryButtonType {
//   image_pc: ImageType;
//   image_mob: ImageType;
// }

// export interface PrimaryType extends HeadingTextType, LabelType, PrimaryButtonType, SecondaryButtonType { }
// export interface PrimaryWithPrimaryBtnType extends HeadingTextType, PrimaryButtonType { }
// export interface PrimaryWithSecondatyBtnType extends HeadingTextType, SecondaryButtonType { }



/* FIELDS TYPE */

// export interface FieldsOnlyImageType extends SlugType {
//   image: ImageType;
// }

// export interface FieldsWithImageType extends HeadingTextType, FieldsOnlyImageType { }

// export interface FieldsWithIconType extends HeadingTextType, SlugType {
//   icon: TypeUIIcons;
// }


// export interface FieldsAmountType {
//   text: string;
//   amount: number
// }

// export interface FieldsFaqType {
//   question: string;
//   answer: RichTextField;
// }

/* SLICES */
export type SliceType = "hero" | "activities" | "welcome" | "offer" | "gallery" | "teachers" | "faq" | "feedbacks"

// export interface IBodyWithItems {
//   primary: PrimaryType | PrimaryGalleryType;
//   items: Array<HeadingTextType | FieldsWithImageType | FieldsOnlyImageType | FieldsWithIconType | FieldsAmountType| FieldsFaqType>;
//   slice_type: SliceType;
// }

// export interface IBodyWithoutItems {
//   primary: PrimaryType;
//   slice_type: SliceType;
// }


// export interface IIndex {
//   body: Array<IBodyWithItems | IBodyWithoutItems>;
//   title: string;
//   description: string;
// }

export interface IIndex extends SEOType {
  body: Array<HomeBodyHero | HomeBodyActivities | HomeBodyWelcome | HomeBodyOffer | HomeBodyGallery | HomeBodyTeachers | HomeBodyFaq | HomeBodyFeedbacks>;
  // title: string;
  // description: string;
}

export interface HomeBodyHero {
  slice_type: 'hero';
  primary: PrimaryButtonType & SecondaryButtonType & HeadingTextType & LabelType;
}

export interface HomeBodyActivities {
  slice_type: 'activities';
  primary: HeadingTextType;
  items: Array<HeadingTextType & SlugType & {icon: TypeUIIcons}>;
}

export interface HomeBodyWelcome {
  slice_type:  'welcome';
  primary: SecondaryButtonType & HeadingTextType;
  items: Array<{text: string;  amount: number}>;
}

export interface HomeBodyOffer {
  slice_type: 'offer';
  primary: PrimaryButtonType & HeadingTextType;
}

export interface HomeBodyGallery {
  slice_type: 'gallery';
  primary: SecondaryButtonType & {image_pc: ImageType; image_mob: ImageType};
}

export interface HomeBodyTeachers {
  slice_type:  'teachers';
  primary: HeadingTextType;
  items: Array<HeadingTextType & SlugType & {image: ImageType}>;
}
export interface HomeBodyFaq {
  slice_type: 'faq';
  primary: HeadingTextType;
  items: Array<{question: string;  answer: RichTextField}>;
}
export interface HomeBodyFeedbacks {
  slice_type: 'feedbacks';
  primary: HeadingTextType;
  items: Array<HeadingTextType>;
}

export interface IPage extends SEOType, TitleDescriptionType {}

// export interface IArticleData  {
//   data: { image: ImageType;  text: RichTextField} & TitleDescriptionType & SlugType;
//   last_publication_date: string;
// }

export interface IActivity extends SEOType, TitleDescriptionType, SlugType {
  image: ImageType;
  teacher: string;
  date: string;
  time: string;
  age: string;
  price: string;
  address: string;
  phone: string;
  email: string;
  primary_href: HrefType;
  facebook: HrefType;
  instagram: HrefType;
  text: RichTextField
  publication_date: string;
}

export interface IArticle extends SEOType, TitleDescriptionType, SlugType {
  image: ImageType;
  description: string;
  author: string;
  text: RichTextField
  publication_date: string;
}
export interface IAboutPage extends SEOType, TitleDescriptionType {
  text: RichTextField
}
export interface IRulesAndPaymentsPage extends SEOType, TitleDescriptionType {
  text: RichTextField
}
export interface IMembershipPage extends SEOType, TitleDescriptionType, SecondaryButtonType {
  text: RichTextField
}


export interface IGalleryPage extends SEOType, TitleDescriptionType {
  folder: Array<{href: HrefType, name: string}>
}


export interface ITeacher {
  slug: HrefType
  image: ImageType
  description: string
  color: string
  name: string
  text: RichTextField
  links: Array<{link_name: string, link: HrefType}>
}

export interface IFeedback {
  slug: HrefType
  color: string
  name: string
  text: RichTextField
}
