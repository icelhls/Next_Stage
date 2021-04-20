import React from 'react';
import {Image} from 'react-native';
export default [
  {
    id: 1,
    title: 'شرح طريقه الدفع زين كاش',

    subTitle:
      'يمكنك الدفع من خلال الايداع او التحويل على المحفظة وارفاق صورة عن فاتورة التحويل او الايداع . رقم المحفظة الخاص بنا : 0786032929 او 0787092727',
    img: <Image source={require('../assets/images/zain.png')} />,
  },
  {
    id: 2,
    title: 'شرح طريقه الدفع دينارك',
    subTitle:
      'يمكنك الدفع من خلال الايداع او التحويل على المحفظة وارفاق صورة عن فاتورة التحويل او الايداع . رقم المحفظة الخاص بنا : 0795404139',
    img: <Image source={require('../assets/images/dinark1.png')} />,
  },
  {
    id: 3,
    title: 'شرح طريقه الدفع محفظة امنية',
    subTitle:
      'يمكنك الدفع من خلال الايداع او التحويل على المحفظة وارفاق صورة عن فاتورة التحويل او الايداع . رقم المحفظة الخاص بنا : 0789432812',
    img: <Image source={require('../assets/images/original.png')}  />,
  },

  {
    id: 4,
    title: 'شرح طريقه الدفع اورنج موني',
    subTitle:
      'يمكنك الدفع من خلال الايداع او التحويل على المحفظة وارفاق صورة عن فاتورة التحويل او الايداع . رقم المحفظة الخاص بنا : 0790834175',

      img: <Image source={require('../assets/images/Orange_Money.png')} />,
  },
  {
    id: 5,
    title: 'شرح طريقه الدفع اي فواتيركم',
    subTitle: 'ايفواتيركم اسم المفوتر : المحافظ ومقدمي خدمات الدفع فئة المفوتر : دينارك رقم الاشتراك : 0795404139',
    img: <Image source={require('../assets/images/fawateer.png')} />,
  },
];
