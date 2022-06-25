export type SidebarSection = {
  title: string;
  children: SidebarSectionItem[];
};

export interface SidebarSectionItem {
  label: string;
  href: string;
  icon?: string;
}
