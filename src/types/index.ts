type File = {
  title: string;
  extension: 'bat' | 'sys' | 'com';
  type: 'file';
};

type Directory = {
  title: string;
  type: 'directory';
};

export type CatalogItemType = {
  title: string;
};

export type DirectoryItemType = File | Directory;

export type FooterMenuItemType = {
  title: string;
  digit: number;
};

export type DropdownMenuType = {
  title: string;
  submenu?: DropdownMenuType[];
  command?: string;
};
