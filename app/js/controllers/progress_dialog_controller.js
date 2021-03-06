import { Controller } from 'fxos-mvc/dist/mvc';

import ProgressDialogView from 'app/js/views/progress_dialog_view';

export default class ProgressDialogController extends Controller {
  constructor() {
    this.view = new ProgressDialogView();
    this.view.init(this);
  }

  main() {
    this.view.render();
    document.body.appendChild(this.view.el);

    setTimeout(() => {
      this.view.open();
    });
  }

  teardown() {
    document.body.removeChild(this.view.el);
  }

  success(app) {
    this.view.success(app);

    setTimeout(() => {
      this.view.close();
    }, 3000);
  }

  error(e) {
    this.view.error(e);
  }
}
