import TidName from 'MelcomA/src/models/TidName';
import TKeyType from 'MelcomA/src/models/TKeyType';
import TkeyType from '../src/models/TKeyType';
export const REQUESTS = [
  new TidName(1, 'فروش'),
  new TidName(2, 'پیش فروش'),
  new TidName(3, 'اجاره'),
  new TidName(4, 'مشارکت در ساخت'),
];

export const ESTATETYPES = [
  new TidName(1, 'آپارتمان'),
  new TidName(2, 'ویلایی '),
  new TidName(3, 'زمین'),
  new TidName(4, 'کلنگی '),
  new TidName(5, 'مغازه '),
  new TidName(6, 'سوله '),
];

export const ROOMS = [
  new TidName(0, 'بدون خواب'),
  new TidName(1, 'تک خواب'),
  new TidName(2, 'دو خواب'),
  new TidName(3, 'سه خواب'),
  new TidName(4, 'چهار خواب'),
  new TidName(5, ' پنج و بیشتر'),
];

export const YEARS = [
  new TidName(1, 1398),
  new TidName(2, 1397),
  new TidName(3, 1396),
  new TidName(4, 1395),
  new TidName(5, 1394),
  new TidName(6, 139),
];

export const KEYTYPES = [
  new TKeyType(1, 'سال ساخت', false, 'calendar'),
  new TKeyType(5, 'تعداد اتاق', false, 'home'),
  new TKeyType(16, 'پارکینگ', true, 'parking'),
  new TkeyType(17, 'انباری', true, 'home-variant'),
  new TkeyType(24, 'قیمت', false, 'home-currency-usd'),
  new TkeyType(25, 'رهن', false, 'home-currency-usd'),
  new TkeyType(26, 'اجاره', false, 'home-currency-usd'),
  new TkeyType(30, 'وام', false, 'home-currency-usd'),
  new TkeyType(46, 'بالکن', true, 'home-modern'),
  new TkeyType(61, 'آسانسور', false, 'elevator'),
  new TkeyType(62, 'کف پوش', false, 'floor-plan'),
  new TkeyType(63, 'نوع کابینت', false, 'file-cabinet'),
];
