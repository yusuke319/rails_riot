import '../stylesheets/main.scss';
import '../tags/my-app.tag';
import I18n from 'i18n';

riot.mixin('I18n', { I18n: I18n });
riot.mount('my-app');