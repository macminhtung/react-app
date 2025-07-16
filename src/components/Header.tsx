import { useCallback, useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { ROUTE_PATH } from '@/common/constants';
import { cn } from '@/lib/utils';
import { ELocalStorageKey, ETheme, ELanguage } from '@/common/enums';
import { manageTokens, EManageTokenType } from '@/common/funcs';
import { MoonIcon, SunMediumIcon, Menu, UserPen, LogOut, ListX } from 'lucide-react';
import { useAppStore } from '@/store';
import { AvatarC, ButtonC, SelectC, SwitchC } from '@/components/ui-customize';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from '@/components/ui';

const languageOptions = Object.values(ELanguage).map((key) => ({
  label: <p className='font-semibold'>{key.toUpperCase()}</p>,
  value: key,
}));

const Header = () => {
  const theme = useAppStore((state) => state.theme);
  const setTheme = useAppStore((state) => state.setTheme);
  const language = useAppStore((state) => state.language);
  const setLanguage = useAppStore((state) => state.setLanguage);
  const tokens = useAppStore((state) => state.tokens);
  const setTokens = useAppStore((state) => state.setTokens);
  const authUser = useAppStore((state) => state.authUser);

  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const isDarkMode = theme === ETheme.DARK;
  const isLoggedIn = !!tokens.accessToken;

  const signOut = useCallback(() => {
    const noneTokens = { accessToken: '', refreshToken: '' };
    setTokens(noneTokens);
    manageTokens({ type: EManageTokenType.SET, ...noneTokens });
  }, [setTokens]);

  const themeAndLang = useMemo(
    () => (
      <div
        className={cn(
          'flex items-center justify-center gap-4 pb-4 my-1',
          isLoggedIn && 'border-b border-primary'
        )}
      >
        <SwitchC
          icon={
            isDarkMode ? <MoonIcon className='h-4 w-4' /> : <SunMediumIcon className='h-4 w-4' />
          }
          checked={isDarkMode}
          onCheckedChange={() => setTheme(isDarkMode ? ETheme.LIGHT : ETheme.DARK)}
          className='h-6 w-[2.65rem]'
          thumbClassName='h-5 w-5 data-[state=checked]:translate-x-5'
        />

        <SelectC
          className='min-w-18 min-h-8 !h-6'
          popoverClassName='min-w-18 max-w-fit'
          value={language}
          options={languageOptions}
          onChange={(value) => {
            setLanguage(value);
            i18n.changeLanguage(language);
          }}
        />
      </div>
    ),
    [i18n, isDarkMode, isLoggedIn, language, setLanguage, setTheme]
  );

  useEffect(() => {
    // Remove prev theme
    const root = window.document.documentElement;
    root.classList.remove(theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT);

    // Add new theme
    root.classList.add(theme);

    // Update theme to localStorage
    localStorage.setItem(ELocalStorageKey.UI_THEME, theme);
  }, [theme]);

  useEffect(() => {
    // Update language to localStorage
    localStorage.setItem(ELocalStorageKey.LANGUAGE, language);
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return (
    <div className='flex items-center p-3 gap-2 border-b-[1px] border-b-gray-900 h-[66px] dark:border-b-gray-300'>
      <AvatarC
        src='/logo.jpg'
        className={'rounded-[0.2rem] cursor-pointer size-10'}
        onClick={() => navigate(ROUTE_PATH.ROOT)}
      />
      <div className='flex items-center gap-4 ml-auto'>
        {isLoggedIn ? (
          // # ============== #
          // # ==> LOGGED <== #
          // # ============== #
          <>
            <AvatarC
              src={authUser.avatar || 'https://github.com/shadcn.png'}
              className='rounded-[50%] size-10'
            />
            <DropdownMenu open={isOpenMenu} onOpenChange={setIsOpenMenu}>
              <DropdownMenuTrigger asChild>
                <ButtonC variant='outline'>
                  {isOpenMenu ? (
                    <ListX className='scale-[1.5]' />
                  ) : (
                    <Menu className='scale-[1.5]' />
                  )}
                </ButtonC>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='min-w-fit w-32 p-1.5 absolute right-[-22px] top-[4px]'>
                <DropdownMenuLabel>{themeAndLang}</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => navigate(ROUTE_PATH.DASHBOARD.PROFILE)}>
                  <UserPen className='scale-[1.3] mr-2 text-primary' />
                  <span>{t('common.profile')}</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={signOut}>
                  <LogOut className='scale-[1.2] mr-2 text-primary' />
                  <span>{t('common.signOut')}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          // # ================= #
          // # ==> UN-LOGGED <== #
          // # ================= #
          themeAndLang
        )}
      </div>
    </div>
  );
};

export default Header;
