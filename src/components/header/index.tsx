import { useTranslation } from 'react-i18next';
import { AvatarC, ButtonC, SelectC } from '@/components/ui-customize';
import { resources } from '@/i18next/i18n';

const languageOptions = Object.keys(resources).map((key) => ({
  label: key.toUpperCase(),
  value: key,
}));

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='flex p-3 gap-2 border border-px border-b-gray-200'>
      <AvatarC src='/logo.jpg' />
      <div className='flex-1 bg-gray-200'></div>
      <div className='flex gap-2'>
        <ButtonC>{t('common.signIn')}</ButtonC>
        <SelectC
          className='w-20'
          options={languageOptions}
          onChange={(value) => i18n.changeLanguage(value)}
        />
      </div>
    </div>
  );
};

export default Header;
