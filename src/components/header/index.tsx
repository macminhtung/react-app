import { useTranslation } from 'react-i18next';
// import { CustomDropdown } from '@/components/customize';
// import { resources } from '@/i18next/i18n';

// const languageOptions = Object.keys(resources).map((key) => ({
//   label: key.toUpperCase(),
//   value: key,
// }));

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className='flex p-2 gap-1'>
      {/* <Avatar /> */}
      <div className='flex-1 bg-amber-200'></div>
      <div className='flex'>
        {/* <CustomDropdown
          options={languageOptions}
          onChange={(value) => i18n.changeLanguage(value?.toString())}
        /> */}
        <button color='blue'>{t('common.signIn')}</button>
      </div>
    </div>
  );
};

export default Header;
