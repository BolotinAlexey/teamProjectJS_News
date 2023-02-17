import { ref } from './header/refFunHeader';
import onClikSearchBtn from './header/onClikSearchBtn';
import onClickSwitcher from './header/onClickSwitcher';
export default function jsScriptHeader() {
  ref.btnSearch.addEventListener('click', onClikSearchBtn);

  ref.burger.addEventListener('click', () =>
    ref.menu.classList.remove('is-hidden')
  );

  ref.cross.addEventListener('click', () =>
    ref.menu.classList.add('is-hidden')
  );

  ref.switcher.addEventListener('click', () =>
    ref.body.classList.toggle('isDark')
  );
}
