import { useTranslation } from 'react-i18next';
import { resources } from '@/i18next/i18n';
import { useNavigate } from 'react-router';
import { ROUTE_PATH } from '@/common/constants';
import { MoonIcon, SunMediumIcon } from 'lucide-react';
import { useAppContext, ETheme } from '@/context/useAppContext';
import { useAuthContext } from '@/context/useAuthContext';
import { AvatarC, ButtonC, SelectC, SwitchC } from '@/components/ui-customize';

const languageOptions = Object.keys(resources).map((key) => ({
  label: <p className='font-semibold'>{key.toUpperCase()}</p>,
  value: key,
}));

const Header = () => {
  const { t, i18n } = useTranslation();
  const { accessToken } = useAuthContext();
  const navigate = useNavigate();
  const { theme, setTheme } = useAppContext();
  const isDarkMode = theme === ETheme.DARK;

  const isLoggedIn = !!accessToken;

  return (
    <div className='flex items-center p-3 gap-2 border-b-[1px] border-b-gray-900 h-[66px] dark:border-b-gray-300'>
      <AvatarC
        src='/logo.jpg'
        className={'rounded-[0.2rem] cursor-pointer size-10 transition-all hover:rounded-[50%]'}
        onClick={() => navigate(ROUTE_PATH.ROOT)}
      />
      {isLoggedIn && <div className='grow-0 bg-gray-200'></div>}
      <div className='flex items-center gap-2 ml-auto'>
        <SwitchC
          icon={
            isDarkMode ? <MoonIcon className='h-4 w-4' /> : <SunMediumIcon className='h-4 w-4' />
          }
          checked={isDarkMode}
          onCheckedChange={() => setTheme(isDarkMode ? ETheme.LIGHT : ETheme.DARK)}
          className='h-6 w-[2.65rem]'
          thumbClassName='h-5 w-5 data-[state=checked]:translate-x-5'
        />
        {isLoggedIn && <ButtonC>{t('common.signOut')}</ButtonC>}
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
