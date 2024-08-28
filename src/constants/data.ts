import {
  CatalogItemType,
  DirectoryItemType,
  DropdownMenuType,
  FooterMenuItemType,
} from '@/types';

export const FOOTER_BUTTONS: FooterMenuItemType[] = [
  {
    digit: 1,
    title: 'Help',
  },
  {
    digit: 2,
    title: 'Menu',
  },
  {
    digit: 3,
    title: 'View',
  },
  {
    digit: 4,
    title: 'Edit',
  },
  {
    digit: 5,
    title: 'Copy',
  },
  {
    digit: 6,
    title: 'RenMov',
  },
  {
    digit: 7,
    title: 'Mkdir',
  },
  {
    digit: 8,
    title: 'Delete',
  },
  {
    digit: 9,
    title: 'PullDn',
  },
  {
    digit: 10,
    title: 'Quit',
  },
];

export const NAVIGATION_LINKS: DropdownMenuType[] = [
  {
    title: 'File',
    submenu: [
      { title: 'NCD Tree', command: 'Alt+F4' },
      { title: 'Exit', command: 'Esc' },
    ],
  },
  {
    title: 'Disk',
  },
  {
    title: 'Commands',
  },
];

export const DIRECTORIES: DirectoryItemType[] = [
  {
    title: 'DN',
    type: 'directory',
  },
  {
    title: 'autoexec',
    extension: 'bat',
    type: 'file',
  },
  {
    title: 'command',
    extension: 'com',
    type: 'file',
  },
  {
    title: 'config',
    extension: 'sys',
    type: 'file',
  },
  {
    title: 'Io',
    extension: 'sys',
    type: 'file',
  },
  {
    title: '11Pro',
    extension: 'sys',
    type: 'file',
  },
  {
    title: 'Msdod',
    extension: 'sys',
    type: 'file',
  },
];

export const CATALOGS: CatalogItemType[] = [
  {
    title: 'DOS',
  },
  {
    title: 'TOOLS',
  },
  {
    title: 'XTGOLD',
  },
  {
    title: 'LAPLINK',
  },
  {
    title: 'DN',
  },
];
