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
  | "rules-and-payments"
  | "blanks"
  | "about"
  | "teachers"
  | "membership"
  | "gallery"
  | "info"
  | "feedbacks";


export type TypePage = "page_masters" | "page_camps" | "page_festivals" | "page_concerts" | "page_projects" | "page_parents" | "page_clubs" | "page_courses" | "page_travels" | "page_celebrations" | "page_concerts" | "page_usefuls" | "page_articles" | "page_feedbacks" | "page_teachers" | "page_schedule" | "page_blanks" | "page_about" | "page_membership" | "page_gallery" | "page_rules-and-payments" | "page_blank-camp" | "page_blank-club";


export type Pages =
  "home"
  | TypePage
  | "articles"
  | "schedule"
  | "blanks"
  | "teacher"
  | "article"
  | "camp"
  | "club"
  | "master"
  | "course"
  | "festival"
  | "celebration"
  | "concert"
  | "travel"
  | "project"
  | "useful"
  | "parent"
  | "feedback"
  | "rules-and-payment"
  | "common_data";

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
export type TitleWithSubTitleType = {
  title: string;
  sub_title: RichTextField;
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

/* SLICES */
export type SliceType = "hero" | "activities" | "welcome" | "offer" | "gallery" | "teachers" | "faq" | "feedbacks"

export interface ICommonData {
  notification: string;
  description: string;
  address: string;
  geolocation: string;
  phone: string;
  email: string;
  whatsapp: HrefType;
  facebook: HrefType;
  instagram: HrefType;
  telegram: HrefType;
}

export interface IIndex extends SEOType {
  body: Array<HomeBodyHero | HomeBodyActivities | HomeBodyWelcome | HomeBodyOffer | HomeBodyGallery | HomeBodyTeachers | HomeBodyFaq | HomeBodyFeedbacks>;
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
  primary: SecondaryButtonType & {heading: string; text: RichTextField};
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
}

export interface HomeBodyFaq {
  slice_type: 'faq';
  primary: HeadingTextType;
  items: Array<{question: string;  answer: RichTextField}>;
}

export interface HomeBodyFeedbacks {
  slice_type: 'feedbacks';
  primary: HeadingTextType;
}

export interface IPage extends SEOType, TitleWithSubTitleType { }

export interface IActivity extends TitleDescriptionType, SlugType {
  image: ImageType;
  teacher: string;
  date: string;
  time: string;
  age: string;
  price: string;
  address: string;
  phone: string;
  email: string;
  has_blank:boolean
  facebook: HrefType;
  instagram: HrefType;
  text: RichTextField
  publication_date: string;
}

export interface IArticle extends  TitleDescriptionType, SlugType {
  image: ImageType;
  author: string;
  text: RichTextField
  publication_date: string;
}

export interface IAboutPage extends SEOType, TitleWithSubTitleType {
  text: RichTextField
}

export interface IRulesAndPaymentsPage extends SEOType, TitleWithSubTitleType {
  rules: Array<{href: HrefType, name: string}>
}
export interface IRulesAndPayments extends SEOType, TitleDescriptionType, SlugType {
  text: RichTextField
}

export interface IMembershipPage extends SEOType, TitleWithSubTitleType {
  text: RichTextField
  secondary_button:string
}

export interface ISchedulePage extends SEOType {
  title: string;
  subtitle: string;
  text: RichTextField
}

export interface IGalleryPage extends SEOType, TitleWithSubTitleType {
  folder: Array<{href: HrefType, name: string}>
}

export interface IAllBlankPage extends SEOType, TitleWithSubTitleType {
  blank: Array<{href: HrefType, name: string}>
}

export interface IBlankSelect  {
  option: { data: { title: string, date: string, time: string } }
}
export interface IBlankPage extends SEOType, TitleWithSubTitleType {
  important: string;
  select: Array<IBlankSelect>
}


export interface ITeacher {
  carousel_visible: boolean
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

export type DayType = {
  name: string;
  info: string;
  time: string;
  age: string;
  price: string;
  label: string;
}

export interface ISchedule  {
  name: string
  address: string;
  href: HrefType
  monday: Array<DayType>
  tuesday: Array<DayType>
  wednesday: Array<DayType>
  thursday: Array<DayType>
  friday: Array<DayType>
  saturday: Array<DayType>
  sunday: Array<DayType>
}
